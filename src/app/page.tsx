'use client'
import React, { useState, useEffect } from 'react';
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
import Image from 'next/image';
import Link from 'next/link';
import { useSeoMetadata } from './hooks/useSeoMetadata';

// Interface matching backend Page Schema
interface PageSection {
  type: string;
  heading?: string;
  subheading?: string;
  content?: string;
  images?: string[];
  ctaLink?: string;
  ctaText?: string;
  items?: Array<{
    name: string;
    description: string;
    price?: string;
    image?: string;
    link?: string;
  }>;
}

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sections, setSections] = useState<PageSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageTimestamp, setImageTimestamp] = useState(Date.now());
  const [pageData, setPageData] = useState<{seoTitle?: string; seoDescription?: string; title?: string} | null>(null);

  // Use SEO metadata from CMS
  useSeoMetadata(pageData);

  useEffect(() => {
    // Fetch home page content
    const fetchHomeData = async () => {
      setIsLoading(true);
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/home?t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
          }
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.page?.sections) {
            setSections(data.page.sections);
            setImageTimestamp(Date.now());
            setPageData({
              seoTitle: data.page.seoTitle,
              seoDescription: data.page.seoDescription,
              title: data.page.title
            });
          }
        }
      } catch (error) {
        console.error("Failed to load home page content", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomeData();

    // Auto-refresh when user comes back to tab
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log('🔄 Tab visible - refreshing data...');
        fetchHomeData();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Render section based on type
  const renderSection = (section: PageSection, index: number) => {
    const key = `section-${index}-${imageTimestamp}`;
    
    switch (section.type) {
      case 'hero':
        return (
          <Hero
            key={key}
            image={section.images?.[0] ? `${section.images[0]}?t=${imageTimestamp}` : undefined}
            heading={section.heading}
            subheading={section.subheading}
            isLoading={isLoading}
          />
        );
        
      case 'features':
        // Venue Grid Section
        return (
          <div key={key} id="mila-venues">
            <VenueGrid
              venues={section.items || []}
              heading={section.heading}
              subheading={section.subheading}
              content={section.content}
            />
          </div>
        );
        
      case 'parallax':
        return (
          <ParallaxSection
            key={key}
            imageUrl={section.images?.[0] ? `${section.images[0]}?t=${imageTimestamp}` : ''}
            title={section.heading || ''}
            subtitle={section.content || section.subheading || ''}
            speed={0.5}
          />
        );
        
      case 'text':
        // Philosophy/Reserve section
        return (
          <Philosophy
            key={key}
            heading={section.heading}
            content={section.content}
            ctaText={section.ctaText}
            ctaLink={section.ctaLink}
          />
        );
        
      case 'philosophy':
        return (
          <PhilosophySection
            key={key}
            section={section}
          />
        );
        
      case 'gallery':
        // Instagram Section
        return (
          <InstagramSection
            key={key}
            heading={section.heading}
            subheading={section.subheading}
            images={section.images || []}
            ctaLink={section.ctaLink}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

        <main>
          {sections.map((section, index) => renderSection(section, index))}
        </main>

        <Footer />

        {/* Floating Action Button */}
        <a
          href="#"
          className="fixed bottom-6 right-6 bg-mila-gold text-white p-4 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform lg:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default App;
