'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface OfferCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay?: number;
}

export default function OfferCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  delay = 0,
}: OfferCardProps) {
  const handleCardClick = () => {
    analytics.serviceView(title);
    analytics.ctaClick(`Offer Card - ${title}`);
    
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative h-full cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Card Container */}
      <div className="relative h-full p-6 lg:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
        {/* Icon */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
            <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Icon Glow */}
          <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
        </div>

        {/* Content */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0`} />
              <span className="text-sm text-muted">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center space-x-2 text-primary group-hover:text-accent transition-colors duration-300"
        >
          <span className="font-medium">Dowiedz się więcej</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.div>

        {/* Gradient Border on Hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} 
             style={{ padding: '1px' }}>
          <div className="w-full h-full bg-gray-800/90 rounded-2xl" />
        </div>
      </div>

      {/* Background Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-20 blur-xl`} />
    </motion.div>
  );
}
