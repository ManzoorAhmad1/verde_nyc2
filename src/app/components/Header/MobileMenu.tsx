'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { mobileNavigation } from '@/config/navigation.config'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0" onClick={onClose}>
                          <div className="relative w-28 h-8">
                            <Image
                              src="/images/logo-Verde-NYC-white.png"
                              alt="Verde NYC"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </Link>
                        
                        {/* Close button */}
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                          onClick={onClose}
                        >
                          <span className="sr-only">Close panel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-1 px-4 sm:px-6">
                      <div className="py-8">
                        {/* Primary Navigation */}
                        <nav className="space-y-4">
                          {mobileNavigation.slice(0, -1).map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block py-3 text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                              onClick={onClose}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </nav>

                        {/* Secondary Navigation */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                          <nav>
                            {mobileNavigation.slice(-1).map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block py-3 text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
                                onClick={onClose}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </nav>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                          <div className="space-y-4 text-gray-600">
                            <p className="text-sm">
                              1636 Meridian Ave
                              <br />
                              Meatpacking District, New York
                            </p>
                            <p className="text-sm">
                              <Link 
                                href="tel:+17867060744"
                                className="hover:text-primary transition-colors"
                              >
                                +1 (786) 706-0744
                              </Link>
                            </p>
                            <p className="text-sm">
                              <Link 
                                href="mailto:info@mila-miami.com"
                                className="hover:text-primary transition-colors"
                              >
                                info@mila-miami.com
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">
                          © {new Date().getFullYear()} Verde NYC
                        </p>
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