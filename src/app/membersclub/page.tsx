'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function MembersClubPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="membersclub-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Section with Video Background */}
      <section className="membersclub-hero-section">
        <div className="membersclub-video-wrapper">
          <img
            src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8476.jpg"
            alt="Verde NYC Members Club"
            className="membersclub-fallback-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Main Membership Section */}
      <section id="membership" className="membersclub-main-section">
        <div className="membersclub-content-grid">
          {/* Left Column - Text Content */}
          <div className="membersclub-text-column">
            <h2 style={{color: 'var(--verde-heading)'}}>The Yeeels Group Global Members Circle</h2>
            <span style={{color: 'var(--verde-text)'}}>
              Across Paris, Saint-Tropez, Dubai, and now New York, the Yeeels Group Members Circle represents an exclusive community of discerning individuals who appreciate the extraordinary. Our members enjoy privileged access to all Yeeels Group venues worldwide—priority reservations at Verde NYC, exclusive invitations to our Parisian soirées, VIP beach access in Saint-Tropez, and members-only experiences across our global portfolio.
            </span>
            <div className="membersclub-buttons mt-20">
              <Link href="mailto:membership@yeeels.com" target="_blank" className="membersclub-button">
                MEMBERSHIP INQUIRIES
              </Link>
              <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="membersclub-button">
                RESERVE
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="membersclub-image-column">
            <div className="membersclub-interior-image">
              <img
                src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8478.jpg"
                alt="Interior view of Verde NYC Members Club"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Center Description */}
        <div className="membersclub-center-description">
          <h3 style={{color: 'var(--verde-heading)'}}>
            A Global Passport to Excellence — Paris | Saint-Tropez | Dubai | Italy | New York
          </h3>
          <span style={{color: 'var(--verde-text)'}}>
            Yeeels Group membership transcends geographic boundaries. As a member of our international community, you gain priority access to reservations across all nine of our venues worldwide, exclusive invitations to seasonal events from Parisian fashion week gatherings to Dubai Art Week celebrations, chef&apos;s table experiences with our culinary directors, and access to our private members&apos; lounges in each destination. Our concierge team stands ready to curate bespoke experiences tailored to your preferences, whether you&apos;re seeking a table for two in Manhattan or orchestrating a celebration across multiple Yeeels Group venues.
          </span>

        </div>
                <div className="membersclub-center-description">

        <Link href="mailto:membership@yeeels.com" target="_blank" className="membersclub-discover-button ">
          EXPLORE GLOBAL MEMBERSHIP
        </Link>
        </div>
        {/* Become Member Section */}
        <div className="membersclub-become-member">
          <div className="membersclub-member-image">
            <img
              src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8483.jpg"
              alt="Yeeels Group Members enjoying exclusive experiences"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="membersclub-member-text">
            <h2 style={{color: 'var(--verde-heading)'}}>Join the Yeeels Group Family</h2>
            <span style={{color: 'var(--verde-text)'}}>
              Membership in the Yeeels Group Circle is by invitation and application only, ensuring an exclusive community of like-minded individuals who share our passion for exceptional dining, celebration, and the art of living well. Our members become ambassadors of our values—commitment, innovation, audacity, and passion—enjoying a world of privileges that extends from the Champs-Élysées to the Meatpacking District. Inquire today to begin your journey into our global family.
            </span>
            <Link href="mailto:membership@yeeels.com" target="_blank" className="membersclub-contact-button mt-10">
              request membership information
            </Link>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="membersclub-instagram">
          <h3 style={{color: 'var(--verde-text)'}}>Follow Yeeels Group on <Link href="https://instagram.com/yeeels" target="_blank">Instagram</Link></h3>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="membersclub-index-nav">
        <Link href="#" className="membersclub-nav-dot active">
          <span className="indicator"></span>
          <span className="text-[#948E84]">New Page</span>
        </Link>
        <Link href="#membership" className="membersclub-nav-dot">
          <span className="indicator"></span>
          <span className="text-[#948E84]">MEMBERSHIP</span>
        </Link>
      </nav>

      <Footer />
    </div>
  );
}
