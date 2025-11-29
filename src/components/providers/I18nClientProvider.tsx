'use client';

import { I18nProvider } from '@/lib/i18n';
import { ReactNode } from 'react';

interface I18nClientProviderProps {
  children: ReactNode;
}

export default function I18nClientProvider({ children }: I18nClientProviderProps) {
  return <I18nProvider>{children}</I18nProvider>;
}

