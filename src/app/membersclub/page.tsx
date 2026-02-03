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
            <h2>VERDE NYC MM</h2>
            <p>
              Located on the second floor beneath <Link href="/restaurant">Verde Restaurant</Link>, MM is a secluded area, reserved exclusively for our MM members, offering bespoke mixology and a <Link href="/milaomakase">culinary journey</Link> curated by Chef Michaël Michaelidis.
            </p>
            <div className="membersclub-buttons">
              <Link href="https://members.mmembersclub.com" target="_blank" className="membersclub-button">
                MM portal
              </Link>
              <Link href="/s/MILA-MM_Dinner-Menu-013026.pdf" target="_blank" className="membersclub-button">
                MENU
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
          <h3>
            lifestyle members-only club to shape a network of luxury <Link href="/restaurant">restaurants</Link>, <Link href="/milalounge">lounges</Link> and other entertaining <Link href="https://www.rivieradininggroup.com/venue-listing" target="_blank">venues</Link>, with access to private areas exclusively for members.
          </h3>
          <p>
            MM redefines how people navigate through dining experiences, honoring its members with priority access to all sites, including <Link href="https://mm-club.com/mm-venues" target="_blank">out-of-state venues</Link>. Giving to member benefits represent, MM is a sign of status, elegance, and taste.
          </p>
          <Link href="https://mm-club.com" target="_blank" className="membersclub-discover-button">
            DISCOVER MORE ABOUT MM
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
            <h2>Are you interested in becoming a member?</h2>
            <p>
              Become part of an exclusive lifestyle community that offers priority access to a collection of currated events, luxury restaurants, lounges, and private member-only spaces. MM elevates every dining experience and stands as a symbol of refinement, status, and exceptional taste.
            </p>
            <Link href="mailto:info@mm-club.com?" target="_blank" className="membersclub-contact-button">
              contact us here
            </Link>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="membersclub-instagram">
          <h3>Follow MM journey on <Link href="https://instagram.com/mm_membersclub" target="_blank">Instagram</Link></h3>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="membersclub-index-nav">
        <Link href="#" className="membersclub-nav-dot active">
          <span className="indicator"></span>
          <span className="text">New Page</span>
        </Link>
        <Link href="#membership" className="membersclub-nav-dot">
          <span className="indicator"></span>
          <span className="text">MEMBERSHIP</span>
        </Link>
      </nav>

      <Footer />
    </div>
  );
}
