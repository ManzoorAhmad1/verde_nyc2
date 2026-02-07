'use client';

import { useState } from 'react';
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
            <img
              loading="eager" decoding="async" fetchPriority="high" src="https://dm4kmpvzhijsu.cloudfront.net/images/_40A8521.jpg"
              alt="Verde NYC Valentine's Day 2026 - A Yeeels Group Celebration"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }}
            />
          </div>
          <div className="banner-content">
            <h1 style={{ textAlign: 'center', color: '#fff' }}>Valentine&apos;s Day at Verde NYC</h1>
            <h2 style={{ textAlign: 'center', color: '#ffffff' }}>A Yeeels Group Celebration of Love</h2>
          </div>
        </section>

        {/* Valentine's Content Section */}
        <section id="valentines-content" className="valentines-content-section">
          <div className="parallax-background texture-bg">
            <img
              loading="lazy" decoding="async" src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"
              alt="mila-miami-texture"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }}
            />
          </div>
          <div className="content-wrapper text-[#A5A39A]">
            {/* Introduction */}
            <div className="valentines-intro">
              <strong className='text-[#3A363A]'>An Evening of Mediterranean Romance</strong>
              <p className='text-xs tracking-[0.3em] text-[#2D2C2A]'>Saturday, February 14th</p>
              <p className='text-center text-xs border-b border-white pb-14 rounded-none' >
                From the candlelit terraces of Paris to the starlit shores of Saint-Tropez, from the glittering skyline dinners of Dubai to the romantic intimacy of our Italian venues—the Yeeels Group has been crafting unforgettable Valentine&apos;s celebrations for over a decade. This year, experience this legacy of love in New York. Our culinary team has designed an exclusive prix fixe menu that celebrates connection, passion, and the art of sharing. Reserve your evening and let us create a memory that lingers long after the final course.
              </p>

            </div>


            {/* Verde Restaurant Section */}
            <div className="venue-section">
              <h2 style={{ textAlign: 'center' }}>
                <Link href="/restaurant">VERDE RESTAURANT</Link>
              </h2>

              <div className="venue-image-wrapper max-w-2xl mx-auto">
                <img
                  loading="lazy" decoding="async" src="https://dm4kmpvzhijsu.cloudfront.net/images/_40A8522.jpg"
                  alt="Verde NYC Valentine's Day Restaurant"
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
                <img
                  loading="lazy" decoding="async" src="https://dm4kmpvzhijsu.cloudfront.net/images/_40A8523.jpg"
                  alt="New York Verde Lounge New Year"
                  style={{ maxWidth: '100%', height: 'auto' }}
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
