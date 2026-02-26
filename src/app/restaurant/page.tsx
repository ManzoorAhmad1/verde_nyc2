'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

export default function RestaurantPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [heroSection, setHeroSection] = useState<PageSection | null>(null);
  const [philosophySection, setPhilosophySection] = useState<PageSection | null>(null);
  const [menuSections, setMenuSections] = useState<PageSection[]>([]);
  const [disclaimerSection, setDisclaimerSection] = useState<PageSection | null>(null);
  const [gallerySection, setGallerySection] = useState<PageSection | null>(null);
  const [pageData, setPageData] = useState<{seoTitle?: string; seoDescription?: string; title?: string} | null>(null);

  // Use SEO metadata from CMS
  useSeoMetadata(pageData);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
        const res = await fetch(`${API_URL}/pages/restaurant`);
        if (res.ok) {
          const data = await res.json();
          if (data.page && data.page.sections) {
            const sections = data.page.sections;
            setHeroSection(sections.find((s: PageSection) => s.type === 'hero'));
            setPhilosophySection(sections.find((s: PageSection) => s.type === 'philosophy'));
            
            // Get all menu sections (type: 'menu') sorted by order
            const menus = sections.filter((s: PageSection) => s.type === 'menu')
              .sort((a: PageSection, b: PageSection) => (a.order || 0) - (b.order || 0));
            setMenuSections(menus);
            
            setDisclaimerSection(sections.find((s: PageSection) => s.heading === 'Disclaimer'));
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

  const menuTabs = menuSections.map(section => section.heading?.toUpperCase() || '');

  return (
    <>
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main className="restaurant-page">
        {/* Gallery Section - Hero */}
        <section id="restaurant-gallery" className="restaurant-gallery-section" style={{ height: 'auto', minHeight: '80vh' }}>
          <div className="gallery-slideshow relative w-full h-[80vh] md:h-[90vh]">
            <Image
              priority
              src={heroSection?.images?.[0] || heroSection?.images?.[0] || "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8442.jpg"}
              alt="Verde NYC Restaurant"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="our-philosophy-mila" className="philosophy-section">
          <div className="parallax-background texture-bg">
            <Image
              src={philosophySection?.images?.[0] || "https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"}
              alt="verde-nyc-texture"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="philosophy-content">
            <h1 style={{color: 'var(--verde-heading)'}}><em>{philosophySection?.heading || "A Yeeels Group Signature Destination"}</em></h1>
            <h1 style={{color: 'var(--verde-heading)'}}>{philosophySection?.subheading || "Verde NYC — Where Culinary Mastery Meets Celebration"}</h1>
            
            <div className="philosophy-text" style={{color: 'var(--verde-text)'}}>
              <p>From the glamorous avenues of Paris to the sun-kissed shores of Saint-Tropez, from the sophisticated skyline of Dubai to the vibrant pulse of Manhattan—the Yeeels Group has redefined festive dining across four continents. At <Link href="https://verde-nyc.com/">Verde NYC</Link>, this legacy of excellence finds its newest expression in an unforgettable culinary journey through Mediterranean and Asian flavors.</p>
              <p>Our award-winning culinary team sources the finest ingredients from trusted purveyors across the globe—line-caught fish from Japanese waters, premium wagyu from Kagoshima Prefecture, seasonal vegetables from local farms, and artisanal products from the Mediterranean coast. Each dish is a masterpiece of technique and creativity, honoring tradition while embracing innovation.</p>
              <p>Whether you join us for an intimate lunch overlooking the Meatpacking District or an electrifying evening of dining and entertainment, Verde NYC transforms every meal into a celebration. Dishes are designed for sharing, encouraging connection and conversation in an atmosphere that evolves from refined sophistication to vibrant festivity as the night unfolds.</p>
            </div>

            <div className="button-center">
              <Link 
                href={philosophySection?.ctaLink || "https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"}
                className="btn btn-primary text-[#8E402F] border-[#8E402F] hover:bg-[#8E402F] hover:text-white"
                target="_blank"
              >
                {philosophySection?.ctaText || "RESERVE YOUR TABLE"}
              </Link>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu-page" className="menu-section">
          <h1 style={{ textAlign: 'center' }}>MENU</h1>

          {/* Tab Controls */}
          {menuTabs.length > 0 && (
          <div className="menu-tabs">
            <div className="tab-controls">
              {menuTabs.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content - FROM CMS */}
            <div className="tab-content">
              {menuSections.map((menuSection, index) => (
                activeTab === index && (
                  <div key={index} className="tab-panel">
                    {menuSection.subheading && (
                      <h3 style={{ textAlign: 'center' }}>{menuSection.subheading.toLowerCase()}</h3>
                    )}
                    {menuSection.heading && (
                      <h2 style={{ textAlign: 'center' }}>{menuSection.heading}</h2>
                    )}
                    
                    {menuSection.content && (
                      <div dangerouslySetInnerHTML={{ __html: menuSection.content }} />
                    )}
                    
                    {menuSection.ctaLink && menuSection.ctaText && (
                      <div className="button-center">
                        <Link 
                          href={menuSection.ctaLink}
                          className="btn"
                          target="_blank"
                        >
                          {menuSection.ctaText}
                        </Link>
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
          )}
        </section>

        {/* Disclaimer Section - FROM CMS */}
        {disclaimerSection && disclaimerSection.content && (
        <section id="gf-v-disclaimer" className="disclaimer-section">
          <hr className="section-divider" />
          <div className="disclaimer-content">
            <div dangerouslySetInnerHTML={{ __html: disclaimerSection.content }} />
          </div>
          <hr className="section-divider" />
        </section>
        )}

        {/* Food Gallery Section - FROM CMS */}
        <section id="food-gallery" className="food-gallery-section">
          <div className="gallery-grid">
            {(gallerySection?.images && gallerySection.images.length > 0 ? gallerySection.images : [
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/verde-lifestyle-1.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8444.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/mixology-cocktails.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8455.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/Decadence-verde-dubai-0693.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8460.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/verde_images/verde-lifestyle-8.jpg",
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8527.jpg"
            ]).map((img, index) => (
              <div key={index} className="gallery-item">
                <Image
                  src={img}
                  alt={`Verde NYC Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Index Navigation */}
        <nav className="index-nav overlay">
          <div className="index-nav-inner">
            <a href="#restaurant-gallery" className="index-nav-item active">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>New Gallery</span></div>
            </a>
            <a href="#our-philosophy-mila" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>our philosophy</span></div>
            </a>
            <a href="#menu-page" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Menu</span></div>
            </a>
            <a href="#gf-v-disclaimer" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>GF / V disclaimer</span></div>
            </a>
            <a href="#food-gallery" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>food gallery</span></div>
            </a>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
