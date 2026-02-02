'use client'

import { useState, useEffect } from 'react'
import DesktopHeader from '../Header/Header'
import MobileHeader from '../Header/MobileHeader'
import HamburgerMenu from '../Header/HamburgerMenu'

export default function NavigationSystem() {
  const [isDesktop, setIsDesktop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (isDesktop) {
    return (
      <>
        <DesktopHeader />
        <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </>
    )
  }

  return <MobileHeader />
}