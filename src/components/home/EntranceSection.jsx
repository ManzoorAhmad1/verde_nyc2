'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const EntranceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-padding bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-3 sm:space-y-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl block mb-2">Ambiance Chic</span>
               & Épicurienne
              </h2>

              <img
                src="/images/EntranceSectionTombImage.png"
                alt="Tête"
                className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto flex-shrink-0"
              />
            </div>

            <p className="text-sm sm:text-base md:text-lg text-black/75 max-w-3xl mx-auto leading-relaxed text-instrument text-primary">
              Soak up the beautiful weather and enjoy your meal on our outdoor terrace, where stunning views of the Arabian Gulf create the perfect backdrop for a truly unforgettable dining experience.
            </p>

            <div className="pt-2">
              <Button
                fill='#9b73a3' stroke='white' className="text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
              >
                <span>ABOUT US</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/VERDE-DUBAI-VENUE_0018__40A8522.jpg.jpg"
                alt="Restaurant Interior"
                className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 -rotate-45 opacity-20 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntranceSection;