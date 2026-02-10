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
    const handleScroll = () => {
      if (bgRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollTop = window.scrollY;
        const sectionHeight = sectionRef.current.offsetHeight;

        // check if section is in viewport
        if (scrollTop + window.innerHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
          // distance scrolled inside this section
          const offset = (scrollTop - sectionTop) * speed;
          bgRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[60vh] lg:h-[80vh] overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Overlay */}

      {/* Content */}
      <div className={`relative z-10 text-center text-4xl font-light px-6 max-w-5xl leading-relaxed ${contentClassName}`}>
        <h2 className="w-full section-heading text-white intro-text-animate">
          Born in Paris. Celebrated in Saint-Tropez. Elevated in Dubai. <br />
          Now, Verde arrives in New York—bringing two decades of Mediterranean excellence to the Meatpacking District.
        </h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
