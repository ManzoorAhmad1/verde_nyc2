'use client'

import { ReactNode } from 'react'

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  backgroundColor?: string
  id?: string
  zIndex?: number
}

/**
 * ScrollSection Component - Creates sections that overlay each other during scroll
 * Optimized for Lenis smooth scrolling without stuttering
 */
export default function ScrollSection({ 
  children, 
  className = '', 
  backgroundColor = 'bg-white',
  id,
  zIndex = 10
}: ScrollSectionProps) {
  return (
    <div 
      id={id}
      className={`scroll-section ${backgroundColor} ${className}`}
      style={{ 
        zIndex,
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <div className="h-full overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  )
}
