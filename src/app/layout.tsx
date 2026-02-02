import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'lenis/dist/lenis.css'
import NavigationSystem from '@/app/components/Navigation/NavigationSystem'
import Footer from '@/app/components/Footer/Footer'
import SmoothScroll from '@/app/components/UI/SmoothScroll'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verde NYC | Modern Mediterranean Dining in New York',
  description: 'Experience modern Mediterranean cuisine in the heart of New York. Opening Fall 2025 in Meatpacking District.',
  // ... rest of metadata
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SmoothScroll>
            <NavigationSystem />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}