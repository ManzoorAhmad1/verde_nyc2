'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function MiamiBrunchPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main className="brunch-page">
        {/* Banner Section */}
        <section id="brunch-banner" className="brunch-banner-section">
          <div className="parallax-background">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg"
              alt="Verde NYC Brunch"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
              priority
            />
          </div>
          <div className="banner-content">
            <h1>VERDE NYC BRUNCH</h1>
          </div>
        </section>

        {/* Brunch Content Section */}
        <section id="miami-brunch-content" className="brunch-content-section">
          <div className="content-wrapper">
            {/* Gallery Slider */}
            <div className="brunch-gallery-slider">
              <div className="gallery-slider-images">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1730507229765-DBNJ4B0UN1KG9R6TZ1GI/87.jpg"
                  alt="Verde NYC Brunch"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
              </div>
            </div>

            {/* Brunch Intro */}
            <div className="brunch-intro">
              <h2>Best Brunch in New York City</h2>
              <p>Sundays at <strong>Verde NYC</strong> are meant to be savored. A time to unwind, connect, and indulge in an elevated brunch ritual where Mediterranean warmth meets Asian precision. Set high above <a href="https://www.google.com/maps/place/Verde+NYC" target="_blank">New York City</a>, <a href="https://www.verde-nyc.com" target="_blank">Verde NYC&apos;s</a> Sunday brunch unfolds in a sun-drenched, transportive atmosphere, brought to life with live music that sets the rhythm for the afternoon. Thoughtfully curated flavors, artful presentation, and a vibrant yet refined energy transform brunch into an immersive lifestyle experience.</p>
            </div>

            <hr className="section-divider" />

            {/* Buffet Image Card */}
            <div className="brunch-image-card right">
              <div className="image-card-image">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/8d62c8fd-abce-4512-b916-3ed26e41f79c/MILA-Brunch-Buffet.png"
                  alt="brunch buffet layout inside MILA with an assortment of foods and drinks"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3><strong>Elevated buffet stations</strong></h3>
                <p>Guests are invited to explore a curated selection of chef-driven dishes over a two-hour experience, moving freely between artfully designed stations and composing their own journey of flavors.</p>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Description Text */}
            <div className="brunch-description">
              <p>Begin your MediterrAsian Brunch with a refined bakery selection of freshly baked croissants and seasonal tropical fruits, followed by an artful display of cured meats, artisanal cheeses, and handcrafted breads.</p>
              <p>At the center of the experience, a <strong>5J Jamón carving station</strong> offers premium cuts carved to perfection, alongside curated salads and a vibrant <strong>Sushi and Temaki Handroll Station</strong>. Guests can also enjoy a Raw Bar with freshly shucked oysters and a Mezze station highlighted by Verde NYC&apos;s signature eggplant caviar. On the <strong>outdoor rooftop bar</strong>, the experience expands with a live <strong>Robata grill</strong> and a dedicated <strong>Spritz station</strong>, adding a sun-soaked, aperitivo-inspired energy.</p>
              <p>The brunch concludes with an indulgent dessert display, featuring chef-crafted sweets and a <strong>Gelato Station</strong> for a refreshing finish.</p>
            </div>

            <hr className="section-divider" />

            {/* Cocktail Image Card */}
            <div className="brunch-image-card left">
              <div className="image-card-image">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8ccb04c-5cbe-4b18-893d-eb24f8064ff6/MILA-brunch-cocktail.png"
                  alt="refreshing brunch cocktail in a glass with a pink fan in the background"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3><strong>Beverage Package</strong></h3>
                <p>Our packages include:</p>
                <p><strong>A non-alcoholic package featuring refreshing mocktails</strong> crafted with the freshest ingredients, and <strong>Champagne and Rose Packages</strong> with premium champagne and luxury cocktails offerings.</p>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Hours Section */}
            <div className="brunch-hours">
              <h3>Hours</h3>
              <p>Sunday | 11:30 AM - 2:30 PM</p>
              <p><a href="https://maps.app.goo.gl/fqeZH3QPWLxBZFXY7" target="_blank">Get Directions</a></p>
            </div>

            <div className="button-center">
              <Link 
                href="https://www.opentable.com/r/mila-miami-restaurant-reservations-miami-2?restref=1054648&lang=en-US&ot_source=Restaurant%20website"
                className="btn-tertiary"
                target="_blank"
              >
                Reserve Your Experience
              </Link>
            </div>

            <div className="brunch-menu-section">
              <h3><strong>Sunday Brunch Menu</strong></h3>
              <div className="button-center">
                <Link href="/restaurant" className="btn-tertiary">
                  Explore Our Menus
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Index Navigation */}
        <nav className="index-nav overlay">
          <div className="index-nav-inner">
            <a href="#brunch-banner" className="index-nav-item active">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Brunch Banner</span></div>
            </a>
            <a href="#miami-brunch-content" className="index-nav-item">
              <div className="index-nav-indicator"></div>
              <div className="index-nav-text"><span>Verde NYC Brunch</span></div>
            </a>
          </div>
        </nav>
      </main>

      <Footer />
    </>
  );
}
