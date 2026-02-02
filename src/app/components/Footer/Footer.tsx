import Container from '../Layout/Container'
import NewsletterForm from './NewsletterForm'
import Image from 'next/image'
import Link from 'next/link'
import { footerNavigation } from '@/config/navigation.config'
import { siteConfig } from '@/config/site.config'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Container>
        {/* Top Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              A{' '}
              <Link 
                href="https://www.rivieradininggroup.com/" 
                target="_blank"
                className="text-primary hover:underline"
              >
                Riviera Dining Group
              </Link>{' '}
              BRAND
            </h3>
            
            <h4 className="text-base text-gray-600 mb-6">Visit other venues</h4>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {footerNavigation.brands.map((brand) => (
                <Link
                  key={brand.name}
                  href={brand.href}
                  target="_blank"
                  className="text-lg text-gray-700 hover:text-primary transition-colors"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Logo and Address */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <div className="relative w-40 h-20">
                  <Image
                    src="/images/logo-Verde-NYC-green.png"
                    alt="Verde NYC"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="text-gray-600">
                <Link 
                  href={siteConfig.address.googleMaps}
                  target="_blank"
                  className="hover:text-primary transition-colors block mb-2"
                >
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}
                </Link>
                <Link 
                  href="/reserve"
                  className="text-primary hover:underline text-sm"
                >
                  View Hours
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-5">
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {footerNavigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <NewsletterForm />
            </div>

            {/* Map */}
            <div className="lg:col-span-4">
              <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4047144920364!2d-80.13930802459865!3d25.790218977334025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b485dbbfffff%3A0xb35569e33c3a935c!2sMILA!5e0!3m2!1sen!2sus!4v1765583826432!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Verde NYC Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Verde NYC. All rights reserved.</p>
            <p className="mt-2">
              Website by{' '}
              <Link 
                href="https://www.rivieradininggroup.com/" 
                target="_blank"
                className="text-primary hover:underline"
              >
                Riviera Dining Group
              </Link>
            </p>
          </div>
        </div>
      </Container>

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Restaurant', 'LocalBusiness'],
            name: 'MILA',
            image: [
              '/images/logo-Verde-NYC-green.png',
              '/images/40A5026-verde-newyork-750x750.jpg',
            ],
            url: 'https://verdenyc.com/',
            telephone: '+12125551234',
            priceRange: 'Starting at $100',
            menu: 'https://verdenyc.com/restaurant',
            servesCuisine: 'Mediterranean',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Meatpacking District',
              addressLocality: 'New York',
              addressRegion: 'NY',
              postalCode: '10014',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 25.7902407,
              longitude: -80.1368136,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
                opens: '18:00',
                closes: '01:30',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Thursday',
                opens: '18:00',
                closes: '02:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Friday', 'Saturday'],
                opens: '17:30',
                closes: '02:30',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '11:30',
                closes: '14:30',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '18:00',
                closes: '01:30',
              },
            ],
            sameAs: [
              'https://www.instagram.com/verdenyc/',
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 4.7,
              ratingCount: 14542,
              bestRating: 5,
              worstRating: 1,
            },
          }),
        }}
      />
    </footer>
  )
}
