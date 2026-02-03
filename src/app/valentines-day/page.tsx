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
          <div className="content-wrapper">
            {/* Introduction */}
            <div className="valentines-intro">
              <h2 style={{ textAlign: 'center' }}><strong>Celebrate Valentine&apos;s Day</strong></h2>
              <h3 style={{ textAlign: 'center' }}><strong> </strong>Saturday, February 14th</h3>
              <p style={{ textAlign: 'center' }}>
                Let every shared moment taste a little sweeter. Slow down, indulge deeply, and celebrate the &apos;Taste of Love&apos; with a specialty prix fixe menu, crafted for connection and desire. Reserve your evening and let every moment linger a little longer.
              </p>
            </div>

            <hr className="section-divider" />

            {/* Verde Restaurant Section */}
            <div className="venue-section">
              <h2 style={{ textAlign: 'center' }}>
                <Link href="/restaurant">VERDE R</Link>ESTAURANT
              </h2>
              
              <div className="venue-image-wrapper">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/d4a37912-2e15-4d5b-8888-0d0e4e4f0230/Miami-New-Year-Restaurant.png"
                  alt="Miami New Year Restaurant"
                  width={620}
                  height={263}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="button-row">
                <div className="spacer"></div>
                <div className="button-wrapper">
                  <Link 
                    href="/s/MILA_3F_VDAY-Menu-011326.pdf" 
                    className="btn btn-tertiary"
                    target="_blank"
                  >
                    menu
                  </Link>
                </div>
                <div className="button-wrapper">
                  <Link 
                    href="/s/MILA_3F_VDAY-VEG-Menu-011326.pdf" 
                    className="btn btn-tertiary"
                    target="_blank"
                  >
                    vegetarian menu
                  </Link>
                </div>
                <div className="spacer"></div>
              </div>

              <div className="button-row">
                <div className="spacer"></div>
                <div className="button-wrapper">
                  <Link 
                    href="https://www.opentable.com/booking/experiences-availability?rid=1054648&restref=1054648&experienceId=607625&utm_source=external&utm_medium=referral&utm_campaign=shared" 
                    className="btn btn-tertiary"
                    target="_blank"
                  >
                    Reserve now $175/pp Outdoors
                  </Link>
                </div>
                <div className="button-wrapper">
                  <Link 
                    href="https://www.opentable.com/booking/experiences-availability?rid=1054648&restref=1054648&experienceId=607625&utm_source=external&utm_medium=referral&utm_campaign=shared" 
                    className="btn btn-tertiary"
                    target="_blank"
                  >
                    Reserve now $175/pp  Indoors
                  </Link>
                </div>
                <div className="spacer"></div>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Verde Omakase Section */}
            <div className="venue-section">
              <h2 style={{ textAlign: 'center' }}>
                <Link href="/milaomakase">VERDE OMAKASE</Link>
              </h2>
              
              <div className="omakase-image-wrapper">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/e34f34f5-a64b-4d6d-bdab-f2786ef3a354/MILA+Omakase+Vday+2026+Portal.jpg"
                  alt="Verde NYC Omakase Vday 2026"
                  width={1920}
                  height={950}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="button-center">
                <Link 
                  href="https://www.opentable.com/booking/experiences-availability?rid=1271149&restref=1271149&experienceId=621322&utm_source=external&utm_medium=referral&utm_campaign=shared&dateTime=2026-02-14T19%3A30%3A00&partySize=2" 
                  className="btn btn-tertiary"
                  target="_blank"
                >
                  7 pm or 9:30 pm | $195
                </Link>
              </div>

              <p style={{ textAlign: 'center' }} className="disclaimer">*excludes tax and service charge</p>
            </div>

            <hr className="section-divider" />

            {/* Verde Lounge Section */}
            <div className="venue-section">
              <h2 style={{ textAlign: 'center' }}>VERDE LOUNGE</h2>
              
              <div className="venue-image-wrapper">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0865fdc5-4b44-4303-9c25-d9e7d913e9ba/mila-lounge-low-res.png"
                  alt="New York Verde Lounge New Year"
                  width={620}
                  height={322}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="button-row">
                <div className="spacer"></div>
                <div className="button-wrapper">
                  <Link 
                    href="https://www.sevenrooms.com/experiences/verde-nyc/valentines-day-at-verde-lounge" 
                    className="btn btn-tertiary"
                    target="_blank"
                  >
                    reserve for VDAY dinner
                  </Link>
                </div>
                <div className="button-wrapper">
                  <Link 
                    href="mailto:reservations@verdenyc.com?subject=Table%20Inquiry" 
                    className="btn btn-tertiary"
                    target="_blank"
                  >
                    reserve for bottle service
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
