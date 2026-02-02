'use client'

import { useEffect, useRef, useState } from 'react'
import ScrollIndicator from '../UI/ScrollIndicator'

export default function VideoHero() {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    // Handle YouTube iframe API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
  }, [])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
    // You would implement YouTube iframe API controls here
  }

  return (
    <section className="relative h-screen min-h-screen overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Fallback Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/VERDE-DUBAI-VENUE_0018__40A8522.jpg.jpg')`,
            }}
          />
          {/* YouTube Video Iframe */}
          <iframe
            ref={videoRef}
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/HGBXHkrPQX0?autoplay=1&mute=1&controls=0&loop=1&playlist=HGBXHkrPQX0&modestbranding=1&rel=0&showinfo=0&disablekb=1"
            title="Verde NYC Restaurant Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>
      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">
        <button
          onClick={togglePlayback}
          className="glass-effect rounded-full p-3 text-white hover:bg-white/20 transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        <button
          className="glass-effect rounded-full p-3 text-white hover:bg-white/20 transition-colors"
          aria-label="Mute video"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        </button>
      </div>
      {/* Popup Widget Script */}
      <script 
        src="https://elfsightcdn.com/platform.js" 
        async 
        data-elfsight-app-lazy
      />
      <div className="elfsight-app-6e7cc40e-8e73-43f3-a51d-2123512e0422" />
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}