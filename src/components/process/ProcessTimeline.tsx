'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { MessageSquare, FileText, Palette, Code, Headphones } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function ProcessTimeline() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: MessageSquare,
      title: t('process.steps.contact.title'),
      description: t('process.steps.contact.description'),
      duration: t('process.steps.contact.duration'),
      gradient: 'from-blue-500 to-cyan-500',
      image: '/assets/process/step-1-meeting.jpg',
      imageAlt: t('process.steps.contact.imageAlt'),
    },
    {
      icon: FileText,
      title: t('process.steps.brief.title'),
      description: t('process.steps.brief.description'),
      duration: t('process.steps.brief.duration'),
      gradient: 'from-purple-500 to-pink-500',
      image: '/assets/process/step-2-brief.jpg',
      imageAlt: t('process.steps.brief.imageAlt'),
    },
    {
      icon: Palette,
      title: t('process.steps.mockup.title'),
      description: t('process.steps.mockup.description'),
      duration: t('process.steps.mockup.duration'),
      gradient: 'from-green-500 to-emerald-500',
      image: '/assets/process/step-3-design.jpg',
      imageAlt: t('process.steps.mockup.imageAlt'),
    },
    {
      icon: Code,
      title: t('process.steps.implementation.title'),
      description: t('process.steps.implementation.description'),
      duration: t('process.steps.implementation.duration'),
      gradient: 'from-orange-500 to-red-500',
      image: '/assets/process/step-4-code.jpg',
      imageAlt: t('process.steps.implementation.imageAlt'),
    },
    {
      icon: Headphones,
      title: t('process.steps.support.title'),
      description: t('process.steps.support.description'),
      duration: t('process.steps.support.duration'),
      gradient: 'from-indigo-500 to-purple-500',
      image: '/assets/process/step-5-support.jpg',
      imageAlt: t('process.steps.support.imageAlt'),
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proces" className="py-16 lg:py-24 bg-gradient-to-b from-background to-gray-900/50" ref={containerRef}>
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
            {t('process.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('process.titleHighlight')}</span>?
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            {t('process.description')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700">
            <motion.div
              style={{ height: progressHeight }}
              className="w-full bg-gradient-to-b from-primary to-accent"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                } ml-20 lg:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                  >
                    {/* Step Image */}
                    <div className="relative h-40 lg:h-48 w-full">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-20`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 via-gray-800/30 to-transparent" />

                      {/* Step Number on Image */}
                      <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} p-0.5`}>
                          <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <span className="text-sm text-primary font-medium">
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-gray-800 border-2 border-primary rounded-full z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-full h-full rounded-full bg-gradient-to-r ${step.gradient}`}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              {t('process.cta.title')}
            </h3>
            <p className="text-muted mb-6">
              {t('process.cta.description')}
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
              {t('process.cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
