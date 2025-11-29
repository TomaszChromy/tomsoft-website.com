'use client';

import { motion } from 'framer-motion';
import { Clock, Cpu, Shield, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyTiles() {
  const { t } = useTranslation();

  const tiles = [
    {
      id: 'fastDelivery',
      icon: Clock,
      titleKey: 'why.tiles.fastDelivery.title',
      descriptionKey: 'why.tiles.fastDelivery.description',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'modernTech',
      icon: Cpu,
      titleKey: 'why.tiles.modernTech.title',
      descriptionKey: 'why.tiles.modernTech.description',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'security',
      icon: Shield,
      titleKey: 'why.tiles.security.title',
      descriptionKey: 'why.tiles.security.description',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'communication',
      icon: MessageCircle,
      titleKey: 'why.tiles.communication.title',
      descriptionKey: 'why.tiles.communication.description',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="why" className="py-16 lg:py-24 bg-gradient-to-b from-background to-gray-900/50">
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
            {t('why.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('why.titleHighlight')}</span>?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t('why.description')}
          </p>
        </motion.div>

        {/* Tiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {tiles.map((tile) => {
            const IconComponent = tile.icon;
            return (
            <motion.div
              key={tile.id}
              variants={tileVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Tile Container */}
              <div className="relative h-full p-6 lg:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tile.gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${tile.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {t(tile.titleKey)}
                  </h3>

                  <p className="text-muted leading-relaxed text-sm lg:text-base">
                    {t(tile.descriptionKey)}
                  </p>
                </div>

                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tile.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-gray-800/90 rounded-2xl" />
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 blur-xl" />
            </motion.div>
          );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-6">
            {t('why.readyToStart')}
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
            {t('why.talkAboutProject')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
