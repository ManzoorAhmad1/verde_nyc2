'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrolling() {
  useEffect(() => {
    // Initialize Lenis with ultra-smooth settings
    const lenis = new Lenis({
      lerp: 0.1, // Faster response (less laggy feel)
      duration: 1.2, // Smooth ease-out
      smoothWheel: true,
      wheelMultiplier: 1,
      // touchMultiplier: 1.5, // Commented out to use default touch behavior
      syncTouch: true, // Use native touch momentum if possible
      prevent: (node) => node.classList.contains('no-smooth'),
    })

    let animationFrameId: number

    // Request animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return null
}
