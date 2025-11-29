'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { trackCookieConsent } from '@/lib/analytics';

type ConsentType = 'all' | 'necessary' | 'declined' | null;

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentType>(null);

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem('cookie_consent');
    if (!savedConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setConsent(savedConsent as ConsentType);
    }
  }, []);

  const handleConsent = (type: ConsentType) => {
    if (type) {
      localStorage.setItem('cookie_consent', type);
      localStorage.setItem('cookie_consent_date', new Date().toISOString());
      trackCookieConsent(type);
    }
    
    setConsent(type);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    handleConsent('all');
  };

  const handleAcceptNecessary = () => {
    handleConsent('necessary');
  };

  const handleDecline = () => {
    handleConsent('declined');
  };

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6"
      >
        <div className="container mx-auto max-w-6xl">
          {!showSettings ? (
            // Main Cookie Banner
            <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Icon and Content */}
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-background" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Używamy plików cookie
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Używamy plików cookie i podobnych technologii, aby zapewnić prawidłowe 
                      funkcjonowanie strony, analizować ruch i personalizować treści. 
                      Możesz zarządzać swoimi preferencjami lub zaakceptować wszystkie pliki cookie.
                    </p>
                    <a 
                      href="/polityka-prywatnosci" 
                      className="text-primary hover:text-accent text-sm transition-colors duration-200"
                    >
                      Dowiedz się więcej w Polityce prywatności
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleShowSettings}
                    className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-600 text-muted hover:text-foreground hover:border-gray-500 rounded-xl transition-all duration-200"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Ustawienia</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAcceptNecessary}
                    className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-background rounded-xl transition-all duration-200"
                  >
                    Tylko niezbędne
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-medium rounded-xl hover:shadow-glow transition-all duration-200"
                  >
                    Akceptuj wszystkie
                  </motion.button>
                </div>
              </div>
            </div>
          ) : (
            // Cookie Settings Modal
            <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl p-6 lg:p-8 shadow-2xl max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Ustawienia plików cookie
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCloseSettings}
                  className="p-2 text-muted hover:text-foreground rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-foreground">Niezbędne pliki cookie</h4>
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-sm text-muted">
                      Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony 
                      i nie można ich wyłączyć.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-2">Pliki cookie analityczne</h4>
                    <p className="text-sm text-muted">
                      Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony, 
                      dzięki czemu możemy ją ulepszać. Używamy Plausible Analytics.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-gray-600 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-2">Pliki cookie marketingowe</h4>
                    <p className="text-sm text-muted">
                      Obecnie nie używamy plików cookie marketingowych ani reklamowych.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-gray-600 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDecline}
                  className="flex-1 px-6 py-3 border border-gray-600 text-muted hover:text-foreground hover:border-gray-500 rounded-xl transition-all duration-200"
                >
                  Odrzuć wszystkie
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAcceptNecessary}
                  className="flex-1 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-background rounded-xl transition-all duration-200"
                >
                  Tylko niezbędne
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-medium rounded-xl hover:shadow-glow transition-all duration-200"
                >
                  Akceptuj wszystkie
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
