
import React from 'react';
import Image from 'next/image';
import { INSTAGRAM_POSTS } from './constant';

interface InstagramSectionProps {
  heading?: string;
  subheading?: string;
  images?: string[];
  ctaLink?: string;
}

const InstagramSection: React.FC<InstagramSectionProps> = ({
  heading = "FOLLOW US ON INSTAGRAM",
  subheading = "@VERDE_NYC",
  images = [],
  ctaLink = "https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
}) => {
  // Use provided images or fallback to default
  const displayImages = images.length > 0 ? images : [
    'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/gallery/40A4553-verde-newyork-750x750.jpg',
    'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/gallery/40A4575-verde-newyork-750x750.jpg',
    'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/gallery/40A4610-verde-newyork-750x750.jpg',
    'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/gallery/40A4697-verde-newyork-750x750.jpg',
    'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/gallery/40A4726-verde-newyork-750x750.jpg',
    'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/gallery/40A4761-verde-newyork-750x750.jpg'
  ];
  
  return (
    <section id="insta" className="section py-16 px-4 md:px-8 relative bg-[#f3ede2]" style={{ zIndex: 50 }}>
      <div className="max-w-7xl mx-auto">
        <h3 className="font-sm text-center text-black/50 mb-10 tracking-[0.4em] text-[20px]">
          {heading}{' '}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {subheading}
          </a>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayImages.map((img, idx) => (
            <a
              key={idx}
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`Instagram post ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
