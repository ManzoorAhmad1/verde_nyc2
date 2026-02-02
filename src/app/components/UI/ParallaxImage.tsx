'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  children?: React.ReactNode
}

export default function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.5,
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const scrollPercentage = (rect.top + rect.height) / (window.innerHeight + rect.height)
        setOffset(scrollPercentage * 100 * speed)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      ref={containerRef} 
      className={cn('relative overflow-hidden', className)}
    >
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      {children}
    </div>
  )
}