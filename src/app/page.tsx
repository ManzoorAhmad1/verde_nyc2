'use client'
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import VenueGrid from '@/components/VenueGrid';
import ParallaxSection from '@/components/ParallaxSection';
import Philosophy from '@/components/Philosophy';
import ParallaxSecond from '@/components/ParallaxSecond';
import PhilosophySection from '@/components/PhilosophySection';
import InstagramSection from '@/components/InstagramSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileNav from './components/MobileNav';



const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main>
        {/* Section 1: Hero Video */}
        <Hero />

        {/* Section 2: Venues */}
        <div id="mila-venues">
          <VenueGrid />
        </div>

        {/* Section 3: Parallax Callout */}
        <ParallaxSection
          imageUrl="/images/_40A8419.jpg"
          title="Inspired by nature"
          subtitle="MILA embodies a multi-sensory culinary and lifestyle sanctuary inspired by the elegant details of nature."
          speed={0.5}
        />

        {/* Section 4: Philosophy and More */}
        <Philosophy />
        <ParallaxSecond />
        <PhilosophySection />

        {/* Section 6: Instagram */}
        <InstagramSection />
      </main>

      <Footer />

      {/* Floating Action Button (Optional, mimicking Squarespace overlay) */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-mila-gold text-white p-4 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform lg:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </a>
    </div>
  );
};

export default App;