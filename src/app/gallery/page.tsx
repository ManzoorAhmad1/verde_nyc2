'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useSeoMetadata } from '../hooks/useSeoMetadata';

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

export default function GalleryPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [heroSection, setHeroSection] = useState<PageSection | null>(null);
  const [gallerySection, setGallerySection] = useState<PageSection | null>(null);
  const [pageData, setPageData] = useState<{seoTitle?: string; seoDescription?: string; title?: string} | null>(null);

  // Use SEO metadata from CMS
  useSeoMetadata(pageData);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/gallery`);
        if (res.ok) {
          const data = await res.json();
          if (data.page && data.page.sections) {
            const sections = data.page.sections;
            setHeroSection(sections.find((s: PageSection) => s.type === 'hero'));
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
      }
    };

    fetchPageData();
  }, []);

  const galleryImages = gallerySection?.images || [];

  return (
    <div className="gallery-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-image">
          <img
            loading="eager"
            decoding="async"
            fetchPriority="high"
            src={heroSection?.images?.[0] || "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/gallery/40A4553-verde-newyork.jpg"}
            alt="Verde NYC Gallery"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">{heroSection?.heading || "GALLERY"}</h1>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {galleryImages.map((imageSrc, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedImage(imageSrc)}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={imageSrc}
                  alt={`Verde NYC Gallery Image ${index + 1}`}
                  className="gallery-image"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-zoom-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Verde NYC Gallery Image"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
