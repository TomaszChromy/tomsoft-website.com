'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useTranslation } from '@/lib/i18n';
import LanguageSwitcher, { LanguageSwitcherCompact } from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.offer'), href: '#oferta' },
    { name: t('nav.pricing'), href: '#cennik' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, name: string) => {
    analytics.navClick(name);
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={() => analytics.navClick('Logo')}
            >
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-1 border border-primary/30">
                <Image
                  src="/assets/logo/logo-static.svg"
                  alt="TomSoft Website Logo"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-110 drop-shadow-lg"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl lg:text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                  TomSoft
                </span>
                <span className="text-xs lg:text-sm text-foreground/80 font-medium tracking-wide">
                  Website
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center space-x-6"
          >
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => handleNavClick(item.href, item.name)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}

            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <LanguageSwitcher />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-primary/20 mt-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Language Switcher - Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="px-4 pt-4 border-t border-primary/10 mt-2"
                >
                  <LanguageSwitcherCompact />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
