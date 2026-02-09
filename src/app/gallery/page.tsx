'use client';

import { useState } from 'react';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

// Gallery images from public/gallery folder
const galleryImages = [
  { src: '/gallery/40A4553-verde-newyork.jpg', alt: 'Verde NYC Interior' },
  { src: '/gallery/40A4575-verde-newyork.jpg', alt: 'Verde NYC Ambiance' },
  { src: '/gallery/40A4585-verde-newyork.jpg', alt: 'Verde NYC Dining' },
  { src: '/gallery/40A4593-verde-newyork.jpg', alt: 'Verde NYC Restaurant' },
  { src: '/gallery/40A4610-verde-newyork.jpg', alt: 'Verde NYC Experience' },
  { src: '/gallery/40A4625-verde-newyork.jpg', alt: 'Verde NYC Venue' },
  { src: '/gallery/40A4660-verde-newyork.jpg', alt: 'Verde NYC Atmosphere' },
  { src: '/gallery/40A4697-verde-newyork.jpg', alt: 'Verde NYC Setting' },
  { src: '/gallery/40A4717-verde-newyork.jpg', alt: 'Verde NYC Decor' },
  { src: '/gallery/40A4726-verde-newyork.jpg', alt: 'Verde NYC Design' },
  { src: '/gallery/40A4746-verde-newyork.jpg', alt: 'Verde NYC Interior Design' },
  { src: '/gallery/40A4755-verde-newyork.jpg', alt: 'Verde NYC Space' },
  { src: '/gallery/40A4761-verde-newyork.jpg', alt: 'Verde NYC Culinary' },
  { src: '/gallery/40A4778-verde-newyork.jpg', alt: 'Verde NYC Dining Experience' },
  { src: '/gallery/40A4781-verde-newyork.jpg', alt: 'Verde NYC Fine Dining' },
  { src: '/gallery/40A4812-verde-newyork.jpg', alt: 'Verde NYC Restaurant Experience' },
  { src: '/gallery/40A4823-verde-newyork.jpg', alt: 'Verde NYC Luxury' },
  { src: '/gallery/40A4867.jpg', alt: 'Verde NYC Moments' },
  { src: '/gallery/40A4901.jpg', alt: 'Verde NYC Celebration' },
  { src: '/gallery/40A4916-06fe9f00-f32f-4d49-b4f9-20b8f8a7f72ejpeg.jpeg', alt: 'Verde NYC Event' },
  { src: '/gallery/40A4939-db5620d8-89c3-4a1b-84c2-37308543f619jpeg.jpeg', alt: 'Verde NYC Gathering' },
  { src: '/gallery/40A4947-verde-newyork.jpg', alt: 'Verde NYC Evening' },
  { src: '/gallery/40A4987-verde-newyork.jpg', alt: 'Verde NYC Night' },
  { src: '/gallery/40A5006-verde-newyork.jpg', alt: 'Verde NYC Cuisine' },
  { src: '/gallery/40A5026-verde-newyork.jpg', alt: 'Verde NYC Food' },
  { src: '/gallery/40A5048-verde-newyork.jpg', alt: 'Verde NYC Dishes' },
  { src: '/gallery/40A5053-verde-newyork.jpg', alt: 'Verde NYC Flavors' },
  { src: '/gallery/40A5070-verde-newyork.jpg', alt: 'Verde NYC Taste' },
];

export default function GalleryPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            src="/gallery/40A4553-verde-newyork.jpg"
            alt="Verde NYC Gallery"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">GALLERY</h1>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={image.src}
                  alt={image.alt}
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
