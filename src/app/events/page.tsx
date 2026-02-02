'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import HeroSection from '@/components/home/heroSection';

interface EventItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const eventsData: EventItem[] = [
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
        description: "Verde NYC offers a truly unparalleled party experience, blending exquisite dishes, fine champagnes, and breathtaking shows. Located in the district of meatpacking, this haven of glittering luxury embodies unbridled opulence. Its vibrant nightlife has solidified Verde's position as one of the top ten nightlife destinations in the world!",
        image: "/images/verde-lifestyle-6.jpg",
    }
];

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (event: EventItem) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    return (
        <>
            <HeroSection />

            <section className="relative z-10 section-padding bg-white text-black shadow-[0_-20px_60px_rgba(0,0,0,0.15)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* Header */}
                    <div className="mb-8 md:mb-12 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-instrument leading-tight mb-4">
                            Weekly Events at Verde NYC
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
                            Experience unforgettable nights with live performances, exquisite dining, and exclusive entertainment
                        </p>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {eventsData.map((event) => (
                            <div
                                key={event.id}
                                className="group flex flex-col cursor-pointer"
                                onClick={() => openModal(event)}
                            >
                                <div className="overflow-hidden rounded-lg mb-4 sm:mb-6">
                                    <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                        {/* Click Indicator */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                            <div className="bg-white rounded-full p-4 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-1 space-y-3 sm:space-y-4">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-instrument text-primary group-hover:text-[#9b73a3] transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-sm sm:text-base md:text-lg text-black/75 leading-relaxed text-instrument flex-1 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <div className="pt-4">
                                        <Button
                                            fill='#9b73a3' stroke='white' className="text-white font-semibold"
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

            {/* Modal */}
            {isModalOpen && selectedEvent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 "
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col border-4 border-white/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div className="h-full flex flex-col">
                            {/* Image Container */}
                            <div className="relative w-full h-1/2 flex-shrink-0">
                                <img
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-contain"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
                            </div>

                            {/* Event Details */}
                            <div className="flex-1 p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 overflow-hidden flex flex-col">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-instrument font-semibold text-primary">
                                    {selectedEvent.title}
                                </h2>
                                
                                <p className="text-sm sm:text-base md:text-lg text-black/75 leading-relaxed text-instrument flex-1 line-clamp-3 ">
                                    {selectedEvent.description}
                                </p>

                                <div className=" flex flex-wrap gap-4">
                                    <Button
                                        fill='#9b73a3' stroke='white' className="text-white font-semibold"
                                    >
                                        <span>Book Your Table</span>
                                    </Button>
                                    <Button
                                        fill='white' stroke='black' className="text-black font-semibold"
                                    >
                                        <span>Learn More</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EventsPage;
