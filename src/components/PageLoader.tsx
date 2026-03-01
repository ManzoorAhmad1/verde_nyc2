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
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        backgroundColor: '#F3EDE2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '180px',
        height: '180px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '2px solid rgba(0, 0, 0, 0.1)',
          borderTop: '2px solid #000',
          borderRadius: '50%',
          animation: 'vspin 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        }}></div>
        <p style={{
          color: '#000',
          fontFamily: 'Georgia, serif',
          fontSize: '1rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          animation: 'vfade 1.5s ease-in-out infinite',
          margin: 0,
          textAlign: 'center',
          paddingLeft: '0.2em', // offset for letter spacing centering
          lineHeight: '1.6'
        }}>
          Verde <br/ > NYC
        </p>
        <style>{`
          @keyframes vfade {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          @keyframes vspin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
