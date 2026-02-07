'use client';

import { useState, useEffect } from 'react';
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
        <img
          loading="lazy" decoding="async" src={scrolled ? 'https://dm4kmpvzhijsu.cloudfront.net/images/logo-Verde-NYC-green-removebg-preview.png' : 'https://dm4kmpvzhijsu.cloudfront.net/images/logo-Verde-NYC-white.png'}
          alt="Verde NYC"
          width={80}
          height={30}
          className="header-logo"
        />
      </Link>
      
    </header>
  );
}
