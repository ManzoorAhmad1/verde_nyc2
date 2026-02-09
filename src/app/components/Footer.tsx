'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer text-black/60">
      {/* Top Section - Brands */}

      <div className="footer-brands">
        <h3>A <Link href="https://yeeels.com/en/" target="_blank">YEEELS GROUP</Link> DESTINATION</h3>
        <h3 className="mt-2">Paris | Saint-Tropez | Dubai | Italy | New York</h3>
        <h3 className="mt-2">
          <Link href="https://yeeels.com/en/services/architecture" target="_blank">VERDE PARIS</Link>
          {' | '}
          <Link href="https://yeeels.com/en/services/verdebeach/" target="_blank">VERDE BEACH</Link>
          {' | '}
          <Link href="https://yeeels.com/en/services/verdedubai" target="_blank">VERDE DUBAI</Link>
          {' | '}
          <Link href="https://yeeels.com/en/services/decorating" target="_blank">MAMAMIA PARIS</Link>
        </h3>
      </div>

      <hr className="bg-black/80" />

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Left - Logo & Address */}
        <div className="footer-logo-section">
          <Link href="/">
            <img
              loading="lazy" decoding="async" src="/images/logo-Verde-NYC-green.png"
              alt="Verde NYC - A Yeeels Group Venue"
              width={150}
              height={50}
              className="footer-logo mx-auto"
            />
          </Link>
          <div className="footer-address mt-4">
            <Link href="https://maps.app.goo.gl/JLnMD7GPo3FHgSBb7"
              target="_blank">
              85 10th Avenue<br />
              Meatpacking District<br />
              New York, NY 10011
            </Link>
            <br />
            <Link href="/reserve" className="underline mt-2 inline-block">Hours & Reservations</Link>
          </div>
        </div>

        {/* Center - Links & Newsletter */}
        <div className="footer-center">
          <div className="footer-links">
            <Link href="/menu" className="footer-link">MENU</Link>
            <span>|</span>
            <Link href="/gallery" className="footer-link">GALLERY</Link>
            <span>|</span>
            <Link href="/reserve" className="footer-link">RESERVE</Link>
            <span>|</span>
            <Link href="/private-events" className="footer-link">PRIVATE EVENTS</Link>
            <span>|</span>
            <Link href="/gift-card" className="footer-link">GIFT CARD</Link>
            <span>|</span>
            <Link href="/all-press" className="footer-link">PRESS</Link>
            <span>|</span>
            <Link href="/contact" className="footer-link">CONTACT</Link>
          </div>

          <div className="newsletter-form">
            <p>Join the Yeeels Group community. Receive exclusive news, events, and invitations from all our venues worldwide.</p>
            <form onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="newsletter-privacy">We respect your privacy.</p>
          </div>
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Restaurant", "LocalBusiness"],
            "name": "Verde NYC - A Yeeels Group Venue",
            "image": [
              "/images/logo-Verde-NYC-green.png"
            ],
            "url": "https://verde-nyc.com/",
            "telephone": "+16464068763",
            "priceRange": "$$$",
            "menu": "https://verde-nyc.com/restaurant",
            "servesCuisine": "Mediterranean, MediterrAsian",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "85 10th Avenue",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10011",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7424,
              "longitude": -74.0060
            },
            "parentOrganization": {
              "@type": "Organization",
              "name": "Yeeels Group",
              "url": "https://yeeels.com/en/"
            }
          })
        }}
      />
    </footer>
  );
}
