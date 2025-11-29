'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Anna Kowalska',
      company: 'eCommerce24',
      role: 'CEO',
      content: t('testimonials.items.anna.content'),
      rating: 5,
      metric: t('testimonials.items.anna.metric'),
      avatar: '/assets/testimonials/anna-k.jpg',
    },
    {
      id: 2,
      name: 'Marek Nowak',
      company: 'Startup360',
      role: 'Founder',
      content: t('testimonials.items.marek.content'),
      rating: 5,
      metric: t('testimonials.items.marek.metric'),
      avatar: '/assets/testimonials/marek-n.jpg',
    },
    {
      id: 3,
      name: 'Katarzyna Wiśniewska',
      company: 'DesignStudio',
      role: 'Creative Director',
      content: t('testimonials.items.katarzyna.content'),
      rating: 5,
      metric: t('testimonials.items.katarzyna.metric'),
      avatar: '/assets/testimonials/katarzyna-w.jpg',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-carousel functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      id="testimonials" 
      className="py-16 lg:py-24 bg-gradient-to-b from-background to-gray-900/50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
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
            {t('testimonials.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('testimonials.titleHighlight')}</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-background" />
              </div>

              {/* Content */}
              <div className="pt-8">
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Avatar - Realistic HD Photo */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/50">
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                        quality={85}
                      />
                    </div>

                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full">
                    <span className="text-sm font-semibold text-primary">
                      {testimonials[currentIndex].metric}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: '0%' }}
              animate={{ width: isAutoPlaying ? '100%' : '0%' }}
              transition={{ duration: 6, ease: 'linear' }}
              key={`${currentIndex}-${isAutoPlaying}`}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-6">
            {t('testimonials.cta.subtitle')}
          </p>
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
            {t('testimonials.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
