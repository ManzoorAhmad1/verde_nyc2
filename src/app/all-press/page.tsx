'use client';

import Image from 'next/image';
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
            <Image
              src="/images/logo-Verde-NYC-white.png"
              alt="Verde NYC"
              width={200}
              height={80}
              priority
            />
          </div>
          <h1>PRESS</h1>
          <h2>Coming Soon</h2>
          <p>Our press page is currently under construction. Stay tuned for exciting news and media coverage.</p>
          <p className="coming-soon-subtitle">For press inquiries, please contact our PR team.</p>
          
          <div className="coming-soon-contact">
            <p>Email: <a href="mailto:press@verdenyc.com">press@verdenyc.com</a></p>
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
