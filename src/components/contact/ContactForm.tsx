'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const EMAIL_ADDRESS = 'tomasz.chromy@outlook.com';

interface FormData {
  name: string;
  email: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: '',
  consent: false,
};

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t('form.errors.name');
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.errors.email');
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t('form.errors.message');
    }

    if (!formData.consent) {
      newErrors.consent = t('form.errors.consent');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Build mailto URL
    const subject = encodeURIComponent(t('form.emailSubject').replace('{name}', formData.name.trim()));
    const body = encodeURIComponent(
      `${t('form.fields.name')}: ${formData.name.trim()}\n` +
      `${t('form.fields.email')}: ${formData.email.trim()}\n\n` +
      `${t('form.fields.message')}:\n${formData.message.trim()}`
    );

    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="form-label">
          {t('form.fields.name')} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder={t('form.placeholders.name')}
          required
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="form-label">
          {t('form.fields.email')} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder={t('form.placeholders.email')}
          required
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="form-label">
          {t('form.fields.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className={`form-textarea ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder={t('form.placeholders.message')}
          required
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className={`mt-1 w-4 h-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2 ${errors.consent ? 'border-red-500' : ''}`}
            required
          />
          <span className="text-sm text-muted leading-relaxed">
            {t('form.consent.text')}{' '}
            <a href="/polityka-prywatnosci" className="text-primary hover:text-accent transition-colors duration-200">
              {t('form.consent.privacyPolicy')}
            </a>. *
          </span>
        </label>
        {errors.consent && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.consent}
          </motion.p>
        )}
      </div>

      {/* Info about mailto */}
      <div className="flex items-start space-x-2 p-4 bg-primary/10 border border-primary/20 rounded-xl text-muted">
        <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <span className="text-sm">
          {t('form.mailtoInfo')}
        </span>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-xl hover:shadow-glow transition-all duration-200"
      >
        <Send className="w-5 h-5" />
        <span>{t('form.submit')}</span>
      </motion.button>
    </form>
  );
}
