import Container from '../Layout/Container'
import ParallaxImage from '../UI/ParallaxImage'

export default function PhilosophySection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Texture */}
      <ParallaxImage
        src="/images/Legends-verde-dubai-8406.jpg"
        alt="Eudaimonia Philosophy"
        className="absolute inset-0 z-0"
        speed={0.3}
      />
      
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            {/* Empty for spacing */}
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-light text-gray-900 text-center">Eudaimonia</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Living by the mantra 'EUDAIMONIA' (translated as "the contented, happy state you feel 
              when you travel"), Verde NYC embodies a multi-sensory and multi-venue culinary and lifestyle 
              experience filled with eclectic blends of Balearic music, tasteful dishes, and a lively 
              ambiance to celebrate the night away.
            </p>
            
            <div className="border-t border-gray-200 pt-4" />
          </div>
        </div>
      </Container>
    </section>
  )
}