'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/hero/Hero';
import WhyTiles from '@/components/why/WhyTiles';
import Offer from '@/components/offer/Offer';
import Pricing from '@/components/pricing/Pricing';
import ProcessTimeline from '@/components/process/ProcessTimeline';
import Portfolio from '@/components/portfolio/Portfolio';
import Stats from '@/components/stats/Stats';
import Testimonials from '@/components/testimonials/Testimonials';
import FAQ from '@/components/faq/FAQ';
import Contact from '@/components/contact/Contact';
import CookieConsent from '@/components/contact/CookieConsent';
import FloatingContactButton from '@/components/layout/FloatingContactButton';
import { initAnalytics } from '@/lib/analytics';

export default function Home() {
  useEffect(() => {
    // Initialize analytics after component mounts
    initAnalytics();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyTiles />
        <Offer />
        <Pricing />
        <ProcessTimeline />
        <Portfolio />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <FloatingContactButton />
    </>
  );
}
