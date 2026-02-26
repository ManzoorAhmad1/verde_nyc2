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
  order?: number;
}

export default function PrivateEventsPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sections, setSections] = useState<PageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState<{seoTitle?: string; seoDescription?: string; title?: string} | null>(null);

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
  const getSection :any= (index: number) => sections[index] || {};

  return (
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
          <h1 style={{color: 'var(--verde-heading)'}}>
            <em>{getSection(1).heading}</em>
            {getSection(1).subheading && (
              <>
                <br />
                {getSection(1).subheading}
              </>
            )}
          </h1>
          
          {getSection(1).content?.split('\n\n').map((paragraph: string, idx: number) => (
            <p key={idx} className="private-events-description" style={{color: 'var(--verde-text)'}}>
              {paragraph.includes('@') ? (
                <>
                  {paragraph.split('events@yeeels.com')[0]}
                  <a href="mailto:events@yeeels.com">events@yeeels.com</a>
                  {paragraph.split('events@yeeels.com')[1]}
                </>
              ) : (
                paragraph
              )}
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

          {getSection(8)?.heading && (
          <div className="private-events-brochure">
            <h2 style={{color: 'var(--verde-heading)'}}>{getSection(8).heading}</h2>
            <p style={{color: 'var(--verde-text)'}}>{getSection(8).content}</p>
            {getSection(8).ctaLink && (
            <a href={getSection(8).ctaLink} target="_blank" rel="noopener noreferrer" className="private-events-button">
              {getSection(8).ctaText || 'CONTACT GLOBAL EVENTS'}
            </a>
            )}
          </div>
          )}
        </div>
      </section>
      )}

      {/* Indoor/Outdoor Section */}
      <section className="private-events-spaces">
        {/* Indoor Private Dining (Order 3) */}
        {getSection(2)?.heading && (
        <div className="private-events-grid reverse">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                src={getSection(2).images?.[0] || ''}
                alt={getSection(2).heading || 'Private dining'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>{getSection(2).heading}</h2>
            <p style={{color: 'var(--verde-text)'}}>{getSection(2).content}</p>
          </div>
        </div>
        )}

        {/* Outdoor Event Spaces (Order 4) */}
        {getSection(3)?.heading && (
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                src={getSection(3).images?.[0] || ''}
                alt={getSection(3).heading || 'Outdoor events'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>{getSection(3).heading}</h2>
            <p style={{color: 'var(--verde-text)'}}>{getSection(3).content}</p>
          </div>
        </div>
        )}

        {/* Verde Lounge (Order 5) */}
        {getSection(4)?.heading && (
        <div className="private-events-grid reverse">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                src={getSection(4).images?.[0] || ''}
                alt={getSection(4).heading || 'Lounge'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>{getSection(4).heading}</h2>
            <p style={{color: 'var(--verde-text)'}}>{getSection(4).content}</p>
          </div>
        </div>
        )}

        {/* Private Dining Experience (Order 6) */}
        {getSection(5)?.heading && (
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                src={getSection(5).images?.[0] || ''}
                alt={getSection(5).heading || 'Dining'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>{getSection(5).heading}</h2>
            <p style={{color: 'var(--verde-text)'}}>{getSection(5).content}</p>
          </div>
        </div>
        )}

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
            <h2 style={{color: 'var(--verde-heading)'}}>{getSection(6).heading}</h2>
            <p style={{color: 'var(--verde-text)'}}>{getSection(6).content}</p>
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
            <h2 style={{color: 'var(--verde-heading)'}}>{getSection(7).heading}</h2>
            <p style={{color: 'var(--verde-text)'}}>{getSection(7).content}</p>
          </div>
        </div>
        )}
      </section>

      {/* Types of Events Section */}
      {(getSection(9)?.heading || getSection(10)?.heading) && (
      <section className="private-events-types">
        <div className="private-events-types-content">
          {getSection(9)?.heading && (
            <>
              <h2 style={{color: 'var(--verde-heading)'}}>{getSection(9).heading}</h2>
              {getSection(9).content?.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} style={{color: 'var(--verde-text)'}}>
                  {paragraph.includes('Verde NYC') ? (
                    paragraph.split(/(Verde NYC|exceptional cuisine)/g).map((part: string, i: number) => {
                      if (part === 'Verde NYC') return <Link key={i} href="/">Verde NYC</Link>;
                      if (part === 'exceptional cuisine') return <Link key={i} href="/restaurant">exceptional cuisine</Link>;
                      return part;
                    })
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </>
          )}
          
          {getSection(10)?.heading && (
            <>
              <h2 style={{color: 'var(--verde-heading)'}}>{getSection(10).heading}</h2>
              {getSection(10).content?.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} style={{color: 'var(--verde-text)'}}>
                  {paragraph.includes('events@yeeels.com') ? (
                    <>
                      {paragraph.split('events@yeeels.com')[0]}
                      <a href="mailto:events@yeeels.com"><span style={{ textDecoration: 'underline' }}>events@yeeels.com</span></a>
                      {paragraph.split('events@yeeels.com')[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
              
              {getSection(10).ctaLink && (
              <a href={getSection(10).ctaLink} target="_blank" rel="noopener noreferrer" className="private-events-cta-button">
                {getSection(10).ctaText || 'inquire about your event'}
              </a>
              )}
            </>
          )}
        </div>
      </section>
      )}

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
  );
}
