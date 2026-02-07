'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <section className="not-found-section">
        <div className="not-found-content">
          <div className="not-found-logo">
            <img
              loading="lazy" decoding="async" src="/images/logo-Verde-NYC-white.png"
              alt="Verde NYC"
              width={200}
              height={80}
            />
          </div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <p className="not-found-subtitle">Let us guide you back to an extraordinary experience.</p>

          <div className="not-found-links">
            <Link href="/" className="not-found-btn">
              Return to Home
            </Link>
            <Link href="/contact" className="not-found-btn outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
