'use client'

import { useLenis } from '@/hooks/useLenis'

/**
 * Client component that initializes smooth scrolling
 * Wrap your content with this component to enable Lenis smooth scroll
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLenis()
  
  return <>{children}</>
}
