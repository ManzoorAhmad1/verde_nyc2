import Container from '../Layout/Container'
import Button from '../UI/Button'
import Link from 'next/link'

export default function ReserveSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-px h-20 bg-primary mx-auto mb-8" />
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Rooftop Dining & Multi-sensory Ambiance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of Meatpacking District, Verde NYC is a transportive venue bringing an elevated 
              Mediterranean dining experience to New York. Embracing the effortless beauty of the 
              five elements, Verde NYC offers a unique experience that awakens all of the senses, through 
              refined taste, bespoke mixology, transporting sounds and an unparalleled ambiance. 
              The restaurant known for its flavorful dishes, its fresh and vibrant atmosphere 
              transforms a high-end dinner service into a celebration 
              the night away.
            </p>
          </div>
          
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              className="px-12 py-4 text-lg"
            //   asChild
            >
              <Link href="/reserve">
                reserve your experience
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}