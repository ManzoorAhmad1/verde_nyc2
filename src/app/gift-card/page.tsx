'use client';

import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function GiftCardPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="coming-soon-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      <section className="coming-soon-section">
        <div className="coming-soon-content">
          <div className="coming-soon-logo">
            <img
              loading="lazy" decoding="async" src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-white.png"
              alt="Verde NYC - A Yeeels Group Venue"
              width={200}
              height={80}
            />
          </div>
          <h1>YEEELS GROUP GIFT CARDS</h1>
          <h2>The Gift of Global Excellence</h2>
          <p>Give the extraordinary—a passport to Yeeels Group experiences across Paris, Saint-Tropez, Dubai, Italy, and New York.</p>
          <p className="coming-soon-subtitle">Our digital gift card program will be launching soon, honoring the Yeeels Group tradition of exceptional hospitality.</p>
          
          <div className="coming-soon-contact">
            <p>For gift card inquiries:</p>
            <p>Email: <a href="mailto:gifts@yeeels.com">gifts@yeeels.com</a></p>
          </div>

          <Link href="/" className="coming-soon-btn">
            Return to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
