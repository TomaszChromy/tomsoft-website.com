'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function CookiesPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('legal.backToHome')}</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
            {t('legal.cookies.title')}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted mb-6">
              <strong>{t('legal.lastUpdated')}:</strong> 1 listopada 2024
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.cookies.section1.title')}
              </h2>
              <p className="text-muted leading-relaxed">
                {t('legal.cookies.section1.text')}
              </p>
            </section>

            {/* Section 2 - Cookie Types */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.cookies.section2.title')}
              </h2>
              
              {/* Essential */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('legal.cookies.section2.essential.title')}
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  {t('legal.cookies.section2.essential.description')}
                </p>
                <ul className="list-disc list-inside text-muted space-y-1">
                  {[0, 1, 2].map((i) => (
                    <li key={i}>{t(`legal.cookies.section2.essential.items.${i}`)}</li>
                  ))}
                </ul>
              </div>

              {/* Analytics */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('legal.cookies.section2.analytics.title')}
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  {t('legal.cookies.section2.analytics.description')}
                </p>
                <ul className="list-disc list-inside text-muted space-y-1">
                  {[0, 1].map((i) => (
                    <li key={i}>{t(`legal.cookies.section2.analytics.items.${i}`)}</li>
                  ))}
                </ul>
              </div>

              {/* Functional */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('legal.cookies.section2.functional.title')}
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  {t('legal.cookies.section2.functional.description')}
                </p>
                <ul className="list-disc list-inside text-muted space-y-1">
                  {[0, 1].map((i) => (
                    <li key={i}>{t(`legal.cookies.section2.functional.items.${i}`)}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.cookies.section3.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.cookies.section3.intro')}
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`legal.cookies.section3.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.cookies.section4.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.cookies.section4.text')}
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`legal.cookies.section4.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.cookies.section5.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.cookies.section5.text')}
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`legal.cookies.section5.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.cookies.section6.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.cookies.section6.intro')}
              </p>
              <ul className="list-none text-muted space-y-2">
                <li>• {t('legal.cookies.section6.browsers.chrome')}</li>
                <li>• {t('legal.cookies.section6.browsers.firefox')}</li>
                <li>• {t('legal.cookies.section6.browsers.safari')}</li>
                <li>• {t('legal.cookies.section6.browsers.edge')}</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.cookies.section7.title')}
              </h2>
              <p className="text-muted leading-relaxed">
                {t('legal.cookies.section7.text')}
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

