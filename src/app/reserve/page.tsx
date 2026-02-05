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
          <h2>Book Your Table at Verde NYC</h2>
          <p>Experience the finest Mediterranean dining in New York's Meatpacking District.</p>
          <p className="coming-soon-subtitle">Reserve your table through our online reservation system or contact us directly.</p>
          
          <div className="coming-soon-contact">
            <p>Phone: <a href="tel:+16464068763">+1 (646) 406-8763</a></p>
            <p>Email: <a href="mailto:contact@verde-nyc.com">contact@verde-nyc.com</a></p>
          </div>

          <a href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="coming-soon-btn">
            Make a Reservation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
