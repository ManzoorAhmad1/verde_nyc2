import type { Metadata } from 'next'
import './globals.css'
import FloatingActionButton from './components/FloatingActionButton'

// Fetch site settings for metadata
async function getSiteSettings() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
    const res = await fetch(`${API_URL}/settings`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    if (res.ok) {
      const data = await res.json();
      return data.settings;
    }
  } catch (e) {
    console.error('Failed to fetch site settings for metadata', e);
  }
  return null;
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  const title = settings?.siteTitle || 'Verde NYC | Festive Restaurant in New York';
  const description = settings?.siteDescription || 'Discover Verde NYC in the Meatpacking District: a festive Mediterranean restaurant with refined dining, signature atmosphere, and unforgettable nights.';
  const keywords = settings?.siteKeywords || 'Verde NYC, Mediterranean restaurant, Meatpacking District, festive dining, New York restaurant';
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: ['/images/logo-Verde-NYC-green.png'],
    },
  };
}

import SmoothScrolling from '@/components/SmoothScrolling'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://verde-nyc-s3.s3.eu-north-1.amazonaws.com" />
      </head>
      <body className="antialiased">
        <SmoothScrolling />
        {children}
        <div id="fab-portal" style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 999999,
        }}>
          <FloatingActionButton />
        </div>
      </body>
    </html>
  )
}