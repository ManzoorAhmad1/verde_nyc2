import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function PhilosophySection() {
  return (
    <div>
      {/* Philosophy Section */}
      <section className="bg-mila-dark py-32 px-6 sticky top-0 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <Image
          src="/mila-miami-texture.png"
          alt="Texture Background"
          fill
          className="object-cover object-center -z-10 opacity-50"
          sizes="100vw"
        />
        <div className="relative z-10 text-white">
          <h2 className="section-heading">Our Philosophy</h2>
          <div className="philosophy-grid">
            <p style={{ color: 'var(--verde-text)' }}>
              The Yeeels Group was founded on a singular vision: to become the global leader in high-end festive dining. This vision has guided our expansion from Paris to Saint-Tropez, Dubai to New York, always with the same unwavering commitment to excellence. At Verde NYC, this philosophy manifests in every detail—from the carefully sourced Mediterranean ingredients to the bespoke interior design that blends reclaimed woods, natural stone, and artisanal textiles imported from our European ateliers.
            </p>
            <p style={{ color: 'var(--verde-text)' }}>
              Our three pillars—Food, Tribe, and Stories—define everything we do. Creative and passionate cuisine designed for sharing. A culture of collaboration, respect, and operational excellence. High-energy, immersive experiences that transform dining into celebration. These values have made us leaders across four countries and nine venues, and they now come to life in the heart of Manhattan&apos;s Meatpacking District.
            </p>
          </div>
        </div>
      </section>
      {/* Art Culture Section */}
      <section id="art-culture-mila" className="art-section relative z-20">
        <div className="art-image relative">
          <Image
            src="/images/_40A8425.jpg"
            alt="Verde NYC Art Culture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="art-content" style={{ color: 'var(--verde-text)' }}>
          <h2 style={{ color: 'var(--verde-heading)' }}>ART & Culture</h2>
          <p>
            The Yeeels Group has always believed that exceptional dining spaces require exceptional artistry. Across our venues in France, Italy, UAE, and the United States, we collaborate with visionary artists, sculptors, ceramists, and designers to create environments that inspire and transport.
          </p>
          <p>
            At Verde NYC, Japanese Wabi-Sabi philosophy meets Mediterranean warmth—celebrating the beauty of imperfection and the integrity of natural materials. Hand-selected artworks, bespoke installations, and carefully curated design elements create a sanctuary where every corner tells a story, every surface invites touch, and every moment becomes a memory.
          </p>
          <p>For collaboration inquiries, contact us at pr@yeeels.com</p>
          <Link href="/contact" className="whitespace-nowrap w-40 bg-white border-[#8e402f] hover:bg-[#8e402f] btn btn-primary mt-6">
            contact us
          </Link>
        </div>
      </section>





    </div>
  )
}

export default PhilosophySection