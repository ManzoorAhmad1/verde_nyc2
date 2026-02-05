'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
            <iframe
              className="hero-video-bg"
              src="https://www.youtube.com/embed/HGBXHkrPQX0?autoplay=1&mute=1&loop=1&playlist=HGBXHkrPQX0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                minWidth: '177.77vh',
                transform: 'translate(-50%, -50%)',
                border: 'none',
              }}
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
            <h3 className="section-title font-bold">#1 HIGHEST-GROSSING Independent Restaurant in the U.S. - Restaurant Business</h3>
            <h2 className="section-heading font-normal">A culinary journey through the Mediterranean &amp; Asia</h2>

            <p className="section-text mb-8">
              Verde NYC is a multi-venue concept, aiming to transport guests on a culinary journey through the shores of
              the Mediterranean and Japan, while creating a visionary expression of flavorful MediterrAsian cuisine.
            </p>
            <p className="section-text mb-16">
              Verde NYC&apos;s transportive venues include four concepts, starting with the rooftop restaurant, which elevates the
              culinary and exclusive nightlife in the heart of New York City.
            </p>

            {/* Venue Cards Grid */}
            <div className="venue-grid mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Mila Restaurant */}
              <div className="relative w-full aspect-[16/9] overflow-hidden group">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/31ec4b05-6b9d-4014-81bd-4baefcddb28f/DSC_4013.jpg"
                  alt="Mila restaurant"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center 
                        bg-black/30 
                        group-hover:bg-[#8B1E1E]/80 
                        transition-all duration-500 ease-out">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">
                    Mila restaurant
                  </h3>
                </div>
              </div>

              {/* Verde Omakase */}
              <Link href="/milaomakase" className="relative w-full aspect-[16/9] overflow-hidden group">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/067e5ee0-76ff-453f-9a16-954997681fc9/AlexTphoto.com+-+Mila+Omakase-01-HighRes.jpg"
                  alt="Verde NYC Omakase"
                  fill
                  className="object-cover"
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
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/8f672c29-bd96-4251-9c59-6df2e3e76e52/AlexTphoto.com+-+Mila+Lounge-04-HighRes.jpg"
                  alt="Verde NYC Lounge"
                  fill
                  className="object-cover"
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
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/5bc6c87d-cfad-4939-a20f-044ab02805a3/MM+Club+1.jpg"
                  alt="MM Members Club"
                  fill
                  className="object-cover"
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
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/4123ed8a-2100-4876-a12b-4a146be4c408/MILA.jpg)',
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
              From Paris to Saint-Tropez, Dubai to New York – <br />
              Verde brings its signature festive spirit to the Meatpacking District.
            </h2>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve-mila" className="reserve-section">
          <div className="max-w-3xl mx-auto">
            <h3 className='text-[var(--verde-text)]'>Mediterranean Excellence Meets New York Energy</h3>
            <p className='text-[var(--verde-text)]'>
              This Fall, Verde, the iconic international restaurant & beach club brand from Paris, Saint-Tropez, and Dubai makes its much-anticipated debut in New York City. Nestled in the heart of the Meatpacking District, Verde NYC brings its signature festive spirit, refined Mediterranean cuisine, and world-renowned atmosphere to the vibrant pulse of New York. Celebrated across the globe for its unforgettable dining destinations, Verde blends culinary excellence, elevated ambiance, and a distinct lifestyle experience. From glamorous nights in Paris to sun-soaked days in Saint-Tropez, Verde is more than a restaurant—it&apos;s a global phenomenon.
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
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/e528ea05-1d1f-4146-a2b9-80fb763bde2c/LONGEVITY-1-edit.jpg)',
          }}
        >
          <div className="section-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
          <div className="relative z-10">
            <div className="eudaimonia-content text-white"
              ref={EudaimoniaRef}

            >
              <hr className="hr-line" />
              <h3>A Place to Dine, Dance, and Indulge</h3>
              <p>
                Verde NYC invites you to step into a world where elegance, flavor, and celebration come together. Drawing inspiration from the elegance of Paris and the vibrant spirit of the Mediterranean, every detail at Verde is designed to transport you. Experience culinary masterpieces crafted with creativity and precision, surrounded by an atmosphere that pulses with energy and sophistication. Whether it&apos;s an intimate dinner or a night of celebration, Verde NYC creates unforgettable moments where style meets substance.
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
                Envisioned and crafted by the founders, Gregory Galy and Marine Giron-Galy through their travels,
                experiences and thirst for discovery and adventure, Verde NYC&apos;s design has been brought to life by
                interior designer Olya Volkova. She combined traditional and noble materials such as reclaimed wood,
                unpolished floors, untainted stone, handmade linen and cotton fabrics to create a serene yet luxurious ambiance.
              </p>
              <p style={{color: 'var(--verde-text)'}}>
                Verde NYC&apos;s aesthetic celebrates Mediterranean elegance with a contemporary twist, embracing the beauty of natural materials and organic forms. Sculptures, paintings and art made of metal, clay and wood are placed throughout the restaurant to further enhance the theme and aesthetic, curating a sanctuary in the heart of New York.
              </p>
            </div>
          </div>
        </section>

        {/* Art Culture Section */}
        <section id="art-culture-mila" className="art-section">
          <div className="art-image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/8821ab81-8a28-4bb5-8c68-218c3b31789e/DSC_8759.jpg"
              alt="Verde NYC Art Culture"
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="art-content" style={{color: 'var(--verde-text)'}}>
            <h2 style={{color: 'var(--verde-heading)'}}>ART & Culture</h2>
            <p>
              We are collectors, artisans, and craftsmen, carving a lifestyle dedicated to creating sanctuary spaces
              that transport our guests.
            </p>
            <p>
              The Japanese Wabi-Sabi philosophy and the restaurant&apos;s aesthetic reflect imperfect beauty and the
              ingenuous integrity of natural objects and processes. We are proud to collaborate with talented artists,
              painters, potters and ceramists worldwide.
            </p>
            <p>For any collaboration inquiries, email us at pr@rivieradininggroup.com</p>
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
                href="https://www.instagram.com/milagroup_miami/"
                target="_blank"
                className="underline"
              >
                @MILAgroup_miami
              </a>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <a
                href="https://www.instagram.com/milagroup_miami/"
                target="_blank"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769652316932-M19U2Q5ET3KUZWB85V7W/image-asset.jpeg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/milagroup_miami/"
                target="_blank"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769460060172-DCS2WFURNDZVPYX6X3DA/image-asset.jpeg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/milagroup_miami/"
                target="_blank"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769215038975-SOI0H222HTEGLNGXK001/image-asset.jpeg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/milagroup_miami/"
                target="_blank"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769042629602-0LTVL48G0ZIYAE0HDQFD/image-asset.jpeg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/milagroup_miami/"
                target="_blank"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768591723858-OXU62MEW8MYWI6CI9H08/image-asset.jpeg"
                  alt="Instagram post"
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/milagroup_miami/"
                target="_blank"
                className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768332668589-FL0J0JD5M6SE026TS0T2/image-asset.jpeg"
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
