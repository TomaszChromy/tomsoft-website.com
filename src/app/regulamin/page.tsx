'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function TermsOfService() {
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
            {t('legal.terms.title')}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted mb-6">
              <strong>{t('legal.lastUpdated')}:</strong> 1 listopada 2024
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section1.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.terms.section1.p1')}
              </p>
              <p className="text-muted leading-relaxed">
                {t('legal.terms.section1.p2')}
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section2.title')}
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i}>{t(`legal.terms.section2.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section3.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.terms.section3.intro')}
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i}>{t(`legal.terms.section3.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section4.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.terms.section4.intro')}
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>{t(`legal.terms.section4.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section5.title')}
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i}>{t(`legal.terms.section5.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section6.title')}
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`legal.terms.section6.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section7.title')}
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`legal.terms.section7.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section8.title')}
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`legal.terms.section8.items.${i}`)}</li>
                ))}
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section9.title')}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {t('legal.terms.section9.p1')}
              </p>
              <p className="text-muted leading-relaxed">
                {t('legal.terms.section9.p2')}
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('legal.terms.section10.title')}
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`legal.terms.section10.items.${i}`)}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

