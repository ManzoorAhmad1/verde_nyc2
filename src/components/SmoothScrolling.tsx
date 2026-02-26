'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrolling() {
  useEffect(() => {
    let lenis: Lenis | null = null
    let animationFrameId: number

    const initLenis = () => {
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        wrapper: window,
        content: document.documentElement,
        syncTouch: true,
        autoResize: true,
      })

      // Expose instance globally so parallax components can sync to Lenis RAF
      ;(window as any).__lenis = lenis

      function raf(time: number) {
        lenis?.raf(time)
        animationFrameId = requestAnimationFrame(raf)
      }

      animationFrameId = requestAnimationFrame(raf)

      // Force resize calculation after a brief moment
      setTimeout(() => {
        lenis?.resize()
      }, 500)
    }

    // Wait for all images to load
    const waitForImages = () => {
      const images = document.querySelectorAll('img')
      const promises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve()
        return new Promise(resolve => {
          img.onload = resolve
          img.onerror = resolve
        })
      })
      return Promise.all(promises)
    }

    // Initialize after images or timeout
    const init = async () => {
      await Promise.race([
        waitForImages(),
        new Promise(resolve => setTimeout(resolve, 2000)) // 2s timeout
      ])
      // Give browser time to layout
      requestAnimationFrame(() => {
        requestAnimationFrame(initLenis)
      })
    }

    if (document.readyState === 'complete') {
      init()
    } else {
      window.addEventListener('load', init, { once: true })
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis?.destroy()
      ;(window as any).__lenis = null
    }
  }, [])

  return null
}
