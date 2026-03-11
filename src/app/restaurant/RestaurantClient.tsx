'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

interface PageSection {
  type: string;
  heading?: string;
  subheading?: string;
  content?: string;
  images?: string[];
  mobileImages?: string[];
  ctaLink?: string;
  ctaText?: string;
  order?: number;
}

interface Props {
  pageData: any;
}

export default function RestaurantClient({ pageData }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const sections: PageSection[] = pageData?.page?.sections || [];
  const heroSection = sections.find((s: PageSection) => s.type === 'hero') || null;
  const philosophySection = sections.find((s: PageSection) => s.type === 'philosophy') || null;
  const menuSections = sections
    .filter((s: PageSection) => s.type === 'menu')
    .sort((a: PageSection, b: PageSection) => (a.order || 0) - (b.order || 0));
  const disclaimerSection = sections.find((s: PageSection) => s.heading === 'Disclaimer') || null;
  const gallerySection = sections.find((s: PageSection) => s.type === 'gallery') || null;

  const menuTabs = menuSections.map(section => section.heading?.toUpperCase() || '');

  return (
    <>
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main className="restaurant-page">
        {/* Gallery Section - Hero */}
        {heroSection?.images?.[0] && (
          <section id="restaurant-gallery" className="restaurant-gallery-section" style={{ height: '75vh', minHeight: '400px', overflow: 'hidden', position: 'relative' }}>
            <Image
              priority
              unoptimized
              src={heroSection.images[0]}
              alt="Verde NYC Restaurant"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </section>
        )}

        {/* Philosophy Section */}
        <section id="our-philosophy-mila" className="philosophy-section">
          <div className="parallax-background texture-bg">
            <Image
              src={philosophySection?.images?.[0] || "https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"}
              alt="verde-nyc-texture"
              fill
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="philosophy-content">
            <div className="text-center px-4">
              <h1 className="font-serif text-[28px] tracking-[0.1em]" style={{ color: 'var(--verde-heading)' }}>
                {heroSection?.heading || 'Restaurant'}
              </h1>
            </div>
            <h3 style={{ color: 'var(--verde-heading)' }}>{philosophySection?.heading}</h3>
            <h3 style={{ color: 'var(--verde-heading)' }}>{philosophySection?.subheading}</h3>

            <div className="philosophy-text" style={{ color: 'var(--verde-text)' }}>
              {(philosophySection?.content || '').split('\n\n').filter(Boolean).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="button-center">
              <Link
                href={philosophySection?.ctaLink || "https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"}
                className="btn btn-primary text-[#8E402F] border-[#8E402F] hover:bg-[#8E402F] hover:text-white"
                target="_blank"
              >
                {philosophySection?.ctaText || "RESERVE YOUR TABLE"}
              </Link>
            </div>
          </div>
        </section>

        {/* Menu Section - TEMPORARILY HIDDEN
        <section id="menu-page" className="menu-section" style={{ padding: '20px 20px 0' }}>
          <div className="menu-tabs">
            <div className="tab-controls" style={{ marginBottom: '10px', paddingBottom: '10px' }}>
              {menuTabs.map((tab, index) => (
                <button key={index} className={`tab-button ${activeTab === index ? 'active' : ''}`} onClick={() => setActiveTab(index)}>
                  {tab}
                </button>
              ))}
            </div>
            {menuSections.map((menuSection, index) => (
              activeTab === index && menuSection.content && (
                <div key={index} className="tab-panel" style={{ padding: '0' }}>
                  <div dangerouslySetInnerHTML={{ __html: menuSection.content }} />
                </div>
              )
            ))}
          </div>
        </section>
        */}

        {/* Disclaimer Section - TEMPORARILY HIDDEN
        {disclaimerSection && disclaimerSection.content && (
        <section id="gf-v-disclaimer" className="disclaimer-section">
          <hr className="section-divider" />
          <div className="disclaimer-content">
            <div dangerouslySetInnerHTML={{ __html: disclaimerSection.content }} />
          </div>
          <hr className="section-divider" />
        </section>
        )}
        */}

        {/* Food Gallery Section - Grid of all images */}
        {gallerySection?.images && gallerySection.images.length > 0 && (
          <section id="food-gallery" className="food-gallery-section">
            <div className="gallery-grid">
              {gallerySection.images.map((img, idx) => (
                <div key={idx} className="gallery-item">
                  <Image
                    unoptimized
                    src={img}
                    alt={`Verde NYC Gallery ${idx + 1}`}
                    fill
                    loading="lazy"
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
