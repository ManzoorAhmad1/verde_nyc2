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
    <footer className="footer bg-white text-black/60 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Top Section - Brands */}
      <div className="footer-brands text-center max-w-7xl mx-auto">
        <h3 className="text-sm sm:text-base flex flex-col sm:block">
          A <span className="font-semibold">YEEELS GROUP</span> DESTINATION
        </h3>
        <h3 className="mt-2 text-sm sm:text-base">
          Paris | Saint-Tropez | Dubai | Italy | New York
        </h3>
        <h3 className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
          <span>VERDE PARIS</span>
          <span className="hidden sm:inline">|</span>
          <span>VERDE BEACH</span>
          <span className="hidden sm:inline">|</span>
          <span>VERDE DUBAI</span>
          <span className="hidden sm:inline">|</span>
          <span>MAMAMIA PARIS</span>
        </h3>
      </div>

      <hr className="bg-black/80 my-8 md:my-12 max-w-7xl mx-auto" />

      {/* Main Footer Content */}
      <div className="footer-content max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left - Logo & Address */}
        <div className="footer-logo-section text-center md:text-left">
          <Link href="/" className="inline-block">
            <img
              loading="lazy"
              decoding="async"
              src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-green.png"
              alt="Verde NYC - A Yeeels Group Venue"
              width={150}
              height={50}
              className="footer-logo mx-auto md:mx-0 w-32 sm:w-40 md:w-[150px] h-auto"
            />
          </Link>
          <div className="footer-address mt-4 text-sm sm:text-base">
            <Link 
              href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
              target="_blank"
              className="hover:text-black transition-colors block"
            >
              85 10th Avenue<br />
              Meatpacking District<br />
              New York, NY 10011
            </Link>
            <br />
            <Link 
              href="/reserve" 
              className="underline mt-2 inline-block hover:text-black transition-colors"
            >
              Hours & Reservations
            </Link>
          </div>
        </div>

        {/* Center - Links & Newsletter */}
        <div className="footer-center">
          <div className="footer-links flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-sm sm:text-base">
            <Link href="/menu" className="footer-link hover:text-black transition-colors whitespace-nowrap">MENU</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/gallery" className="footer-link hover:text-black transition-colors whitespace-nowrap">GALLERY</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/dinner-party" className="footer-link hover:text-black transition-colors whitespace-nowrap">DINNER PARTY</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/restaurant" className="footer-link hover:text-black transition-colors whitespace-nowrap">RESTAURANT</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/bar" className="footer-link hover:text-black transition-colors whitespace-nowrap">BAR</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/contact" className="footer-link hover:text-black transition-colors whitespace-nowrap">CONTACT</Link>
          </div>

          <div className="newsletter-form mt-6 md:mt-8">
            <p className="text-sm sm:text-base mb-4">
              Join the Yeeels Group community. Receive exclusive news, events, and invitations from all our venues worldwide.
            </p>
       
            <p className="newsletter-privacy text-xs sm:text-sm mt-2 text-black/40">
              We respect your privacy.
            </p>
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
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-green.png"
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