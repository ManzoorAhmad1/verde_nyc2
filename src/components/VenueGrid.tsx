
import React from 'react';
import Image from 'next/image';
import { VENUES } from './constant';
import { blurDataURLDark } from '@/lib/imageUtils';

interface VenueGridProps {
  venues?: any[];
  textureImage?: string;
  heading?: string;
  subheading?: string;
  content?: string;
}

const VenueGrid: React.FC<VenueGridProps> = ({ 
  venues = VENUES, 
  textureImage = "/mila-miami-texture.png",
  heading = "Where Parisian Craft Meets New York Soul",
  subheading = "A YEEELS GROUP DESTINATION — Paris | Saint-Tropez | Dubai | Sardinia | New York",
  content
}) => {
  // Parse content - handle both line breaks and special markers
  let paragraphs: string[] = [];
  
  if (content) {
    // First try to split by double line breaks
    const splitByDouble = content.split(/\n\n+/).filter(p => p.trim());
    
    if (splitByDouble.length > 1) {
      paragraphs = splitByDouble;
    } else {
      // If no double breaks, try single breaks
      const splitBySingle = content.split(/\n/).filter(p => p.trim());
      if (splitBySingle.length > 1) {
        paragraphs = splitBySingle;
      } else {
        // If still one paragraph, use it as is
        paragraphs = [content.trim()];
      }
    }
  } else {
    // Default paragraphs
    paragraphs = [
      'Verde NYC is the latest jewel in the Yeeels Group crown—an international hospitality collective celebrated for curating unforgettable culinary destinations across Europe, the Middle East, and now, in the heart of Manhattan.',
      'Verde brings Parisian soul to New York\'s vibrant streets. Here, French culinary tradition is reimagined with contemporary elegance—each dish reflects precision, passion, and the art of celebration.',
      'Step into a world of intimate charm and metropolitan energy, where every moment is crafted for connection and savor. From thoughtfully designed tasting journeys to vibrant lounge evenings and exclusive dining experiences, Verde invites you to dine beyond the expected.',
      'Paris on the plate. New York in the room'
    ];
  }
  
  return (
    <div>
      <section className=" bg pt-8 pb-4 px-6 relative">
        <div className="w-full mt-20 relative z-10">
          <h3 className="section-title font-bold">{subheading}</h3>
          <h2 className="section-heading font-normal">{heading}</h2>

          {paragraphs.map((para, idx) => {
            const isLast = idx === paragraphs.length - 1;
            return (
              <p 
                key={idx} 
                className={`section-text mb-8 ${isLast ? 'italic' : ''}`}
              >
                {para.trim()}
              </p>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {venues.map((venue: any, idx: number) => (
            <a
              key={venue.id || idx}
              href={venue.link || '#'}
              className="group relative block aspect-[16/9] overflow-hidden"
            >
              <Image
                src={venue.image}
                alt={venue.name || venue.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                unoptimized
                placeholder="blur"
                blurDataURL={blurDataURLDark}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-10 opacity-100 group-hover:bg-[#450a0a]/80 transition-colors duration-500">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-playfair uppercase tracking-[0.1em] mb-0 group-hover:mb-2 md:group-hover:mb-4 text-white transition-all duration-500 will-change-[margin, opacity]">
                  {venue.name || venue.title}
                </h3>
                <p className="text-xs md:text-sm text-white opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 max-w-2xl">
                  {venue.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VenueGrid;
