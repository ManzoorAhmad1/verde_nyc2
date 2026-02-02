'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { useScroll } from '@/hooks/useScroll'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isScrolled } = useScroll()

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[9999] lg:hidden transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="px-4 h-16">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <div className="relative w-28 h-8">
                  <Image
                    src="/images/logo-Verde-NYC-green.png"
                    alt="Verde NYC"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Hamburger Button - Left */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2"
              aria-label="Open menu"
            >
              <Menu className={`w-6 h-6 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`} />
            </button>

            {/* Reservations Button - Right */}
            <Link
              href="/reserve"
              className={`text-sm font-semibold px-3 py-1.5 border rounded-none transition-colors ${
                isScrolled
                  ? 'text-primary border-primary'
                  : 'text-white border-white'
              }`}
            >
              RESERVE
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}