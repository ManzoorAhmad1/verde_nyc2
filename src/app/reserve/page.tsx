'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ReservePage() {
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
          <h1>RESERVATIONS</h1>
          <h2>Coming Soon</h2>
          <p>We're preparing something extraordinary for you. Our reservation system will be available shortly.</p>
          <p className="coming-soon-subtitle">In the meantime, feel free to contact us directly for reservations.</p>
          
          <div className="coming-soon-contact">
            <p>Phone: <a href="tel:+12125551234">(212) 555-1234</a></p>
            <p>Email: <a href="mailto:reservations@verdenyc.com">reservations@verdenyc.com</a></p>
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
