'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'
import { useScroll } from '@/hooks/useScroll'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { isScrolled } = useScroll()

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
                }`}>
                <div className="mx-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Hamburger Menu Button - Left Side */}
                        <div>
                            <Link href="/" className="flex items-center">
                                <div className="relative w-32 h-10 md:w-40 md:h-12">
                                    <Image
                                        src="/images/logo-Verde-NYC-green.png"
                                        alt="Verde NYC"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Logo - Center */}
                        <div></div>

                        {/* Reservations Button - Right Side */}
                        <div className="flex-shrink-0 flex items-center gap-4">
                            <Link
                                href="/reserve"
                                className={`text-sm font-semibold transition-colors px-4 py-2 border rounded-none hover:bg-primary hover:text-white ${
                                    !isScrolled
                                        ? 'text-white border-white'
                                        : 'text-primary border-primary'
                                }`}
                            >
                                RESERVATIONS
                            </Link>
                            <div className="flex-shrink-0">
                                <button
                                    className="p-2 -ml-2"
                                    onClick={() => setIsMenuOpen(true)}
                                    aria-label="Open navigation menu"
                                >
                                    <div className="w-6 h-5 relative">
                                        <span className={`absolute top-0 left-0 w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled ? 'bg-primary' : 'bg-white'}`} />
                                        <span className={`absolute top-2 left-0 w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${isScrolled ? 'bg-primary' : 'bg-white'}`} />
                                        <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled ? 'bg-primary' : 'bg-white'}`} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hamburger Menu Overlay */}
            <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}