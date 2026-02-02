import Container from '../Layout/Container'
import Image from 'next/image'
import Button from '../UI/Button'
import Link from 'next/link'

export default function ArtCultureSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/Legends-verde-dubai-8406.jpg"
              alt="Verde NYC Art and Culture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Content */}
          <div className="lg:pl-12">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                ART Culture
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  We are collectors, artisans, and craftsmen, carving a lifestyle dedicated to 
                  creating sanctuary spaces that transport our guests.
                </p>
                
                <p className="leading-relaxed">
                  The Japanese Wabi-Sabi philosophy and the restaurant's aesthetic reflect 
                  imperfect beauty and the ingenuous integrity of natural objects and processes. 
                  We are proud to collaborate with talented artists, painters, potters and 
                  ceramists worldwide.
                </p>
                
                <p className="leading-relaxed font-medium">
                  For any collaboration inquiries, email us at{' '}
                  <a 
                    href="mailto:pr@rivieradininggroup.com" 
                    className="text-primary hover:underline"
                  >
                    pr@rivieradininggroup.com
                  </a>
                </p>
              </div>
              
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-10 py-4"
                //   asChild
                >
                  <Link href="/contact" target="_blank">
                    contact us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
