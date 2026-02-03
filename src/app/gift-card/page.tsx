'use client';

import Image from 'next/image';
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
            <Image
              src="/images/logo-Verde-NYC-white.png"
              alt="Verde NYC"
              width={200}
              height={80}
              priority
            />
          </div>
          <h1>GIFT CARDS</h1>
          <h2>Coming Soon</h2>
          <p>The perfect gift for your loved ones. Our digital gift card program will be launching soon.</p>
          <p className="coming-soon-subtitle">Give the gift of an unforgettable dining experience at Verde NYC.</p>
          
          <div className="coming-soon-contact">
            <p>For gift card inquiries:</p>
            <p>Email: <a href="mailto:info@verdenyc.com">info@verdenyc.com</a></p>
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
