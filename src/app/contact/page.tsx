'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="contact-page">
      <Header />
      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Hero Section */}
      <section id="contact-mila" className="contact-hero">
        <div className="contact-hero-image">
          <img
            loading="eager" decoding="async" fetchPriority="high" src="https://verdey-nyc.s3.eu-north-1.amazonaws.com/images/_40A8472.jpg"
            alt="Verde NYC Contact"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">CONTACT US</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="contact-info">
        <div className="contact-info-content">
          <h2 style={{color: 'var(--verde-heading)'}}>VERDE NYC — <Link href="/restaurant" style={{color: 'var(--verde-heading)'}}>A YEEELS GROUP VENUE</Link></h2>
          <h3 style={{color: 'var(--verde-text)'}}>Meatpacking District, New York</h3>
          <p style={{color: 'var(--verde-text)'}}>
            <a href="https://maps.app.goo.gl/JLnMD7GPo3FHgSBb7" target="_blank" rel="noopener noreferrer">
              85 10th Avenue, New York City, NY 10011
            </a>
          </p>

          <h2 style={{color: 'var(--verde-heading)'}}>Reservations</h2>
          <p style={{color: 'var(--verde-text)'}}>
            <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank">Online: Click Here</Link><br />
            Phone: <a href="tel:+16464068763">+1 (646) 406-8763</a><br />
            Email: <a href="mailto:reservations@yeeels.com">reservations@yeeels.com</a>
          </p>

          <h2 style={{color: 'var(--verde-heading)'}}>Private Events & Buyouts</h2>
          <p style={{color: 'var(--verde-text)'}}>
            Email: <a href="mailto:events@yeeels.com">events@yeeels.com</a><br />
            Global Events Director: <a href="tel:+971566756965">+971 56 675 6965</a>
          </p>

          <h2 style={{color: 'var(--verde-heading)'}}>Yeeels Group Headquarters</h2>
          <p style={{color: 'var(--verde-text)'}}>
            24 Avenue George V, Paris 75008, France<br />
            Email: <a href="mailto:contact@yeeels.com">contact@yeeels.com</a>
          </p>

          <h2 style={{color: 'var(--verde-heading)'}}>Members Club</h2>
          <p style={{color: 'var(--verde-text)'}}>
            <Link href="/membersclub">Explore Membership Benefits</Link>
          </p>

          {/* Social Icons */}
          <div className="contact-social-icons">
            <a href="https://soundcloud.com/user-611720735" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
              <svg viewBox="0 0 64 64" width="32" height="32">
                <path fill="currentColor" d="M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/verdenyc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 64 64" width="32" height="32">
                <path fill="currentColor" d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"/>
              </svg>
            </a>
            <a href="https://open.spotify.com/user/31prdeupjndbgg6f3yvdhbrmbvwq" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
              <svg viewBox="0 0 64 64" width="32" height="32">
                <path fill="currentColor" d="M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/verdenyc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 64 64" width="32" height="32">
                <path fill="currentColor" d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="contact-map">
        <div className="contact-map-content">
          <h2 style={{color: 'var(--verde-heading)'}}><em>Find Us</em> In The Heart Of Manhattan</h2>
          <p style={{color: 'var(--verde-text)', textAlign: 'center', marginBottom: '2rem'}}>Part of the Yeeels Group family — with venues in Paris, Saint-Tropez, Dubai, Italy, and New York</p>
          <div className="contact-map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9593794733634!2d-74.00893432346168!3d40.74243103514894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf2f24f4a7%3A0x999!2s85%2010th%20Ave%2C%20New%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Index Navigation */}
      <nav className="contact-index-nav">
        <a href="#contact-mila" className="contact-index-item active">
          <div className="contact-index-indicator"></div>
        </a>
        <a href="#contact-info" className="contact-index-item">
          <div className="contact-index-indicator"></div>
        </a>
        <a href="#map" className="contact-index-item">
          <div className="contact-index-indicator"></div>
        </a>
      </nav>

      <Footer />
    </div>
  );
}
