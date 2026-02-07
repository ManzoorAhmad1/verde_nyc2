'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function MilaLoungePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [
    {
      src: '/images/_40A8486.jpg',
      alt: 'Verde NYC Lounge Interior'
    },
    {
      src: '/images/_40A8487.jpg',
      alt: 'Verde NYC Lounge Ambiance'
    },
    {
      src: '/images/_40A8489.jpg',
      alt: 'Verde NYC Lounge Experience'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <main className="lounge-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Gallery Section */}
      <section id="lounge-gallery" className="lounge-gallery-section">
        <div className="lounge-gallery-wrapper">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`lounge-gallery-item ${index === currentSlide ? 'active' : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
          <div className="lounge-gallery-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`lounge-gallery-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verde NYC Lounge Content Section */}
      <section id="mila-lounge" className="lounge-content-section">
        <div className="lounge-content-inner">
          <h1 className='text-[#3A363A] '>VERDE LOUNGE</h1>
          
          <h3 className="lounge-subtitle text-[#948E84]">
            From the legendary nightlife of Paris to the glamorous evenings of Dubai, the Yeeels Group has mastered the art of sophisticated celebration. Verde Lounge NYC brings this expertise to Manhattan—a multi-sensory sanctuary where Mediterranean elegance meets New York&apos;s electric energy in the heart of the Meatpacking District.
          </h3>
          
          <p className='text-[#948E84]'>
            Drawing inspiration from our acclaimed lounges in France and the UAE, the space features minimalistic natural materials—reclaimed European woods, artisanal textiles, and warm-glow lighting imported from our Parisian ateliers. Dramatic lush foliage and bespoke design elements create an intimate atmosphere that channels the spirit of the Mediterranean coast.
          </p>
          
          <p className='text-[#948E84]'>
            The evening unfolds as a journey: downtempo selections from our internationally-trained resident DJs accompany <Link href="/restaurant">refined dinner service</Link> and innovative cocktails crafted by mixologists trained across our global venues. As night deepens, the energy builds into pulsing electronic rhythms, premium bottle service, and unexpected artist performances that have made Verde Lounge destinations legendary from the Champs-Élysées to Sheikh Zayed Road.
          </p>
          
          <p className='text-[#948E84]'>
            Guests must be 21+ to experience <Link href="/">Verde NYC</Link> Lounge at <Link href="https://maps.app.goo.gl/JLnMD7GPo3FHgSBb7" target="_blank">85 10th Avenue, Meatpacking District</Link>.
          </p>

          <div className="lounge-buttons">
            <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="lounge-btn">
              Reserve for dinner
            </Link>
            <Link href="/restaurant" className="lounge-btn">
              MENU
            </Link>
            <Link href="mailto:reservations@verdenyc.com?subject=Verde%20Lounge%20Bottle%20Service%20Inquiry" target="_blank" className="lounge-btn">
              reserve for bottle service
            </Link>
          </div>
        </div>
      </section>

      {/* DJ Programming Section */}
      <section id="programme" className="lounge-programme-section">
        <div className="lounge-programme-inner">
          <h2 className='text-[#3A363A] '>International DJ Programming</h2>
          <p className='text-[#948E84]'>Our music programming reflects the Yeeels Group&apos;s global perspective—resident DJs trained across our Paris, Dubai, and Saint-Tropez venues, joined by international guest artists who have graced our stages worldwide. Every evening is a carefully curated sonic journey that honors our Mediterranean roots while embracing Manhattan&apos;s dynamic energy.</p>
          
          <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="lounge-btn">
            Book YOUR TABLE
          </Link>
          
          <div className="lounge-lineup-image">
            <Image
              src="/images/_40A8490.jpg"
              alt="Monthly DJ Lineup"
              width={1080}
              height={1350}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* T-Shirts Section */}
      <section id="miami-art-week-tshirts-ml" className="lounge-tshirts-section">
        <div className="lounge-tshirts-header">
          <h2 className='text-[#3A363A] '>VERDE LOUNGE<br />Limited Edition Collection</h2>
          <p className='text-[#948E84]'>Celebrating our global expansion from Paris to New York, this limited-edition collection embodies the Yeeels Group spirit—where Mediterranean sophistication meets metropolitan energy. A wearable piece of our international legacy.</p>
          <hr />
        </div>

        <div className="lounge-tshirts-content">
          <div className="lounge-tshirts-image">
            <Image
              src="/images/_40A8493.jpg"
              alt="Limited Edition Collection"
              width={1080}
              height={1350}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="lounge-tshirts-details">
            <h2 className='text-[#3A363A] '>Yeeels Group NYC Collection - Limited Edition</h2>
            
            <h3 className='text-[#3A363A]'><strong>Description</strong></h3>
            <p  className="indented text-[#948E84]">100% premium Italian cotton - Classic European fit - Black</p>
            
            <h3 className='text-[#3A363A]'><strong>Sizes</strong></h3>
            <p  className="indented text-[#948E84]">Small (S) - Medium (M) - Large (L) (runs small)</p>
            
            <h3 className='text-[#3A363A]'><strong>Shipping Options</strong></h3>
            <p  className="indented text-[#948E84]"><strong>Shipping via FedEx:</strong> Flat rate - $10.95 within the U.S (3 business days delivery)</p>
            <p  className="indented text-[#948E84]"><strong>Local Pick-Up:</strong> Available to pick-up at <Link href="https://maps.app.goo.gl/JLnMD7GPo3FHgSBb7" target="_blank">Verde NYC</Link> (2 business days after purchase).</p>
            <p  className="indented text-[#948E84]">Pick-Up hours: Tuesday to Sunday: 6:00 PM – 10:00 PM and Saturday &amp; Sunday: 11:30 AM – 4:00 PM.</p>
            <p  className="indented text-[#948E84]">Your confirmation email will be requested to pick your order.</p>
            <p  className="indented text-[#948E84]">Orders not picked up within <strong>14 days</strong> will be forfeited without refund.</p>
            
            <h3 className='text-[#3A363A]'><strong>Return &amp; Refund Policy</strong></h3>
            <p  className="indented text-[#948E84]">All sales are final. We do not accept returns, exchanges, or offer refunds once an order has been placed.</p>
            
            <p className='text-[#948E84]'><strong>*For Presale, T-Shirts will be available to ship December 1st.</strong></p>

            <Link href="https://buy.stripe.com/fZu00j3GgerR3Lp3vv8g00f" target="_blank" className="lounge-buy-btn">
              BUY NOW $80 | All taxes Included
            </Link>
          </div>
        </div>
      </section>

      {/* Hours & Vibes Section */}
      <section id="milaloungevibes" className="lounge-vibes-section">
        <div className="lounge-vibes-inner">
          <h3 className='text-[#3A363A]'>HOURS</h3>
          <p className='text-[#948E84]'>Wednesday - Saturday: 6:30 pm – 4 am</p>
          <p className='text-[#948E84]'>Follow the Yeeels Group journey on <Link href="https://www.instagram.com/yeeels/" target="_blank">Instagram</Link></p>
          
          <div className="lounge-collage-image">
            <img
              src="/images/_40A8494.jpg"
              alt="Verde NYC Lounge atmosphere and nightlife"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="lounge-index-nav">
        <a href="#lounge-gallery" className="lounge-nav-item active">
          <div className="lounge-nav-indicator"></div>
          <span>Lounge Gallery</span>
        </a>
        <a href="#mila-lounge" className="lounge-nav-item">
          <div className="lounge-nav-indicator"></div>
          <span className='text-[#3A363A]'>VERDE LOUNGE</span>
        </a>
        <a href="#programme" className="lounge-nav-item">
          <div className="lounge-nav-indicator"></div>
          <span className='text-[#3A363A]'>Programme</span>
        </a>
        <a href="#miami-art-week-tshirts-ml" className="lounge-nav-item">
          <div className="lounge-nav-indicator"></div>
          <span className='text-[#3A363A]'>T-Shirts</span>
        </a>
        <a href="#milaloungevibes" className="lounge-nav-item">
          <div className="lounge-nav-indicator"></div>
          <span className='text-[#3A363A]'>Vibes</span>
        </a>
      </nav>

      <Footer />
    </main>
  );
}
