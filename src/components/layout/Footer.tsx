'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useTranslation } from '@/lib/i18n';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/TomaszChromy',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/tomsoft-website',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tomsoft_website',
    icon: Twitter,
  },
];

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    oferta: [
      { name: t('offer.cards.corporate.title'), href: '#oferta' },
      { name: t('offer.cards.ecommerce.title'), href: '#oferta' },
      { name: t('offer.cards.custom.title'), href: '#oferta' },
      { name: t('offer.cards.design.title'), href: '#oferta' },
    ],
    nawigacja: [
      { name: t('nav.offer'), href: '#oferta' },
      { name: t('nav.pricing'), href: '#cennik' },
      { name: t('nav.portfolio'), href: '#portfolio' },
      { name: t('nav.process'), href: '#proces' },
      { name: t('nav.faq'), href: '#faq' },
      { name: t('nav.contact'), href: '#kontakt' },
    ],
    prawne: [
      { name: t('footer.legal.privacyPolicy'), href: '/polityka-prywatnosci' },
      { name: t('footer.legal.terms'), href: '/regulamin' },
      { name: t('footer.legal.cookies'), href: '/cookies' },
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email.label'),
      value: 'tomasz.chromy@outlook.com',
      href: 'mailto:tomasz.chromy@outlook.com',
    },
    {
      icon: MapPin,
      label: t('contact.info.location.label'),
      value: t('contact.info.location.value'),
      href: null,
    },
  ];
  const handleLinkClick = (name: string, href: string) => {
    analytics.navClick(name);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSocialClick = (platform: string, href: string) => {
    analytics.socialMediaClick(platform);
    analytics.externalLinkClick(href);
  };

  const handleContactClick = () => {
    analytics.ctaClick('Footer Contact');
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background via-gray-900/80 to-gray-950 border-t border-primary/20 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-14 h-14 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-1 border border-primary/30 shadow-lg shadow-primary/10">
                <Image
                  src="/assets/logo/logo-static.svg"
                  alt="TomSoft Website Logo"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-110 drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  TomSoft
                </span>
                <span className="text-sm text-foreground/80 font-medium">Website</span>
              </div>
            </Link>

            <p className="text-muted text-sm leading-relaxed mb-6">
              {t('footer.brandDescription')}
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-xl hover:shadow-glow transition-all duration-200"
            >
              {t('common.contactUs')}
            </motion.button>
          </motion.div>

          {/* Oferta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-heading font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-5">
              {t('footer.sections.offer')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.oferta.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className="text-muted hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nawigacja */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-heading font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-5">
              {t('footer.sections.navigation')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.nawigacja.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className="text-muted hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-heading font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-5">
              {t('footer.sections.contact')}
            </h3>
            <ul className="space-y-4 mb-6">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
                      onClick={() => analytics.externalLinkClick(item.href!)}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-muted text-sm font-medium">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSocialClick(social.name, social.href)}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary hover:from-primary hover:to-accent hover:text-background hover:border-transparent hover:shadow-glow transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mt-16 mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 bg-gray-950">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main Copyright */}
          <div className="mb-6">
            <p className="text-foreground font-heading font-semibold text-lg mb-3">
              © 2025{' '}
              <Link
                href="/"
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-accent hover:to-primary transition-all duration-300 font-bold"
              >
                TomSoft-Website
              </Link>
            </p>
            <p className="font-bold text-sm tracking-widest uppercase mb-4">
              <span className="text-muted">{t('footer.poweredBy')} </span>
              <a
                href="https://tomaszchromy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-accent hover:to-primary transition-all duration-300"
                onClick={() => analytics.externalLinkClick('https://tomaszchromy.com')}
              >
                TOMASZ CHROMY
              </a>
            </p>
          </div>

          {/* Disclaimers */}
          <div className="mb-8 space-y-2 max-w-3xl mx-auto">
            <p className="text-lg font-heading font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed">
              {t('footer.disclaimerEn')}
            </p>
            <p className="text-lg font-heading font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed">
              {t('footer.disclaimerPl')}
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.prawne.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-muted hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium group"
                onClick={() => analytics.navClick(link.name)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Partner Logos Section - Below Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-24"
          >
            {/* TomSoft Website Logo - Divine Edition */}
            <Link
              href="/"
              className="group flex flex-col items-center gap-5 transition-all duration-500 hover:scale-105"
            >
              {/* Glowing container with multiple layers */}
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Rotating border gradient */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />
                {/* Inner container */}
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  {/* Logo */}
                  <Image
                    src="/assets/logo/logo-static.svg"
                    alt="TomSoft Website Logo"
                    fill
                    className="object-contain p-4 transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                  />
                </div>
              </div>
              {/* Text with elegant styling */}
              <div className="text-center space-y-1">
                <span className="block text-2xl lg:text-3xl font-heading font-bold bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent drop-shadow-sm">
                  TomSoft
                </span>
                <span className="block text-sm font-medium text-gray-400 tracking-widest uppercase">Website</span>
              </div>
            </Link>


          </motion.div>
        </div>
      </div>
    </footer>
  );
}
