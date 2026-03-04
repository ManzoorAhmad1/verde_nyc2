'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useSeoMetadata } from '../hooks/useSeoMetadata';
import PageLoader from '@/components/PageLoader';

// Define Interface for CMS Content
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

export default function RestaurantPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [heroSection, setHeroSection] = useState<PageSection | null>(null);
  const [philosophySection, setPhilosophySection] = useState<PageSection | null>(null);
  const [menuSections, setMenuSections] = useState<PageSection[]>([]);
  const [disclaimerSection, setDisclaimerSection] = useState<PageSection | null>(null);
  const [gallerySection, setGallerySection] = useState<PageSection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState<{ seoTitle?: string; seoDescription?: string; title?: string } | null>(null);

  // Use SEO metadata from CMS
  useSeoMetadata(pageData);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/restaurant?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          if (data.page && data.page.sections) {
            const sections = data.page.sections;
            setHeroSection(sections.find((s: PageSection) => s.type === 'hero'));
            setPhilosophySection(sections.find((s: PageSection) => s.type === 'philosophy'));

            // Get all menu sections (type: 'menu') sorted by order
            const menus = sections.filter((s: PageSection) => s.type === 'menu')
              .sort((a: PageSection, b: PageSection) => (a.order || 0) - (b.order || 0));
            setMenuSections(menus);

            setDisclaimerSection(sections.find((s: PageSection) => s.heading === 'Disclaimer'));
            setGallerySection(sections.find((s: PageSection) => s.type === 'gallery'));

            // Set SEO data
            setPageData({
              seoTitle: data.page.seoTitle,
              seoDescription: data.page.seoDescription,
              title: data.page.title
            });
          }
        }
      } catch (error) {
        console.error("Failed to load page content", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageData();
  }, []);

  const menuTabs = menuSections.map(section => section.heading?.toUpperCase() || '');

  return (
    <>
      {/* <PageLoader isDataLoaded={!isLoading} /> */}
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main className="restaurant-page">
        {/* Gallery Section - Hero */}
        {/* Mobile: plain img, full width, no crop */}
        <div className="block sm:hidden" style={{ width: '100%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroSection?.mobileImages?.[0] || heroSection?.images?.[0] || "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8442.jpg"}
            alt="Verde NYC Restaurant"
            className="page-hero-img"
          />
        </div>
        {/* Desktop: 75vh with object-cover */}
        <section id="restaurant-gallery" className="restaurant-gallery-section hidden sm:block" style={{ height: '75vh', minHeight: '400px', overflow: 'hidden', position: 'relative' }}>
          <Image
            priority
            unoptimized
            src={heroSection?.images?.[0] || "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8442.jpg"}
            alt="Verde NYC Restaurant"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </section>

        {/* Page Title Below Hero */}


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
            <h3 style={{ color: 'var(--verde-heading)' }}>{philosophySection?.heading}   </h3>
            <h3 style={{ color: 'var(--verde-heading)' }}>{philosophySection?.subheading}   </h3>

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

        {/* Food Gallery Section - FROM CMS */}
        <section id="food-gallery" className="food-gallery-section">
          <div className="gallery-grid">
            {(gallerySection?.images && gallerySection.images.length > 0 ? gallerySection.images : [
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/verde-lifestyle-1.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8444.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/mixology-cocktails.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8455.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/Decadence-verde-dubai-0693.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8460.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/verde-lifestyle-8.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8527.jpg"
            ]).map((img, index) => (
              <div key={index} className="gallery-item">
                <Image
                  unoptimized
                  src={img}
                  alt={`Verde NYC Gallery ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Index Navigation */}
        <nav className="index-nav overlay">
          <div className="index-nav-inner">
            <a href="#restaurant-gallery" className="index-nav-item active">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>New Gallery</span></div>
            </a>
            <a href="#our-philosophy-mila" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>our philosophy</span></div>
            </a>
            <a href="#menu-page" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Menu</span></div>
            </a>
            <a href="#gf-v-disclaimer" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>GF / V disclaimer</span></div>
            </a>
            <a href="#food-gallery" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>food gallery</span></div>
            </a>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
