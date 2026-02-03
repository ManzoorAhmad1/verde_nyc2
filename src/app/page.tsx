'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <Header />

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Video */}
        <section id="opening-video" className="hero-section">
          <div className="hero-video-container">
            <iframe
              className="hero-video-bg"
              src="https://www.youtube.com/embed/HGBXHkrPQX0?autoplay=1&mute=1&loop=1&playlist=HGBXHkrPQX0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                minWidth: '177.77vh',
                transform: 'translate(-50%, -50%)',
                border: 'none',
              }}
            />
            <div className="hero-overlay" />
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-indicator-line" />
          </div>
        </section>

        {/* Verde NYC Venues Section */}
        <section id="mila-venues" className="section" style={{ backgroundImage: 'url(/images/texture.png)', backgroundSize: 'cover' }}>
          <div className="max-w-6xl mx-auto">
            <h3 className="section-title font-bold">#1 HIGHEST-GROSSING Independent Restaurant in the U.S. - Restaurant Business</h3>
            <h2 className="section-heading">A culinary journey through the Mediterranean &amp; Asia</h2>
            
            <p className="section-text mb-16">
              Verde NYC is a multi-venue concept, aiming to transport guests on a culinary journey through the shores of 
              the Mediterranean and Japan, while creating a visionary expression of flavorful MediterrAsian cuisine.
            </p>
            <p className="section-text mb-16">
              Verde NYC&apos;s transportive venues include four concepts, starting with the rooftop restaurant, which elevates the 
              culinary and exclusive nightlife in the heart of New York City.
            </p>

            {/* Venue Cards Grid */}
            <div className="venue-grid mt-12">
              {/* Verde Restaurant */}
              <Link href="/restaurant" className="venue-card">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/31ec4b05-6b9d-4014-81bd-4baefcddb28f/DSC_4013.jpg"
                  alt="Verde NYC Restaurant"
                  fill
                  className="object-cover"
                />
                <div className="venue-card-overlay">
                  <h3 className="venue-card-title">Verde restaurant</h3>
                  <p className="venue-card-desc">
                    The distinctively curated rooftop aims to take guests on a culinary journey through the shores of the Mediterranean and Japan.
                  </p>
                </div>
              </Link>

              {/* Verde Omakase */}
              <Link href="/milaomakase" className="venue-card">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/067e5ee0-76ff-453f-9a16-954997681fc9/AlexTphoto.com+-+Mila+Omakase-01-HighRes.jpg"
                  alt="Verde NYC Omakase"
                  fill
                  className="object-cover"
                />
                <div className="venue-card-overlay">
                  <h3 className="venue-card-title">verde omakase</h3>
                  <p className="venue-card-desc">
                    A 10-seat enclosed room offering the most exclusive and authentic journey in the Far East, magnified by the Mediterranean influences.
                  </p>
                </div>
              </Link>

              {/* Verde Lounge */}
              <Link href="/milalounge" className="venue-card">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/8f672c29-bd96-4251-9c59-6df2e3e76e52/AlexTphoto.com+-+Mila+Lounge-04-HighRes.jpg"
                  alt="Verde NYC Lounge"
                  fill
                  className="object-cover"
                />
                <div className="venue-card-overlay">
                  <h3 className="venue-card-title">verde lounge</h3>
                  <p className="venue-card-desc">
                    A multi-sensory space offering a transportive, glamorous and elevated secluded nightlife, inspired by African tribes and primitive design style.
                  </p>
                </div>
              </Link>

              {/* MM Members Club */}
              <Link href="/membersclub" className="venue-card">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/5bc6c87d-cfad-4939-a20f-044ab02805a3/MM+Club+1.jpg"
                  alt="MM Members Club"
                  fill
                  className="object-cover"
                />
                <div className="venue-card-overlay">
                  <h3 className="venue-card-title">mm</h3>
                  <p className="venue-card-desc">
                    An exclusively and intimate venue, reserved to MM members, featuring a new glamorous and modern wind to the conventional speakeasy vibes.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section 
          id="introduction" 
          className="section section-with-bg"
          style={{ 
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/4123ed8a-2100-4876-a12b-4a146be4c408/MILA.jpg)',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="section-overlay" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="section-heading">
              Inspired by the elegant, minimalist details of nature, <br />
              Verde NYC embodies a multi-sensory culinary and lifestyle sanctuary.
            </h2>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve-mila" className="reserve-section">
          <div className="max-w-3xl mx-auto">
            <div className="vertical-line" />
            <h3>Rooftop Dining &amp; Multi-sensory Ambiance</h3>
            <p>
              Located in the heart of New York City, Verde NYC is a transportive venue bringing an elevated dining experience 
              and pleasure together with a magical, glamorous, and vibrant atmosphere, seamlessly merging into one unique 
              experience. Embracing the effortless beauty of the five elements, Verde NYC offers a unique experience that 
              awakens all of the senses, through refined taste, bespoke mixology, transporting ethnic sounds and an 
              unparalleled ambiance. The rooftop restaurant known for its flavorful dishes, its fresh and flirty ambiance 
              transforms a high-end dinner service into a vibrant atmosphere for guests to celebrate the night away.
            </p>
            <Link href="/reserve" className="btn btn-primary">
              reserve your experience
            </Link>
          </div>
        </section>

        {/* Eudaimonia Section */}
        <section 
          id="eudaimonia" 
          className="eudaimonia-section"
          style={{ 
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/e528ea05-1d1f-4146-a2b9-80fb763bde2c/LONGEVITY-1-edit.jpg)',
          }}
        >
          <div className="section-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
          <div className="relative z-10">
            <div className="eudaimonia-content text-white">
              <hr className="hr-line" />
              <h3>Eudaimonia</h3>
              <p>
                Living by the mantra &apos;EUDAIMONIA&apos; (translated as &quot;the contented, happy state you feel when you travel&quot;), 
                Verde NYC embodies a multi-sensory and multi-venue culinary and lifestyle experience filled with eclectic 
                blends of Balearic music, tasteful dishes, and a lively ambiance to celebrate the night away.
              </p>
              <hr className="hr-line" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section 
          id="our-philosophy" 
          className="philosophy-section"
          style={{ 
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png)',
          }}
        >
          <div className="section-overlay" style={{ background: 'rgba(0,0,0,0.3)' }} />
          <div className="relative z-10 text-white">
            <h2 className="section-heading">Our Philosophy</h2>
            <div className="philosophy-grid">
              <p>
                Envisioned and crafted by the founders, Gregory Galy and Marine Giron-Galy through their travels, 
                experiences and thirst for discovery and adventure, Verde NYC&apos;s design has been brought to life by 
                interior designer Olya Volkova. She combined traditional and noble materials such as reclaimed wood, 
                unpolished floors, untainted stone, handmade linen and cotton fabrics to create a serene yet luxurious ambiance.
              </p>
              <p>
                Verde NYC&apos;s aesthetic fuses the minimalistic design of the Cycladic islands with Japan&apos;s Wabi-Sabi philosophy 
                of embracing life&apos;s unpredictability and accepting imperfections as beauty. Sculptures, paintings and 
                art made of metal, clay and wood are placed throughout the restaurant to further enhance the theme 
                and aesthetic, curating a sanctuary.
              </p>
            </div>
          </div>
        </section>

        {/* Art Culture Section */}
        <section id="art-culture-mila" className="art-section">
          <div className="art-image">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/8821ab81-8a28-4bb5-8c68-218c3b31789e/DSC_8759.jpg"
              alt="Verde NYC Art Culture"
              fill
              className="object-cover"
            />
          </div>
          <div className="art-content text-white">
            <h2>ART Culture</h2>
            <p>
              We are collectors, artisans, and craftsmen, carving a lifestyle dedicated to creating sanctuary spaces 
              that transport our guests.
            </p>
            <p>
              The Japanese Wabi-Sabi philosophy and the restaurant&apos;s aesthetic reflect imperfect beauty and the 
              ingenuous integrity of natural objects and processes. We are proud to collaborate with talented artists, 
              painters, potters and ceramists worldwide.
            </p>
            <p>For any collaboration inquiries, email us at pr@rivieradininggroup.com</p>
            <Link href="/contact" className="btn btn-primary mt-6">
              contact us
            </Link>
          </div>
        </section>

        {/* Instagram Section */}
        <section id="insta" className="section section-dark">
          <div className="max-w-6xl mx-auto">
            <h3 className="section-title text-center mb-8">
              FOLLOW US ON INSTAGRAM{' '}
              <Link href="https://www.instagram.com/milagroup_miami/" target="_blank" className="underline">
                @MILAgroup_miami
              </Link>
            </h3>
            <div className="instagram-grid">
              <Link href="https://www.instagram.com/milagroup_miami/" target="_blank" className="instagram-item">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769652316932-M19U2Q5ET3KUZWB85V7W/image-asset.jpeg"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </Link>
              <Link href="https://www.instagram.com/milagroup_miami/" target="_blank" className="instagram-item">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769460060172-DCS2WFURNDZVPYX6X3DA/image-asset.jpeg"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </Link>
              <Link href="https://www.instagram.com/milagroup_miami/" target="_blank" className="instagram-item">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769215038975-SOI0H222HTEGLNGXK001/image-asset.jpeg"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </Link>
              <Link href="https://www.instagram.com/milagroup_miami/" target="_blank" className="instagram-item">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1769042629602-0LTVL48G0ZIYAE0HDQFD/image-asset.jpeg"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </Link>
              <Link href="https://www.instagram.com/milagroup_miami/" target="_blank" className="instagram-item">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768591723858-OXU62MEW8MYWI6CI9H08/image-asset.jpeg"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </Link>
              <Link href="https://www.instagram.com/milagroup_miami/" target="_blank" className="instagram-item">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1768332668589-FL0J0JD5M6SE026TS0T2/image-asset.jpeg"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
