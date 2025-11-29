// Plausible Analytics Configuration
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'tomsoft-website.com';
export const PLAUSIBLE_SRC = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js';

// Event tracking function for Plausible
export function trackEvent(eventName: string, props?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }
}

// Predefined events for better tracking
export const analytics = {
  // Contact form events
  contactFormSubmit: () => trackEvent('Contact Form Submit'),
  contactFormError: (error: string) => trackEvent('Contact Form Error', { error }),
  contactFormSuccess: () => trackEvent('Contact Form Success'),

  // Navigation events
  navClick: (section: string) => trackEvent('Navigation Click', { section }),
  ctaClick: (cta: string) => trackEvent('CTA Click', { cta }),
  
  // Engagement events
  scrollToSection: (section: string) => trackEvent('Scroll to Section', { section }),
  portfolioView: (project: string) => trackEvent('Portfolio View', { project }),
  serviceView: (service: string) => trackEvent('Service View', { service }),
  
  // Download events
  downloadCV: () => trackEvent('Download CV'),
  downloadPortfolio: () => trackEvent('Download Portfolio'),
  
  // External link clicks
  externalLinkClick: (url: string) => trackEvent('External Link Click', { url }),
  socialMediaClick: (platform: string) => trackEvent('Social Media Click', { platform }),
  
  // Performance events
  pageLoadTime: (time: number) => trackEvent('Page Load Time', { time }),
  
  // Error tracking
  jsError: (error: string) => trackEvent('JavaScript Error', { error }),
  
  // Cookie consent
  cookieAccept: (type: string) => trackEvent('Cookie Accept', { type }),
  cookieDecline: () => trackEvent('Cookie Decline'),
};

// Performance monitoring
export function trackPagePerformance() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          analytics.pageLoadTime(Math.round(loadTime));
        }
      }, 0);
    });
  }
}

// Error tracking
export function trackErrors() {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      analytics.jsError(`${event.error?.name}: ${event.error?.message}`);
    });

    window.addEventListener('unhandledrejection', (event) => {
      analytics.jsError(`Unhandled Promise Rejection: ${event.reason}`);
    });
  }
}

// Intersection Observer for scroll tracking
export function trackScrollEvents() {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const sections = ['hero', 'why', 'offer', 'process', 'portfolio', 'testimonials', 'contact'];
    const trackedSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            if (sections.includes(sectionId) && !trackedSections.has(sectionId)) {
              analytics.scrollToSection(sectionId);
              trackedSections.add(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe sections when DOM is ready
    setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 1000);
  }
}

// Initialize analytics
export function initAnalytics() {
  if (typeof window !== 'undefined') {
    trackPagePerformance();
    trackErrors();
    trackScrollEvents();
  }
}

// Type declaration for Plausible
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

// GDPR compliant analytics initialization
export function initGDPRAnalytics(consent: boolean) {
  if (consent && typeof window !== 'undefined') {
    initAnalytics();
  }
}

// Cookie consent tracking
export function trackCookieConsent(consentType: 'all' | 'necessary' | 'declined') {
  switch (consentType) {
    case 'all':
      analytics.cookieAccept('all');
      initGDPRAnalytics(true);
      break;
    case 'necessary':
      analytics.cookieAccept('necessary');
      initGDPRAnalytics(false);
      break;
    case 'declined':
      analytics.cookieDecline();
      initGDPRAnalytics(false);
      break;
  }
}

// Utility function to check if analytics is enabled
export function isAnalyticsEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookie_consent');
  return consent === 'all';
}

// Custom hook for analytics (if using React)
export function useAnalytics() {
  return {
    track: trackEvent,
    analytics,
    isEnabled: isAnalyticsEnabled(),
  };
}
