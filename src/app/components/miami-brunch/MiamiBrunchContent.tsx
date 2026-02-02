// sections/MiamiBrunchContent.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const MiamiBrunchContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      src: "/images/40A5026-verde-newyork-750x750.jpg",
      alt: "Verde NYC Brunch",
    },
    {
      src: "/images/Legends-verde-dubai-8354-750x750.jpg",
      alt: "Verde NYC Dessert",
    },
    {
      src: "/images/Legends-verde-dubai-8406.jpg",
      alt: "Verde NYC Dining",
    },
    {
      src: "/images/40A4867-750x750.jpg",
      alt: "Verde NYC Food",
    },
    {
      src: "/images/40A5026-verde-newyork-750x750.jpg",
      alt: "Verde NYC Brunch",
    },
    {
      src: "/images/Legends-verde-dubai-8354-750x750.jpg",
      alt: "Verde NYC Brunch Dish",
    },
    {
      src: "/images/40A4867-750x750.jpg",
      alt: "Verde NYC brunch cocktail on a table with assorted foods in the background",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="miami-brunch-content" className="Index-page py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Gallery Slider */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="sqs-gallery-container sqs-gallery-block-slider sqs-gallery-has-controls sqs-gallery-block-show-meta relative overflow-hidden" style={{ paddingBottom: '31.3675%' }}>
              <div className="sqs-gallery sqs-gallery-design-strip relative">
                <div className="sqs-wrapper flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {galleryImages.map((image:any, index) => (
                    <div key={index} className="thumb-image sqs-gallery-design-strip-slide flex-shrink-0 w-full">
                      <img
                        data-src={image.src}
                        data-image={image.src}
                        alt={image.alt}
                        className="w-full h-auto"
                        src={image.src}
                        srcSet={image.srcSet}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Controls */}
              <div className="sqs-gallery-controls show-hover-effect absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
                <button
                  onClick={prevSlide}
                  className="previous w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous Slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="next w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next Slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">Best Brunch in New York, FL</h2>
            <p className="text-gray-700 mb-4">
              Sundays at <strong>Verde NYC</strong> are meant to be savored. A time to unwind, connect, and indulge in an elevated brunch ritual where Mediterranean warmth meets Asian precision. Set high above <Link href="https://www.google.com/maps/place/Verde NYC/@25.790219,-80.1367331,1017m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88d9b485dbbfffff:0xb35569e33c3a935c!8m2!3d25.790219!4d-80.1367331!16s%2Fg%2F11j4vsp04r?entry=ttu&amp;g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-primary hover:underline">New York</Link>, <Link href="https://www.Verde NYC-miami.com" target="_blank" className="text-primary hover:underline">Verde NYC's</Link> Sunday brunch unfolds in a sun-drenched, transportive atmosphere, brought to life with live music that sets the rhythm for the afternoon. Thoughtfully curated flavors, artful presentation, and a vibrant yet refined energy transform brunch into an immersive lifestyle experience.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Buffet Image Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <img
                  data-stretch="false"
                  data-src="/images/Legends-verde-dubai-8354-750x750.jpg"
                  data-image="/images/Legends-verde-dubai-8354-750x750.jpg"
                  alt="brunch buffet layout inside Verde NYC with an assortment of foods and drinks"
                  className="w-full h-auto rounded-lg"
                  src="/images/Legends-verde-dubai-8354-750x750.jpg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="text-xl font-bold mb-4">Elevated buffet stations</h3>
                <p className="text-gray-700">
                  Guests are invited to explore a curated selection of chef-driven dishes over a two-hour experience, moving freely between artfully designed stations and composing their own journey of flavors.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Buffet Description */}
          <div className="mb-12">
            <p className="text-gray-700 mb-4 text-center">
              Begin your MediterrAsian Brunch with a refined bakery selection of freshly baked croissants and seasonal tropical fruits, followed by an artful display of cured meats, artisanal cheeses, and handcrafted breads.
            </p>
            <p className="text-gray-700 mb-4">
              At the center of the experience, a <strong>5J Jamón carving station</strong> offers premium cuts carved to perfection, alongside curated salads and a vibrant <strong>Sushi and Temaki Handroll Station</strong>. Guests can also enjoy a Raw Bar with freshly shucked oysters and a Mezze station highlighted by Verde NYC's signature eggplant caviar. On the <strong>outdoor rooftop bar</strong>, the experience expands with a live <strong>Robata grill</strong> and a dedicated <strong>Spritz station</strong>, adding a sun-soaked, aperitivo-inspired energy.
            </p>
            <p className="text-gray-700">
              The brunch concludes with an indulgent dessert display, featuring chef-crafted sweets and a <strong>Gelato Station</strong> for a refreshing finish.
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Cocktail Image Section */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  data-stretch="false"
                  data-src="/images/40A4867-750x750.jpg"
                  data-image="/images/40A4867-750x750.jpg"
                  alt="refreshing brunch cocktail in a glass with a pink fan in the background"
                  className="w-full h-auto rounded-lg"
                  src="/images/40A4867-750x750.jpg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Beverage Package</h3>
                <p className="text-gray-700 mb-2">Our packages include:</p>
                <p className="text-gray-700">
                  <strong>A non-alcoholic package featuring refreshing mocktails</strong> crafted with the freshest ingredients, and <strong>Champagne and Rose Packages</strong> with premium champagne and luxury cocktails offerings.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-300" />

          {/* Hours and Reservation Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-normal mb-6">Hours</h3>
            <p className="text-gray-700 mb-4">Sunday | 11:30 AM - 2:30 PM</p>
            <p className="mb-8">
              <Link 
                href="https://maps.app.goo.gl/fqeZH3QPWLxBZFXY7" 
                target="_blank" 
                className="text-primary hover:underline"
              >
                Get Directions
              </Link>
            </p>

            {/* Reserve Button */}
            <div className="mb-8">
              <a 
                href="https://www.opentable.com/r/Verde NYC-miami-restaurant-reservations-miami-2?restref=1054648&amp;lang=en-US&amp;ot_source=Restaurant%20website" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Reserve Your Experience
              </a>
            </div>

            {/* Menu Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Sunday Brunch Menu</h3>
              <div>
                <Link 
                  href="/restaurant" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Explore Our Menus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiamiBrunchContent;
