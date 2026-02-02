'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Custom hook to initialize Lenis smooth scrolling
 * Optimized for continuous smooth scrolling without stopping
 */
export function useLenis() {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    })

    // Get the scroll position
    lenis.on('scroll', () => {
      // This keeps the scroll active and prevents sticking
    })

    // Request animation frame loop - more efficient
    let rafId: number
    
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
