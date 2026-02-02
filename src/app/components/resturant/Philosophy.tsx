import Image from 'next/image'
import Link from 'next/link'

const Philosophy = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/40A4867-750x750.jpg"
          alt="verde-nyc-texture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content */}
      <div className="relative py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light italic mb-6 text-primary">
              Mediterranean Fusion Restaurant in New York
            </h1>
            <h2 className="text-xl md:text-2xl font-normal mb-8 text-neutral-700">
              Welcome to a place where celebrating and dining seamlessly merge into one unique experience.
            </h2>
            
            <div className="text-neutral-600 space-y-4 mb-8">
              <p>
                The distinctively curated rooftop space pays homage to the simple spirit of Cycladic design, 
                fused with Wabi-Sabi inspired details. <a href="https://verdenyc.com/" className="text-primary hover:text-secondary transition-colors">Verde NYC</a>'s cuisine is inspired by Mediterranean 
                eating practices, both healthful and tasteful, embracing the importance of enjoying life.
              </p>
              <p>
                The kitchen, under the helm of 26-times Michelin awarded Chef Michaël Michaelidis, and Corporate 
                Chef Joshua Walls, aims to take guests on a culinary journey through the shores of the Mediterranean 
                and Japan while creating a creative expression of flavorful MediterrAsian cuisine.
              </p>
              <p>
                Dishes are served in the informal izakaya dining style, meaning they are meant to be shared at the 
                table, in an energetic setting, paired with theatrical tableside preparations.
              </p>
            </div>

            {/* Reserve Button */}
            <div className="mt-12">
              <a
                href="https://www.opentable.com/restref/client/?restref=1054648&lang=en-US&ot_source=Restaurant%20website&ot_campaign=reservations&corrid=03d1b2df-e6d2-49a5-883f-eb3ab250bf92"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-white text-lg font-medium hover:bg-primary-dark transition-colors duration-200"
              >
                RESERVE YOUR TABLE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Philosophy