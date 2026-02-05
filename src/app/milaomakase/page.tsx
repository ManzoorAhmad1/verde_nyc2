'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function MilaOmakasePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="omakase-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Video Section */}
      <section id="omakase-video" className="omakase-hero-section">
        <div className="omakase-video-bg">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/974cdb17-45e7-4440-8cdb-78b3b7d199f7/AlexTphoto.com+-+Mila+Omakase-01-HighRes.jpg"
            alt="Verde NYC Omakase Interior"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="omakase-video-overlay"></div>
          <iframe
            className="omakase-youtube-embed"
            src="https://www.youtube.com/embed/IX3C2kII9ik?autoplay=1&mute=1&loop=1&playlist=IX3C2kII9ik&controls=0&showinfo=0&modestbranding=1&playsinline=1"
            title="Experience Verde NYC Omakase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="omakase-hero-content">
          <h1>VERDE OMAKASE</h1>
        </div>
      </section>

      {/* Verde Omakase NYC Section */}
      <section id="mila-omakase-miami" className="omakase-info-section">
        <div className="omakase-info-bg">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/0c14fc2a-88f5-46a4-996e-8e0175295970/mila-miami-texture.png"
            alt="Verde NYC texture background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="omakase-info-content">
          <h3 className="omakase-award">
            best omakase sushi in new york, ny - New York Times{' '}
            <Link href="https://www.nytimes.com" target="_blank">
              "best of" awards 2024
            </Link>
          </h3>
          <h2>Verde Omakase</h2>
          
          <p className="omakase-description">
            <Link href="/">Verde NYC</Link> Omakase is a 10-seat enclosed room offering the most exclusive and authentic journey to the Far East, magnified by the Mediterranean influences of 26 times Michelin-starred Chef Michaël Michaelidis.
          </p>

          <h3>Hours</h3>
          <p>2 seatings: Tuesday - Saturday | 7 pm &amp; 9:30 pm</p>
          <p className="omakase-note">
            To maintain the integrity of the Verde Omakase experience, we are pleased to accommodate dietary restrictions when communicated at least 24 hours in advance of your reservation. Requests received after 24 hours cannot be honored, and the experience will remain non-refundable.
          </p>
          <p className="omakase-note">
            Each experience begins promptly at the scheduled time. Due to the curated progression of the menu, late arrivals may miss select courses. Please note: the journey will continue as designed, and dishes cannot be replayed. Thank you for your understanding.
          </p>

          <Link 
            href="/reserve" 
            className="omakase-btn"
          >
            Your Experience awaits
          </Link>
        </div>
      </section>

      {/* Experience Omakase Section */}
      <section id="omakase" className="omakase-experience-section">
        <div className="omakase-experience-bg">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/182d9f1b-2aea-4ba1-bc57-5c5e9eaf6355/MILA-OMAKASE-VENUE.jpg"
            alt="Verde NYC Omakase Venue"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="omakase-experience-content">
          <div className="omakase-experience-text">
            <hr />
            <h2>EXPERIENCE OMAKASE</h2>
            <p>
              The intimate, ultra-luxurious and transporting space features a massive overhanging cherry blossom tree, a Japanese craftsmanship-inspired wallpaper screen, a dramatic marble countertop, a 500-year-old hinoki wood cutting board, and wall-mounted niches serving as members' chopstick display.
            </p>
            <p>
              The ever-changing dishes showcase the most refined ingredients such as line-caught fish flown in daily, innovative vegetables and condiments, sea urchin from Hokkaido, bluefin tuna from Ehime prefecture and Bushu-Gyu wagyu beef from Saitama Prefecture.
            </p>
            <hr />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="new-page-3" className="omakase-map-section">
        <h2 className='text-[#3A363A]'>Visit Our New York Omakase Location</h2>
        <div className="omakase-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.404938001749!2d-80.1368046!3d25.7902116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b5d58b0783d7%3A0x3b2bdc12138f51a1!2sMILA%20Omakase!5e0!3m2!1sen!2sus!4v1756841346523!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Heritage Section */}
      <section id="omakase-experience" className="omakase-heritage-section">
        <div className="omakase-heritage-content">
          <div className="omakase-heritage-image">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c2262d80-3c49-463e-bd90-45383c7a5db3/Tuna+Nicois+Salad+3.jpg"
              alt="Verde NYC Omakase's Tuna Nicois Salad on a cream colored plate with garnishes"
              width={2323}
              height={2323}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="omakase-heritage-text">
            <h2 className='text-[#3A363A]'><strong>The Heritage of Omakase: A Timeless Tradition</strong></h2>
            <p className='text-[#948E84]'>
              The tradition of "omakase" is deeply rooted in Japanese culture, in which guests entrust the chef with their dining selections. This artful approach unfolds as a thoughtfully sequenced meal that begins with delicate flavors and gradually builds to heartier dishes. It showcases a variety of cooking techniques—grilling, simmering, and beyond—creating a rich tapestry of taste. Verde Omakase is a dynamic experience that evolves with the seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="omakase-index-nav">
        <a href="#omakase-video" className="omakase-nav-item active">
          <div className="omakase-nav-indicator"></div>
          <span>Omakase Video</span>
        </a>
        <a href="#mila-omakase-miami" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Verde Omakase NYC</span>
        </a>
        <a href="#omakase" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Omakase</span>
        </a>
        <a href="#new-page-3" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Location</span>
        </a>
        <a href="#omakase-experience" className="omakase-nav-item">
          <div className="omakase-nav-indicator"></div>
          <span>Omakase Experience</span>
        </a>
      </nav>

      <Footer />
    </main>
  );
}
