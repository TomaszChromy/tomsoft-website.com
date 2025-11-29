'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

export default function PortfolioCard({
  title,
  description,
  category,
  technologies,
  image,
  liveUrl,
  githubUrl,
  delay = 0,
}: PortfolioCardProps) {
  const handleLinkClick = (type: 'live' | 'github', url: string) => {
    analytics.portfolioView(title);
    analytics.externalLinkClick(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-glow transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('live', liveUrl)}
              className="p-2 bg-primary/90 text-background rounded-lg hover:bg-primary transition-colors duration-200"
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('github', githubUrl)}
              className="p-2 bg-gray-800/90 text-foreground rounded-lg hover:bg-gray-700 transition-colors duration-200"
              aria-label="View source code"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-background text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              className="px-2 py-1 bg-gray-700/50 text-muted text-xs rounded-md border border-gray-600 hover:border-primary/50 transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </motion.div>
  );
}
