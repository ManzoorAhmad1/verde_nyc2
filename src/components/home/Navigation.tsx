'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MenuDropdown from '@/layout/MenuDropdown';
import { useRouter } from 'next/navigation';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const phoneNumber = '+16467763660';
  const whatsappNumber = '+16466630837';

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current page is gallery or dinner-party
  const isSpecialPage = () => {
    return pathname === '/gallery' || pathname === '/dinner-party';
  };

  // Navigation bar classes
  const getNavClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-2 transition-all duration-500";
    
    // Special pages: gallery and dinner-party - ALWAYS BLACK
    if (isSpecialPage()) {
      return `${baseClasses} bg-black/20 backdrop-blur-md border-b border-white/10`;
    }
    
    // Other pages: normal behavior
    if (isScrolled) {
      return `${baseClasses} bg-black/20 backdrop-blur-md border-b border-white/10`;
    }
    
    // Default: transparent
    return baseClasses;
  };

  // Text color
  const getTextColor = () => {
    return 'text-white';
  };

  // Button styles
  const getButtonStyle = () => {
    if (isSpecialPage()) {
      // Special pages - stronger glass effect
      return 'bg-white/20 hover:bg-white/30 border-white/30 hover:border-white/50 backdrop-blur-md text-white shadow-md';
    }
    
    if (isScrolled) {
      return 'bg-white/15 hover:bg-white/25 border-white/20 hover:border-white/40 backdrop-blur-sm text-white';
    }
    
    return 'bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/30 backdrop-blur-sm text-white';
  };

  // Icon colors
  const getWhatsAppIconColor = () => {
    if (isSpecialPage()) {
      return 'text-white';
    }
    return 'text-white';
  };

  // Get button fill color
  const getButtonFillColor = () => {
    if (isSpecialPage()) {
      return 'white'; // Solid white on special pages
    }
    return isScrolled ? 'white' : 'white';
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className={getNavClasses()}>
        <div className="max-w-screen-2xl mx-auto overflow-x-hidden">
          {/* Mobile Layout - 2 rows */}
          <div className="flex md:hidden flex-col gap-3">
            {/* First Row - Menu and Logo */}
            <div className="flex items-center justify-between px-2">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0"
              >
                <p className={`text-xs xs:text-sm font-medium  text-white transition-colors duration-300 ${getTextColor()}`}>
                  MENU
                </p>
              </button>

              <Link href="/" className="logo-wrapper flex-shrink-0">
                <Logo className={`w-20 xs:w-24 h-auto transition-colors duration-300 ${getTextColor()}`} />
              </Link>
            </div>

            {/* Second Row - Phone Numbers and Button */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-2">
              {/* WhatsApp Number */}
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center self-center gap-1 px-2 xs:px-3 py-1.5 xs:py-2 rounded-full transition-all duration-300 flex-shrink-0 border shadow-md ${getButtonStyle()}`}
              >
                <FaWhatsapp className={`text-xs xs:text-xl transition-colors duration-300 ${getWhatsAppIconColor()}`} />
                <span className={`text-[9px] xs:text-[10px] font-medium transition-colors duration-300 hidden xs:inline ${getTextColor()}`}>
                  WhatsApp
                </span>
              </a>

              {/* Phone Number */}
              <a
                href={`tel:${phoneNumber}`}
                className={`flex items-center justify-center self-center gap-1 px-2 xs:px-3 py-1.5 xs:py-2 rounded-full transition-all duration-300 flex-shrink-0 border shadow-md ${getButtonStyle()}`}
              >
                <FaPhone className={`text-xs xs:text-md transition-colors duration-300 ${getTextColor()}`} />
                <span className={`text-[9px] xs:text-[10px] font-medium transition-colors duration-300 hidden xs:inline ${getTextColor()}`}>
                  Call
                </span>
              </a>

              {/* Reservation Button */}
              <Button 
                fill={getButtonFillColor()} 
                stroke='black'
                className={`cursor-pointer font-semibold text-[10px] xs:text-xs px-2 xs:px-3 py-1.5 xs:py-2 ${
                  isSpecialPage() 
                    ? 'text-white border-white/60 hover:border-white shadow-md' 
                    : 'text-white border-white/30 hover:border-white'
                }`}
              >
                <span className="whitespace-nowrap text-black">Reservation</span>
              </Button>
            </div>
          </div>

          {/* Desktop Layout - 1 row */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center space-x-2 min-w-[80px] flex-shrink-0"
            >
              <p className={`text-sm lg:text-base font-medium transition-colors duration-300  text-white ${getTextColor()}`}>
                MENU
              </p>
            </button>

            {/* Phone Numbers and Button */}
            <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
              {/* Logo */}
              <Link href="/" className="logo-wrapper flex-shrink-0 md:mr-32 lg:mr-20">
                <Logo className={`w-28 h-auto transition-colors duration-300 text-black ${getTextColor()}`} />
              </Link>
              
              {/* WhatsApp Number */}
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center self-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 rounded-full transition-all duration-300 border shadow-md ${getButtonStyle()}`}
              >
                <FaWhatsapp className={`text-sm lg:text-xl transition-colors duration-300 ${getWhatsAppIconColor()}`} />
                <span className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${getTextColor()}`}>
                  {whatsappNumber}
                </span>
              </a>

              {/* Phone Number */}
              <a
                href={`tel:${phoneNumber}`}
                className={`flex items-center justify-center self-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 rounded-full transition-all duration-300 border shadow-md ${getButtonStyle()}`}
              >
                <FaPhone className={`text-sm lg:text-lg transition-colors duration-300 ${getTextColor()}`} />
                <span className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${getTextColor()}`}>
                  {phoneNumber}
                </span>
              </a>

              {/* Reservation Button */}
              <Button fill='white' stroke='black' className="text-black cursor-pointer font-semibold text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 "
                onClick={() => router.push('/menu')}
              >
                <span className="whitespace-nowrap">Reservation</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <MenuDropdown onClose={() => setIsMenuOpen(false)} isOpen={isMenuOpen} />
      )}
    </>
  );
};

export default Navigation;