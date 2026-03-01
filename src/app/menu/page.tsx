'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
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
  const [pageData, setPageData] = useState<{seoTitle?: string; seoDescription?: string; title?: string} | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageScrollBoxRef = useRef<HTMLDivElement>(null);

  // Use SEO metadata from CMS
  useSeoMetadata(pageData);

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
        // Fallback or empty
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageData();
  }, []);
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMenu) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMenu, currentImageIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMenu) {
      const y = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${y}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const top = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (top) window.scrollTo(0, -parseInt(top));
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [selectedMenu]);

  // Trackpad / mouse wheel handler
  useEffect(() => {
    const el = imageScrollBoxRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      el.scrollTop += e.deltaY;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [selectedMenu]);

  // Touch handlers for swipe navigation on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const resetScroll = () => {
    if (imageScrollBoxRef.current) imageScrollBoxRef.current.scrollTop = 0;
  };

  const handlePrev = useCallback(() => {
    if (!selectedMenu || isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(prev => prev === 0 ? selectedMenu.images.length - 1 : prev - 1);
    setIsZoomed(false);
    resetScroll();
    setTimeout(() => setIsAnimating(false), 250);
  }, [selectedMenu, isAnimating]);

  const handleNext = useCallback(() => {
    if (!selectedMenu || isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(prev => prev === selectedMenu.images.length - 1 ? 0 : prev + 1);
    setIsZoomed(false);
    resetScroll();
    setTimeout(() => setIsAnimating(false), 250);
  }, [selectedMenu, isAnimating]);

  const openMenu = (category: any) => {
    setSelectedMenu({ title: category.title, images: category.menuImages });
    setCurrentImageIndex(0);
    setIsZoomed(false);
    setTimeout(() => setModalVisible(true), 10);
  };

  // Load jsPDF dynamically from CDN (no npm install needed)
  const loadJsPDF = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if ((window as any).jspdf) { resolve((window as any).jspdf.jsPDF); return; }
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.onload = () => resolve((window as any).jspdf.jsPDF);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  // Fetch image URL -> base64 string via fetch (avoids canvas CORS taint)
  const fetchImageAsBase64 = async (url: string): Promise<{ base64: string; mime: string; width: number; height: number } | null> => {
    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const blob = await res.blob();
      const mime = blob.type || 'image/jpeg';
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      // Get natural dimensions via Image element
      const { w, h } = await new Promise<{ w: number; h: number }>((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => resolve({ w: 800, h: 600 });
        img.src = base64;
      });
      return { base64, mime, width: w, height: h };
    } catch {
      return null;
    }
  };

  // PDF Download - direct download using jsPDF loaded from CDN
  const handleDownloadPDF = async () => {
    if (!selectedMenu || !selectedMenu.images || selectedMenu.images.length === 0) return;
    setIsDownloadingPdf(true);
    try {
      const JsPDF = await loadJsPDF();
      const pdf = new JsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      let firstPage = true;

      for (const src of selectedMenu.images) {
        const result = await fetchImageAsBase64(src);
        if (!result) continue;

        const { base64, mime, width, height } = result;
        const format = mime.includes('png') ? 'PNG' : 'JPEG';

        if (!firstPage) pdf.addPage();
        firstPage = false;

        // Fit image inside page preserving aspect ratio
        const ratio = width / height;
        let w = pageW, h = pageW / ratio;
        if (h > pageH) { h = pageH; w = pageH * ratio; }
        const x = (pageW - w) / 2;
        const y = (pageH - h) / 2;

        pdf.addImage(base64, format, x, y, w, h);
      }

      if (!firstPage) {
        pdf.save(`${selectedMenu.title || 'menu'}.pdf`);
      }
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const closeMenu = () => {
    setModalVisible(false);
    setTimeout(() => {
      setSelectedMenu(null);
      setCurrentImageIndex(0);
      setIsZoomed(false);
    }, 300);
  };

  return (
    <>
      <PageLoader isDataLoaded={!isLoading} />
      <div className="menu-page">
        <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Section - Same as before */}
      <section className="menu-hero">
        <div className="menu-hero-image">
          <img
            loading="eager"
            decoding="async"
            fetchPriority="high"
            src={heroSection?.images?.[0] || "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8416.jpg"}
            alt="Verde NYC Menu"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="menu-hero-content">
          <h1 className="menu-hero-title italic">OUR MENU</h1>
          <p className="menu-hero-subtitle italic">Culinary Excellence Meets Celebration</p>
        </div>
      </section>

      {/* Menu Introduction - Same as before */}
      {introSection && (
        <section className="menu-intro-section">
          <div className="menu-intro-content">
            <h2>{introSection.heading}</h2>
            {introSection.content && <p>{introSection.content}</p>}
          </div>
        </section>
      )}

      {/* Menu Categories Grid - Same as before */}
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

      {/* Menu Carousel Modal - Mobile optimized with larger images */}
      {selectedMenu && (
        <div
          className="menu-modal-overlay"
          style={{ opacity: modalVisible ? 1 : 0 }}
          onClick={closeMenu}
        >
          <div
            className="menu-carousel-modal"
            style={{ transform: modalVisible ? 'scale(1)' : 'scale(0.96)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Reduced height */}
            <div className="modal-header">
              <div className="modal-title-wrap">
                <span className="modal-label">MENU</span>
                <h2 className="modal-title">{selectedMenu.title}</h2>
              </div>
              <div className="modal-actions">
                <button
                  className="modal-download-btn"
                  onClick={handleDownloadPDF}
                  disabled={isDownloadingPdf}
                  title="Download PDF"
                >
                  {isDownloadingPdf ? (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  )}
                  <span className="download-btn-text">{isDownloadingPdf ? 'Generating...' : 'Download PDF'}</span>
                </button>
                <button
                  className={`modal-icon-btn ${isZoomed ? 'active' : ''}`}
                  onClick={() => { setIsZoomed(z => !z); resetScroll(); }}
                  title={isZoomed ? 'Zoom Out' : 'Zoom In'}
                >
                  {isZoomed ? (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                    </svg>
                  )}
                </button>
                <button className="modal-close-btn" onClick={closeMenu} title="Close">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Viewer - Full height */}
            <div 
              className="modal-viewer"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Navigation Arrows */}
              {selectedMenu.images.length > 1 && (
                <>
                  <button
                    className="modal-arrow modal-arrow-left"
                    onClick={handlePrev}
                    disabled={isAnimating}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  
                  <button
                    className="modal-arrow modal-arrow-right"
                    onClick={handleNext}
                    disabled={isAnimating}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </>
              )}
              
              {/* Scrollable Image Box - Mobile optimized */}
              <div ref={imageScrollBoxRef} className="modal-scroll-box">
                <img
                  src={selectedMenu.images?.[currentImageIndex]}
                  alt={`${selectedMenu.title} - Page ${currentImageIndex + 1}`}
                  className={`modal-image ${isZoomed ? 'zoomed' : ''} ${isAnimating ? 'fade' : ''}`}
                  draggable="false"
                />
                <p className="scroll-hint">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                  Scroll to read more
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            {selectedMenu.images.length > 1 && (
              <div className="modal-bottom-bar">
                <span className="page-indicator">
                  {currentImageIndex + 1}/{selectedMenu.images.length}
                </span>
                <div className="dot-container">
                  {selectedMenu.images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsZoomed(false);
                        resetScroll();
                      }}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reservation CTA - Same as before */}
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

      <style jsx>{`
        /* Modal Styles - Mobile optimized */
        .menu-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
          transition: opacity 0.3s ease;
        }

        .menu-carousel-modal {
          background: white;
          width: 100%;
          max-width: 1300px;
          height: 95vh;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease;
        }

        /* Mobile specific - Full screen with larger images */
        @media (max-width: 768px) {
          .menu-modal-overlay {
            padding: 0;
          }
          
          .menu-carousel-modal {
            height: 100vh;
            border-radius: 0;
            max-width: 100%;
          }
        }

        /* Modal Header - Ultra compact on mobile */
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 16px;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          flex-shrink: 0;
          min-height: 48px;
        }

        @media (max-width: 768px) {
          .modal-header {
            padding: 4px 12px;
            min-height: 40px;
          }
        }

        @media (max-width: 480px) {
          .modal-header {
            padding: 4px 10px;
            min-height: 38px;
          }
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          flex: 1;
        }

        @media (max-width: 768px) {
          .modal-title-wrap {
            gap: 6px;
          }
        }

        .modal-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #8e402f;
          background: #fef2f2;
          padding: 3px 10px;
          border-radius: 999px;
          white-space: nowrap;
          border: 1px solid #fecaca;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .modal-label {
            font-size: 10px;
            padding: 2px 8px;
          }
        }

        @media (max-width: 480px) {
          .modal-label {
            font-size: 9px;
            padding: 2px 6px;
          }
        }

        .modal-title {
          font-size: 18px;
          font-weight: 400;
          color: #1f2937;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .modal-title {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .modal-title {
            font-size: 14px;
          }
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .modal-actions {
            gap: 4px;
          }
        }

        .modal-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          background: white;
          color: #4b5563;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-icon-btn:hover {
          background: #f3f4f6;
          border-color: #8e402f;
          color: #8e402f;
        }

        .modal-icon-btn.active {
          background: #8e402f;
          border-color: #8e402f;
          color: white;
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          background: white;
          color: #4b5563;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-close-btn:hover {
          background: #1f2937;
          border-color: #1f2937;
          color: white;
        }

        @media (max-width: 768px) {
          .modal-icon-btn,
          .modal-close-btn {
            width: 32px;
            height: 32px;
          }
        }

        @media (max-width: 480px) {
          .modal-icon-btn,
          .modal-close-btn {
            width: 30px;
            height: 30px;
          }
        }

        /* Modal Viewer - Full height for images */
        .modal-viewer {
          flex: 1;
          min-height: 0;
          background: #f3f4f6;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Navigation Arrows - Smaller on mobile */
        .modal-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.9);
          color: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s;
        }

        .modal-arrow:hover:not(:disabled) {
          background: #8e402f;
          color: white;
          transform: translateY(-50%) scale(1.05);
        }

        .modal-arrow:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .modal-arrow-left {
          left: 16px;
        }

        .modal-arrow-right {
          right: 16px;
        }

        @media (max-width: 768px) {
          .modal-arrow {
            width: 36px;
            height: 36px;
          }
          
          .modal-arrow-left {
            left: 8px;
          }
          
          .modal-arrow-right {
            right: 8px;
          }
        }

        @media (max-width: 480px) {
          .modal-arrow {
            width: 32px;
            height: 32px;
          }
        }

        /* Scrollable Image Box - Mobile optimized for larger images */
        .modal-scroll-box {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 20px 20px;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e0 #f1f5f9;
        }

        .modal-scroll-box::-webkit-scrollbar {
          width: 6px;
        }

        .modal-scroll-box::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        .modal-scroll-box::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 8px;
        }

        .modal-scroll-box::-webkit-scrollbar-thumb:hover {
          background: #8e402f;
        }

        /* Desktop - Large images */
        @media (min-width: 1024px) {
          .modal-scroll-box {
            padding: 20px 20px;
          }
        }

        /* Tablet - Medium padding */
        @media (max-width: 1023px) and (min-width: 769px) {
          .modal-scroll-box {
            padding: 16px 16px;
          }
        }

        /* Mobile - Minimal padding for maximum image size */
        @media (max-width: 768px) {
          .modal-scroll-box {
            padding: 8px 4px;
          }
        }

        @media (max-width: 480px) {
          .modal-scroll-box {
            padding: 4px 2px;
          }
        }

        /* Images - Larger on mobile */
        .modal-image {
          width: 100%;
          max-width: 1100px;
          height: auto;
          display: block;
          border-radius: 4px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        /* Desktop - Standard size */
        @media (min-width: 1024px) {
          .modal-image {
            max-width: 1100px;
          }
        }

        /* Tablet - Slightly larger */
        @media (max-width: 1023px) and (min-width: 769px) {
          .modal-image {
            max-width: 100%;
          }
        }

        /* Mobile - Full width images */
        @media (max-width: 768px) {
          .modal-image {
            max-width: 100%;
            width: 100%;
            border-radius: 2px;
          }
        }

        .modal-image.zoomed {
          max-width: 100%;
          width: 100%;
          cursor: zoom-out;
        }

        .modal-image.fade {
          opacity: 0.3;
        }

        /* Scroll hint - Hide on very small screens */
        .scroll-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #6b7280;
          margin-top: 16px;
          padding-bottom: 12px;
        }

        @media (max-width: 768px) {
          .scroll-hint {
            font-size: 11px;
            margin-top: 12px;
            padding-bottom: 8px;
          }
        }

        @media (max-width: 480px) {
          .scroll-hint {
            font-size: 10px;
            margin-top: 8px;
            padding-bottom: 4px;
          }
        }

        /* Bottom Bar - Compact on mobile */
        .modal-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 10px 16px;
          background: white;
          border-top: 1px solid #e5e7eb;
          flex-shrink: 0;
          min-height: 44px;
        }

        @media (max-width: 768px) {
          .modal-bottom-bar {
            padding: 6px 12px;
            gap: 12px;
            min-height: 38px;
          }
        }

        @media (max-width: 480px) {
          .modal-bottom-bar {
            padding: 4px 10px;
            gap: 10px;
            min-height: 36px;
          }
        }

        .page-indicator {
          font-size: 13px;
          color: #4b5563;
          font-weight: 500;
          min-width: 55px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .page-indicator {
            font-size: 12px;
            min-width: 45px;
          }
        }

        @media (max-width: 480px) {
          .page-indicator {
            font-size: 11px;
            min-width: 40px;
          }
        }

        .dot-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 480px) {
          .dot-container {
            gap: 6px;
          }
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }

        .dot:hover {
          background: #9ca3af;
        }

        .dot.active {
          width: 24px;
          border-radius: 12px;
          background: #8e402f;
        }

        @media (max-width: 768px) {
          .dot {
            width: 6px;
            height: 6px;
          }
          
          .dot.active {
            width: 20px;
          }
        }

        @media (max-width: 480px) {
          .dot {
            width: 5px;
            height: 5px;
          }
          
          .dot.active {
            width: 18px;
          }
        }

        /* PDF Download Button */
        .modal-download-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 14px;
          height: 36px;
          border-radius: 6px;
          border: 1px solid #8e402f;
          background: #8e402f;
          color: white;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .modal-download-btn:hover:not(:disabled) {
          background: #7a3526;
          border-color: #7a3526;
        }

        .modal-download-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .modal-download-btn {
            height: 32px;
            padding: 0 10px;
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .modal-download-btn {
            height: 30px;
            padding: 0 8px;
            font-size: 10px;
            gap: 4px;
          }
        }

        @media (max-width: 380px) {
          .download-btn-text {
            display: none;
          }
          .modal-download-btn {
            width: 30px;
            padding: 0;
            justify-content: center;
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
    </>
  );
}