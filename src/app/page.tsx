'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const introRef: any = useRef(null);
  const eudaimoniaRef: any = useRef(null);

  // Optimized parallax scroll handler for smooth performance
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;

        // Continuous parallax for intro section
        if (introRef.current) {
          const bgWrapper = introRef.current.querySelector('.intro-bg-wrapper');
          if (bgWrapper) {
            const sectionTop = introRef.current.offsetTop;
            const parallaxOffset = (scrollPosition - sectionTop) * 0.3;
            bgWrapper.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
          }
          
          // Move the entire section down as user scrolls
          const sectionTop = introRef.current.offsetTop;
          const scrollProgress = Math.max(0, scrollPosition - (sectionTop - 800));
          const sectionOffset = scrollProgress * 0.4;
          introRef.current.style.transform = `translate3d(0, ${sectionOffset}px, 0)`;
        }

        // Continuous parallax for Eudaimonia section
        if (eudaimoniaRef.current) {
          const sectionTop = eudaimoniaRef.current.offsetTop;
          const parallaxOffset = (scrollPosition - sectionTop) * 0.25;
          eudaimoniaRef.current.style.backgroundPositionY = `${parallaxOffset}px`;
        }

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <Header />

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Video */}
        <section id="opening-video" className="hero-section">
          <div className="hero-video-container">
            <img
              loading="eager" decoding="async" fetchPriority="high" src="/images/_40A8461.jpg"
              alt="Verde NYC exterior at night"
              className="hero-image-bg"
            />
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-indicator-line" />
          </div>
        </section>

        {/* Verde NYC Venues Section */}
        <section id="mila-venues" className="section venue-section-smooth" style={{
          backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png)',
        }}>
          <div className="w-full mt-20">
            <h3 className="section-title font-bold">A YEEELS GROUP DESTINATION — Paris | Saint-Tropez | Dubai | Sardinia | New York</h3>
            <h2 className="section-heading font-normal">Where Parisian Craft Meets New York Soul</h2>

            <p className="section-text mb-8">
              Verde NYC is the latest jewel in the Yeeels Group crown—an international hospitality collective celebrated for curating unforgettable culinary destinations across Europe, the Middle East, and now, in the heart of Manhattan.
            </p>
            <p className="section-text mb-8">
              Verde brings Parisian soul to New York's vibrant streets. Here, French culinary tradition is reimagined with contemporary elegance—each dish reflects precision, passion, and the art of celebration.
            </p>
            <p className="section-text mb-8">
              Step into a world of intimate charm and metropolitan energy, where every moment is crafted for connection and savor. From thoughtfully designed tasting journeys to vibrant lounge evenings and exclusive dining experiences, Verde invites you to dine beyond the expected.
            </p>
            <p className="section-text mb-16 italic">
              Paris on the plate. New York in the room
            </p>

            {/* Venue Cards Grid */}
            <div className="venue-grid mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">

              {/* Verde Restaurant */}
              <div className="venue-card-smooth relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="/images/_40A8416.jpg"
                  alt="Verde NYC Restaurant"
                  className="venue-image-smooth w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="venue-overlay-smooth absolute inset-0 flex flex-col items-center justify-center 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-colors duration-500 ease-out px-8">
                  <h3 className="text-white section-heading font-normal text-center mb-2">
                    VERDE RESTAURANT
                  </h3>
                  <p className="text-white text-sm text-center max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    The distinctively curated rooftop aims to take guests on a culinary journey through the shores of the Mediterranean.
                  </p>
                </div>
              </div>

              {/* Verde Omakase */}
              <Link href="/milaomakase" className="venue-card-smooth relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="/images/_40A8416.jpg"
                  alt="Verde NYC Omakase"
                  className="venue-image-smooth absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="venue-overlay-smooth absolute inset-0 flex flex-col items-center justify-center 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-colors duration-500 ease-out px-8">
                  <h3 className="text-white section-heading font-normal text-center mb-2">
                    Verdy Party's
                  </h3>
                  <p className="text-white text-sm text-center max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Bespoke private events from intimate gatherings to grand celebrations. World-class hospitality experience for up to 400 guests with Mediterranean elegance.
                  </p>
                </div>
              </Link>

              {/* Verde Lounge */}
              <Link href="/milalounge" className="venue-card-smooth relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="/images/_40A8417.jpg"
                  alt="Verde NYC Lounge"
                  className="venue-image-smooth absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="venue-overlay-smooth absolute inset-0 flex flex-col items-center justify-center 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-colors duration-500 ease-out px-8">
                  <h3 className="text-white section-heading font-normal text-center mb-2">
                    Verde LouPange
                  </h3>
                  <p className="text-white text-sm text-center max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Where Parisian craft meets New York soul. Intimate charm and metropolitan energy for vibrant lounge evenings and thoughtfully designed experiences.
                  </p>
                </div>
              </Link>

              {/* Verde Members Club */}
              <Link href="/membersclub" className="venue-card-smooth relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="/images/_40A8418.jpg"
                  alt="Verde Members Club"
                  className="venue-image-smooth absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="venue-overlay-smooth absolute inset-0 flex flex-col items-center justify-center 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-colors duration-500 ease-out px-8">
                  <h3 className="text-white section-heading font-normal text-center mb-2">
                   Verdy Bar
                  </h3>
                  <p className="text-white text-sm text-center max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Sunday Brunch experience featuring chef-curated Mediterranean stations, live music, and the festive energy from noon to 5pm on our sun-drenched rooftop.
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section
          ref={introRef}
          id="introduction"
          className="section intro-smooth-section"
          style={{ marginTop: '-100px' }}
        >
          <div className="intro-bg-wrapper"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4" style={{ zIndex: 10 }}>
            <h2 className="w-full section-heading text-white intro-text-animate">
              Born in Paris. Celebrated in Saint-Tropez. Elevated in Dubai. <br />
              Now, Verde arrives in New York—bringing two decades of Mediterranean excellence to the Meatpacking District.
            </h2>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve-mila" className="reserve-section">
          <div className="max-w-3xl mx-auto">
            <h3 className='text-[var(--verde-text)]'>A Global Legacy of Culinary Excellence</h3>
            <p className='text-[var(--verde-text)]'>
              The Yeeels Group has spent over a decade perfecting the art of festive dining across Europe and the Middle East. From the sophisticated elegance of Verde Paris on Avenue George V to the sun-drenched glamour of our Saint-Tropez beach club, from the cosmopolitan energy of Verde Dubai to the timeless charm of our Italian venues—each destination embodies our commitment to exceptional experiences. Now, Verde NYC brings this celebrated legacy to America&apos;s most dynamic city. In the heart of the Meatpacking District, discover a sanctuary where Mediterranean cuisine, innovative mixology, and world-class entertainment converge to create moments that transcend the ordinary.
            </p>
            <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="btn btn-primary border border-[#8e402f] text-[#8e402f] hover:bg-[#8e402f] hover:text-white">
              reserve your experience
            </Link>
          </div>
        </section>

        {/* Eudaimonia Section */}
        <section
          id="eudaimonia"
          ref={eudaimoniaRef}

          className="eudaimonia-section"
          style={{
            backgroundImage: 'url(/images/_40A8421.jpg)',
          }}
        >
          <div className="relative z-10">
            <div className="eudaimonia-content text-white">
              <hr className="hr-line" />
              <h3 >The Art of Festive Dining</h3>
              <p className='text-white'>
                At the heart of the Yeeels Group philosophy lies a simple yet profound belief: dining should be transformative. From our flagship venues in Paris to the shores of the French Riviera, from the glittering skyline of Dubai to the vibrant energy of Manhattan, we create spaces where gastronomy becomes theatre, where every evening unfolds as a unique celebration. Verde NYC continues this tradition, offering an immersive experience where Mediterranean sophistication meets New York&apos;s electric energy. Here, exceptional cuisine, innovative cocktails, and curated entertainment converge to create memories that linger long after the evening ends.
              </p>
              <hr className="hr-line" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          id="our-philosophy"
          className="philosophy-section"
          style={{
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png)',
          }}
        >
          <div className="relative z-10 text-white">
            <h2 className="section-heading">Our Philosophy</h2>
            <div className="philosophy-grid">
              <p style={{ color: 'var(--verde-text)' }}>
                The Yeeels Group was founded on a singular vision: to become the global leader in high-end festive dining. This vision has guided our expansion from Paris to Saint-Tropez, Dubai to New York, always with the same unwavering commitment to excellence. At Verde NYC, this philosophy manifests in every detail—from the carefully sourced Mediterranean ingredients to the bespoke interior design that blends reclaimed woods, natural stone, and artisanal textiles imported from our European ateliers.
              </p>
              <p style={{ color: 'var(--verde-text)' }}>
                Our three pillars—Food, Tribe, and Stories—define everything we do. Creative and passionate cuisine designed for sharing. A culture of collaboration, respect, and operational excellence. High-energy, immersive experiences that transform dining into celebration. These values have made us leaders across four countries and nine venues, and they now come to life in the heart of Manhattan&apos;s Meatpacking District.
              </p>
            </div>
          </div>
        </section>

        {/* Art Culture Section */}
        <section id="art-culture-mila" className="art-section">
          <div className="art-image">
            <img
              loading="lazy" decoding="async" src="/images/_40A8425.jpg"
              alt="Verde NYC Art Culture"
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="art-content" style={{ color: 'var(--verde-text)' }}>
            <h2 style={{ color: 'var(--verde-heading)' }}>ART & Culture</h2>
            <p>
              The Yeeels Group has always believed that exceptional dining spaces require exceptional artistry. Across our venues in France, Italy, UAE, and the United States, we collaborate with visionary artists, sculptors, ceramists, and designers to create environments that inspire and transport.
            </p>
            <p>
              At Verde NYC, Japanese Wabi-Sabi philosophy meets Mediterranean warmth—celebrating the beauty of imperfection and the integrity of natural materials. Hand-selected artworks, bespoke installations, and carefully curated design elements create a sanctuary where every corner tells a story, every surface invites touch, and every moment becomes a memory.
            </p>
            <p>For collaboration inquiries, contact us at pr@yeeels.com</p>
            <Link href="/contact" className="btn btn-primary mt-6">
              contact us
            </Link>
          </div>
        </section>

        {/* Instagram Section */}
        <section id="insta" className="section py-16 px-4 md:px-8 relative bg-[#f3ede2]" style={{ zIndex: 50 }}>
          <div className="max-w-7xl mx-auto">
            <h3 className="font-sm text-center text-black/50 mb-10 tracking-[0.4em] text-[20px]">
              FOLLOW US ON INSTAGRAM{' '}
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @VERDEY_NYC
              </a>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8425.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8432.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8434.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8436.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8439.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8441.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8528.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" decoding="async" src="/images/_40A8531.jpg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
