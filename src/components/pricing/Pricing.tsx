'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Info } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useTranslation } from '@/lib/i18n';

const handleCTAClick = () => {
  analytics.ctaClick('Pricing Contact');
  const element = document.querySelector('#kontakt');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Pricing() {
  const { t } = useTranslation();

  const currency = t('pricing.currency');

  const pricingPlans = [
    {
      name: 'Starter',
      subtitle: t('pricing.plans.starter.subtitle'),
      price: t('pricing.plans.starter.price'),
      priceMax: t('pricing.plans.starter.priceMax'),
      currency: currency,
      period: t('pricing.period'),
      description: t('pricing.plans.starter.description'),
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        t('pricing.plans.starter.features.0'),
        t('pricing.plans.starter.features.1'),
        t('pricing.plans.starter.features.2'),
        t('pricing.plans.starter.features.3'),
        t('pricing.plans.starter.features.4'),
        t('pricing.plans.starter.features.5'),
      ],
      popular: false,
    },
    {
      name: 'Business',
      subtitle: t('pricing.plans.business.subtitle'),
      price: t('pricing.plans.business.price'),
      priceMax: t('pricing.plans.business.priceMax'),
      currency: currency,
      period: t('pricing.period'),
      description: t('pricing.plans.business.description'),
      icon: Star,
      gradient: 'from-primary to-accent',
      features: [
        t('pricing.plans.business.features.0'),
        t('pricing.plans.business.features.1'),
        t('pricing.plans.business.features.2'),
        t('pricing.plans.business.features.3'),
        t('pricing.plans.business.features.4'),
        t('pricing.plans.business.features.5'),
        t('pricing.plans.business.features.6'),
        t('pricing.plans.business.features.7'),
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      subtitle: t('pricing.plans.enterprise.subtitle'),
      price: t('pricing.plans.enterprise.price'),
      priceMax: t('pricing.plans.enterprise.priceMax'),
      currency: currency,
      period: t('pricing.period'),
      description: t('pricing.plans.enterprise.description'),
      icon: Crown,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        t('pricing.plans.enterprise.features.0'),
        t('pricing.plans.enterprise.features.1'),
        t('pricing.plans.enterprise.features.2'),
        t('pricing.plans.enterprise.features.3'),
        t('pricing.plans.enterprise.features.4'),
        t('pricing.plans.enterprise.features.5'),
        t('pricing.plans.enterprise.features.6'),
        t('pricing.plans.enterprise.features.7'),
      ],
      popular: false,
    },
  ];
  return (
    <section id="cennik" className="py-16 lg:py-24 bg-gradient-to-b from-gray-900/50 to-background">
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
            {t('pricing.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto mb-4">
            {t('pricing.description')}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
            <Info className="w-4 h-4" />
            <span>{t('pricing.marketNote')}</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105 lg:scale-110' 
                  : 'border-gray-700 hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-background text-sm font-bold rounded-full">
                  {t('pricing.mostPopular')}
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <plan.icon className="w-7 h-7 text-background" />
              </div>

              {/* Plan Info */}
              <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">{plan.subtitle}</p>
              <p className="text-muted text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    {plan.currency}{plan.price}
                  </span>
                  <span className="text-muted text-sm">- {plan.currency}{plan.priceMax}</span>
                </div>
                <span className="text-muted text-sm">/ {plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-green-400'}`} />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCTAClick}
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-background hover:shadow-glow'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-background'
                }`}
              >
                {t('pricing.askForQuote')}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted text-sm max-w-2xl mx-auto">
            💡 <strong className="text-foreground">{t('pricing.note.title')}</strong> — {t('pricing.note.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

