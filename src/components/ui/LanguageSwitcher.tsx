'use client';

import { motion } from 'framer-motion';
import { useTranslation, Locale, locales } from '@/lib/i18n';
import { Globe } from 'lucide-react';

const localeLabels: Record<Locale, string> = {
  pl: 'PL',
  en: 'EN',
};

const localeFlags: Record<Locale, string> = {
  pl: '🇵🇱',
  en: '🇬🇧',
};

export default function LanguageSwitcher() {
  const { locale, setLocale, isLoading } = useTranslation();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      setLocale(newLocale);
    }
  };

  return (
    <div className="flex items-center gap-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full p-1">
      {locales.map((loc) => (
        <motion.button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
            ${locale === loc
              ? 'bg-gradient-to-r from-primary to-accent text-background shadow-glow'
              : 'text-muted hover:text-foreground hover:bg-gray-700/50'
            }
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
          aria-label={`Switch to ${loc === 'pl' ? 'Polish' : 'English'}`}
          aria-pressed={locale === loc}
        >
          <span className="text-base">{localeFlags[loc]}</span>
          <span>{localeLabels[loc]}</span>
        </motion.button>
      ))}
    </div>
  );
}

// Compact version for mobile
export function LanguageSwitcherCompact() {
  const { locale, setLocale, isLoading } = useTranslation();

  const toggleLocale = () => {
    const newLocale = locale === 'pl' ? 'en' : 'pl';
    setLocale(newLocale);
  };

  return (
    <motion.button
      onClick={toggleLocale}
      disabled={isLoading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
        bg-gray-800/50 border border-gray-700 text-foreground hover:border-primary/50
        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span>{localeFlags[locale]}</span>
      <span>{localeLabels[locale]}</span>
    </motion.button>
  );
}

