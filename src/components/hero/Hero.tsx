'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useTranslation } from '@/lib/i18n';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { t, locale } = useTranslation();

  // Get typing words from translations
  const typingWords = useMemo(() => {
    const words = [];
    for (let i = 0; i < 5; i++) {
      const word = t(`hero.typingWords.${i}`);
      if (word && !word.startsWith('hero.typingWords')) {
        words.push(word);
      }
    }
    return words.length > 0 ? words : ['nowoczesne strony internetowe'];
  }, [t, locale]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const streaksY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Reset typing when language changes
  useEffect(() => {
    setCurrentWordIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [locale]);

  // Typing effect
  useEffect(() => {
    if (typingWords.length === 0) return;

    const currentWord = typingWords[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentWord) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, typingWords]);

  const handleCTAClick = (type: 'offer' | 'contact') => {
    analytics.ctaClick(type === 'offer' ? 'Hero Offer' : 'Hero Contact');
    const targetId = type === 'offer' ? '#oferta' : '#kontakt';
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Layers - Realistic HD Photo */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/hero/hero-bg.jpg"
          alt="Modern workspace with laptop and code"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </motion.div>

      {/* Gradient overlay for visual effect */}
      <motion.div
        style={{ y: streaksY }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent" />
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 lg:pt-0">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Hero Content - Full Width Centered */}
          <div className="max-w-4xl text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight flex flex-col items-center gap-2 lg:gap-4">
                {/* Line 1: "Budujemy" */}
                <span className="text-foreground">{t('hero.building')}</span>

                {/* Line 2: Animated typing text */}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-flex items-center justify-center min-w-[280px] sm:min-w-[380px] lg:min-w-[520px] min-h-[1.2em]">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block w-[3px] h-[0.9em] bg-gradient-to-b from-primary to-accent ml-1 align-middle"
                  />
                </span>

                {/* Line 3: "które działają dla Twojego biznesu" */}
                <span className="text-foreground text-2xl sm:text-3xl lg:text-4xl">{t('hero.forYourBusiness')}</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted leading-relaxed max-w-3xl mx-auto">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCTAClick('offer')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-xl hover:shadow-glow transition-all duration-200 group"
              >
                {t('common.seeOffer')}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCTAClick('contact')}
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-xl transition-all duration-200"
              >
                {t('common.contactUs')}
              </motion.button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4 justify-center"
            >
              {[
                { icon: Code, text: 'React + Next.js' },
                { icon: Zap, text: 'Lighthouse 95+' },
                { icon: Shield, text: 'SEO-friendly' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                >
                  <feature.icon className="w-4 h-4" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
