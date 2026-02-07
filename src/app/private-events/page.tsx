'use client';

import { useState } from 'react';
import Image from 'next/image';
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
          <Image
            src="/images/2024.11.12-ExteriorNight-Verde-burgundy.png"
            alt="Verde NYC private events venue"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </section>

      {/* Event Menu Section */}
      <section className="private-events-intro">
        <div className="private-events-intro-bg">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"
            alt="texture background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="private-events-intro-content">
          <h1 style={{color: 'var(--verde-heading)'}}>
            <em>The Perfect Event Venue in Meatpacking District</em>
            <br />
            Intimate and Large Private Gatherings
          </h1>
          
          <p className="private-events-description" style={{color: 'var(--verde-text)'}}>
            Verde NYC offers endless possibilities for private dining and special events. From intimate gatherings to full venue buyouts, our dedicated event team can curate a unique experience for you. Whether it&apos;s a corporate celebration, wedding reception, or milestone birthday, Verde transforms your vision into an unforgettable Mediterranean celebration.
          </p>
          <p className="private-events-description" style={{color: 'var(--verde-text)'}}>
            Contact our events team to discuss your special occasion: <a href="mailto:event@verde-nyc.com">event@verde-nyc.com</a>
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
            <h2 style={{color: 'var(--verde-heading)'}}>Plan Your Special Event</h2>
            <p style={{color: 'var(--verde-text)'}}>Contact our events team to discuss menu customization, space selection, and create an unforgettable celebration at Verde NYC.</p>
            <a href="mailto:event@verde-nyc.com" target="_blank" rel="noopener noreferrer" className="private-events-button">
              EMAIL US
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
              <Image
                src="/images/RA_Verde_Main1_RV6_250317.jpg"
                alt="interior view of Verde NYC with rectangle small tables on the bottom right and round tables top center"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Indoor Private Dining Rooms</h2>
            <p style={{color: 'var(--verde-text)'}}>Verde NYC's indoor private dining rooms are architectural masterpieces designed to create lasting impressions. Our main dining room features floor-to-ceiling windows offering breathtaking views of the Meatpacking District, while our intimate private spaces throughout the restaurant showcase sophisticated Mediterranean design elements that transport guests to the coastal elegance of the French Riviera.</p>
            <p style={{color: 'var(--verde-text)'}}>Accommodating parties from 10 to 150 guests, each space is meticulously curated with custom lighting, art installations, and luxurious furnishings. Our dedicated events team works closely with you to craft personalized menus featuring seasonal Mediterranean cuisine, complemented by our extensive wine collection and craft cocktail program.</p>
          </div>
        </div>

        {/* Outdoor Event Spaces */}
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <Image
                src="/images/RA_Verde_Main2_RV6_250317.jpg"
                alt="interior view of Verde NYC looking toward the outdoor spaces/rooftop terrace"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Outdoor Event Spaces</h2>
            <p style={{color: 'var(--verde-text)'}}>Elevate your celebration with Verde NYC's stunning rooftop terrace, an urban oasis in the heart of the <a href="https://maps.app.goo.gl/JLnMD7GPo3FHgSBb7" target="_blank" rel="noopener noreferrer">Meatpacking District</a>. Our outdoor spaces blend natural elegance with modern sophistication, featuring lush greenery, ambient lighting, and panoramic Manhattan skyline views that create an unforgettable backdrop for any occasion.</p>
            <p style={{color: 'var(--verde-text)'}}>Perfect for cocktail receptions, wedding ceremonies, or al fresco dining experiences, our outdoor venues can accommodate up to 200 guests. With retractable coverings and climate control options, we ensure comfort regardless of the season while maintaining the open-air ambiance that makes Verde NYC a premier destination for outdoor celebrations.</p>
          </div>
        </div>

        {/* Verde Lounge */}
        <div className="private-events-grid reverse">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <Image
                src="/images/RA_Verde_Bar_RV6_250317.jpg"
                alt="Verde NYC Lounge bar with chairs lining the bar counter"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>VERDE LOUNGE</h2>
            <p style={{color: 'var(--verde-text)'}}>Verde Lounge offers an exclusive venue for sophisticated evening celebrations. Inspired by Mediterranean coastal elegance, this intimate space features warm amber lighting, plush seating arrangements, and carefully curated design elements that create an atmosphere of refined luxury and comfort.</p>
            <p style={{color: 'var(--verde-text)'}}>Ideal for cocktail parties, networking events, and upscale celebrations, the lounge accommodates up to 75 guests. Our resident DJs and live entertainment options can be customized to match your event's mood, while our expert mixology team crafts signature cocktails and curates wine selections from our extensive cellar featuring premier Mediterranean vintages.</p>
          </div>
        </div>

        {/* Private Dining Experience */}
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <Image
                src="/images/RA_Verde_Main3_RV6_250317.jpg"
                alt="Verde NYC Omakase space with chairs lining the outside and a japanese cherry blossom tree on the left"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Chef's Table Experience</h2>
            <p style={{color: 'var(--verde-text)'}}>For the most intimate and exclusive dining experience, our Chef's Table offers a front-row seat to culinary artistry. This luxurious 10-seat private dining room provides an immersive gastronomic journey where guests witness the precision and passion of our culinary team while enjoying a bespoke multi-course tasting menu.</p>
            <p style={{color: 'var(--verde-text)'}}>Perfect for milestone celebrations, business dinners, or intimate gatherings, this ultra-exclusive space features elegant contemporary design with Mediterranean influences. Your dedicated sommelier will pair each course with exceptional wines, creating a harmonious dining experience that celebrates the finest ingredients and culinary techniques from the Mediterranean region.</p>
          </div>
        </div>
      </section>

      {/* Types of Events Section */}
      <section className="private-events-types">
        <div className="private-events-types-content">
          <h2 style={{color: 'var(--verde-heading)'}}>Types of Events Hosted at Verde NYC</h2>
          <p style={{color: 'var(--verde-text)'}}>For social events, <Link href="/">Verde NYC</Link> shines as an exceptional choice. From glamorous birthday celebrations and engagement dinners to festive holiday parties and sophisticated cocktail receptions, our venue has hosted it all.</p>
          <p style={{color: 'var(--verde-text)'}}>Our dedicated team is committed to crafting bespoke experiences tailored to your company's, party's, or group's unique needs. Along with our <Link href="/restaurant">exquisite food</Link> and beverage offerings, we can provide custom decor, branding opportunities, unique entertainment, and state-of-the-art technical equipment for presentations and speeches.</p>
          
          <h2 style={{color: 'var(--verde-heading)'}}>Private Buyouts at Verde NYC</h2>
          <p style={{color: 'var(--verde-text)'}}>Private buyouts at Verde NYC offer a unique experience for those seeking unparalleled exclusivity. A private buyout of Verde NYC secures exclusive access to our entire restaurant and its facilities. You can custom-design the floor plan, menu, and décor to perfectly suit your event's theme and objectives. This level of customization and exclusivity guarantees your guests an unforgettable experience that truly reflects your vision.</p>
          <p style={{color: 'var(--verde-text)'}}>For more information and to book your private event, contact us at <a href="mailto:event@verde-nyc.com"><span style={{ textDecoration: 'underline' }}>event@verde-nyc.com</span></a>.</p>
          
          <a href="mailto:event@verde-nyc.com" target="_blank" rel="noopener noreferrer" className="private-events-cta-button">
            book your private event
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
