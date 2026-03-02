import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { blurDataURLDark } from "@/lib/imageUtils";

interface HeroProps {
  image?: string;
  heading?: string;
  subheading?: string;
  isLoading?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  image,
  heading = "",
  subheading = "",
  isLoading = false
}) => {
  const [imageError, setImageError] = React.useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setImageError(false);
  }, [image]);

  // Parallax scroll effect
  useEffect(() => {
    const imgDiv = imageRef.current;
    if (!imgDiv) return;
    let ticking = false;
    const speed = 0.3;
    const handleScroll = () => {
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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image with Parallax */}
      <div className="absolute inset-0 z-0" ref={imageRef} style={{ willChange: 'transform' }}>
        {image && !imageError ? (
          <Image
            key={image}
            src={image}
            alt="Hero"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
            placeholder="blur"
            blurDataURL={blurDataURLDark}
            onError={(e) => {
              console.error('❌ Failed to load hero image:', image);
              setImageError(true);
            }}
          />
        ) : null}
      </div>

      {/* Overlay — outside parallax so it stays fixed in center */}
      {(heading || subheading) && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">

          {/* Logo Wrapper */}
          <div className="relative w-64 h-32 mb-4">
            <Image
              src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/logo-Verde-NYC-white.png"
              alt="Verde NYC"
              fill
              className="object-contain"
              priority
            />
          </div>

          {subheading && (
            <p className="text-lg md:text-xl max-w-2xl px-4">
              {subheading}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
