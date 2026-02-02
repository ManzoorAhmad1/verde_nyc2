import VideoHero from '@/app/components/Hero/VideoHero'
import VenuesSection from '@/app/components/Sections/VenuesSection'
import IntroductionSection from '@/app/components/Sections/IntroductionSection'
import ReserveSection from '@/app/components/Sections/ReserveSection'
import PhilosophySection from '@/app/components/Sections/PhilosophySection'
import ArtCultureSection from '@/app/components/Sections/ArtCultureSection'
import InstagramSection from '@/app/components/Sections/InstagramSection'
import ScrollSection from '@/app/components/UI/ScrollSection'

export default function HomePage() {
  return (
    <div className="scroll-container">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <VideoHero />
      </div>

      {/* Scrolling sections with drag overlay effect */}
      <ScrollSection zIndex={20} backgroundColor="bg-white">
        <VenuesSection />
      </ScrollSection>

      <ScrollSection zIndex={30} backgroundColor="bg-neutral-900">
        <IntroductionSection />
      </ScrollSection>

      <ScrollSection zIndex={40} backgroundColor="bg-white">
        <ReserveSection />
      </ScrollSection>

      <ScrollSection zIndex={50} backgroundColor="bg-neutral-50">
        <PhilosophySection />
      </ScrollSection>

      <ScrollSection zIndex={60} backgroundColor="bg-white">
        <ArtCultureSection />
      </ScrollSection>

      <ScrollSection zIndex={70} backgroundColor="bg-neutral-900">
        <InstagramSection />
      </ScrollSection>
    </div>
  )
}