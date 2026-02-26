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
  speed = 0.3,
}) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentY = 0;
    let targetY = 0;
    
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };
    
    const updateParallax = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      if (rect.bottom >= 0 && rect.top <= wh) {
        targetY = -rect.top * speed;
        currentY = lerp(currentY, targetY, 0.1);
        bgRef.current.style.transform = `translate3d(0, ${currentY}px, 0)`;
      }
    };

    const animate = () => {
      updateParallax();
      requestAnimationFrame(animate);
    };
    
    const rafId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[80vh] md:h-[60vh] lg:h-[80vh] overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute w-full h-[160%] -top-[30%] will-change-transform"
      >
        <Image
          key={imageUrl}
          src={imageUrl}
          alt={title || "Parallax Background"}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized
          placeholder="blur"
          blurDataURL={blurDataURLDark}
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
