'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrolling() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      wrapper: window,
      content: document.documentElement,
    })

    // Expose instance globally so parallax components can sync to Lenis RAF
    ;(window as any).__lenis = lenis

    let animationFrameId: number

    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      ;(window as any).__lenis = null
    }
  }, [])

  return null
}
