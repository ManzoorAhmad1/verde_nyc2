
import React from 'react';
import { INSTAGRAM_POSTS } from './constant';

const InstagramSection: React.FC = () => {
  return (
    <section id="insta" className="section py-16 px-4 md:px-8 relative bg-[#f3ede2]" style={{ zIndex: 50 }}>
      <div className="max-w-7xl mx-auto">
        <h3 className="font-sm text-center text-black/50 mb-10 tracking-[0.4em] text-[20px]">
          FOLLOW US ON INSTAGRAM{' '}
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @VERDEY_NYC
          </a>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4553-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4575-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4610-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4697-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4726-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4761-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4823-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
          <a
            href="https://www.instagram.com/verde_nyc?igsh=MXdlN2R5NmUxdXRiaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item relative block aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              loading="lazy" decoding="async" src="/gallery/40A4947-verde-newyork-750x750.jpg"
              alt="Instagram post"
              className="object-cover w-full h-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
