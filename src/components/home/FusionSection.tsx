'use client';

import { useEffect, useRef } from 'react';
import Logo from "../ui/Logo";

const FusionSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!imageRef.current) return;
      
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = (elapsed % 10000) / 10000; // 10 second cycle
      
      // Complex rotation with floating effect
      const rotation = Math.sin(progress * Math.PI * 2) * 15; // ±15 degrees
      const floatX = Math.sin(progress * Math.PI * 4) * 15; // Left-right movement
      const floatY = Math.cos(progress * Math.PI * 2) * 10; // Up-down movement
      
      // Perspective effect for 3D feel
      const perspective = 1000;
      
      imageRef.current.style.transform = `
        perspective(${perspective}px)
        rotate(${rotation}deg)
        translateX(${floatX}px)
        translateY(${floatY}px)
        rotateY(${Math.sin(progress * Math.PI) * 10}deg)
      `;
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding relative overflow-hidden text-center py-12 bg-white">
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Candle Icon - Centered Above Logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            ref={imageRef}
            src="/images/logo-Verde-NYC-green.png"
            alt="Candle"
            className="w-6 sm:w-8 md:w-12 lg:w-72 h-auto opacity-80 transition-transform duration-300"
            draggable="false"
            style={{
              willChange: 'transform',
              transformOrigin: 'center center',
            }}
          />
        </div>
        
        {/* Content */}
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-black text-instrument font-medium uppercase">
          FROM LUNCH TO DINNER, EXPERIENCE THE VIBRANT SPIRIT OF NEW YORK CITY.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-black/75 max-w-3xl mx-auto leading-relaxed text-instrument">
          Verde NYC invites you to indulge in contemporary cuisine and sophisticated dining experiences in the heart of New York City.
        </p>
      </div>
    </section>
  );
};

export default FusionSection;