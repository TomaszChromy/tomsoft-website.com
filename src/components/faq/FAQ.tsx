'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-700 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isOpen 
              ? 'bg-gradient-to-r from-primary to-accent text-background' 
              : 'bg-gray-800 text-muted group-hover:text-primary'
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faq.items.cost.question'),
      answer: t('faq.items.cost.answer'),
    },
    {
      question: t('faq.items.timeline.question'),
      answer: t('faq.items.timeline.answer'),
    },
    {
      question: t('faq.items.support.question'),
      answer: t('faq.items.support.answer'),
    },
    {
      question: t('faq.items.technologies.question'),
      answer: t('faq.items.technologies.answer'),
    },
    {
      question: t('faq.items.cms.question'),
      answer: t('faq.items.cms.answer'),
    },
    {
      question: t('faq.items.responsive.question'),
      answer: t('faq.items.responsive.answer'),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gradient-to-b from-background to-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent mb-6">
            <HelpCircle className="w-8 h-8 text-background" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {t('faq.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('faq.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t('faq.description')}
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 lg:px-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted mb-4">
            {t('faq.cta.subtitle')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#kontakt');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-xl hover:shadow-glow transition-all duration-200"
          >
            {t('faq.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

