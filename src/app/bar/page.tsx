'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  order?: number;
}

export default function MiamiBrunchPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sections, setSections] = useState<PageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState<{seoTitle?: string; seoDescription?: string; title?: string} | null>(null);

  // Use SEO metadata from CMS
  useSeoMetadata(pageData);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/bar`);
        if (res.ok) {
          const data = await res.json();
          if (data.page && data.page.sections) {
            setSections(data.page.sections.sort((a: PageSection, b: PageSection) => (a.order || 0) - (b.order || 0)));
            
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
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);
  
  // Helper to find section by order index
  const getSection = (index: number) => sections[index] || {};
  
  const images = getSection(1).images || [];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.max(0, images.length - 2) : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= images.length - 2 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main className="brunch-page">
        {/* Banner Section (Order 1) */}
        {getSection(0).images?.[0] && (
        <section id="brunch-banner" className="brunch-banner-section">
          <div className="parallax-background">
            <img
              loading="eager" decoding="async" fetchPriority="high" 
              src={getSection(0).images![0]}
              alt="Verde NYC Brunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }}
            />
          </div>
          <div className="banner-content w-full">
            <h1 className='italic'>{getSection(0).heading || "Verde NYC brunch"}</h1>
          </div>
        </section>
        )}

        {/* Brunch Content Section */}
        <section id="miami-brunch-content" className="brunch-content-section">
          <div className="content-wrapper">
            {/* Gallery Slider (Order 2) */}
            {images.length > 0 && (
            <div className="sqs-block gallery-block sqs-block-gallery relative w-full h-[300px] overflow-hidden">
              <div className="sqs-gallery-container h-full">
                <div className="sqs-gallery sqs-gallery-design-strip relative h-full">
                  {/* Slider Images */}
                  <div 
                    className="sqs-wrapper flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 40}%)` }}
                  >
                    {images.map((src, index) => (
                      <div key={index} className="flex-shrink-0 w-2/5 h-full">
                        <img 
                          className="w-full h-full object-cover" 
                          src={src}
                          loading="lazy"
                          decoding="async"
                          alt={`Gallery image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Gallery Controls */}
                  <div className="sqs-gallery-meta-container">
                    <div className="sqs-gallery-controls">
                      <button
                        tabIndex={0}
                        className="previous absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h6-3 shadow-lg transition-all"
                        aria-label="Previous Slide"
                        onClick={handlePrevious}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        tabIndex={0}
                        className="next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h6-3 shadow-lg transition-all"
                        aria-label="Next Slide"
                        onClick={handleNext}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Brunch Intro (Order 3) */}
            {getSection(2).heading && (
            <div className="brunch-intro">
              <h2 className='py-4 mt-4' style={{color: 'var(--verde-heading)'}}>{getSection(2).heading}</h2>
              {getSection(2).content?.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className='text-[#948E84] text-center mb-4' dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
            )}

            <hr className="section-divider" />

            {/* Buffet Image Card (Order 4) */}
            {getSection(3).heading && getSection(3).images?.[0] && (
            <div className="brunch-image-card right">
              <div className="image-card-image">
                <img 
                  loading="lazy" decoding="async" src={getSection(3).images![0]}
                  alt={getSection(3).heading || 'Buffet'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3 className='text-[#3A363A]'><span>{getSection(3).heading}</span></h3>
                <p className='!text-[#948E84] text-justify'>{getSection(3).content}</p>
              </div>
            </div>
            )}

            <hr className="section-divider" />

            {/* Description Text (Order 5) */}
            {getSection(4).content && (
            <div className="brunch-description">
              {getSection(4).content!.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className='text-[#948E84] text-justify mb-4' dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
            )}

            <hr className="section-divider" />

            {/* Cocktail Image Card (Order 6) */}
            {getSection(5).heading && getSection(5).images?.[0] && (
            <div className="brunch-image-card left">
              <div className="image-card-image">
                <img
                  loading="lazy" decoding="async" src={getSection(5).images![0]}
                  alt={getSection(5).heading || 'Beverages'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3 className='text-[#3A363A]'><span>{getSection(5).heading}</span></h3>
                {getSection(5).content?.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx} className='!text-[#948E84] text-justify mb-4' dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>
            )}

            <hr className="section-divider" />

            {/* Hours Section (Order 7) */}
            {getSection(6).heading && (
            <div className="brunch-hours">
              <h3 style={{color: 'var(--verde-heading)'}}>{getSection(6).heading}</h3>
              {getSection(6).content?.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className='text-[#948E84] text-center mb-2' dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
            )}

            {/* Reservation CTA (Order 8) */}
            {getSection(7).ctaLink && getSection(7).ctaText && (
            <div className="button-center">
              <Link
                href={getSection(7).ctaLink!}
                className="text-[#948E84]"
                target="_blank"
              >
                {getSection(7).ctaText}
              </Link>
            </div>
            )}

            {/* Menu Section (Order 9) */}
            {getSection(8).heading && (
            <div className="brunch-menu-section">
              <h3><span className='text-[#948E84]'>{getSection(8).heading}</span></h3>
              {getSection(8).ctaLink && getSection(8).ctaText && (
              <div className="button-center">
                <Link href={getSection(8).ctaLink!} className="text-[#948E84]">
                  {getSection(8).ctaText}
                </Link>
              </div>
              )}
            </div>
            )}
          </div>
        </section>

        {/* Index Navigation */}
        <nav className="index-nav overlay">
          <div className="index-nav-inner">
            <a href="#brunch-banner" className="index-nav-item active">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Brunch Banner</span></div>
            </a>
            <a href="#miami-brunch-content" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Verde NYC Brunch</span></div>
            </a>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
