'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';
import { analytics } from '@/lib/analytics';
import { useTranslation } from '@/lib/i18n';

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email.label'),
      value: 'tomasz.chromy@outlook.com',
      href: 'mailto:tomasz.chromy@outlook.com',
      description: t('contact.info.email.description'),
    },
    {
      icon: MapPin,
      label: t('contact.info.location.label'),
      value: t('contact.info.location.value'),
      href: null,
      description: t('contact.info.location.description'),
    },
    {
      icon: Clock,
      label: t('contact.info.response.label'),
      value: t('contact.info.response.value'),
      href: null,
      description: t('contact.info.response.description'),
    },
  ];
  const handleContactClick = (type: string, href: string) => {
    analytics.externalLinkClick(href);
    analytics.ctaClick(`Contact ${type}`);
  };

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-background">
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
            {t('contact.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                {t('contact.contactUs')}
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                {t('contact.contactUsDescription')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={() => handleContactClick(item.label, item.href!)}
                      className="block p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-background" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </div>
                          <div className="text-sm text-primary font-medium">
                            {item.value}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted">
                        {item.description}
                      </p>
                    </a>
                  ) : (
                    <div className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-background" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            {item.label}
                          </div>
                          <div className="text-sm text-primary font-medium">
                            {item.value}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted">
                        {item.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {t('contact.quickResponse.title')}
                  </h4>
                  <p className="text-sm text-muted">
                    {t('contact.quickResponse.description')}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.a
                  href="mailto:tomasz.chromy@outlook.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleContactClick('Email Quick', 'mailto:tomasz.chromy@outlook.com')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-background text-center font-medium rounded-xl hover:shadow-glow transition-all duration-200"
                >
                  {t('contact.quickResponse.button')}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  {t('contact.form.title')}
                </h3>
                <p className="text-muted">
                  {t('contact.form.description')}
                </p>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              {t('contact.whyUs.title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted">
              <div>
                <div className="font-medium text-primary mb-1">{t('contact.whyUs.consultation.title')}</div>
                <div>{t('contact.whyUs.consultation.description')}</div>
              </div>
              <div>
                <div className="font-medium text-primary mb-1">{t('contact.whyUs.transparency.title')}</div>
                <div>{t('contact.whyUs.transparency.description')}</div>
              </div>
              <div>
                <div className="font-medium text-primary mb-1">{t('contact.whyUs.support.title')}</div>
                <div>{t('contact.whyUs.support.description')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
