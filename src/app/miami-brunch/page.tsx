'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function MiamiBrunchPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "/images/RA_Verde_Main1_RV6_250317.jpg",
    "/images/RA_Verde_Main2_RV6_250317.jpg",
    "/images/RA_Verde_Main3_RV6_250317.jpg",
    "/images/RA_Verde_Bar_RV6_250317.jpg",
    "/images/RA_Verde_Bar2_RV6_250317.jpg",
    "/images/RA_Verde_interior_Lobby_290325.jpeg",
    "/images/RA_Verde_interior_Main_4_290325.jpeg"
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.max(0, images.length - 5) : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= images.length - 5 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      <main className="brunch-page">
        {/* Banner Section */}
        <section id="brunch-banner" className="brunch-banner-section">
          <div className="parallax-background">
            <Image
              src="/images/RA_Verde_interior_Main_4_290325.jpeg"
              alt="Verde NYC Brunch"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
              priority
            />
          </div>
          <div className="banner-content w-full">
            <h1>VERDE NYC BRUNCH</h1>
          </div>
        </section>

        {/* Brunch Content Section */}
        <section id="miami-brunch-content" className="brunch-content-section">
          <div className="content-wrapper">
            {/* Gallery Slider */}
            <div className="sqs-block gallery-block sqs-block-gallery relative w-full h-[300px] overflow-hidden">
              <div className="sqs-gallery-container h-full">
                <div className="sqs-gallery sqs-gallery-design-strip relative h-full">
                  {/* Slider Images */}
                  <div 
                    className="sqs-wrapper flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 40}%)` }}
                  >
                    {images.map((src, index) => (
                      <div key={index} className="flex-shrink-0 w-2/5 h-full">
                        <img 
                          className="w-full h-full object-cover" 
                          src={`${src}?format=500w`} 
                          alt={`Gallery image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Gallery Controls */}
                  <div className="sqs-gallery-meta-container">
                    <div className="sqs-gallery-controls">
                      <button
                        tabIndex={0}
                        className="previous absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h6-3 shadow-lg transition-all"
                        aria-label="Previous Slide"
                        onClick={handlePrevious}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        tabIndex={0}
                        className="next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h6-3 shadow-lg transition-all"
                        aria-label="Next Slide"
                        onClick={handleNext}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brunch Intro */}
            <div className="brunch-intro">
              <h2 className='py-4 mt-4' style={{color: 'var(--verde-heading)'}}>Sunday Brunch at Verde NYC</h2>
              <h6 className='text-[#948E84]'>Sundays at <span>Verde NYC</span> are meant to be savored. From noon to 5pm, indulge in an elevated brunch experience where Mediterranean elegance meets celebration. Set in the heart of the <a href="https://www.google.com/maps/place/Verde+NYC" target="_blank">Meatpacking District</a>, <a href="https://www.verde-nyc.com" target="_blank">Verde NYC&apos;s</a> Sunday brunch unfolds in a sun-drenched, transportive atmosphere, brought to life with live music and vibrant energy. Thoughtfully curated flavors, artful presentation, and a refined yet festive ambiance transform brunch into an unforgettable lifestyle experience.</h6>
            </div>

            <hr className="section-divider" />

            {/* Buffet Image Card */}
            <div className="brunch-image-card right">
              <div className="image-card-image">
                <Image 
                  src="/images/RA_Verde_Bar2_RV6_250317.jpg"
                  alt="brunch buffet layout inside MILA with an assortment of foods and drinks"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3 className='text-[#3A363A]'><span>Elevated buffet stations</span></h3>
                <h6 className='text-[#948E84]'>Guests are invited to explore a curated selection of chef-driven dishes over a two-hour experience, moving freely between artfully designed stations and composing their own journey of flavors.</h6>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Description Text */}
            <div className="brunch-description">
              <h6 className='text-[#948E84]'>Begin your MediterrAsian Brunch with a refined bakery selection of freshly baked croissants and seasonal tropical fruits, followed by an artful display of cured meats, artisanal cheeses, and handcrafted breads.</h6>
              <h6 className='text-[#948E84]'>At the center of the experience, a <span>5J Jamón carving station</span> offers premium cuts carved to perfection, alongside curated salads and a vibrant <span>Sushi and Temaki Handroll Station</span>. Guests can also enjoy a Raw Bar with freshly shucked oysters and a Mezze station highlighted by Verde NYC&apos;s signature eggplant caviar. On the <span>outdoor rooftop bar</span>, the experience expands with a live <span>Robata grill</span> and a dedicated <span>Spritz station</span>, adding a sun-soaked, aperitivo-inspired energy.</h6>
              <h6 className='text-[#948E84]'>The brunch concludes with an indulgent dessert display, featuring chef-crafted sweets and a <span>Gelato Station</span> for a refreshing finish.</h6>
            </div>

            <hr className="section-divider" />

            {/* Cocktail Image Card */}
            <div className="brunch-image-card left">
              <div className="image-card-image">
                <Image
                  src="/images/RA_Verde_Main3_RV6_250317.jpg"
                  alt="refreshing brunch cocktail in a glass with a pink fan in the background"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3 className='text-[#3A363A]'><span>Beverage Package</span></h3>
                <h6 className='text-[#948E84]'>Our packages include:</h6>
                <h6 className='text-[#948E84]'><span>A non-alcoholic package featuring refreshing mocktails</span> crafted with the freshest ingredients, and <span>Champagne and Rose Packages</span> with premium champagne and luxury cocktails offerings.</h6>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Hours Section */}
            <div className="brunch-hours">
              <h3 style={{color: 'var(--verde-heading)'}}>Hours</h3>
              <h6 className='text-[#948E84]'>Sunday | Noon - 5:00 PM</h6>
              <h6 className='text-[#948E84]'><a href="https://maps.app.goo.gl/fqeZH3QPWLxBZFXY7" target="_blank">Get Directions - 85 10th Avenue, New York City</a></h6>
            </div>

            <div className="button-center">
              <Link
                href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"
                className="text-[#948E84]"
                target="_blank"
              >
                Reserve Your Experience
              </Link>
            </div>

            <div className="brunch-menu-section">
              <h3><span className='text-[#948E84]'>Sunday Brunch Menu</span></h3>
              <div className="button-center">
                <Link href="/restaurant" className="text-[#948E84]">
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
