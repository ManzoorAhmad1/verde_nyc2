import React, { useEffect, useRef, useState } from "react";

const ParallaxSecond: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Parallax calculation
  const getParallaxOffset = (speed = 0.3) => {
    if (!sectionRef.current) return 0;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only apply parallax when section is in viewport
    if (rect.bottom < 0 || rect.top > windowHeight) return 0;

    return -rect.top * speed;
  };

  useEffect(() => {
    const handleScroll = () => {
      setOffset(getParallaxOffset(0.3));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-end px-6 md:px-24 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage:
            "url('/images/_40A8490.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset}px)`,
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
