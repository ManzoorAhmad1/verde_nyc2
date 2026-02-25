'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      <Link href="/" className="header-logo-link relative w-[80px] h-[30px]">
        <Image
          src={scrolled ? 'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-green-removebg-preview.png' : 'https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-white.png'}
          alt="Verde NYC"
          fill
          className="object-contain header-logo"
          priority
        />
      </Link>
      
    </header>
  );
}
