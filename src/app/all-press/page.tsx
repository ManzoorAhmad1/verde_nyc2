'use client';

import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function PressPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="coming-soon-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      <section className="coming-soon-section">
        <div className="coming-soon-content">
          <div className="coming-soon-logo">
            <img
              loading="lazy" decoding="async" src="https://dm4kmpvzhijsu.cloudfront.net/images/logo-Verde-NYC-white.png"
              alt="Verde NYC - A Yeeels Group Venue"
              width={200}
              height={80}
            />
          </div>
          <h1>YEEELS GROUP IN THE PRESS</h1>
          <h2>Global Recognition, Local Excellence</h2>
          <p>For over a decade, the Yeeels Group has been celebrated by the world&apos;s leading publications—from Vogue Paris to Architectural Digest, from Gulf News to The New York Times. Our press archive is currently being updated to include Verde NYC coverage.</p>
          <p className="coming-soon-subtitle">For press inquiries and media requests, please contact our global communications team.</p>
          
          <div className="coming-soon-contact">
            <p>Global Press: <a href="mailto:press@yeeels.com">press@yeeels.com</a></p>
            <p>NYC Press: <a href="mailto:pressnyc@yeeels.com">pressnyc@yeeels.com</a></p>
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
