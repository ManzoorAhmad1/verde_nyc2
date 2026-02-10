import React, { useState, useEffect } from 'react';
import { Logo } from './constant';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const brandLinks = [
    { name: 'AVA', url: 'https://www.avamediterraegean.com' },
    { name: 'CASA NEOS', url: 'https://www.casa-neos.com' },
    { name: 'CLAUDIE', url: 'https://www.claudierestaurant.com' },
    { name: 'MM', url: 'https://mm-club.com' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white py-4 shadow-md' : 'bg-transparent py-2'
      }`}
    >
      <div className="px-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo className="h-20 transition-all duration-500" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-1">
          <div className="hidden md:block">
            <button
              className={`border-2 px-6 py-2 text-[10px] tracking-[0.3em] uppercase transition-all
                ${
                  isScrolled
                    ? 'border-black text-black hover:bg-black hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-black'
                }`}
            >
              RESERVATIONS
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="flex flex-col space-y-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className={`w-10 h-[2px] ${isScrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`w-10 h-[2px] ${isScrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`w-10 h-[2px] ${isScrolled ? 'bg-black' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-700 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full md:w-[450px] bg-[#f2efe9]
            shadow-2xl transition-transform duration-700 ease-in-out
            ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            flex flex-col`}
        >
          {/* Close */}
          <button
            className="absolute top-10 right-10 text-black/40 hover:text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu */}
          <div className="flex-1 flex flex-col items-center justify-center p-12 space-y-10 overflow-y-auto pt-24 pb-16">
            <a
              href="#"
              className="border border-black px-12 py-3 text-[10px] tracking-[0.4em] font-bold uppercase
                text-black hover:bg-black hover:text-white transition-all"
            >
              RESERVATIONS
            </a>

            <nav className="flex flex-col items-center space-y-7 text-[11px] tracking-[0.4em] font-bold uppercase text-black/80">
              {[
                "Valentine's Day",
                "Restaurant",
                "Brunch",
                "Mila Lounge",
                "Mila Omakase",
                "MM Members Club",
                "Private Events",
                "Contact"
              ].map(link => (
                <a key={link} href="#" className="hover:text-black transition-colors">
                  {link}
                </a>
              ))}

              {/* Brands */}
              <div className="flex flex-col items-center pt-2">
                <button
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                  className="hover:text-black transition-colors flex items-center"
                >
                  Our Brands
                  <svg
                    className={`ml-3 w-2.5 h-2.5 transition-transform duration-300 ${
                      isBrandsOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`flex flex-col items-center space-y-4 transition-all duration-500 overflow-hidden
                    ${isBrandsOpen ? 'max-h-60 mt-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {brandLinks.map(brand => (
                    <a
                      key={brand.name}
                      href={brand.url}
                      target="_blank"
                      className="text-[9px] tracking-[0.3em] text-black/40 hover:text-black transition-colors"
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Accessibility */}
          <div className="p-8 flex justify-end">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
