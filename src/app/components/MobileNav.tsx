'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: "VALENTINE'S DAY", href: '/valentines-day' },
  { label: 'RESTAURANT', href: '/restaurant' },
  { label: 'BRUNCH', href: '/miami-brunch' },
  { label: 'MM MEMBERS CLUB', href: '/membersclub' },
  { label: 'PRIVATE EVENTS', href: '/private-events' },
  { label: 'CONTACT', href: '/contact' },
];

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* Top Header Bar with Reservations and Menu Icon */}
      <div className="top-header-bar">
        {/* Reservations Button - Left of Menu Icon */}
        <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className={` ${scrolled ? 'text-black border border-black px-4 py-2' : 'header-reservations-btn'}`}>
          RESERVATIONS
        </Link>

        {/* Menu Icon Button */}
        <button
          className={`menu-icon-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={` ${scrolled ? 'bg-black text-black' : 'bg-white'}`} />
          <span className={` ${scrolled ? 'bg-black text-black' : 'bg-white'}`} />
          <span className={` ${scrolled ? 'bg-black text-black' : 'bg-white'}`} />
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

          {/* Navigation Links */}
          <nav className="menu-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="menu-nav-item"
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
