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

        {/* Event Menu Section (Order 2) */}
        {getSection(1).heading && (
          <section className="private-events-intro">
            <div className="private-events-intro-content">
              <h2 style={{ color: 'var(--verde-heading)' }}>
                {getSection(1).heading}
                {getSection(1).subheading && (
                  <>
                    <br />
                    {getSection(1).subheading}
                  </>
                )}
              </h2>

              {getSection(1).content?.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="private-events-description" style={{ color: 'var(--verde-text)' }}>
                  {renderParagraph(paragraph)}
                </p>
              ))}

              {getSection(1).ctaLink && (
                <div className="private-events-buttons">
                  <a href={getSection(1).ctaLink} target="_blank" rel="noopener noreferrer" className="private-events-button">
                    {getSection(1).ctaText || 'INQUIRE ABOUT EVENTS'}
                  </a>
                  <a href="tel:+16464068763" target="_blank" rel="noopener noreferrer" className="private-events-button">
                    CALL US
                  </a>
                </div>
              )}

        
            </div>
          </section>
        )}

        {/* Indoor/Outdoor Section */}
        <section className="private-events-spaces">
         
          {/* Additional Space 1 (Order 7) */}
          {getSection(6)?.heading && (
            <div className="private-events-grid reverse">
              <div className="private-events-image-col">
                <div className="private-events-image-wrapper">
                  <img
                    src={getSection(6).images?.[0] || ''}
                    alt={getSection(6).heading || 'VIP Dining'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="private-events-text-col">
                <h2 style={{ color: 'var(--verde-heading)' }}>{getSection(6).heading}</h2>
                <p style={{ color: 'var(--verde-text)' }}>{getSection(6).content}</p>
              </div>
            </div>
          )}

          {/* Additional Space 2 (Order 8) */}
          {getSection(7)?.heading && (
            <div className="private-events-grid">
              <div className="private-events-image-col">
                <div className="private-events-image-wrapper">
                  <img
                    src={getSection(7).images?.[0] || ''}
                    alt={getSection(7).heading || 'Bar'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="private-events-text-col">
                <h2 style={{ color: 'var(--verde-heading)' }}>{getSection(7).heading}</h2>
                <p style={{ color: 'var(--verde-text)' }}>{getSection(7).content}</p>
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
