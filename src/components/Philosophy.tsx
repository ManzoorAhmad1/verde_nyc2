
import Link from 'next/link';
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-[#F3EDE2]">
      {/* Reserve Experience Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto ">
        <div className="max-w-3xl mx-auto">
          <h3 className='text-[var(--verde-text)]'>A Global Legacy of Culinary Excellence</h3>
          <p className='text-[var(--verde-text)]'>
            The Yeeels Group has spent over a decade perfecting the art of festive dining across Europe and the Middle East. From the sophisticated elegance of Verde Paris on Avenue George V to the sun-drenched glamour of our Saint-Tropez beach club, from the cosmopolitan energy of Verde Dubai to the timeless charm of our Italian venues—each destination embodies our commitment to exceptional experiences. Now, Verde NYC brings this celebrated legacy to America&apos;s most dynamic city. In the heart of the Meatpacking District, discover a sanctuary where Mediterranean cuisine, innovative mixology, and world-class entertainment converge to create moments that transcend the ordinary.
          </p>
          <Link href="https://www.sevenrooms.com/explore/verdenyc/reservations/create/search" target="_blank" className="btn btn-primary border border-[#8e402f] text-[#8e402f] hover:bg-[#8e402f] hover:text-white">
            reserve your experience
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Philosophy;
