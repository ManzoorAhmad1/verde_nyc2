import type { Metadata } from 'next'
import './globals.css'
import FloatingActionButton from './components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'Verde NYC | Restaurant and Lounge',
  description: 'Verde NYC is a multi-venue concept by Yeeels Group, with locations in Paris, Dubai, Saint-Tropez, and New York, offering an exceptional Mediterranean dining experience.',
  keywords: 'Verde NYC, restaurant, lounge, dining, New York, Paris, Dubai, Saint-Tropez, fine dining, Yeeels Group',
  openGraph: {
    title: 'Verde NYC | Restaurant and Lounge',
    description: 'Experience exceptional Mediterranean dining at Verde NYC Restaurant and Lounge - A Yeeels Group Venue.',
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