'use client';

import Image from 'next/image';
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
          <iframe
            className="membersclub-youtube-embed"
            src="https://www.youtube.com/embed/HwHl6fg_mPQ?autoplay=1&mute=1&loop=1&playlist=HwHl6fg_mPQ&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="MM Website Video"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1751918403388-FNXA0RPRKYP49R0GE5YG/MMS-JUNE-9513.jpg"
            alt="Verde NYC MM"
            fill
            className="membersclub-fallback-image"
            priority
          />
        </div>
      </section>

      {/* Main Membership Section */}
      <section id="membership" className="membersclub-main-section">
        <div className="membersclub-content-grid">
          {/* Left Column - Text Content */}
          <div className="membersclub-text-column">
            <h2 style={{color: 'var(--verde-heading)'}}>VERDE NYC Members Club</h2>
            <span style={{color: 'var(--verde-text)'}}>
              Experience exclusivity at Verde NYC. Our members-only area offers a secluded sanctuary for those who appreciate the finer things in life. Enjoy priority reservations, exclusive events, and access to special areas reserved only for members of the Verde family.
            </span>
            <div className="membersclub-buttons mt-20">
              <Link href="mailto:contact@verde-nyc.com" target="_blank" className="membersclub-button">
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
              <Image
                src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/7c34fa33-21cd-41d7-943f-ed06004cc353/8c36f7ff-9c94-4381-acac-14f1b654aa1c.jpg"
                alt="interior view of Verde NYC MM"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Center Description */}
        <div className="membersclub-center-description">
          <h3 style={{color: 'var(--verde-heading)'}}>
            Join an exclusive lifestyle community that celebrates the art of Mediterranean dining and entertainment.
          </h3>
          <span style={{color: 'var(--verde-text)'}}>
            Verde NYC members enjoy priority access to reservations, exclusive events, and special experiences throughout the year. From curated wine tastings to chef&apos;s table experiences, membership means being part of a community that values excellence, celebration, and the finest in Mediterranean hospitality.
          </span>

        </div>
                <div className="membersclub-center-description">

        <Link href="mailto:contact@verde-nyc.com" target="_blank" className="membersclub-discover-button ">
          LEARN MORE ABOUT MEMBERSHIP
        </Link>
        </div>
        {/* Become Member Section */}
        <div className="membersclub-become-member">
          <div className="membersclub-member-image">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/81049aa0-e44f-4b6b-a07b-beffa3a3fa3c/LOOK_07_MILA_12-11-24_1034FINAL.jpg"
              alt="Verde NYC MM members with elegant glasses of wine and martini"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="membersclub-member-text">
            <h2 style={{color: 'var(--verde-heading)'}}>Are you interested in becoming a member?</h2>
            <span style={{color: 'var(--verde-text)'}}>
              Become part of an exclusive lifestyle community that offers priority access to curated events, exceptional dining experiences, and member-only spaces. Verde membership elevates every visit and stands as a symbol of refinement, status, and exceptional taste. Contact us to learn more about joining the Verde family.
            </span>
            <Link href="mailto:contact@verde-nyc.com" target="_blank" className="membersclub-contact-button mt-10">
              contact us here
            </Link>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="membersclub-instagram">
          <h3 style={{color: 'var(--verde-text)'}}>Follow Verde NYC on <Link href="https://instagram.com/verde_nyc" target="_blank">Instagram</Link></h3>
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
