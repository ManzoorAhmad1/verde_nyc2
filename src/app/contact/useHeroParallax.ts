import { useEffect, useRef } from 'react';

export function useHeroParallax(sectionId = 'contact-mila', speed = 0.3) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section:any = sectionRef.current;
    const image:any = imageRef.current;
    if (!section || !image) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const y = -rect.top * speed;
          image.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { sectionRef, imageRef };
}
