'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

const menuCategories = [
  {
    title: 'FOOD MENU',
    description: 'Experience our curated Mediterranean and Asian fusion dishes',
    menuImages: [
      '/menu/2025 NV FORMAT VERDE NYC_Parades_DEC_page-0002.jpg',
      '/menu/2025_Verde NYC - FINAL_DEC_page-0002.jpg',
    ],
    image: '/images/_40A8416.jpg'
  },
  {
    title: 'WINE MENU',
    description: 'Discover our exceptional selection of wines from around the world',
    menuImages: [
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0002.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0003.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0004.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0005.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0006.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0007.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0008.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0009.jpg',
      '/menu/2025 NV FORMAT VERDE NYC_Vins_DEC_page-0010.jpg',
    ],
    image: '/images/_40A8417.jpg'
  },
  {
    title: 'BAR MENU',
    description: 'Explore our curated selection of cocktails and beverages',
    menuImages: [
      '/menu/2025 NV FORMAT VERDE NYC - BAR livret A5_DEC_page-0001.jpg',
      '/menu/2025 NV FORMAT VERDE NYC - BAR livret A5_DEC_page-0003.jpg',
      '/menu/2025 NV FORMAT VERDE NYC - BAR livret A5_DEC_page-0004.jpg',
      '/menu/2025 NV FORMAT VERDE NYC - BAR livret A5_DEC_page-0005.jpg',
      '/menu/2025 NV FORMAT VERDE NYC - BAR livret A5_DEC_page-0006.jpg',
      '/menu/2025 NV FORMAT VERDE NYC - BAR livret A5_DEC_page-0007.jpg',
      '/menu/2025 NV FORMAT VERDE NYC - BAR livret A5_DEC_page-0008.jpg',
    ],
    image: '/images/_40A8419.jpg'
  }
];

export default function MenuPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<{title: string, images: string[]} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

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

  const openMenu = (category: typeof menuCategories[0]) => {
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
            src="/images/_40A8416.jpg"
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
      <section className="menu-intro-section">
        <div className="menu-intro-content">
          <h2>CULINARY EXCELLENCE</h2>
          <p>
            Indulge in a symphony of flavors inspired by the elegance of Paris and the
            vibrant spirit of the Mediterranean. At Verde NYC, every dish is a masterpiece,
            crafted with creativity and precision to ignite your senses and elevate your dining
            journey.
          </p>
        </div>
      </section>

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
                  src={selectedMenu.images[currentImageIndex]}
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
      <section className="menu-cta-section">
        <div className="menu-cta-content">
          <h2>RESERVE YOUR EXPERIENCE</h2>
          <p>
            Join us for an unforgettable dining journey at Verde NYC. Our team awaits
            to guide you through our exceptional menu, creating moments that linger
            long after the evening ends.
          </p>
          <Link
            href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"
            target="_blank"
            className="btn btn-primary border border-[#8e402f] text-[#8e402f] hover:bg-[#8e402f] hover:text-white"
          >
            MAKE A RESERVATION
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
