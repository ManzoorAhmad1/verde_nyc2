'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrolling() {
  useEffect(() => {
    // Initialize Lenis with ultra-smooth settings
    const lenis = new Lenis({
      lerp: 0.06,
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      normalizeWheel: true,
      syncTouch: false,
      prevent: (node) => node.classList.contains('no-smooth'),
    })

    // Request animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
