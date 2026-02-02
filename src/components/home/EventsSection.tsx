'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const eventsData = [
  {
    id: 1,
    title: "Every Wednesday",
    description: "brings Paris back to New York And his vision of the party, the places available these evenings are rare! The number 1 party dinner actually in Dubai, and very soon in New York City",
    image: "/images/Decadence-verde-dubai-0653.jpg",
  },
  {
    id: 2,
    title: "Every Thurday",
    description: "Immerse yourself in the Futur & Glam Chic Dinner & Party Experience, featuring a Cyber Queen Show & Live Performance, all set in a mesmerizing atmosphere of futuristic elegance. Enjoy the finest Champagne & Caviar as you revel in a night of luxury and spectacle",
    image: "/images/Legends-verde-dubai-8354.jpg",
  },
  {
    id: 3,
    title: "FESTIVE EXPERIENCE",
    description: "Verde NYC offers a truly unparalleled party experience, blending exquisite dishes, fine champagnes, and breathtaking shows. Located in the district of meatpacking, this haven of glittering luxury embodies unbridled opulence. Its vibrant nightlife has solidified Verde’s position as one of the top ten nightlife destinations in the world!",
    image: "/images/verde-lifestyle-6.jpg",
  }
];

const EventsSection = () => {
const router =useRouter()

  return (
    <>
    <section className="section-padding bg-white text-black shadow-[0_-20px_60px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 sm:gap-4">
            <h2 className="flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-instrument leading-tight">
              Weakly Events at verdey Nyc
            </h2>
{/* 
            <img
              src="/images/eventSectionMultiCandlesImage.png"
              alt="Events Graffiti"
              className="w-16 sm:w-20 md:w-24 h-auto"
            /> */}
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 group"
          >
            <span className="text-lg sm:text-xl md:text-2xl text-primary group-hover:text-primary-light transition-colors flex items-center gap-2 sm:gap-3">
              ALL EVENTS
              <span className="text-2xl sm:text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
          {eventsData.map((event: any) => (
            <div
              key={event.id}
              className="group flex flex-col"
            >
              <div className="overflow-hidden rounded-lg mb-4 sm:mb-6">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="flex flex-col flex-1 space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-instrument text-primary group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="text-base sm:text-lg md:text-xl text-primary uppercase tracking-wider">
                  {event.date}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-black/75 max-w-3xl mx-auto text-instrument text-instrument flex-1">
                  {event.description}
                </p>

                <div className="pt-4">
                  <Button
                    fill='#9b73a3' stroke='white' className="text-white font-semibold cursor-pointer"
                    onClick={() => router.push('/events')}
                  >
                    <span>Book Now</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default EventsSection;