'use client'

import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { mainNavigation } from '@/config/navigation.config'

interface HamburgerMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'RESTAURANT', href: '/restaurant' },
    { name: 'BAR', href: '/bar' },
    { name: 'MENU', href: '/menu' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'DINNER PARTY', href: '/dinner-party' },
    { name: 'EVENTS', href: '/events' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay with smooth animation */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-600"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-700"
            onClick={onClose}
          />
        </Transition.Child>

        {/* Slide from top panel - like a shop shutter */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-x-0 top-0 flex justify-end">
              <Transition.Child
                as={Fragment}
                enter="transform transition-all ease-in-out duration-800"
                enterFrom="translate-y-[-100%] opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transform transition-all ease-in-out duration-700"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="translate-y-[-100%] opacity-0"
              >
                <Dialog.Panel className="pointer-events-auto w-full md:w-[400px] lg:w-[450px] h-screen overflow-y-auto bg-white shadow-2xl transform transition-all duration-800 ease-in-out">
                  <div className="flex flex-col h-full">
                    {/* Header with close button at top right */}
                    <div className="px-6 py-8">
                      <div className="flex items-center justify-between mb-8">
                        <Link href="/" onClick={onClose}>
                          <div className="relative w-32 h-10">
                            <Image
                              src="/images/logo.png"
                              alt="Verde NYC"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </Link>
                        
                        <button
                          onClick={onClose}
                          className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                          aria-label="Close menu"
                        >
                          <X className="w-7 h-7" />
                        </button>
                      </div>

                      {/* Reservations Button */}
                      <div className="mb-12">
                        <Link
                          href="/reserve"
                          onClick={onClose}
                          className="block w-full py-4 px-6 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 font-semibold tracking-wide transform hover:scale-[1.02]"
                        >
                          reservations
                        </Link>
                      </div>

                      {/* Navigation Links with staggered animation */}
                      <nav className="space-y-6">
                        {menuItems.map((item:any, index) => (
                          <Transition.Child
                            key={item.name}
                            as={Fragment}
                            enter="transition-all ease-out duration-700"
                            enterFrom="opacity-0 translate-y-4"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition-all ease-in duration-500"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-4"
                          >
                            <div className="border-b border-gray-100 pb-6 last:border-0 transform transition-all duration-500 hover:translate-x-2">
                              {item.external ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-2xl font-light text-gray-900 hover:text-primary transition-all duration-400 pl-2 hover:pl-4"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="block text-2xl font-light text-gray-900 hover:text-primary transition-all duration-400 pl-2 hover:pl-4"
                                >
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          </Transition.Child>
                        ))}
                      </nav>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto px-6 py-8 border-t border-gray-200 bg-gray-50 transition-all duration-500">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-sm text-gray-600 transform transition-all duration-500 hover:translate-y-[-2px]">
                          <p className="font-medium mb-2 text-gray-800">Address</p>
                          <p className="transition-colors duration-300 hover:text-primary">1636 Meridian Ave</p>
                          <p className="transition-colors duration-300 hover:text-primary">Meatpacking District, New York</p>
                        </div>
                        <div className="text-sm text-gray-600 transform transition-all duration-500 hover:translate-y-[-2px]">
                          <p className="font-medium mb-2 text-gray-800">Contact</p>
                          <a 
                            href="tel:+17867060744"
                            className="hover:text-primary transition-all duration-300 hover:pl-1 block"
                          >
                            +1 (786) 706-0744
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}