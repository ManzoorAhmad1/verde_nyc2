'use client';

import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function MilaOmakasePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="lounge-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Gallery Section */}
      <section id="omakase-gallery" className="lounge-gallery-section">
        <div className="lounge-gallery-wrapper">
          <div className="lounge-gallery-item active">
            <img
              loading="eager" decoding="async" fetchPriority="high" src="/images/_40A8496.jpg"
              alt="Verde NYC Omakase Interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Verde Omakase Content Section */}
      <section id="omakase-content" className="lounge-content-section">
        <div className="lounge-content-inner">
          <p className='text-[#948E84] text-sm mb-8'>A YEEELS GROUP SIGNATURE EXPERIENCE — EXCELLENCE ACROSS FOUR CONTINENTS</p>
          
          <h1 className='text-[#3A363A] mb-6'>VERDE OMAKASE</h1>
          
          <p className='text-[#948E84] mb-6'>
            Building on the Yeeels Group&apos;s legacy of culinary excellence from Paris to Dubai, <Link href="/">Verde NYC</Link> Omakase represents the pinnacle of our MediterrAsian philosophy. This intimate 10-seat experience offers an exclusive journey where Japanese precision meets Mediterranean soul—crafted by chefs trained across our international kitchens and executed with the artistry that has defined our brand for over a decade.
          </p>
          
          <h3 className='text-[#3A363A] mb-4'>Hours</h3>
          <p className='text-[#948E84] mb-6'>2 seatings: Tuesday - Saturday | 7 pm &amp; 9:30 pm</p>
          
          <p className='text-[#948E84] text-sm mb-4'>
            To honor the integrity of the Verde Omakase experience, dietary restrictions must be communicated at least 24 hours in advance. Our culinary team sources ingredients from our global network of premium suppliers—line-caught fish from Japan, seasonal produce from Mediterranean farms, and artisanal products from our partner purveyors in France and Italy.
          </p>
          
          <p className='text-[#948E84] text-sm mb-8'>
            Each experience begins precisely at the scheduled time. The carefully choreographed progression of courses cannot accommodate late arrivals—a standard maintained across all Yeeels Group omakase experiences worldwide. We appreciate your understanding.
          </p>

          <div className="lounge-buttons">
            <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="lounge-btn">
              Your Experience Awaits
            </Link>
          </div>
        </div>
      </section>

      {/* Omakase Philosophy Section */}
      <section id="omakase-philosophy" className="lounge-programme-section">
        <div className="lounge-programme-inner">
          <h2 className='text-[#3A363A]'>THE YEEELS GROUP OMAKASE PHILOSOPHY</h2>
          <p className='text-[#948E84] mb-6'>
            Inspired by our acclaimed tasting experiences in Paris and Dubai, the Verde NYC omakase space represents the Yeeels Group&apos;s interpretation of this sacred Japanese tradition. The intimate theater features a dramatic overhanging cherry blossom tree, a Japanese craftsmanship-inspired wallpaper screen commissioned from artisans in Kyoto, a luxurious marble countertop, and our prized 500-year-old hinoki wood cutting board—elements that bridge Mediterranean warmth with Japanese minimalism.
          </p>
          <p className='text-[#948E84]'>
            The ever-evolving menu showcases ingredients sourced through our international network: line-caught fish flown daily from Tsukiji and Mediterranean waters, sea urchin from Hokkaido, bluefin tuna from Ehime Prefecture, Bushu-Gyu wagyu from Saitama, and seasonal vegetables from our partner farms in France, Italy, and the Hudson Valley. Each course tells a story of our global culinary journey.
          </p>
          
          <div className="lounge-lineup-image mt-8">
            <img
              loading="lazy" decoding="async" src="/images/_40A8500.jpg"
              alt="Verde NYC Omakase Venue"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="lounge-lineup-image mt-6">
            <img
              loading="lazy" decoding="async" src="/images/_40A8498.jpg"
              alt="Verde NYC Omakase Experience"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="omakase-heritage" className="lounge-vibes-section">
        <div className="lounge-vibes-inner">
          <h2 className='text-[#3A363A]'>The Heritage of Omakase: Perfected Across Continents</h2>
          <p className='text-[#948E84] mb-8'>
            The philosophy of "omakase"—entrusting the chef with your dining journey—has been at the heart of the Yeeels Group&apos;s approach since our founding in Paris. This artful tradition unfolds as a meticulously sequenced progression from delicate to robust, showcasing techniques honed across our kitchens in France, Dubai, and now New York. At Verde Omakase, this centuries-old Japanese tradition merges with Mediterranean passion to create a dynamic, seasonally-evolving experience that honors both cultures while creating something entirely new.
          </p>
          
          <div className="lounge-collage-image">
            <img
              loading="lazy" decoding="async" src="/images/_40A8501.jpg"
              alt="Verde NYC Omakase culinary presentation"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="omakase-location" className="lounge-programme-section">
        <div className="lounge-programme-inner">
          <h2 className='text-[#3A363A]'>Verde NYC — Meatpacking District</h2>
          <p className='text-[#948E84] mb-6'>Part of the Yeeels Group Global Portfolio: Paris | Saint-Tropez | Dubai | Italy | New York</p>
          
          <div style={{ marginTop: '2rem' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0!2d-74.0060!3d40.7410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzI3LjYiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1756841346523!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
