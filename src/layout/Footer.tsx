'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Instagram, Facebook } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router=useRouter()
  const socialLinks = [
    {
      href: "https://www.instagram.com/verde_nyc/",
      icon: Instagram,
      alt: "Instagram"
    },
    {
      href: "https://www.facebook.com/profile.php?id=61574715609154",
      icon: Facebook,
      alt: "Facebook"
    },
    {
      href: "/",
      icon: FaGoogle,
      alt: "Google"
    }
  ];

  const footerLinks = [
        { label: 'HOME', href: '/' },
        { label: 'DINNER PARTY', href: '/dinner-party' },
        { label: 'MENU', href: '/menu' },
        { label: 'RESTURENT', href: '/resturent' },
        { label: 'BAR', href: '/bar' },
        { label: 'GALLERY', href: '/gallery' },
    ];

  const legalLinks = [
    { href: "/terms-of-service", label: "TERMS OF SERVICE" },
    { href: "/privacy-policy", label: "PRIVACY POLICY" },
    { href: "/cookie-policy", label: "COOKIE POLICY" }
  ];

  return (
    <footer className="relative section-padding overflow-hidden bg-white/95">
      {/* Background Image */}
      <img
        src="/images/footerBg.png"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Column 1 - Verde NYC */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-instrument uppercase text-black mb-4">
              Verde NYC
            </h3>
            <p className="text-sm sm:text-base text-black/70 text-instrument">
              After Paris, St Tropez, Dubai & Sardinia : Verde NYC
            </p>
            <p className="text-sm sm:text-base text-black/70 text-instrument">
              The last treasure of YEEELS, a group of modern, trendy and chic restaurants is delighted to have an opening in an international city of New York City.
            </p>
            <p className="text-sm sm:text-base text-black/70 text-instrument">
              Verde NYC opens Fall 2025 in the Meatpacking District. Iconic Mediterranean restaurant from Paris, St-Tropez, Sardinia & Dubai. Dining, music, energy – all in one place.
            </p>
            <div className="pt-4">
              <img
                src="/images/logo-Verde-NYC-green.png"
                alt="Verde NYC Logo"
                className='w-32 h-32 mx-auto md:mx-0'
              />
            </div>
          </div>

          {/* Column 2 - Opening Hours */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-instrument uppercase text-black mb-4">
              Opening Hours
            </h3>
            <p className="text-sm sm:text-base text-black/80 font-semibold">
                February 1st, 2026
            </p>
            <p className="text-sm sm:text-base text-black/70 text-instrument">
              Come no later than 15 minutes after your scheduled reservation. Otherwise we have the right to cancel. Thank you for your understanding.
            </p>
            <p className="text-sm sm:text-base text-black/70 text-instrument">
              Hours: Restaurant open from monday to saturday - From noon to 3pm and 7pm to 3 am
            </p>

            <div className="pt-2">
              <p className="text-sm sm:text-base text-black/80 font-semibold mb-1 text-instrument">LUNCH •</p>
              <p className="text-sm sm:text-base text-black/70 text-instrument">Everyday from noon to 3pm</p>
              <p className="text-sm sm:text-base text-black/70 text-instrument">Sunday Brunch from noon to 5pm</p>
            </div>

            <div className="pt-2">
              <p className="text-sm sm:text-base text-black/80 font-semibold mb-1 text-instrument">DINNER •</p>
              <p className="text-sm sm:text-base text-black/70 text-instrument">1st service • from sunday to friday 7pm to 9h45pm</p>
              <p className="text-sm sm:text-base text-black/70 text-instrument">Saturday from 7pm</p>
              <p className="text-sm sm:text-base text-black/70 text-instrument">2nd service • (reservation confirmed by phone)</p>
              <p className="text-sm sm:text-base text-black/70 text-instrument">10pm to 3am*</p>
              <p className="text-sm sm:text-base text-black/70 text-instrument">* After Dinner Menu starts from midnight</p>
            </div>
          </div>

          {/* Column 3 - Reservation */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-instrument uppercase text-black mb-4">
              Reservation
            </h3>
            <p className="text-sm sm:text-base text-black/70 text-instrument">
              Phone: +1 646 406 8763
            </p>
            <p className="text-sm sm:text-base text-black/70 text-instrument">
              Reservation by email: for the 1st service only: contact@verde-nyc.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pt-3 sm:pt-4 border-t border-primary/20">
          {/* Social Links - Left */}
          <div className="flex gap-3 sm:gap-4 md:gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  target='_blank'
                  href={social.href}
                  rel="noopener noreferrer"
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:opacity-70 transition-opacity text-black flex items-center justify-center text-instrument"
                >
                  <IconComponent className="w-full h-full" />
                </a>
              );
            })}
          </div>

          {/* Menu Links - Center */}


          {/* Book Table Button - Right */}
          <div className="flex-shrink-0">
            <Link
              href="/menu"
            >
              <Button
                fill='#9b73a3'
                stroke='white'
                className="text-white font-semibold cursor-pointer"
                onClick={() => router.push('/menu')}

              >
                <span>View Menu</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Legal Links - Bottom Right */}
        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-between gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm sm:text-base md:text-lg text-instrument text-black hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-xs sm:text-sm md:text-base text-black/60 hover:text-black transition-colors uppercase text-instrument"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;