'use client';
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { blurDataURLDark } from "@/lib/imageUtils";

interface HeroProps {
  image?: string;
  mobileImage?: string;
  heading?: string;
  subheading?: string;
  isLoading?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  image,
  mobileImage,
  heading = "",
  subheading = "",
  isLoading = false
}) => {
  const [imageError, setImageError] = React.useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setImageError(false);
  }, [image]);

  // Parallax scroll — desktop only (sm: 640px+)
  useEffect(() => {
    const imgDiv = imageRef.current;
    if (!imgDiv) return;
    let ticking = false;
    const speed = 0.3;
    const handleScroll = () => {
      if (window.innerWidth < 640) { imgDiv.style.transform = 'none'; return; }
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = imgDiv.getBoundingClientRect();
          const y = -rect.top * speed;
          imgDiv.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopSrc = image ?? '';
  const mobileSrc  = mobileImage || desktopSrc;

  return (
    <section className="relative hero-responsive-height w-full overflow-hidden">

      {/* ── Mobile (< 640px): natural-height image — full width, zero crop ── */}
      <div className="sm:hidden" style={{ position: 'relative', width: '100%' }}>
        {mobileSrc && !imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mobileSrc}
            alt="Hero"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={() => setImageError(true)}
          />
        ) : null}
        {/* Logo overlay centered on mobile image */}
        {heading && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', color: '#fff',
          }}>
            <div style={{ position: 'relative', width: 144, height: 80 }}>
              <Image
                src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-white.png"
                alt="Verde NYC"
                fill
                className="object-contain"
                priority
              />
            </div>
            {subheading && <p className="text-lg max-w-xs px-4 text-center">{subheading}</p>}
          </div>
        )}
      </div>

      {/* ── Desktop (≥ 640px): 100vh + parallax + object-cover ── */}
      <div
        className="hidden sm:block absolute inset-0 z-0"
        ref={imageRef}
        style={{ willChange: 'transform' }}
      >
        {desktopSrc && !imageError ? (
          <Image
            src={desktopSrc}
            alt="Hero"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURLDark}
            onError={() => setImageError(true)}
          />
        ) : null}
      </div>

      {/* ── Desktop overlay ── */}
      {heading && (
        <div className="hidden sm:flex absolute inset-0 z-10 flex-col items-center justify-center text-center text-white">
          <div className="relative w-64 h-32 mb-4">
            <Image
              src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-white.png"
              alt="Verde NYC"
              fill
              className="object-contain"
              priority
            />
          </div>
          {subheading && <p className="text-xl max-w-2xl px-4">{subheading}</p>}
        </div>
      )}
    </section>
  );
};

export default Hero;
