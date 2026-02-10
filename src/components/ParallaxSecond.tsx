import React, { useEffect, useRef, useState } from "react";

const ParallaxSecond: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check visibility including partial visibility
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        // Calculate offset (negative value to move background up slower than scroll)
        // Using -rect.top * speed creates the parallax effect
        // We use translate3d for GPU acceleration
        const offset = -rect.top * 0.3;
        bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-end px-6 md:px-24 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 scale-110 will-change-transform"
        style={{
          backgroundImage:
            "url('/images/_40A8490.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Initial transform handled by ref
        }}
      >
        {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg w-full">
        <div className="border-t border-b border-mila-gold/50 px-8 py-10 md:px-12 md:py-14 space-y-6 text-white">
          <h3 className="text-3xl md:text-4xl font-light tracking-widest uppercase">
            The Art of Festive Dining          </h3>

          <p className="text-sm md:text-base leading-relaxed font-light text-white/90">
            At the heart of the Yeeels Group philosophy lies a simple yet profound belief: dining should be transformative. From our flagship venues in Paris to the shores of the French Riviera, from the glittering skyline of Dubai to the vibrant energy of Manhattan, we create spaces where gastronomy becomes theatre, where every evening unfolds as a unique celebration. Verde NYC continues this tradition, offering an immersive experience where Mediterranean sophistication meets New York&apos;s electric energy. Here, exceptional cuisine, innovative cocktails, and curated entertainment converge to create memories that linger long after the evening ends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSecond;
