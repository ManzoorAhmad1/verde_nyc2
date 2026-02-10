import React, { useEffect, useRef } from "react";

interface ParallaxSectionProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
  speed?: number; // smaller = slower
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl,
  title,
  subtitle,
  className = "",
  contentClassName = "",
  speed = 0.2, // smaller = slower background
}) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    // Cache values to avoid layout thrashing during scroll
    let sectionTop = 0;
    let sectionHeight = 0;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    const updateDimensions = () => {
      if (sectionRef.current) {
        sectionTop = sectionRef.current.offsetTop;
        sectionHeight = sectionRef.current.offsetHeight;
      }
    };

    // Initial measure
    updateDimensions();
    
    // Update cached values on resize
    window.addEventListener('resize', updateDimensions);

    const handleScroll = () => {
      if (!bgRef.current) return;

      const scrollTop = window.scrollY;

      // Check using cached values
      // Add a buffer to ensure smooth entry/exit
      if (scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
        // Use requestAnimationFrame for the actual DOM update
        animationFrameId = requestAnimationFrame(() => {
          if (bgRef.current) {
            const offset = (scrollTop - sectionTop) * speed;
            bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', updateDimensions);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
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
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Overlay */}

      {/* Content */}
      <div className={`relative z-10 text-center font-light px-4 md:px-6 max-w-3xl leading-relaxed ${contentClassName}`}>
        <h2 className="w-full section-heading text-white intro-text-animate !text-sm md:!text-xl lg:!text-2xl !leading-relaxed">
          Born in Paris. Celebrated in Saint-Tropez. Elevated in Dubai. <span className="hidden md:inline"><br /></span>
          Now, Verde arrives in New York—bringing two decades of Mediterranean excellence to the Meatpacking District.
        </h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
