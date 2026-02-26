import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { blurDataURLDark } from "@/lib/imageUtils";

interface ParallaxSectionProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl,
  title,
  subtitle,
  className = "",
  contentClassName = "",
  speed = 0.2,
}) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateParallax = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      if (rect.bottom >= 0 && rect.top <= wh) {
        bgRef.current.style.transform = `translate3d(0, ${-rect.top * speed}px, 0)`;
      }
    };

    // Initial calculation
    updateParallax();

    // Listen to both Lenis and native scroll for reliability
    const tryLenis = () => {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.on('scroll', updateParallax);
        return true;
      }
      return false;
    };

    // Lenis may not be ready yet — retry until available
    let interval: ReturnType<typeof setInterval> | null = null;
    if (!tryLenis()) {
      interval = setInterval(() => {
        if (tryLenis()) {
          if (interval) clearInterval(interval);
        }
      }, 100);
    }

    // Also listen to native scroll as fallback
    window.addEventListener('scroll', updateParallax, { passive: true });

    return () => {
      if (interval) clearInterval(interval);
      (window as any).__lenis?.off('scroll', updateParallax);
      window.removeEventListener('scroll', updateParallax);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute w-full h-[140%] -top-[20%] will-change-transform"
      >
        <Image
          key={imageUrl}
          src={imageUrl}
          alt={title || "Parallax Background"}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
          loading="eager"
          unoptimized
          placeholder="blur"
          blurDataURL={blurDataURLDark}
          onError={() => {
            console.error('❌ Failed to load parallax image:', imageUrl);
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className={`relative z-10 px-4 md:px-6 w-full flex justify-end ${contentClassName}`}>
        {title && subtitle ? (
          // Style 2: Heading + Content (right-aligned with top and bottom lines)
          <div className="text-left max-w-sm md:max-w-md lg:max-w-lg">
            {/* Top line */}
            <div className="w-full h-[1px] bg-white/30 mb-8"></div>
            
            <h2 className="text-white font-bold !text-2xl md:!text-3xl lg:!text-4xl !leading-relaxed mb-6 uppercase tracking-wider">
              {title}
            </h2>
            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed opacity-95 mb-8">
              {subtitle}
            </p>
            
            {/* Bottom line */}
            <div className="w-full h-[1px] bg-white/30"></div>
          </div>
        ) : (
          // Style 1: Only Content (centered, uppercase)
          subtitle && (
            <div className="text-center w-full max-w-4xl mx-auto">
              <h2 className="w-full section-heading text-white intro-text-animate !text-sm md:!text-xl lg:!text-2xl !leading-relaxed uppercase">
                {subtitle}
              </h2>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ParallaxSection;
