'use client';

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
            <img
              loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-white.png"
              alt="Verde NYC - A Yeeels Group Venue"
              width={200}
              height={80}
            />
          </div>
          <h1>RESERVATIONS</h1>
          <h2>Secure Your Table at Verde NYC</h2>
          <p>Experience the Mediterranean excellence that has made the Yeeels Group a leader in festive dining across Paris, Saint-Tropez, Dubai, Italy, and now New York.</p>
          <p className="coming-soon-subtitle">Reserve through our online system or contact our dedicated reservations team for personalized assistance.</p>
          
          <div className="coming-soon-contact">
            <p>Phone: <a href="tel:+16464068763">+1 (646) 406-8763</a></p>
            <p>Email: <a href="mailto:reservations@yeeels.com">reservations@yeeels.com</a></p>
            <p>Global Concierge: <a href="mailto:concierge@yeeels.com">concierge@yeeels.com</a></p>
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
