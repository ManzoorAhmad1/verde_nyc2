import type { Metadata } from 'next'
import './globals.css'
import FloatingActionButton from './components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'Verde NYC | International Festive Restaurant in New York',
  description: 'Discover Verde NYC in the Meatpacking District: a festive Mediterranean restaurant with refined dining, signature atmosphere, and unforgettable nights.',
  keywords: 'Verde NYC, Mediterranean restaurant, Meatpacking District, festive dining, New York restaurant, fine dining, rooftop restaurant, international cuisine',
  openGraph: {
    title: 'Verde NYC | International Festive Restaurant in New York',
    description: 'Discover Verde NYC in the Meatpacking District: a festive Mediterranean restaurant with refined dining, signature atmosphere, and unforgettable nights.',
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