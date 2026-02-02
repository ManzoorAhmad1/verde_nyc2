import Image from 'next/image'
import Link from 'next/link'
import Container from '@/app/components/Layout/Container'

const venues = [
  {
    title: 'RESTAURANT',
    description: 'Experience culinary excellence with our Mediterranean-inspired cuisine in an elegant rooftop setting.',
    image: '/images/Legends-verde-dubai-8406.jpg',
    link: '/restaurant',
  },
  {
    title: 'BAR & LOUNGE',
    description: 'Sophisticated cocktails and premium spirits in a chic atmosphere with stunning city views.',
    image: '/images/mixology-cocktails.jpg',
    link: '/bar',
  },
  {
    title: 'PRIVATE EVENTS',
    description: 'Host your exclusive events in our versatile spaces, perfect for celebrations and corporate gatherings.',
    image: '/images/40A4823-verde-newyork.jpg',
    link: '/private-events',
  },
  {
    title: 'GALLERY',
    description: 'Explore our curated collection of art and ambiance that defines our unique dining experience.',
    image: '/images/40A5006-verde-newyork.jpg',
    link: '/gallery',
  },
]

export default function VenuesSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            After Paris, St Tropez, Dubai & Sardinia
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Verde NYC - Modern Mediterranean Dining
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Opening Fall 2025 in the Meatpacking District. An iconic Mediterranean restaurant bringing the essence 
            of international destinations to New York City. Dining, music, and energy – all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <div key={index} className="group cursor-pointer">
              <Link href={venue.link}>
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <Image
                    src={venue.image}
                    alt={venue.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-2 uppercase tracking-wide">
                  {venue.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {venue.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}