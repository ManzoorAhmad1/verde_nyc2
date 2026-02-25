import type { Metadata } from 'next'
import './globals.css'
import FloatingActionButton from './components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'Verde NYC | Modern French Bistro & Lounge',
  description: 'Verde NYC: A modern French bistro in New York. Join us for authentic cuisine, fine wine, and sophisticated lounge vibes. Part of the Verde family—Dubai, Paris, Sardinia.',
  keywords: 'Verde NYC, French bistro, lounge, dining, New York, Paris, Dubai, Sardinia, fine dining, authentic cuisine, wine bar',
  openGraph: {
    title: 'Verde NYC | Modern French Bistro & Lounge',
    description: 'Verde NYC: A modern French bistro in New York. Join us for authentic cuisine, fine wine, and sophisticated lounge vibes. Part of the Verde family—Dubai, Paris, Sardinia.',
    images: ['/images/logo-Verde-NYC-green.png'],
  },
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