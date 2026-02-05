'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function ValentinesDayPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <Header />

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="valentines-page">
        {/* Valentine's Banner Section */}
        <section id="valentines-banner" className="valentines-banner-section">
          <div className="parallax-background">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/ee28f80c-3b8f-4dea-b7bb-a9a0baf03a81/MILA_Valentine%27s+Day+2026_121825_Web+Popup.jpg"
              alt="Verde NYC Valentine's Day 2026"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
              priority
            />
          </div>
          <div className="banner-content">
            <h1 style={{ textAlign: 'center', color: '#fff' }}>Valentine&apos;s Day Dinner in New York</h1>
            <h2 style={{ textAlign: 'center', color: '#ffffff' }}>&apos;Taste of Love&apos;</h2>
          </div>
        </section>

        {/* Valentine's Content Section */}
        <section id="valentines-content" className="valentines-content-section">
          <div className="parallax-background texture-bg">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"
              alt="mila-miami-texture"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            />
          </div>
          <div className="content-wrapper text-[#A5A39A]">
            {/* Introduction */}
            <div className="valentines-intro">
              <strong className='text-[#3A363A]'>Celebrate Valentine&apos;s Day</strong>
              <p className='text-xs tracking-[0.3em] text-[#2D2C2A]'>Saturday, February 14th</p>
              <p className='text-center text-xs border-b border-white pb-14 rounded-none' >
                Let every shared moment taste a little sweeter. Slow down, indulge deeply, and celebrate the &apos;Taste of Love&apos; with a specialty prix fixe menu, crafted for connection and desire. Reserve your evening and let every moment linger a little longer.
              </p>

            </div>


            {/* Verde Restaurant Section */}
            <div className="venue-section">
              <h2 style={{ textAlign: 'center' }}>
                <Link href="/restaurant">VERDE RESTAURANT</Link>
              </h2>

              <div className="venue-image-wrapper max-w-2xl mx-auto">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/d4a37912-2e15-4d5b-8888-0d0e4e4f0230/Miami-New-Year-Restaurant.png"
                  alt="Verde NYC Valentine's Day Restaurant"
                  width={620}
                  height={263}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="button-row">
                <div className="spacer"></div>
                <div className="button-wrapper">
                  <Link
                    href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"
                    className="btn text-[#A5A39A]"
                    target="_blank"
                  >
                    Reserve Your Table
                  </Link>
                </div>
                <div className="spacer"></div>
              </div>

              <div className="button-row">
                <div className="spacer"></div>
                <div className="button-wrapper">
                  <Link
                    href="https://www.opentable.com/booking/experiences-availability?rid=1054648&restref=1054648&experienceId=607625&utm_source=external&utm_medium=referral&utm_campaign=shared"
                    className="btn text-[#A5A39A] "
                    target="_blank"
                  >
                    Reserve now $175/pp Outdoors
                  </Link>
                </div>
                <div className="button-wrapper">
                  <Link
                    href="https://www.opentable.com/booking/experiences-availability?rid=1054648&restref=1054648&experienceId=607625&utm_source=external&utm_medium=referral&utm_campaign=shared"
                    className="btn text-[#A5A39A] "
                    target="_blank"
                  >
                    Reserve now $175/pp  Indoors
                  </Link>
                </div>
                <div className="spacer"></div>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Verde Lounge Section */}
            <div className="venue-section">
              <h2 style={{ textAlign: 'center' }}>VERDE LOUNGE</h2>

              <div className="venue-image-wrapper max-w-2xl mx-auto">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0865fdc5-4b44-4303-9c25-d9e7d913e9ba/mila-lounge-low-res.png"
                  alt="New York Verde Lounge New Year"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  width={1920}
                  height={950}

                />
              </div>

              <div className="button-row">
                <div className="spacer"></div>
                <div className="button-wrapper">
                  <Link
                    href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"
                    className="btn"
                    target="_blank"
                  >
                    Reserve Your Table
                  </Link>
                </div>
                <div className="spacer"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Index Navigation */}
        <nav className="index-nav overlay">
          <div className="index-nav-inner">
            <a href="#valentines-banner" className="index-nav-item active">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Valentine&apos;s Day Banner</span></div>
            </a>
            <a href="#valentines-content" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Valentine&apos;s Day Content</span></div>
            </a>
          </div>
        </nav>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
