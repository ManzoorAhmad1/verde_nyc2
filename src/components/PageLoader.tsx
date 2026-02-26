'use client';

import { useEffect, useState } from 'react';

interface PageLoaderProps {
  isDataLoaded: boolean;
}

export default function PageLoader({ isDataLoaded }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isDataLoaded) return;

    // Wait for images to load after data is ready
    const waitForImages = async () => {
      const images = document.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // Small buffer
      await new Promise(r => setTimeout(r, 200));

      // Fade out loader
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    // Allow max 4 seconds then force hide
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    }, 4000);

    waitForImages().then(() => clearTimeout(timeout));

    return () => clearTimeout(timeout);
  }, [isDataLoaded]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{
          color: '#fff',
          fontFamily: 'Georgia, serif',
          fontSize: '1.5rem',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          animation: 'vfade 1.5s ease-in-out infinite',
        }}>
          Verde NYC
        </p>
        <style>{`
          @keyframes vfade {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}
