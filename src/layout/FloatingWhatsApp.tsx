'use client';

import { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { X, Calendar } from 'lucide-react';

const FloatingWhatsApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = '+16467763660';
    const whatsappNumber = '+16466630837';
    const reservationUrl = 'https://resy.com/cities/ny/verde-nyc';

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
        window.open(url, '_blank');
    };

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleReservationClick = () => {
        window.open(reservationUrl, '_blank');
    };

    return (
        <>
            {/* Options Menu */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 animate-slideUp">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 space-y-3 border border-primary/20">
                        {/* WhatsApp Option */}
                        <button
                            onClick={handleWhatsAppClick}
                            className="flex items-center gap-3 w-full p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 group"
                        >
                            <div className="bg-[#25D366] p-2 rounded-full group-hover:scale-110 transition-transform">
                                <FaWhatsapp className="text-white text-xl" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-black">WhatsApp</p>
                                <p className="text-xs text-black/60">{whatsappNumber}</p>
                            </div>
                        </button>

                        {/* Call Option */}
                        <button
                            onClick={handleCallClick}
                            className="flex items-center gap-3 w-full p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 group"
                        >
                            <div className="bg-primary p-2 rounded-full group-hover:scale-110 transition-transform">
                                <FaPhone className="text-white text-xl" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-black">Call Us</p>
                                <p className="text-xs text-black/60">{phoneNumber}</p>
                            </div>
                        </button>

                        {/* Reservation Option */}
                        <button
                            onClick={handleReservationClick}
                            className="flex items-center gap-3 w-full p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 group"
                        >
                            <div className="bg-[#9b73a3] p-2 rounded-full group-hover:scale-110 transition-transform">
                                <Calendar className="text-white w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-black">Reservation</p>
                                <p className="text-xs text-black/60">Book a Table</p>
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {/* Main Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
                aria-label="Contact Options"
            >
                {isOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    <FaWhatsapp className="w-8 h-8 animate-pulse" />
                )}
            </button>
        </>
    );
};

export default FloatingWhatsApp;
