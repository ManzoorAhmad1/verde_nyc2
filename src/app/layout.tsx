import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Verde NYC | MediterrAsian Rooftop Restaurant & Lounge',
  description: 'Verde NYC is a multi-venue concept, aiming to transport guests on a culinary journey through the shores of the Mediterranean and Japan, while creating a visionary expression of flavorful MediterrAsian cuisine.',
  keywords: 'Verde NYC, Mediterranean restaurant, Japanese cuisine, rooftop dining, New York, fine dining, omakase, lounge',
  openGraph: {
    title: 'Verde NYC | MediterrAsian Rooftop Restaurant & Lounge',
    description: 'Experience a culinary journey through the Mediterranean & Asia at Verde NYC.',
    images: ['/images/logo-Verde-NYC-green.png'],
  },
}

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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}