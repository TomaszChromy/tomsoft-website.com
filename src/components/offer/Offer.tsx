'use client';

import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Settings, Palette } from 'lucide-react';
import OfferCard from './OfferCard';
import { useTranslation } from '@/lib/i18n';

export default function Offer() {
  const { t } = useTranslation();

  const offers = [
    {
      icon: Monitor,
      title: t('offer.cards.corporate.title'),
      description: t('offer.cards.corporate.description'),
      features: [
        t('offer.cards.corporate.features.0'),
        t('offer.cards.corporate.features.1'),
        t('offer.cards.corporate.features.2'),
        t('offer.cards.corporate.features.3'),
        t('offer.cards.corporate.features.4'),
        t('offer.cards.corporate.features.5'),
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingCart,
      title: t('offer.cards.ecommerce.title'),
      description: t('offer.cards.ecommerce.description'),
      features: [
        t('offer.cards.ecommerce.features.0'),
        t('offer.cards.ecommerce.features.1'),
        t('offer.cards.ecommerce.features.2'),
        t('offer.cards.ecommerce.features.3'),
        t('offer.cards.ecommerce.features.4'),
        t('offer.cards.ecommerce.features.5'),
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Settings,
      title: t('offer.cards.custom.title'),
      description: t('offer.cards.custom.description'),
      features: [
        t('offer.cards.custom.features.0'),
        t('offer.cards.custom.features.1'),
        t('offer.cards.custom.features.2'),
        t('offer.cards.custom.features.3'),
        t('offer.cards.custom.features.4'),
        t('offer.cards.custom.features.5'),
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: t('offer.cards.design.title'),
      description: t('offer.cards.design.description'),
      features: [
        t('offer.cards.design.features.0'),
        t('offer.cards.design.features.1'),
        t('offer.cards.design.features.2'),
        t('offer.cards.design.features.3'),
        t('offer.cards.design.features.4'),
        t('offer.cards.design.features.5'),
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];
  return (
    <section id="oferta" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {t('offer.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('offer.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            {t('offer.description')}
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {offers.map((offer, index) => (
            <OfferCard
              key={offer.title}
              icon={offer.icon}
              title={offer.title}
              description={offer.description}
              features={offer.features}
              gradient={offer.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {t('offer.cta.title')}
            </h3>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              {t('offer.cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-xl hover:shadow-glow transition-all duration-200"
              >
                {t('offer.cta.talkButton')}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-xl transition-all duration-200"
              >
                {t('offer.cta.portfolioButton')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
