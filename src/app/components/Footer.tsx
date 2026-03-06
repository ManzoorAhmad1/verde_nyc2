'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
      const res = await fetch(`${API_URL}/subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      let data: any = null;
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(text || 'Unexpected response');
      }
      if (!res.ok) throw new Error(data?.message || 'Unable to subscribe');
      setStatus('success');
      toast.success('Thanks for joining the Yeeels Group community.');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (err: any) {
      setStatus('error');
      toast.error(err?.message || 'Something went wrong.');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <>
      <footer className="bg-white text-black/55 py-14 px-6 lg:px-16">

      {/* Top Branding */}
      <div className="text-center mb-10 tracking-widest uppercase text-xs space-y-2">
        <span className='text-xs'>A Yeeels Group Destination</span>
        <p className="text-black/55 flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
          {['Paris', 'Saint-Tropez', 'Dubai', 'Sardinia', 'New York'].map((city, i, arr) => (
            <span key={city} className="flex items-center gap-x-4">
              <span className='text-xs'>{city}</span>
              {i < arr.length - 1 && <span className="text-black/20">|</span>}
            </span>
          ))}
        </p>
      </div>

      <hr className="border-black/10 mb-10 max-w-6xl mx-auto" />

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto flex flex-col  gap-12 md:gap-20 md:flex-col md:items-center md:justify-center lg:flex-row lg:gap-0">

        {/* Left – Logo & Address */}
        <div className="md:w-[28%] flex flex-col text-center md:text-left">
          <Link href="/">
            <img
              loading="lazy"
              src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-green.png"
              alt="Verde NYC"
              className="w-32 h-auto mx-auto md:mx-0"
            />
          </Link>
          <div className="text-sm leading-6 tracking-wide">
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Verde+NYC+85+10th+Ave+New+York+NY+10011"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              85 10th Avenue<br />
              Meatpacking District<br />
              New York, NY 10011
            </Link>
          </div>
          <Link
            href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search"
            target="_blank"
            className="text-sm underline underline-offset-4 hover:text-black transition-colors inline-block"
          >
            Hours &amp; Reservations
          </Link>
        </div>

        {/* Right – Nav + Newsletter */}
        <div className="flex-1 flex flex-col gap-8 justify-center items-start ">
          <div className='flex-1 flex flex-col gap-8 justify-center items-center  md:ml-[-38px]'>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-xs tracking-widest uppercase">
              {[
                { label: 'Menu', href: '/menu' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Dinner Party', href: '/dinner-party' },
                { label: 'Restaurant', href: '/restaurant' },
                { label: 'Bar', href: '/bar' },
                { label: 'Contact', href: '/contact' },
              ].map((item, i, arr) => (
                <span key={item.href} className="flex items-center gap-x-4">
                  <Link href={item.href} className="hover:text-black transition-colors whitespace-nowrap">
                    {item.label}
                  </Link>
                  {i < arr.length - 1 && <span className="text-black/20">|</span>}
                </span>
              ))}
            </nav>

            {/* Newsletter Text */}
            <div className="text-xs leading-6 text-center max-w-md mx-auto md:mx-0 md:text-left text-black/45 flex align-center justify-center flex-col">
              <p>Join the Yeeels Group community. Receive exclusive news, events, </p>
              <p className='text-center'>and invitations from all our venues worldwide</p>
              <p className='text-center'>We respect your privacy.</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-4 ">
              <div className="w-full flex flex-col items-center gap-3 sm:flex-row sm:items-end">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-b border-black/30 text-xs tracking-[0.2em] text-center sm:text-left focus:outline-none placeholder:text-black/30"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="text-[10px] whitespace-nowrap tracking-[0.4em] uppercase border border-black/40 px-6 py-2 hover:bg-black hover:text-white transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Submitting...' : 'Sign Up'}
                </button>
              </div>
           
            </form>
          </div>

        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Restaurant", "LocalBusiness"],
            "name": "Verde NYC - A Yeeels Group Venue",
            "image": [
              "https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-green.png"
            ],
            "url": "https://verde-nyc.com/",
            "telephone": "+16464068763",
            "priceRange": "$$$",
            "menu": "https://verde-nyc.com/restaurant",
            "servesCuisine": "Mediterranean, MediterrAsian",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "85 10th Avenue",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10011",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7424,
              "longitude": -74.0060
            },
            "parentOrganization": {
              "@type": "Organization",
              "name": "Yeeels Group",
              "url": "https://yeeels.com/en/"
            }
          })
        }}
      />
      </footer>
    </>
  );
}