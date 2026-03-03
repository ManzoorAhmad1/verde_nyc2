'use client';

import { useState, useEffect } from 'react';
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
  order?: number;
}

export default function PrivateEventsPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sections, setSections] = useState<PageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState<{ seoTitle?: string; seoDescription?: string; title?: string } | null>(null);

  // Use SEO metadata from CMS
  useSeoMetadata(pageData);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/dinner-party`);
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

  // Helper to find section by order or content match if order is not strict
  const getSection: any = (index: number) => sections[index] || {};

  // Render paragraph text: converts <br/> tags and any email into proper elements
  const renderParagraph = (text: string) => {
    const brParts = text.split(/<br\s*\/?>/gi);
    return brParts.map((part, bi) => {
      const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
      const emailParts = part.split(emailRegex);
      return (
        <span key={bi}>
          {bi > 0 && <br />}
          {emailParts.map((seg, si) =>
            si % 2 === 1 ? (
              <a key={si} href={`mailto:${seg}`} style={{ textDecoration: 'underline' }}>{seg}</a>
            ) : (
              seg
            )
          )}
        </span>
      );
    });
  };
    return (
    <>
      <PageLoader isDataLoaded={!loading} />
      <div className="private-events-page">
        <Header />
        <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

        {/* Hero Gallery Section (Order 1) */}
        {getSection(0).images?.[0] && (
          <section className="private-events-hero">
            <div className="private-events-hero-image">
              <img
                src={getSection(0).images?.[0]}
                alt="Verde NYC private events venue"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </section>
        )}
        <div className="w-full text-center mt-10 px-4 flex flex-col items-center justify-center my-16">
          <h1 className="font-serif text-[28px] tracking-[0.1em]" style={{ color: 'var(--verde-heading)' }}>
            {getSection(0)?.heading || 'Menu'}
          </h1>
          {getSection(0)?.subheading && (
            <p className=" section-text !text-center lg:!text-left lg:!mx-0" style={{ color: 'var(--verde-text)' }}>{getSection(0).subheading}</p>
          )}
        </div>


        {/* Event Menu Section (Order 2) */}
        {getSection(1).heading && (
          <section className="private-events-intro mb-6">
            <div className="private-events-intro-content">
              <h2 className="section-heading font-normal" style={{ color: 'var(--verde-heading)' }}>
                {getSection(1).heading}
                {getSection(1).subheading && (
                  <>
                    <br />
                    <span className="section-title mt-2 hide-on-mobile block">{getSection(1).subheading}</span>
                  </>
                )}
              </h2>

              {getSection(1).content?.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="section-text !text-center lg:!text-left lg:!mx-0" style={{ color: 'var(--verde-text)' }}>
                  {renderParagraph(paragraph)}
                </p>
              ))}

              {getSection(1).ctaLink && (
                <div className="private-events-buttons">
                  <a href={getSection(1).ctaLink} target="_blank" rel="noopener noreferrer" className="private-events-button">
                    {getSection(1).ctaText || 'INQUIRE ABOUT EVENTS'}
                  </a>
                  <a href={getSection(1).ctaLink2 || "tel:+16464068763"} target="_blank" rel="noopener noreferrer" className="private-events-button">
                    {getSection(1).ctaText2 || 'CALL US'}
                  </a>
                </div>
              )}


            </div>
          </section>
        )}

        {/* Indoor/Outdoor Section */}
        <section className="private-events-spaces max-w-[95vw] md:max-w-[85vw] lg:max-w-[75vw] xl:max-w-[1200px] mx-auto px-4 pb-16">

          {/* Additional Space 1 (Was Order 7, now index 2 since others were deleted) */}
          {getSection(2)?.heading && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center mb-10 lg:mb-0">
              <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
                <h2 className="section-heading font-normal" style={{ color: 'var(--verde-heading)', marginBottom: '24px' }}>{getSection(2).heading}</h2>
                <p className="section-text !text-center lg:!text-left lg:!mx-0" style={{ color: 'var(--verde-text)' }}>{getSection(2).content}</p>
              </div>
              <div className="order-1 lg:order-2 w-full relative aspect-[16/9] overflow-hidden">
                <img
                  src={getSection(2).images?.[0] || ''}
                  alt={getSection(2).heading || 'VIP Dining'}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Additional Space 2 (Was Order 8, now index 3) */}
          {getSection(3)?.heading && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center mb-0 mt-4 lg:mt-0">
              <div className="order-1 lg:order-1 w-full relative aspect-[16/9] overflow-hidden">
                <img
                  src={getSection(3).images?.[0] || ''}
                  alt={getSection(3).heading || 'Bar'}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left">
                <h2 className="section-heading font-normal" style={{ color: 'var(--verde-heading)', marginBottom: '24px' }}>{getSection(3).heading}</h2>
                <p className="section-text !text-center lg:!text-left lg:!mx-0" style={{ color: 'var(--verde-text)' }}>{getSection(3).content}</p>
              </div>
            </div>
          )}
        </section>
        {/* Index Navigation */}
        <nav className="private-events-index-nav">
          <div className="private-events-index-nav-inner">
            <a href="#" className="private-events-nav-item active">
              <div className="private-events-nav-indicator"></div>
              <div className="private-events-nav-text"><span>Event Gallery</span></div>
            </a>
            <a href="#event-menu-miami" className="private-events-nav-item">
              <div className="private-events-nav-indicator"></div>
              <div className="private-events-nav-text"><span>Event Planning</span></div>
            </a>
            <a href="#mila-indoor-outdoor" className="private-events-nav-item">
              <div className="private-events-nav-indicator"></div>
              <div className="private-events-nav-text"><span>Event Spaces</span></div>
            </a>
            <a href="#private-events-venues" className="private-events-nav-item">
              <div className="private-events-nav-indicator"></div>
              <div className="private-events-nav-text"><span>Venue Options</span></div>
            </a>
          </div>
        </nav>

        <Footer />
      </div>
    </>
  );
}
