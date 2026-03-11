'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

interface PageSection {
  type: string;
  heading?: string;
  subheading?: string;
  content?: string;
  images?: string[];
  mobileImages?: string[];
  ctaLink?: string;
  ctaText?: string;
  order?: number;
}

interface Props {
  pageData: any;
}

export default function BarClient({ pageData }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(3);

  const sections: PageSection[] = (pageData?.page?.sections || []).sort(
    (a: PageSection, b: PageSection) => (a.order || 0) - (b.order || 0)
  );

  const getSection = (index: number): any => sections[index] || {};
  const images = getSection(1).images || [];

  // Responsive slides count
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSlidesVisible(1);
      else if (window.innerWidth < 1024) setSlidesVisible(2);
      else setSlidesVisible(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.max(0, images.length - slidesVisible) : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= images.length - slidesVisible ? 0 : prev + 1));
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
                className="page-hero-img"
              />
            </div>
            <div className="banner-content w-full">
              <h2 className='hero-title'>{getSection(0).heading}</h2>
            </div>
          </section>
        )}

        {/* Brunch Content Section */}
        <section id="miami-brunch-content" className="brunch-content-section">
          <div className="content-wrapper">

            {/* Brunch Intro (Order 3) */}
            {getSection(2).heading && (
              <div className="brunch-intro">
                <h2 className='py-4 mt-4' style={{ color: 'var(--verde-heading)' }}>{getSection(2).heading}</h2>
                {getSection(2).content?.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx} className='text-[#948E84] text-[14px] text-center mb-4' dangerouslySetInnerHTML={{ __html: paragraph }} />
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
                  <p className='!text-[#948E84] text-[14px] text-justify'>{getSection(3).content}</p>
                </div>
              </div>
            )}

            <hr className="section-divider" />

            {/* Description Text (Order 5) */}
            {getSection(4).content && (
              <div className="brunch-description">
                {getSection(4).content!.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx} className='text-[#948E84] text-[14px] text-justify mb-4' dangerouslySetInnerHTML={{ __html: paragraph }} />
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
                    <p key={idx} className='!text-[#948E84] text-[14px] text-justify mb-4' dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Grid (Order 2) */}
            {images.length > 0 && (
              <section className="w-full pt-10 pb-20">
                <div className="w-full px-[4px] md:px-6 lg:max-w-[1400px] lg:mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-4">
                    {images.map((imageSrc:any, index:any) => (
                      <div key={index} className="relative aspect-square w-full overflow-hidden bg-gray-100">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={imageSrc}
                          alt={`Verde NYC Bar Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
