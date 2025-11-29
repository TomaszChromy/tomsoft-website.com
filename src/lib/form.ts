// Formspree configuration
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE ?? 'https://formspree.io/f/DEMO_ENDPOINT';

// Form validation types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  honeypot?: string; // Anti-spam field
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
  general?: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: FormErrors;
}

// Validation rules
export const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-']+$/,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 100,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
  consent: {
    required: true,
  },
};

// Error messages in Polish
export const errorMessages = {
  name: {
    required: 'Imię i nazwisko jest wymagane',
    minLength: 'Imię i nazwisko musi mieć co najmniej 2 znaki',
    maxLength: 'Imię i nazwisko nie może przekraczać 50 znaków',
    pattern: 'Imię i nazwisko może zawierać tylko litery, spacje, myślniki i apostrofy',
  },
  email: {
    required: 'Adres e-mail jest wymagany',
    pattern: 'Podaj prawidłowy adres e-mail',
    maxLength: 'Adres e-mail nie może przekraczać 100 znaków',
  },
  message: {
    required: 'Wiadomość jest wymagana',
    minLength: 'Wiadomość musi mieć co najmniej 10 znaków',
    maxLength: 'Wiadomość nie może przekraczać 1000 znaków',
  },
  consent: {
    required: 'Musisz wyrazić zgodę na przetwarzanie danych osobowych',
  },
  general: {
    network: 'Wystąpił błąd sieci. Spróbuj ponownie.',
    server: 'Wystąpił błąd serwera. Spróbuj ponownie później.',
    unknown: 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie.',
  },
};

// Validation function
export function validateField(name: keyof ContactFormData, value: string | boolean): string | null {
  const rules = validationRules[name as keyof typeof validationRules];
  const messages = errorMessages[name as keyof typeof errorMessages];

  if (!rules || !messages) return null;

  // Required validation
  if (rules.required) {
    if (typeof value === 'boolean' && !value) {
      return messages.required;
    }
    if (typeof value === 'string' && (!value || value.trim().length === 0)) {
      return messages.required;
    }
  }

  // String-specific validations
  if (typeof value === 'string' && value.trim().length > 0) {
    // Min length validation
    if ('minLength' in rules && value.trim().length < rules.minLength) {
      return messages.minLength;
    }

    // Max length validation
    if ('maxLength' in rules && value.trim().length > rules.maxLength) {
      return messages.maxLength;
    }

    // Pattern validation
    if ('pattern' in rules && !rules.pattern.test(value.trim())) {
      return messages.pattern;
    }
  }

  return null;
}

// Validate entire form
export function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Validate each field
  Object.keys(data).forEach((key) => {
    if (key === 'honeypot') return; // Skip honeypot field
    
    const fieldName = key as keyof ContactFormData;
    const error = validateField(fieldName, data[fieldName]);
    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
}

// Submit form to Formspree
export async function submitContactForm(data: ContactFormData): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // Validate form data
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        error: 'Formularz zawiera błędy. Sprawdź wprowadzone dane.',
      };
    }

    // Check honeypot (anti-spam)
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return {
        success: false,
        error: 'Wykryto spam. Formularz nie został wysłany.',
      };
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('name', data.name.trim());
    formData.append('email', data.email.trim());
    formData.append('message', data.message.trim());
    formData.append('consent', data.consent.toString());
    formData.append('_subject', `Nowa wiadomość od ${data.name.trim()}`);
    formData.append('_replyto', data.email.trim());

    // Submit to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.error || errorMessages.general.server,
      };
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: errorMessages.general.network,
    };
  }
}

// Utility functions
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function formatFormData(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email).toLowerCase(),
    message: sanitizeInput(data.message),
    consent: data.consent,
    honeypot: data.honeypot || '',
  };
}

// Rate limiting (simple client-side implementation)
const RATE_LIMIT_KEY = 'form_submission_timestamp';
const RATE_LIMIT_DURATION = 60000; // 1 minute

export function checkRateLimit(): boolean {
  if (typeof window === 'undefined') return true;

  const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
  if (!lastSubmission) return true;

  const timeDiff = Date.now() - parseInt(lastSubmission, 10);
  return timeDiff > RATE_LIMIT_DURATION;
}

export function setRateLimit(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
  }
}

// Form analytics tracking
export function trackFormEvent(event: 'start' | 'submit' | 'success' | 'error', error?: string) {
  if (typeof window !== 'undefined' && window.plausible) {
    switch (event) {
      case 'start':
        window.plausible('Contact Form Start');
        break;
      case 'submit':
        window.plausible('Contact Form Submit');
        break;
      case 'success':
        window.plausible('Contact Form Success');
        break;
      case 'error':
        window.plausible('Contact Form Error', { props: { error: error || 'Unknown' } });
        break;
    }
  }
}
