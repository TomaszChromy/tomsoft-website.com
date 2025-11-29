'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// Supported locales
export type Locale = 'pl' | 'en';
export const defaultLocale: Locale = 'pl';
export const locales: Locale[] = ['pl', 'en'];

// Translation type - nested object structure
type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = { [key: string]: TranslationValue };

// Context type
interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

// Cache for translations
const translationsCache: Partial<Record<Locale, Translations>> = {};

// Get nested value from object using dot notation
function getNestedValue(obj: Translations, path: string): string | undefined {
  const keys = path.split('.');
  let current: TranslationValue = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, TranslationValue>)[key];
    } else {
      return undefined;
    }
  }
  
  return typeof current === 'string' ? current : undefined;
}

// Replace parameters in translation string
function interpolate(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
  }, text);
}

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations for a locale
  const loadTranslations = useCallback(async (loc: Locale) => {
    // Check cache first
    if (translationsCache[loc]) {
      setTranslations(translationsCache[loc]!);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/locales/${loc}.json`);
      if (!response.ok) throw new Error(`Failed to load ${loc} translations`);
      const data = await response.json();
      translationsCache[loc] = data;
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to empty translations
      setTranslations({});
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Set locale and persist to localStorage
  const setLocale = useCallback((newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocaleState(newLocale);
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  // Translation function
  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    const value = getNestedValue(translations, key);
    if (value === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return interpolate(value, params);
  }, [translations]);

  // Initialize locale from localStorage or browser preference
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    const browserLocale = navigator.language.split('-')[0] as Locale;
    
    const initialLocale = savedLocale && locales.includes(savedLocale)
      ? savedLocale
      : locales.includes(browserLocale)
        ? browserLocale
        : defaultLocale;
    
    setLocaleState(initialLocale);
    document.documentElement.lang = initialLocale;
  }, []);

  // Load translations when locale changes
  useEffect(() => {
    loadTranslations(locale);
  }, [locale, loadTranslations]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook to use translations
export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}

// Hook to get just the t function (for convenience)
export function useT() {
  const { t } = useTranslation();
  return t;
}

