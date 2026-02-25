import type { Metadata } from 'next'
import './globals.css'
import FloatingActionButton from './components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'Verde NYC | Restaurant and Lounge',
  description: 'Verde NYC is a multi-venue concept offering an exceptional dining experience with Mediterranean and Japanese inspired cuisine in the heart of New York.',
  keywords: 'Verde NYC, restaurant, lounge, dining, New York, fine dining, omakase',
  openGraph: {
    title: 'Verde NYC | Restaurant and Lounge',
    description: 'Experience exceptional dining at Verde NYC Restaurant and Lounge in New York.',
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