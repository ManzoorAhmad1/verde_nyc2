'use client';

import Button from '@/components/ui/Button';

const BarPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="sticky top-0 h-screen overflow-hidden z-0">
        <div className="absolute inset-0">
          <img
            src="/images/VERDE-DUBAI-VENUE_0015__40A8452.jpg.jpg"
            alt="Bar Ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-instrument text-white uppercase tracking-[0.3em]">
              Conic Bar
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl mt-6 tracking-wider">
              Experience Pure Brilliance | Sip the Moment
            </p>
          </div>
        </div>
      </section>

      {/* Le Bar Title */}
      <section className="relative z-10 py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-instrument uppercase tracking-[0.3em] mb-4">
            Le Bar
          </h2>
        </div>
      </section>

      {/* Festive Bar Section */}
      <section className="relative z-10 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8">
          <h3 className="text-filmotype text-4xl sm:text-5xl md:text-6xl text-[#9b73a3]">
            An Exclusive &
          </h3>
          <h4 className="text-3xl sm:text-4xl md:text-5xl text-instrument uppercase tracking-wider">
            Festive Bar
          </h4>
          <p className="text-base sm:text-lg text-black/70 text-instrument">
            True "bar" all-day.
          </p>
          <p className="text-base sm:text-lg text-black/70 text-instrument">
            Ny is in the true lung of Verde Nyc.
          </p>
          <p className="text-base sm:text-lg text-black/70 text-instrument max-w-2xl mx-auto">
            At the center of <span className="font-semibold">Verde NYC</span> stands its crown jewel: a spectacular <span className="font-semibold">onyx bar</span>, glowing like a beacon of celebration in the heart of the <span className="font-semibold">Meatpacking District</span>.
          </p>
          <p className="text-base sm:text-lg text-black/70 text-instrument max-w-2xl mx-auto">
            More than just a bar, this striking centerpiece is the epicenter of <span className="font-semibold">Verde's legendary nights</span>. Paired with the lively, spirited energy of a well-curated mix, the <span className="font-semibold">Bar at Verde</span> becomes the energetic pulse of our room: chic, electric, and genuinely New York.
          </p>
          <p className="text-base sm:text-lg text-black/70 text-instrument max-w-2xl mx-auto">
            From golden hour cocktails to late-night champagne rituals, the Onyx Bar is where <span className="font-semibold">NYC's fashion elite</span>, creatives, and tastemakers gather. It's where the music rises, the conversations flow, and the party finds its rhythm.
          </p>
          <p className="text-base sm:text-lg text-black/70 text-instrument max-w-2xl mx-auto">
            Whether you're toasting a milestone, mingling with the inspired cocktail or simply soaking in the scene, the <span className="font-semibold">Bar at Verde NYC</span> is more than a destination. It's a statement.
          </p>
        </div>
      </section>

      {/* Cocktails Section */}
      <section className="relative z-10 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[3px] border-white">
                <img
                  src="/images/mixology-cocktails.jpg"
                  alt="Cocktails"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-filmotype text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#9b73a3]">
                New York's finest
              </h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-instrument uppercase tracking-wider">
                Cocktails
              </h4>
              <p className="text-base sm:text-lg text-black/70 text-instrument max-w-xl mx-auto lg:mx-0">
                Sharp cocktails in a chic & lightly telling, with a touch of Parisian style, every cocktail buzzi​ngly electric, from classics to signature Verde creations. Our goal is to make your visit to Verde NYC a unique and memora​ble experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Mixology Section */}
      <section className="relative z-10 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
              <h3 className="text-filmotype text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#9b73a3]">
                Mixology invites chef &
              </h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-instrument uppercase tracking-wider">
                New York City
              </h4>
              <p className="text-base sm:text-lg text-black/70 text-instrument max-w-xl mx-auto lg:mx-0">
                Our Head bartender & mixologist, surprises with his technique and his very original creations without forgetting the classics that he revisits with talent.
              </p>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[3px] border-white">
                <img
                  src="/images/VERDE-DUBAI-VENUE_0019__40A8461.jpg.jpg"
                  alt="Bar NYC"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="relative z-10 bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Verde NYC Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-instrument uppercase mb-4">Verde NYC</h4>
              <p className="text-sm text-black/70 text-instrument">
                Why there, to be bigger, bolder & luminous. Verde NYC, sitting sumptuously high inside the upscale Meatpacking District, is designed to have an opening in an international sky of New York City.
              </p>
              <p className="text-sm text-black/70 text-instrument">
                Verde Restaurant and our Daily in the Metropolitan New York. Downtown Soho, Premier, is located at the center of New York. Saturday & Sunday brunch, dining, evening, entertainment and late-night, all in SoBo lively inviting ambiance. It's a trendy.
              </p>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-instrument uppercase mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm text-black/70">
                <p className="text-lg">February 1st, 2026</p>
                <p className='text-instrument'>We can't wait to welcome you!</p>
                <p className='text-instrument'>As we prepare to reopen after our scheduled renovation, Otherwise we have the right to cancel. Thank you! www.verde.com</p>

                <p className="font-semibold text-black mt-4">Lunch- Restaurant open from Tuesday to saturday - From</p>
                <p className='text-instrument'>12.30 to 3pm and 7pm to 11 pm</p>

                <p className="font-semibold text-black mt-4">Everyday from dawn to 1pm</p>
                <p className='text-instrument'>Sunday: Brunch from 12pm to 4pm</p>

                <p className="font-semibold text-black mt-4">Dinner's</p>
                <p className='text-instrument'>Sat service is open every Sunday to Friday 7pm to Midnight.</p>
                <p className='text-instrument'>Dress Code for Saturday evenings.</p>
                <p className='text-instrument'>For service reservations confirmed by phone</p>
                <p className='text-instrument'>7 pm to 1am**</p>
                <p className='text-instrument'>SaTURDAYS 7 pm to 2am (party finish at 1am**)</p>
              </div>
            </div>

            {/* Reservation */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-instrument uppercase mb-4 text-instrument">Reservation</h4>
              <p className="text-sm text-black/70 text-instrument">
                Phone: +1 646 450 8783
              </p>
              <p className="text-sm text-black/70 text-instrument">
                For any inquiries regarding reservations or to make any amendments please email us:
              </p>
              <a
                href="mailto:reservations@verde-nyc.com"
                className="text-sm text-black hover:text-[#9b73a3] transition-colors underline inline-block text-instrument"
              >
                reservations@verde-nyc.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BarPage;

