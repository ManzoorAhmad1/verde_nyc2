'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function MilaOmakasePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="omakase-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Video Section */}
      <section id="omakase-video" className="omakase-hero-section">
        <div className="omakase-video-bg">
          <Image
            src="/images/_40A8496.jpg"
            alt="Verde NYC Omakase Interior"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="omakase-video-overlay"></div>
        </div>
        <div className="omakase-hero-content">
          <h1>VERDE OMAKASE</h1>
        </div>
      </section>

      {/* Verde Omakase NYC Section */}
      <section id="mila-omakase-miami" className="omakase-info-section">
        <div className="omakase-info-bg">
          <Image
            src="/images/_40A8498.jpg"
            alt="Verde NYC texture background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="omakase-info-content">
          <h3 className="omakase-award">
            A Yeeels Group Signature Experience —{' '}
            <Link href="https://yeeels.com/en/" target="_blank">
              Excellence Across Four Continents
            </Link>
          </h3>
          <h2>Verde Omakase</h2>
          
          <p className="omakase-description">
            Building on the Yeeels Group&apos;s legacy of culinary excellence from Paris to Dubai, <Link href="/">Verde NYC</Link> Omakase represents the pinnacle of our MediterrAsian philosophy. This intimate 10-seat experience offers an exclusive journey where Japanese precision meets Mediterranean soul—crafted by chefs trained across our international kitchens and executed with the artistry that has defined our brand for over a decade.
          </p>

          <h3>Hours</h3>
          <p>2 seatings: Tuesday - Saturday | 7 pm &amp; 9:30 pm</p>
          <p className="omakase-note">
            To honor the integrity of the Verde Omakase experience, dietary restrictions must be communicated at least 24 hours in advance. Our culinary team sources ingredients from our global network of premium suppliers—line-caught fish from Japan, seasonal produce from Mediterranean farms, and artisanal products from our partner purveyors in France and Italy.
          </p>
          <p className="omakase-note">
            Each experience begins precisely at the scheduled time. The carefully choreographed progression of courses cannot accommodate late arrivals—a standard maintained across all Yeeels Group omakase experiences worldwide. We appreciate your understanding.
          </p>

          <Link 
            href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" 
            target="_blank"
            className="omakase-btn"
          >
            Your Experience awaits
          </Link>
        </div>
      </section>

      {/* Experience Omakase Section */}
      <section id="omakase" className="omakase-experience-section">
        <div className="omakase-experience-bg">
          <Image
            src="/images/_40A8500.jpg"
            alt="Verde NYC Omakase Venue"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="omakase-experience-content">
          <div className="omakase-experience-text">
            <hr />
            <h2>THE YEEELS GROUP OMAKASE PHILOSOPHY</h2>
            <p>
              Inspired by our acclaimed tasting experiences in Paris and Dubai, the Verde NYC omakase space represents the Yeeels Group&apos;s interpretation of this sacred Japanese tradition. The intimate theater features a dramatic overhanging cherry blossom tree, a Japanese craftsmanship-inspired wallpaper screen commissioned from artisans in Kyoto, a luxurious marble countertop, and our prized 500-year-old hinoki wood cutting board—elements that bridge Mediterranean warmth with Japanese minimalism.
            </p>
            <p>
              The ever-evolving menu showcases ingredients sourced through our international network: line-caught fish flown daily from Tsukiji and Mediterranean waters, sea urchin from Hokkaido, bluefin tuna from Ehime Prefecture, Bushu-Gyu wagyu from Saitama, and seasonal vegetables from our partner farms in France, Italy, and the Hudson Valley. Each course tells a story of our global culinary journey.
            </p>
            <hr />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="new-page-3" className="omakase-map-section">
        <h2 className='text-[#3A363A]'>Verde NYC — Meatpacking District</h2>
        <p className='text-[#948E84]' style={{textAlign: 'center', marginBottom: '1rem'}}>Part of the Yeeels Group Global Portfolio: Paris | Saint-Tropez | Dubai | Italy | New York</p>
        <div className="omakase-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0!2d-74.0060!3d40.7410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzI3LjYiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1756841346523!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Heritage Section */}
      <section id="omakase-experience" className="omakase-heritage-section">
        <div className="omakase-heritage-content">
          <div className="omakase-heritage-image">
            <Image
              src="/images/_40A8501.jpg"
              alt="Verde NYC Omakase culinary presentation"
              width={2323}
              height={2323}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="omakase-heritage-text">
            <h2 className='text-[#3A363A]'><strong>The Heritage of Omakase: Perfected Across Continents</strong></h2>
            <p className='text-[#948E84]'>
              The philosophy of “omakase”—entrusting the chef with your dining journey—has been at the heart of the Yeeels Group&apos;s approach since our founding in Paris. This artful tradition unfolds as a meticulously sequenced progression from delicate to robust, showcasing techniques honed across our kitchens in France, Dubai, and now New York. At Verde Omakase, this centuries-old Japanese tradition merges with Mediterranean passion to create a dynamic, seasonally-evolving experience that honors both cultures while creating something entirely new.
            </p>
          </div>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="omakase-index-nav">
        <a href="#omakase-video" className="omakase-nav-item active">
          <div className="omakase-nav-indicator"></div>
          <span>Omakase Video</span>
        </a>
        <a href="#mila-omakase-miami" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Verde Omakase NYC</span>
        </a>
        <a href="#omakase" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Omakase</span>
        </a>
        <a href="#new-page-3" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Location</span>
        </a>
        <a href="#omakase-experience" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Omakase Experience</span>
        </a>
      </nav>

      <Footer />
    </main>
  );
}
