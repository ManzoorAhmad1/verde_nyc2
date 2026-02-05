'use client';

import { useState } from 'react';
import Image from 'next/image';
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
        <h3>A <Link href="https://www.rivieradininggroup.com/" target="_blank">Riviera Dining Group</Link> BRAND</h3>
        <h3 className="mt-2">Visit other venues</h3>
        <h3 className="mt-2">
          <Link href="https://www.avamediterraegean.com" target="_blank">AVA</Link>
          {' | '}
          <Link href="https://www.casa-neos.com" target="_blank">CASA NEOS</Link>
          {' | '}
          <Link href="https://www.claudierestaurant.com" target="_blank">CLAUDIE</Link>
          {' | '}
          <Link href="https://mm-club.com" target="_blank">MM</Link>
        </h3>
      </div>

      <hr className="bg-black/80" />

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Left - Logo & Address */}
        <div className="footer-logo-section">
          <Link href="/">
            <Image
              src="/images/logo-Verde-NYC-green.png"
              alt="Verde NYC"
              width={150}
              height={50}
              className="footer-logo mx-auto"
            />
          </Link>
          <div className="footer-address mt-4">
            <Link href="https://maps.app.goo.gl/JLnMD7GPo3FHgSBb7" target="_blank">
              1636 Meridian Ave<br />
              New York, NY 10001
            </Link>
            <br />
            <Link href="/reserve" className="underline mt-2 inline-block">View Hours</Link>
          </div>
        </div>

        {/* Center - Links & Newsletter */}
        <div className="footer-center">
          <div className="footer-links">
            <Link href="/valentines-day" className="footer-link">VALENTINE'S DAY</Link>
            <span>|</span>
            <Link href="/restaurant" className="footer-link">RESTAURANT</Link>
            <span>|</span>
            <Link href="/miami-brunch" className="footer-link">BRUNCH</Link>
            <span>|</span>
            <Link href="/milalounge" className="footer-link">MILA LOUNGE</Link>
            <span>|</span>
            <Link href="/milaomakase" className="footer-link">MILA OMAKASE</Link>
            <span>|</span>
            <Link href="/membersclub" className="footer-link">MM MEMBERS CLUB</Link>
            <span>|</span>
            <Link href="/private-events" className="footer-link">PRIVATE EVENTS</Link>
            <span>|</span>
            <Link href="/contact" className="footer-link">CONTACT</Link>
          </div>

          <div className="newsletter-form">
            <p>Sign up to receive our latest news, upcoming events and special invitations.</p>
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

        {/* Right - Map */}
        <div className="footer-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4047144920364!2d-80.13930802459865!3d25.790218977334025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b485dbbfffff%3A0xb35569e33c3a935c!2sMILA!5e0!3m2!1sen!2sus!4v1765583826432!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="footer-map"
          />
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Restaurant", "LocalBusiness"],
            "name": "Verde NYC",
            "image": [
              "/images/logo-Verde-NYC-green.png"
            ],
            "url": "https://verde-nyc.com/",
            "telephone": "+12127060744",
            "priceRange": "Starting at $100",
            "menu": "https://verde-nyc.com/restaurant",
            "servesCuisine": "Mediterranean",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1636 Meridian Avenue Rooftop",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10001",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            }
          })
        }}
      />
    </footer>
  );
}
