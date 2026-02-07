'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRef: any = useRef(null);
  const eudaimoniaRef: any = useRef(null)
  const EudaimoniaRef: any = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (eudaimoniaRef.current) {
        const scrollPosition = window.pageYOffset;
        const sectionTop = eudaimoniaRef.current.offsetTop;

        // Calculate how much the background should move (20% of scroll amount)
        const backgroundPosition = (scrollPosition - sectionTop) * 0.2;

        // Apply the transform to the background
        eudaimoniaRef.current.style.backgroundPositionY = `${backgroundPosition}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (EudaimoniaRef.current) {
        const scrollPosition = window.pageYOffset;
        const sectionTop = EudaimoniaRef.current.offsetTop;

        // Calculate how much the background should move (20% of scroll amount)
        const backgroundPosition = (scrollPosition - sectionTop) * 0.2;

        // Apply the transform to the background
        EudaimoniaRef.current.style.backgroundPositionY = `${backgroundPosition}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.pageYOffset;
        const sectionTop = sectionRef.current.offsetTop;

        // Calculate how much the background should move (20% of scroll amount)
        const backgroundPosition = (scrollPosition - sectionTop) * 0.2;

        // Apply the transform to the background
        sectionRef.current.style.backgroundPositionY = `${backgroundPosition}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              loading="eager" decoding="async" fetchPriority="high" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8416.jpg"
              alt="Verde NYC exterior at night"
              className="hero-image-bg"
            />
            <div className="hero-overlay" />
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-indicator-line" />
          </div>
        </section>

        {/* Verde NYC Venues Section */}
        <section id="mila-venues" className="section" style={{
          backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png)',
        }}>
          <div className="w-full mt-20">
            <h3 className="section-title font-bold">A YEEELS GROUP DESTINATION — Paris | Saint-Tropez | Dubai | New York</h3>
            <h2 className="section-heading font-normal">Where Culinary Excellence Meets Celebration</h2>

            <p className="section-text mb-8">
              Verde NYC is the latest jewel in the Yeeels Group crown—an international hospitality collective renowned for creating exceptional living spaces across France, Italy, the UAE, and now the United States. We invite you on an unforgettable journey through Mediterranean and Asian flavors, where every dish tells a story of passion, precision, and artistry.
            </p>
            <p className="section-text mb-16">
              Our New York destination features four distinct experiences, each designed to transport you beyond the ordinary—from our acclaimed rooftop restaurant to intimate omakase encounters, vibrant lounge celebrations, and exclusive members-only spaces.
            </p>

            {/* Venue Cards Grid */}
            <div className="venue-grid mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Verde Restaurant */}
              <div className="relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8414.jpg"
                  alt="Verde NYC Restaurant"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center 
                        bg-black/30 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-all duration-500 ease-out">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">
                    VERDE RESTAURANT
                  </h3>
                </div>
              </div>

              {/* Verde Omakase */}
              <Link href="/milaomakase" className="relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8416.jpg"
                  alt="Verde NYC Omakase"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center 
                        bg-black/30 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-all duration-500 ease-out">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">
                    verde omakase
                  </h3>
                </div>
              </Link>

              {/* Verde Lounge */}
              <Link href="/milalounge" className="relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8417.jpg"
                  alt="Verde NYC Lounge"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center 
                        bg-black/30 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-all duration-500 ease-out">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">
                    verde lounge
                  </h3>
                </div>
              </Link>

              {/* MM Members Club */}
              <Link href="/membersclub" className="relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8418.jpg"
                  alt="MM Members Club"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center 
                        bg-black/30 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-all duration-500 ease-out">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center uppercase">
                    mm
                  </h3>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section
          ref={sectionRef}
          id="introduction"
          className="section section-with-bg"
          style={{
            backgroundImage: 'url(https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8419.jpg)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="section-overlay" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="w-full section-heading text-white">
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
            backgroundImage: 'url(https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8421.jpg)',
          }}
        >
          <div className="section-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
          <div className="relative z-10">
            <div className="eudaimonia-content text-white"
              ref={EudaimoniaRef}

            >
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
              <p style={{color: 'var(--verde-text)'}}>
                The Yeeels Group was founded on a singular vision: to become the global leader in high-end festive dining. This vision has guided our expansion from Paris to Saint-Tropez, Dubai to New York, always with the same unwavering commitment to excellence. At Verde NYC, this philosophy manifests in every detail—from the carefully sourced Mediterranean ingredients to the bespoke interior design that blends reclaimed woods, natural stone, and artisanal textiles imported from our European ateliers.
              </p>
              <p style={{color: 'var(--verde-text)'}}>
                Our three pillars—Food, Tribe, and Stories—define everything we do. Creative and passionate cuisine designed for sharing. A culture of collaboration, respect, and operational excellence. High-energy, immersive experiences that transform dining into celebration. These values have made us leaders across four countries and nine venues, and they now come to life in the heart of Manhattan&apos;s Meatpacking District.
              </p>
            </div>
          </div>
        </section>

        {/* Art Culture Section */}
        <section id="art-culture-mila" className="art-section">
          <div className="art-image">
            <img
              loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8424.jpg"
              alt="Verde NYC Art Culture"
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="art-content" style={{color: 'var(--verde-text)'}}>
            <h2 style={{color: 'var(--verde-heading)'}}>ART & Culture</h2>
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
        <section id="insta" className="section  py-16 px-4 md:px-8">
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
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8425.jpg"
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
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8432.jpg"
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
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8434.jpg"
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
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8436.jpg"
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
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8439.jpg"
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
                  loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8441.jpg"
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
