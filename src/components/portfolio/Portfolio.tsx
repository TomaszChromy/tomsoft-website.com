'use client';

import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import { useTranslation } from '@/lib/i18n';

export default function Portfolio() {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      title: 'ProBiz Site',
      description: t('portfolio.items.probiz.description'),
      category: t('portfolio.items.probiz.category'),
      technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      image: '/assets/portfolio/portfolio-1.jpg',
      liveUrl: 'https://probiz-demo.tomsoft-website.com',
      githubUrl: 'https://github.com/tomsoft-website/probiz-site',
    },
    {
      title: 'Shoply',
      description: t('portfolio.items.shoply.description'),
      category: t('portfolio.items.shoply.category'),
      technologies: ['Next.js', 'Stripe', 'Sanity CMS', 'TypeScript', 'Tailwind'],
      image: '/assets/portfolio/portfolio-2.jpg',
      liveUrl: 'https://shoply-demo.tomsoft-website.com',
      githubUrl: 'https://github.com/tomsoft-website/shoply',
    },
    {
      title: 'CRMflow',
      description: t('portfolio.items.crmflow.description'),
      category: t('portfolio.items.crmflow.category'),
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Prisma'],
      image: '/assets/portfolio/portfolio-3.jpg',
      liveUrl: 'https://crmflow-demo.tomsoft-website.com',
      githubUrl: 'https://github.com/tomsoft-website/crmflow',
    },
    {
      title: 'DesignHub',
      description: t('portfolio.items.designhub.description'),
      category: t('portfolio.items.designhub.category'),
      technologies: ['Next.js', 'Contentful', 'GSAP', 'TypeScript', 'Styled Components'],
      image: '/assets/portfolio/portfolio-4.jpg',
      liveUrl: 'https://designhub-demo.tomsoft-website.com',
    },
    {
      title: 'EduPlatform',
      description: t('portfolio.items.eduplatform.description'),
      category: t('portfolio.items.eduplatform.category'),
      technologies: ['React', 'Firebase', 'Stripe', 'TypeScript', 'Material-UI'],
      image: '/assets/portfolio/portfolio-5.jpg',
      liveUrl: 'https://eduplatform-demo.tomsoft-website.com',
    },
    {
      title: 'RestaurantOS',
      description: t('portfolio.items.restaurantos.description'),
      category: t('portfolio.items.restaurantos.category'),
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'TypeScript', 'Vuetify'],
      image: '/assets/portfolio/portfolio-6.jpg',
      liveUrl: 'https://restaurantos-demo.tomsoft-website.com',
    },
  ];
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-background">
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
            {t('portfolio.title')} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              title={item.title}
              description={item.description}
              category={item.category}
              technologies={item.technologies}
              image={item.image}
              liveUrl={item.liveUrl}
              githubUrl={item.githubUrl}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {[
            { number: '50+', label: t('portfolio.stats.projects') },
            { number: '95+', label: t('portfolio.stats.lighthouse') },
            { number: '100%', label: t('portfolio.stats.satisfaction') },
            { number: '24h', label: t('portfolio.stats.response') },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-primary/50 transition-colors duration-300"
            >
              <div className="text-3xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {t('portfolio.cta.title')}
            </h3>
            <p className="text-muted mb-8">
              {t('portfolio.cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                {t('portfolio.cta.discussButton')}
              </motion.button>

              <motion.a
                href="https://github.com/tomsoft-website"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-xl transition-all duration-200"
              >
                {t('portfolio.cta.githubButton')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
