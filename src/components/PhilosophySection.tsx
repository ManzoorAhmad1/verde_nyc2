import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { blurDataURLDark } from '@/lib/imageUtils'

interface PhilosophySectionProps {
  section?: {
    heading?: string;
    images?: string[];
    items?: Array<{
      name: string;
      description: string;
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
}

function PhilosophySection({ section }: PhilosophySectionProps) {
  // Default values if no section provided
  const heading = section?.heading || 'Our Philosophy';
  const textureImage = section?.images?.[0] || '';
  const artImage = section?.images?.[1] || 'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8425.jpg';
  const items = section?.items || [];
  const ctaText = section?.ctaText || 'CONTACT US';
  const ctaLink = section?.ctaLink || '/contact';
  
  // Extract parts from items array
  const philosophyPart1 = items[0]?.description || 'The Yeeels Group was founded on a singular vision: to become the global leader in high-end festive dining...';
  const philosophyPart2 = items[1]?.description || 'Our three pillars—Food, Tribe, and Stories—define everything we do...';
  const artCultureTitle = items[2]?.description || 'ART & Culture';
  const artPart1 = items[3]?.description || 'The Yeeels Group has always believed that exceptional dining spaces require exceptional artistry...';
  const artPart2 = items[4]?.description || 'At Verde NYC, Japanese Wabi-Sabi philosophy meets Mediterranean warmth...';
  const artPart3 = items[5]?.description || 'For collaboration inquiries, contact us at pr@yeeels.com';
  
  return (
    <div className="philosophy-wrapper">
      {/* Philosophy Section */}
      <section className="bg-mila-dark py-32 px-6 min-h-screen flex flex-col justify-center overflow-hidden sticky top-0">
        {textureImage && (
          <Image
            src={textureImage}
            alt="Texture Background"
            fill
            className="object-cover object-center opacity-50"
            sizes="100vw"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURLDark}
            loading="lazy"
          />
        )}
        <div className="relative z-10 text-white">
          <h2 className="section-heading">{heading}</h2>
          <div className="philosophy-grid">
            <p style={{ color: 'var(--verde-text)' }}>
              {philosophyPart1}
            </p>
            <p style={{ color: 'var(--verde-text)' }}>
              {philosophyPart2}
            </p>
          </div>
        </div>
      </section>
      {/* Art Culture Section */}
      <section id="art-culture-mila" className="art-section relative z-50">
        <div className="art-image relative">
          <Image
            src={artImage}
            alt="Verde NYC Art Culture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURLDark}
            loading="lazy"
          />
        </div>
        <div className="art-content" style={{ color: 'var(--verde-text)' }}>
          <h2 style={{ color: 'var(--verde-heading)' }}>{artCultureTitle}</h2>
          <p>{artPart1}</p>
          <p>{artPart2}</p>
          <p>{artPart3}</p>
          <Link href={ctaLink} className="whitespace-nowrap w-40 bg-white border-[#8e402f] hover:bg-[#8e402f] btn btn-primary mt-6">
            {ctaText}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PhilosophySection