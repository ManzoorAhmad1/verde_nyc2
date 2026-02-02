'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      
      // Calculate scroll progress
      const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100
      setProgress(Math.min(scrollPercent, 100))

      // Hide indicator after scrolling down a bit
      setIsVisible(scrollTop < 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const windowHeight = window.innerHeight
    window.scrollTo({
      top: windowHeight,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <button
        onClick={scrollToNextSection}
        className="flex flex-col items-center group focus:outline-none"
        aria-label="Scroll to next section"
      >
        <span className="text-white text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        
        {/* Progress line */}
        <div className="relative h-20 w-px overflow-hidden mb-2">
          <div className="absolute inset-0 bg-white/30" />
          <div 
            className="absolute top-0 left-0 w-full bg-white transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
        </div>
        
        {/* Animated arrow */}
        <ChevronDown className="w-6 h-6 text-white animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
      </button>
    </div>
  )
}