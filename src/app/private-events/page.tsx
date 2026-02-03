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
          <h1>
            <em>A PERFECT multi-space event venue in MiamI</em>
            <br />
            Intimate and large private gatherings
          </h1>
          
          <p className="private-events-description">
            Verde NYC offers endless possibilities for private dining and special events. From an intimate 11-guest party, to full buyouts, our dedicated event team can curate a unique private dining experience for you in any of our spaces from <Link href="/restaurant">Verde Restaurant</Link>, to <Link href="/milalounge">Verde Lounge</Link> or <Link href="/milaomakase">Verde Omakase</Link>.
          </p>
          <p className="private-events-description">
            Please fill out the inquiry form and someone will get in touch within 48 hours.
          </p>

          <div className="private-events-buttons">
            <a href="https://milamiami.tripleseat.com/party_request/11268" target="_blank" rel="noopener noreferrer" className="private-events-button">
              MILA RESTAURANT
            </a>
            <a href="https://my.matterport.com/show/?m=VPCMah3RKuB" target="_blank" rel="noopener noreferrer" className="private-events-button">
              MILA Virtual Tour
            </a>
            <a href="https://milamiami.tripleseat.com/party_request/25118" target="_blank" rel="noopener noreferrer" className="private-events-button">
              LOUNGE | OMAKASE
            </a>
          </div>

          <div className="private-events-brochure">
            <h2>View our special events brochure:</h2>
            <p>Explore our special events brochure for private dining menus, customizable event spaces, and inspiration for unforgettable celebrations in Miami Beach.</p>
            <a href="https://issuu.com/rivieradininggroup/docs/mila_private_events_deck" target="_blank" rel="noopener noreferrer" className="private-events-button">
              view
            </a>
          </div>
        </div>
      </section>

      {/* Indoor/Outdoor Section */}
      <section className="private-events-spaces">
        {/* Indoor Private Dining */}
        <div className="private-events-grid">
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
            <h2>Indoor Private Dining Rooms</h2>
            <p>Our indoor private dining rooms are crafted to captivate, each offering a distinctive and refined atmosphere. From the sophisticated main dining room with its sweeping panoramic views to the chic, intimate enclaves throughout the restaurant, every space provides a unique and elegant backdrop, setting the stage for a truly memorable event.</p>
            <p>With capacities ranging from intimate gatherings to grand celebrations, our rooms are designed to suit any occasion. Personalized menus and a professional event team are included as standard, ensuring your event unfolds seamlessly from start to finish.</p>
          </div>
        </div>

        {/* Outdoor Event Spaces */}
        <div className="private-events-grid reverse">
          <div className="private-events-text-col">
            <h2>Outdoor Event Spaces</h2>
            <p>Immerse your guests in the splendor of <a href="https://maps.app.goo.gl/nnJS46B32kqVTCQz9" target="_blank" rel="noopener noreferrer">New York City</a> with our exquisite outdoor event spaces, perfect for creating unforgettable experiences. Our rooftop terrace offers breathtaking skyline views and comfort in an open-air setting. Each space captures the essence of New York, providing an idyllic backdrop for any occasion.</p>
          </div>
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
        </div>

        {/* Verde Lounge */}
        <div className="private-events-grid">
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
            <h2>VERDE LOUNGE</h2>
            <p>Inspired by African tribes and the primitive design style of the mother continent, <Link href="/milalounge">Verde Lounge</Link> is a multi-sensory space offering a transporting, glamorous and elevated secluded nightlife experience.</p>
            <p>The unique venue draws upon minimalistic natural materials and earthy tones, combined with opulent warm-glow lamps, textured prints and shades, and a dramatic, lush foliage hanging from the ceiling.</p>
          </div>
        </div>

        {/* Verde Omakase */}
        <div className="private-events-grid reverse">
          <div className="private-events-text-col">
            <h2>Verde Omakase</h2>
            <p>Experience <Link href="/milaomakase">Verde Omakase</Link>, a 10-seat enclosed room offering the most exclusive and authentic journey in the Far East, magnified by the Mediterranean influences of 26-times Michelin-starred Chef Michaël Michaelidis.</p>
            <p>The intimate, ultra-luxurious and transporting space features a massive overhanging cherry blossom tree, a Japanese craftsmanship-inspired wallpaper screen, a dramatic marble countertop, a 500-year-old hinoki wood cutting board, and wall-mounted niches serving as members' chopstick display.</p>
          </div>
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
        </div>
      </section>

      {/* Types of Events Section */}
      <section className="private-events-types">
        <div className="private-events-types-content">
          <h2>Types of Events Hosted at Verde NYC</h2>
          <p>For social events, <Link href="/">Verde NYC</Link> shines as an exceptional choice. From glamorous birthday celebrations and engagement dinners to festive holiday parties and sophisticated cocktail receptions, our venue has hosted it all.</p>
          <p>Our dedicated team is committed to crafting bespoke experiences tailored to your company's, party's, or group's unique needs. Along with our <Link href="/restaurant">exquisite food</Link> and beverage offerings, we can provide custom decor, branding opportunities, unique entertainment, and state-of-the-art technical equipment for presentations and speeches.</p>
          
          <h2>Private Buyouts at Verde NYC</h2>
          <p>Private buyouts at Verde NYC offer a unique experience for those seeking unparalleled exclusivity. A private buyout of Verde NYC secures exclusive access to our entire restaurant and its facilities. You can custom-design the floor plan, menu, and décor to perfectly suit your event's theme and objectives. This level of customization and exclusivity guarantees your guests an unforgettable experience that truly reflects your vision.</p>
          <p>For more information and to book your private event, visit <a href="https://www.rivieradininggroup.com/verde-nyc" target="_blank" rel="noopener noreferrer"><span style={{ textDecoration: 'underline' }}>our website</span></a> today.</p>
          
          <a href="https://www.rivieradininggroup.com/verde-nyc" target="_blank" rel="noopener noreferrer" className="private-events-cta-button">
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
