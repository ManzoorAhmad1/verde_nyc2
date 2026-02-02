import Container from '../Layout/Container'
import ParallaxImage from '../UI/ParallaxImage'

export default function IntroductionSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Texture */}
      <ParallaxImage
        src="/images/VERDE-DUBAI-VENUE_0018__40A8522.jpg.jpg"
        alt="Verde NYC Restaurant Interior"
        className="absolute inset-0 z-0"
        speed={0.5}
      />
      
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <Container className="relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Inspired by the elegant, minimalist details of nature,<br />
            Verde NYC embodies a multi-sensory culinary and lifestyle sanctuary.
          </h2>
        </div>
      </Container>
    </section>
  )
}