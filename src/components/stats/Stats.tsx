'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: TrendingUp,
      value: 50,
      suffix: '+',
      label: t('stats.items.projects.label'),
      description: t('stats.items.projects.description'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      value: 100,
      suffix: '%',
      label: t('stats.items.satisfaction.label'),
      description: t('stats.items.satisfaction.description'),
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      value: 3,
      suffix: '+',
      label: t('stats.items.experience.label'),
      description: t('stats.items.experience.description'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      value: 24,
      suffix: 'h',
      label: t('stats.items.response.label'),
      description: t('stats.items.response.description'),
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-900/50 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {t('stats.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('stats.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t('stats.description')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-6 lg:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow text-center">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted">
                  {stat.description}
                </p>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

