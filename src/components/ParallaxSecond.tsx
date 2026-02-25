import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ParallaxSecond: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateParallax = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      if (rect.bottom >= 0 && rect.top <= wh) {
        bgRef.current.style.transform = `translate3d(0, ${-rect.top * 0.3}px, 0)`;
      }
    };

    const tryLenis = () => {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.on('scroll', updateParallax);
        updateParallax();
        return true;
      }
      return false;
    };

    if (!tryLenis()) {
      const interval = setInterval(() => {
        if (tryLenis()) clearInterval(interval);
      }, 50);
      return () => {
        clearInterval(interval);
        (window as any).__lenis?.off('scroll', updateParallax);
      };
    }

    return () => {
      (window as any).__lenis?.off('scroll', updateParallax);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-end px-6 md:px-24 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute w-full h-[140%] -top-[20%] z-0 will-change-transform" // Increased height to accommodate larger parallax movement
      >
        <Image
          src="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com/images/_40A8490.jpg"
          alt="The Art of Festive Dining"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
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
