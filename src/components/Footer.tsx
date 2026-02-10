export default function Footer() {
  return (
    <footer className="bg-[#f6efe3] text-[#6f6a63] py-20">
      {/* Top */}
      <div className="text-center text-md tracking-widest uppercase space-y-6 px-6">
        <p>A Riviera Dining Group Brand</p>

        <div className="space-y-2">
          <p>Visit Other Venues</p>
          <p className="underline underline-offset-4">
            AVA | CASA NEOS | CLAUDIE | MM
          </p>
        </div>
      </div>

      <div className="my-16 border-t border-[#bdb6ab]" />

      {/* Container */}
      <div className="container mx-auto mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Left */}
          <div className="md:w-1/4 space-y-6 text-sm">
            <h2 className="text-4xl tracking-[0.3em] font-light">MILA</h2>
            <div className="space-y-1">
              <p>1636 Meridian Ave</p>
              <p>Miami Beach, FL 33139</p>
              <a href="#" className="underline underline-offset-4">
                View Hours
              </a>
            </div>
          </div>

          {/* Center */}
          <div className="md:w-2/4 text-center space-y-8 text-sm">
            <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 uppercase tracking-widest text-md font-semibold">
              <a href="#">Home</a><span>|</span>
              <a href="#">Reserve</a><span>|</span>
              <a href="#">Press</a><span>|</span>
              <a href="#">Join The Team</a><span>|</span>
              <a href="#">Gift Card</a><span>|</span>
              <a href="#">Contact</a>
            </nav>

            <div className="space-y-4">
              <p className="max-w-md mx-auto">
                Sign up to receive our latest news, upcoming events and special invitations.
              </p>

              <div className="flex flex-col items-center gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-[#6f6a63] text-center focus:outline-none w-64 placeholder:text-[#9c958b]"
                />

                <button className="border border-[#6f6a63] px-8 py-2 text-xs tracking-widest hover:bg-[#6f6a63] hover:text-[#f6efe3] transition">
                  SIGN UP
                </button>

                <p className="text-xs text-[#9c958b]">
                  We respect your privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Right – Map */}
          <div className="md:w-1/4 h-[260px] overflow-hidden">
            <iframe
              title="MILA Miami Map"
              src="https://www.google.com/maps?q=1636+Meridian+Ave,+Miami+Beach,+FL+33139&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}
