'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo - Left Side */}
      <Link href="/" className="header-logo-link">
        <Image
          src={scrolled ? '/images/logo-Verde-NYC-green-removebg-preview.png' : '/images/logo-Verde-NYC-white.png'}
          alt="Verde NYC"
          width={80}
          height={30}
          className="header-logo"
          priority
        />
      </Link>
      
    </header>
  );
}
