'use client';

import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function MilaLoungePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [
    {
      src: 'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8487.jpg',
      alt: 'Verde NYC Lounge Interior'
    },
    {
      src: 'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8487.jpg',
      alt: 'Verde NYC Lounge Ambiance'
    },
    {
      src: 'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8489.jpg',
      alt: 'Verde NYC Lounge Experience'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <main className="lounge-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Gallery Section */}
      <section id="lounge-gallery" className="lounge-gallery-section">
        <div className="lounge-gallery-wrapper">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`lounge-gallery-item ${index === currentSlide ? 'active' : ''}`}
            >   
              <img
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'low'}
                src={image.src}
                alt={image.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
          <div className="lounge-gallery-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`lounge-gallery-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verde NYC Content Section */}
      <section id="mila-lounge" className="lounge-content-section">
        <div className="lounge-content-inner">
          <p className='text-[#948E84] text-sm mb-8'>A YEEELS GROUP DESTINATION — PARIS | SAINT-TROPEZ | DUBAI | SARDINIA | NEW YORK</p>
          
          <h1 className='text-[#3A363A] mb-6'>WHERE PARISIAN CRAFT MEETS NEW YORK SOUL</h1>
          
          <p className='text-[#948E84] mb-6'>
            Verde NYC is the latest jewel in the Yeeels Group crown—an international hospitality collective celebrated for curating unforgettable culinary destinations across Europe, the Middle East, and now, in the heart of Manhattan.
          </p>
          
          <p className='text-[#948E84] mb-6'>
            Verde brings Parisian soul to New York&apos;s vibrant streets. Here, French culinary tradition is reimagined with contemporary elegance—each dish reflects precision, passion, and the art of celebration.
          </p>
          
          <p className='text-[#948E84] mb-6'>
            Step into a world of intimate charm and metropolitan energy, where every moment is crafted for connection and savor. From thoughtfully designed tasting journeys to vibrant lounge evenings and exclusive dining experiences, Verde invites you to dine beyond the expected.
          </p>
          
          <p className='text-[#948E84] italic mb-8'>
            Paris on the plate. New York in the room.
          </p>

          <div className="lounge-buttons">
            <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="lounge-btn">
              Make a Reservation
            </Link>
            <Link href="/menu" className="lounge-btn">
              View Menu
            </Link>
            <Link href="/contact" className="lounge-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* DJ Programming Section */}
      <section id="programme" className="lounge-programme-section">
        <div className="lounge-programme-inner">
          <h2 className='text-[#3A363A] '>International DJ Programming</h2>
          <p className='text-[#948E84]'>Our music programming reflects the Yeeels Group&apos;s global perspective—resident DJs trained across our Paris, Dubai, and Saint-Tropez venues, joined by international guest artists who have graced our stages worldwide. Every evening is a carefully curated sonic journey that honors our Mediterranean roots while embracing Manhattan&apos;s dynamic energy.</p>
          
          <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="lounge-btn">
            Book YOUR TABLE
          </Link>
          
          <div className="lounge-lineup-image">
            <img
              loading="lazy" decoding="async" src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8490.jpg"
              alt="Monthly DJ Lineup"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="lounge-lineup-image mt-6">
            <img
              loading="lazy" decoding="async" src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8538.jpg"
              alt="Verde Lounge Atmosphere"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="lounge-lineup-image mt-6">
            <img
              loading="lazy" decoding="async" src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8540.jpg"
              alt="Verde Lounge Interior"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="lounge-experience" className="lounge-vibes-section">
        <div className="lounge-vibes-inner">
          <h2 className='text-[#3A363A]'>An Unforgettable Experience</h2>
          <p className='text-[#948E84]'>Verde Lounge combines exceptional cuisine with sophisticated ambiance. From intimate dinners to late-night celebrations, every visit is crafted to exceed expectations.</p>
          
          <div className="lounge-collage-image">
            <img
              loading="lazy" decoding="async" src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8494.jpg"
              alt="Verde NYC Lounge elegant dining atmosphere"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="lounge-index-nav">
        <a href="#lounge-gallery" className="lounge-nav-item active">
          <div className="lounge-nav-indicator"></div>
          <span>Gallery</span>
        </a>
        <a href="#mila-lounge" className="lounge-nav-item">
          <div className="lounge-nav-indicator"></div>
          <span className='text-[#3A363A]'>About</span>
        </a>
        <a href="#programme" className="lounge-nav-item">
          <div className="lounge-nav-indicator"></div>
          <span className='text-[#3A363A]'>Entertainment</span>
        </a>
        <a href="#lounge-experience" className="lounge-nav-item">
          <div className="lounge-nav-indicator"></div>
          <span className='text-[#3A363A]'>Experience</span>
        </a>
      </nav>

      <Footer />
    </main>
  );
}
