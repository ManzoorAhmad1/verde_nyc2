'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function MiamiBrunchPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "/images/_40A8504.jpg",
    "/images/_40A8506.jpg",
    "/images/_40A8507.jpg",
    "/images/_40A8510.jpg",
    "/images/_40A8511.jpg",
    "/images/_40A8513.jpg",
    "/images/_40A8514.jpg"
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
            <img
              loading="eager" decoding="async" fetchPriority="high" src="/images/_40A8503.jpg"
              alt="Verde NYC Brunch"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }}
            />
          </div>
          <div className="banner-content w-full">
            <h1>Verde NYC brunch</h1>
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
              <h2 className='py-4 mt-4' style={{color: 'var(--verde-heading)'}}>The Yeeels Group Sunday brunch experience</h2>
              <p className='text-[#948E84] text-center mb-4'>From Saint-Tropez beach clubs to Parisian terraces, Sunday at the Yeeels Group has always been sacred. At <span>Verde NYC</span>, we bring this celebrated tradition to New York—a midday celebration where Mediterranean elegance meets Manhattan sophistication. From noon to 5pm in the sun-drenched splendor of our <a href="https://www.google.com/maps/place/Verde+NYC" target="_blank">Meatpacking District</a> rooftop, indulge in a transportive experience brought to life with live music, curated cocktails, and the festive energy that has made <a href="https://yeeels.com/en/" target="_blank">Yeeels Group</a> brunches legendary across Europe and the Middle East.</p>
            </div>

            <hr className="section-divider" />

            {/* Buffet Image Card */}
            <div className="brunch-image-card right">
              <div className="image-card-image">
                <img 
                  loading="lazy" decoding="async" src="/images/_40A8515.jpg"
                  alt="Verde NYC Sunday Brunch featuring chef-curated Mediterranean stations"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3 className='text-[#3A363A]'><span>Chef-curated Mediterranean stations</span></h3>
                <p className='!text-[#948E84] text-justify'>Inspired by the legendary brunch formats at our Saint-Tropez and Dubai venues, guests journey through artfully designed stations curated by chefs trained across our global kitchens. Each stop offers a distinct gastronomic chapter—compose your own Mediterranean narrative over a leisurely two-hour experience.</p>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Description Text */}
            <div className="brunch-description">
              <p className='text-[#948E84] text-justify mb-4'>Your journey begins with an exquisite bakery selection featuring freshly baked croissants from recipes perfected in our Parisian kitchens, alongside seasonal fruits sourced from Mediterranean growers and Hudson Valley farms. Continue to an artful display of Italian cured meats, French artisanal cheeses, and handcrafted breads from our in-house boulangerie.</p>
              <p className='text-[#948E84] text-justify mb-4'>At the heart of the experience, our <span>5J Jamón Ibérico carving station</span>—a tradition from our Spanish-influenced Dubai venue—offers premium cuts carved to perfection. Explore curated salads and a vibrant <span>Sushi and Temaki Handroll Station</span> showcasing fish flown daily from Japan. The Raw Bar features freshly shucked oysters from both coasts, while our Mezze station highlights Verde&apos;s signature eggplant caviar and Mediterranean spreads. On our celebrated <span>rooftop terrace</span>, a live <span>Robata grill</span> and dedicated <span>Spritz station</span> channel the aperitivo culture of our Italian venues.</p>
              <p className='text-[#948E84] text-justify mb-4'>The experience concludes with an indulgent dessert display featuring creations from our pastry team trained in Paris, capped by a <span>Gelato Station</span> offering flavors inspired by each of our global destinations.</p>
            </div>

            <hr className="section-divider" />

            {/* Cocktail Image Card */}
            <div className="brunch-image-card left">
              <div className="image-card-image">
                <img
                  loading="lazy" decoding="async" src="/images/_40A8519.jpg"
                  alt="Verde NYC signature brunch cocktails and Mediterranean beverages"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="image-card-content">
                <h3 className='text-[#3A363A]'><span>International beverage program</span></h3>
                <p className='!text-[#948E84] text-justify mb-4'>Our beverage packages reflect the Yeeels Group&apos;s expertise cultivated across Paris, Saint-Tropez, Dubai, and Italy:</p>
                <p className='!text-[#948E84] text-justify'><span>A thoughtfully crafted non-alcoholic program</span> featuring mocktails developed by our international mixology team, alongside <span>Champagne and Rosé packages</span> showcasing selections from our French suppliers—including houses that have partnered with us since our earliest Parisian days.</p>
              </div>
            </div>

            <hr className="section-divider" />

            {/* Hours Section */}
            <div className="brunch-hours">
              <h3 style={{color: 'var(--verde-heading)'}}>Hours & location</h3>
              <p className='text-[#948E84] text-center mb-2'>Sunday | Noon - 5:00 PM</p>
              <p className='text-[#948E84] text-center mb-2'><a href="https://maps.app.goo.gl/fqeZH3QPWLxBZFXY7" target="_blank">Get Directions — 85 10th Avenue, Meatpacking District, New York City</a></p>
              <p className='text-[#948E84] text-center mt-4'>Part of the Yeeels Group: Paris | Saint-Tropez | Dubai | Italy | New York</p>
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
              <h3><span className='text-[#948E84]'>Sunday brunch menu</span></h3>
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
