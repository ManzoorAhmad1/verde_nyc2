'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'MENU', href: '/menu' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'FESTIVE DINING', href: '/festive-dining' },
  { label: 'RESTAURANT', href: '/restaurant' },
  { label: 'BAR', href: '/bar' },
  { label: 'CONTACT', href: '/contact' },
];

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  
  const isDarkForeground = scrolled || isContactPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isOpen]);
  return (
    <>
      {/* Top Header Bar with Reservations and Menu Icon */}
      <div className={`top-header-bar${scrolled ? ' top-header-bar--scrolled' : ''}`}>
        {/* Reservations Button - Left of Menu Icon - Hidden when menu is open */}
        <Link 
          href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" 
          target="_blank" 
          className={`${isOpen ? 'hidden' : ''} ${isDarkForeground ? 'header-reservations-btn-scrolled' : 'header-reservations-btn'} hover:bg-black hover:text-white transition-colors`}
        >
          RESERVATIONS
        </Link>

        {/* Menu Icon Button */}
        <button
          className={`menu-icon-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={` ${isDarkForeground ? 'bg-black text-black' : 'bg-white'}`} />
          <span className={` ${isDarkForeground ? 'bg-black text-black' : 'bg-white'}`} />
          <span className={` ${isDarkForeground ? 'bg-black text-black' : 'bg-white'}`} />
        </button>
      </div>

      {/* Full Screen Overlay Menu - Slides from Top */}
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        {/* Navigation Panel */}
        <div className="menu-overlay-nav">
          {/* Close Button */}
          <button
            className="menu-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Reservations Button in Menu */}
          <div className="flex justify-center mt-12 mb-12">
            <Link 
              href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" 
              target="_blank"
              className="menu-reservations-btn hover:bg-black hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              RESERVATIONS
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="menu-nav-links items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="menu-nav-item text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
