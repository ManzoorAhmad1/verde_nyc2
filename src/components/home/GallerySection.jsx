'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const galleryVideos = [
  {
    id: 1,
    poster: "/images/verde-lifestyle-1.jpg",
    image: "/images/verde-lifestyle-1.jpg"
  },
  {
    id: 2,
    poster: "/images/verde-lifestyle-11.jpg",
    image: "/images/verde-lifestyle-11.jpg"
  },
  {
    id: 3,
    poster: "/images/verde-lifestyle-8.jpg",
    image: "/images/verde-lifestyle-8.jpg"
  }
];

const GallerySection = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-padding bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
            <img
              src="/images/gallerySectionCandle.png"
              alt="Candle Holder"
              className="w-12 sm:w-14 md:w-16 h-auto hidden lg:block"
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-instrument text-center leading-tight">
              <span className="text-filmotype text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">Gallery:</span> Moments
              <br />
              that <span className="text-filmotype text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">Mesmerize</span>
            </h2>

            <img
              src="/images/gallerySectionCandle.png"
              alt="Candle Holder"
              className="w-12 sm:w-14 md:w-16 h-auto hidden lg:block"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8">
          {galleryVideos.map((video, index) => (
            <Link
              key={video.id}
              href="/gallery"
              className={`group relative overflow-hidden rounded-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                <img
                  src={video.image}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* View icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-xl sm:text-2xl">+</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="text-center">
          <Link href="/gallery" className="inline-block">
            <Button
              fill='#9b73a3' stroke='white' className="text-white font-semibold"
            >
              <span>VIEW GALLERY</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;