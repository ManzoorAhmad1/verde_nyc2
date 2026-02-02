'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import Button from '../ui/Button'
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const router = useRouter()
  useEffect(() => {
    // Start the cinematic opening animation
    const timer1 = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Show content after box expands
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      className="sticky top-0 h-screen overflow-hidden z-0"
      style={{
        background: 'linear-gradient(135deg, #9b73a3 0%, #7f5887 50%, #5a3d5f 100%)',
      }}
    >
      {/* Cinematic Opening Box */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-[3000ms] ${isLoaded
            ? 'scale-100 rounded-none'
            : 'scale-[0.01] rounded-[80px]'
          }`}
        style={{
          transformOrigin: 'center center',
          transitionTimingFunction: 'cubic-bezier(0.45, 0, 0.15, 1)',
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/images/VERDE-DUBAI-VENUE_0018__40A8522.jpg.jpg"
            alt="Restaurant Background"
            className={`w-full h-full object-cover transition-transform duration-[3500ms] ${isLoaded ? 'scale-100' : 'scale-150'
              }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.45, 0, 0.15, 1)',
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 h-full flex items-center justify-center transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <div className="text-center px-4 sm:px-6 md:px-8">
          {/* Decorative SVG Frame */}
          <div className="relative inline-block mb-4 sm:mb-6 md:mb-8">
            <svg
              viewBox="0 0 665 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 h-20 sm:w-64 sm:h-24 md:w-96 md:h-36 lg:w-[665px] lg:h-[235px]"
            >
              <path
                d="M245.232 234.159H75.2612L1 160.629V74.0124L74.9685 1H590.033L664.478 75.3494V162.711L591.072 234.159H420.232"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M245.232 227.02H78.9182L8.76006 157.642L8.76008 77.7714L79.5083 8.53452L585.399 8.53452L657.009 79.4561V158.411L587.551 227.02H420.732"
                stroke="white"
                strokeWidth="2.18897"
              />
              <path
                d="M50.2466 98.6733V136.901L102.792 189.094H562.317L615.227 137.595V99.637L561.569 46.0478H103.561L50.2466 98.6733Z"
                stroke="white"
                fill="transparent"
                strokeWidth="0.640618"
              />
              <path d="M590.098 1.07301L561.605 46.085" stroke="white" strokeWidth="0.640618" />
              <path d="M75.1116 1.07301L103.604 46.085" stroke="white" strokeWidth="0.640618" />
              <path d="M75.3003 234.045L102.853 189.103" stroke="white" strokeWidth="0.640618" />
              <path d="M1.07652 160.679L50.2649 136.908" stroke="white" strokeWidth="0.640618" />
              <path d="M50.2671 98.7484L1.01831 74.0286" stroke="white" strokeWidth="0.640618" />
              <path d="M664.456 162.6L615.231 137.813" stroke="white" strokeWidth="0.640618" />
              <path d="M615.227 99.6612L664.539 75.3307" stroke="white" strokeWidth="0.640618" />
              <path d="M590.892 234.111L562.399 189.099" stroke="white" strokeWidth="0.640618" />

            </svg>

            {/* Logo in center */}
            <div className="absolute inset-0 flex items-center justify-center ">
              <Logo className="w-24 sm:w-32 md:w-48 text-white" />
            </div>

          </div>

          {/* Book Table Button */}
          <div className='relative bottom-[40px] sm:bottom-[60px] md:bottom-[80px]'>

            <Button
              fill='transparent' stroke='white' className="text-white font-semibold text-sm sm:text-base cursor-pointer"
              onClick={() => router.push('/menu')}

            >
              <span>View Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;