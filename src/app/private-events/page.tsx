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
            src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1711395423888-LKB9OWQHPBNHPXG6PMHA/AMA04850.jpg"
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
                src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1b902ab8-0e23-4d15-bcd1-e5518771caf8/MILA+-+3.jpg"
                alt="interior view of Verde NYC with rectangle small tables on the bottom right and round tables top center"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Indoor Private Dining Rooms</h2>
            <p style={{color: 'var(--verde-text)'}}>Our indoor private dining rooms are crafted to captivate, each offering a distinctive and refined atmosphere. From the sophisticated main dining room with its sweeping panoramic views to the chic, intimate enclaves throughout the restaurant, every space provides a unique and elegant backdrop, setting the stage for a truly memorable event.</p>
            <p style={{color: 'var(--verde-text)'}}>With capacities ranging from intimate gatherings to grand celebrations, our rooms are designed to suit any occasion. Personalized menus and a professional event team are included as standard, ensuring your event unfolds seamlessly from start to finish.</p>
          </div>
        </div>

        {/* Outdoor Event Spaces */}
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/b53cf3b1-46b9-47b1-9a72-9278447f2664/DSC_4112.jpg"
                alt="interior view of Verde NYC looking toward the outdoor spaces/rooftop terrace"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Outdoor Event Spaces</h2>
            <p style={{color: 'var(--verde-text)'}}>Immerse your guests in the splendor of <a href="https://maps.app.goo.gl/nnJS46B32kqVTCQz9" target="_blank" rel="noopener noreferrer">New York City</a> with our exquisite outdoor event spaces, perfect for creating unforgettable experiences. Our rooftop terrace offers breathtaking skyline views and comfort in an open-air setting. Each space captures the essence of New York, providing an idyllic backdrop for any occasion.</p>
          </div>
        </div>

        {/* Verde Lounge */}
        <div className="private-events-grid reverse">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/9874a9b3-03d6-4c76-b3c7-06680632e37f/811792b4-efde-4f16-af39-7110e0ce4774.jpg"
                alt="Verde NYC Lounge bar with chairs lining the bar counter"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>VERDE LOUNGE</h2>
            <p style={{color: 'var(--verde-text)'}}>Experience Verde Lounge, a sophisticated space offering an elevated and glamorous atmosphere perfect for private celebrations and exclusive gatherings.</p>
            <p style={{color: 'var(--verde-text)'}}>The unique venue draws upon natural materials and warm tones, combined with elegant lighting and lush greenery, creating an unforgettable ambiance for your special event.</p>
          </div>
        </div>

        {/* Private Dining Experience */}
        <div className="private-events-grid">
          <div className="private-events-image-col">
            <div className="private-events-image-wrapper">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/974cdb17-45e7-4440-8cdb-78b3b7d199f7/AlexTphoto.com+-+Mila+Omakase-01-HighRes.jpg"
                alt="Verde NYC Omakase space with chairs lining the outside and a japanese cherry blossom tree on the left"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="private-events-text-col">
            <h2 style={{color: 'var(--verde-heading)'}}>Private Dining Experience</h2>
            <p style={{color: 'var(--verde-text)'}}>For the ultimate exclusive dining experience, our intimate private dining room offers a sophisticated setting for up to 10 guests, perfect for special occasions and corporate gatherings.</p>
            <p style={{color: 'var(--verde-text)'}}>The luxurious space features elegant design elements, creating an atmosphere of refined intimacy where every detail is crafted to perfection.</p>
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
            <div className="private-events-nav-text"><span>New Gallery</span></div>
          </a>
          <a href="#event-menu-miami" className="private-events-nav-item">
            <div className="private-events-nav-indicator"></div>
            <div className="private-events-nav-text"><span>Event menu Miami</span></div>
          </a>
          <a href="#mila-indoor-outdoor" className="private-events-nav-item">
            <div className="private-events-nav-indicator"></div>
            <div className="private-events-nav-text"><span>Verde indoor outdoor events</span></div>
          </a>
          <a href="#private-events-venues" className="private-events-nav-item">
            <div className="private-events-nav-indicator"></div>
            <div className="private-events-nav-text"><span>Private events venues</span></div>
          </a>
        </div>
      </nav>

      <Footer />
    </div>
  );
}
