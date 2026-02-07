'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function PrivateEventsPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="private-events-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Gallery Section */}
      <section className="private-events-hero">
        <div className="private-events-hero-image">
          <img
            loading="eager" decoding="async" fetchPriority="high" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8461.jpg"
            alt="Verde NYC private events venue"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Event Menu Section */}
      <section className="private-events-intro">
        <div className="private-events-intro-bg">
          <img
            loading="lazy" decoding="async" src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"
            alt="texture background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="private-events-intro-content">
          <h1 style={{color: 'var(--verde-heading)'}}>
            <em>World-Class Private Events by Yeeels Group</em>
            <br />
            From Intimate Gatherings to Grand Celebrations
          </h1>
          
          <p className="private-events-description" style={{color: 'var(--verde-text)'}}>
            The Yeeels Group has orchestrated extraordinary private events across Paris, Saint-Tropez, Dubai, and Italy for over a decade. Now, this expertise arrives in New York. Verde NYC offers bespoke event experiences that blend Mediterranean elegance with Manhattan sophistication—from intimate chef&apos;s table dinners to full venue buyouts for up to 400 guests. Our dedicated events team brings the same meticulous attention to detail that has made our venues the preferred choice for discerning hosts across Europe and the Middle East.
          </p>
          <p className="private-events-description" style={{color: 'var(--verde-text)'}}>
            Contact our global events team to begin crafting your extraordinary occasion: <a href="mailto:events@yeeels.com">events@yeeels.com</a>
          </p>

          <div className="private-events-buttons">
            <a href="mailto:event@verde-nyc.com" target="_blank" rel="noopener noreferrer" className="private-events-button">
              INQUIRE ABOUT EVENTS
            </a>
            <a href="tel:+16464068763" target="_blank" rel="noopener noreferrer" className="private-events-button">
              CALL US
            </a>
          </div>

          <div className="private-events-brochure">
            <h2 style={{color: 'var(--verde-heading)'}}>The Yeeels Group Event Experience</h2>
            <p style={{color: 'var(--verde-text)'}}>From corporate galas in Dubai to society weddings in Saint-Tropez, we have perfected the art of exceptional hospitality. Let our New York team create an unforgettable celebration tailored to your vision, with the same excellence that defines every Yeeels Group venue worldwide.</p>
            <a href="mailto:events@yeeels.com" target="_blank" rel="noopener noreferrer" className="private-events-button">
              CONTACT GLOBAL EVENTS
            </a>
          </div>
        </div>
      </section>

      {/* Indoor/Outdoor Section */}
      <section className="private-events-spaces">
        {/* Indoor Private Dining */}
        <div className="private-events-grid reverse">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8464.jpg"
                alt="Interior view of Verde NYC private dining room"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Indoor Private Dining Rooms</h2>
            <p style={{color: 'var(--verde-text)'}}>Drawing inspiration from our celebrated venues across France, Italy, and the UAE, Verde NYC&apos;s private dining rooms are architectural masterpieces designed to create lasting impressions. Each space reflects the Yeeels Group&apos;s signature aesthetic—where reclaimed European woods, Mediterranean textiles, and contemporary design converge to create an atmosphere of refined luxury.</p>
            <p style={{color: 'var(--verde-text)'}}>Our main dining room features floor-to-ceiling windows with breathtaking Meatpacking District views, while intimate private spaces throughout the venue showcase bespoke design elements imported from our Parisian ateliers. Accommodating parties from 10 to 150 guests, each space is meticulously curated with custom lighting, commissioned artworks, and furnishings that honor our Mediterranean heritage.</p>
          </div>
        </div>

        {/* Outdoor Event Spaces */}
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8469.jpg"
                alt="Verde NYC outdoor rooftop terrace event space"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Outdoor Event Spaces</h2>
            <p style={{color: 'var(--verde-text)'}}>Inspired by our legendary beach clubs in Saint-Tropez and Dubai, Verde NYC&apos;s rooftop terrace brings open-air Mediterranean glamour to the heart of Manhattan. Our outdoor spaces blend the natural elegance that defines Verde Beach destinations worldwide with sophisticated New York energy—featuring lush greenery, ambient lighting, and panoramic skyline views that create an unforgettable backdrop for any celebration.</p>
            <p style={{color: 'var(--verde-text)'}}>Whether you envision a sunset cocktail reception, an al fresco wedding ceremony, or a corporate gathering under the stars, our rooftop venues accommodate up to 200 guests. Climate-controlled retractable coverings ensure comfort year-round while preserving the open-air ambiance that has made our outdoor venues legendary from the French Riviera to the Arabian Gulf.</p>
          </div>
        </div>

        {/* Verde Lounge */}
        <div className="private-events-grid reverse">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8470.jpg"
                alt="Verde NYC Lounge bar area"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>VERDE LOUNGE</h2>
            <p style={{color: 'var(--verde-text)'}}>The Yeeels Group pioneered the concept of integrated lounge experiences across our Paris and Dubai venues, and Verde Lounge NYC represents the pinnacle of this evolution. This exclusive space channels the sophisticated nightlife energy that has made our European lounges legendary—combining warm amber lighting, plush Mediterranean-inspired seating, and design elements curated from our venues in France, Italy, and the UAE.</p>
            <p style={{color: 'var(--verde-text)'}}>Accommodating up to 75 guests, Verde Lounge offers an unparalleled setting for cocktail receptions, networking events, and upscale celebrations. Our internationally-trained mixology team crafts signature cocktails inspired by each of our global destinations, while resident DJs create soundscapes that transition seamlessly from sophisticated ambiance to celebratory energy.</p>
          </div>
        </div>

        {/* Private Dining Experience */}
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <img
                loading="lazy" decoding="async" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8471.jpg"
                alt="Verde NYC Chef's Table private dining"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Chef's Table Experience</h2>
            <p style={{color: 'var(--verde-text)'}}>For the most discerning hosts, our Chef&apos;s Table offers an intimate journey into culinary artistry—a concept perfected across our Michelin-recognized kitchens in Paris and refined for the New York palate. This exclusive 10-seat private dining room places you at the heart of the action, where our executive chef presents a bespoke multi-course tasting menu showcasing techniques and ingredients sourced from our global network of premium suppliers.</p>
            <p style={{color: 'var(--verde-text)'}}>The space features a dramatic marble counter, a 500-year-old hinoki wood cutting board imported from Japan, and design elements that honor both Mediterranean warmth and Japanese precision. Your personal sommelier pairs each course with exceptional wines selected from our international cellar, creating a harmonious dining experience that embodies the Yeeels Group commitment to excellence without compromise.</p>
          </div>
        </div>
      </section>

      {/* Types of Events Section */}
      <section className="private-events-types">
        <div className="private-events-types-content">
          <h2 style={{color: 'var(--verde-heading)'}}>Events Hosted Across Our Global Venues</h2>
          <p style={{color: 'var(--verde-text)'}}>From haute couture fashion launches in Paris to royal celebrations in Dubai, from intimate celebrity dinners in Saint-Tropez to Fortune 500 corporate gatherings across our network—the Yeeels Group has hosted the world&apos;s most discerning clientele. At <Link href="/">Verde NYC</Link>, we bring this unparalleled expertise to every event, whether an elegant birthday soirée, a sophisticated engagement dinner, or a landmark corporate milestone.</p>
          <p style={{color: 'var(--verde-text)'}}>Our dedicated team crafts bespoke experiences tailored to your vision, with access to our global network of culinary talent, entertainment partnerships, and design resources. Beyond our <Link href="/restaurant">exceptional cuisine</Link>, we offer custom décor, international branding opportunities, world-class entertainment, and state-of-the-art technical capabilities—all orchestrated with the precision that has made us leaders in four countries.</p>
          
          <h2 style={{color: 'var(--verde-heading)'}}>Complete Venue Buyouts</h2>
          <p style={{color: 'var(--verde-text)'}}>A private buyout of Verde NYC offers truly unparalleled exclusivity—complete access to all four of our distinctive spaces, with the freedom to customize every element to your vision. Transform our rooftop into a Parisian garden party, channel the energy of our Dubai venues for a corporate gala, or create an entirely new concept limited only by imagination. Our international events team brings expertise from across our global portfolio to ensure flawless execution.</p>
          <p style={{color: 'var(--verde-text)'}}>For private event inquiries, contact our global events team at <a href="mailto:events@yeeels.com"><span style={{ textDecoration: 'underline' }}>events@yeeels.com</span></a> or reach Maksim Dirgela directly at +971 56 675 6965.</p>
          
          <a href="mailto:events@yeeels.com" target="_blank" rel="noopener noreferrer" className="private-events-cta-button">
            inquire about your event
          </a>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="private-events-index-nav">
        <div className="private-events-index-nav-inner">
          <a href="#" className="private-events-nav-item active">
            <div className="private-events-nav-indicator"></div>
            <div className="private-events-nav-text"><span>Event Gallery</span></div>
          </a>
          <a href="#event-menu-miami" className="private-events-nav-item">
            <div className="private-events-nav-indicator"></div>
            <div className="private-events-nav-text"><span>Event Planning</span></div>
          </a>
          <a href="#mila-indoor-outdoor" className="private-events-nav-item">
            <div className="private-events-nav-indicator"></div>
            <div className="private-events-nav-text"><span>Event Spaces</span></div>
          </a>
          <a href="#private-events-venues" className="private-events-nav-item">
            <div className="private-events-nav-indicator"></div>
            <div className="private-events-nav-text"><span>Venue Options</span></div>
          </a>
        </div>
      </nav>

      <Footer />
    </div>
  );
}
