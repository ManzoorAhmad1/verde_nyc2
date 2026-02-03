'use client';

import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: "VALENTINE'S DAY", href: '/valentines-day' },
  { label: 'RESTAURANT', href: '/restaurant' },
  { label: 'BRUNCH', href: '/miami-brunch' },
  { label: 'VERDE LOUNGE', href: '/milalounge' },
  { label: 'VERDE OMAKASE', href: '/milaomakase' },
  { label: 'MM MEMBERS CLUB', href: '/membersclub' },
  { label: 'PRIVATE EVENTS', href: '/private-events' },
  { label: 'CONTACT', href: '/contact' },
];

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <>
      {/* Top Header Bar with Reservations and Menu Icon */}
      <div className="top-header-bar">
        {/* Reservations Button - Left of Menu Icon */}
        <Link href="/reserve" className="header-reservations-btn">
          RESERVATIONS
        </Link>

        {/* Menu Icon Button */}
        <button
          className={`menu-icon-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
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
            <a
              href="https://www.rivieradininggroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-nav-item"
              onClick={() => setIsOpen(false)}
            >
              OUR BRANDS
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
