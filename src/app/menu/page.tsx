'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

// Define Interface for CMS Content
interface PageSection {
  type: string;
  heading?: string;
  subheading?: string;
  content?: string;
  images?: string[];
  ctaLink?: string;
  ctaText?: string;
}

export default function MenuPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<{title: string, images: string[]} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [heroSection, setHeroSection] = useState<PageSection | null>(null);
  const [menuCategories, setMenuCategories] = useState<any[]>([]);
  const [introSection, setIntroSection] = useState<PageSection | null>(null);
  const [ctaSection, setCtaSection] = useState<PageSection | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/menu`);
        if (res.ok) {
          const data = await res.json();
          if (data.page && data.page.sections) {
            const sections = data.page.sections;
            setHeroSection(sections.find((s: PageSection) => s.type === 'hero'));
            
            // Find text sections by order
            const textSections = sections.filter((s: PageSection) => s.type === 'text');
            setIntroSection(textSections.find((s: PageSection) => s.heading?.includes('CULINARY') || s.heading?.includes('EXCELLENCE')));
            setCtaSection(textSections.find((s: PageSection) => s.heading?.includes('RESERVE') || s.ctaText));
            
            const categories = sections
              .filter((s: PageSection) => s.type === 'menu-category')
              .map((s: PageSection) => ({
                title: s.heading,
                description: s.content,
                image: s.images && s.images.length > 0 ? s.images[0] : '', // Cover is first image
                menuImages: s.images && s.images.length > 1 ? s.images.slice(1) : [] // Rest are menu pages
              }));
            setMenuCategories(categories);
          }
        }
      } catch (error) {
        console.error("Failed to load page content", error);
        // Fallback or empty
      }
    };

    fetchPageData();
  }, []);

  const handlePrevImage = () => {
    if (selectedMenu) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedMenu.images.length - 1 : prev - 1
      );
      setIsZoomed(false);
    }
  };

  const handleNextImage = () => {
    if (selectedMenu) {
      setCurrentImageIndex((prev) => 
        prev === selectedMenu.images.length - 1 ? 0 : prev + 1
      );
      setIsZoomed(false);
    }
  };

  const openMenu = (category: any) => {
    setSelectedMenu({ title: category.title, images: category.menuImages });
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const closeMenu = () => {
    setSelectedMenu(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  return (
    <div className="menu-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-image">
          <img
            loading="eager"
            decoding="async"
            fetchPriority="high"
            src={heroSection?.images?.[0] || heroSection?.images?.[0] || "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8416.jpg"}
            alt="Verde NYC Menu"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="menu-hero-content">
          <h1 className="menu-hero-title">OUR MENU</h1>
          <p className="menu-hero-subtitle">Culinary Excellence Meets Celebration</p>
        </div>
      </section>

      {/* Menu Introduction */}
      {introSection && (
        <section className="menu-intro-section">
          <div className="menu-intro-content">
            <h2>{introSection.heading}</h2>
            {introSection.content && <p>{introSection.content}</p>}
          </div>
        </section>
      )}

      {/* Menu Categories Grid */}
      <section className="menu-categories-section">
        <div className="menu-categories-grid">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-category-card">
              <div className="menu-category-image">
                <img
                  loading="lazy"
                  decoding="async"
                  src={category.image}
                  alt={category.title}
                />
              </div>
              <div className="menu-category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <button
                  onClick={() => openMenu(category)}
                  className="menu-view-btn"
                >
                  VIEW MENU
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Carousel Modal */}
      {selectedMenu && (
        <div className="menu-modal-overlay" onClick={closeMenu}>
          <div className="menu-carousel-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="menu-modal-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            
            <h2 className="menu-modal-title">{selectedMenu.title}</h2>
            
            <div className="carousel-container">
              {/* Navigation Arrows */}
              {selectedMenu.images.length > 1 && (
                <>
                  <button
                    className="carousel-arrow carousel-arrow-left"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  
                  <button
                    className="carousel-arrow carousel-arrow-right"
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Carousel Image */}
              <div 
                className={`carousel-image-wrapper ${isZoomed ? 'zoomed' : ''}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={selectedMenu.images?.[currentImageIndex]}
                  alt={`${selectedMenu.title} - Page ${currentImageIndex + 1}`}
                  className="carousel-image"
                />
                {!isZoomed && (
                  <div className="zoom-hint">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                    <span>Click to zoom</span>
                  </div>
                )}
              </div>
              
              {/* Page Indicator */}
              {selectedMenu.images.length > 1 && (
                <div className="carousel-indicators">
                  <span className="page-counter">
                    {currentImageIndex + 1} / {selectedMenu.images.length}
                  </span>
                  <div className="dots-container">
                    {selectedMenu.images.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsZoomed(false);
                        }}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reservation CTA */}
      {ctaSection && (
        <section className="menu-cta-section">
          <div className="menu-cta-content">
            <h2>{ctaSection.heading}</h2>
            {ctaSection.content && <p>{ctaSection.content}</p>}
            {ctaSection.ctaLink && ctaSection.ctaText && (
              <Link
                href={ctaSection.ctaLink}
                target="_blank"
                className="btn btn-primary border border-[#8e402f] text-[#8e402f] hover:bg-[#8e402f] hover:text-white"
              >
                {ctaSection.ctaText}
              </Link>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
