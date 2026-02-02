'use client';

const AmbianceSection = () => {
  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/verde-lifestyle-8.jpg"
          alt="Ambiance Background"
          className="w-full h-full object-cover"
        />
        
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-white/5"></div>
      </div>

      {/* Content */}
      {/* <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        <div className="transition-opacity duration-1000">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-base text-white">
              AMBIANCE
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-[170px] text-instrument mb-3 sm:mb-4 md:mb-6 leading-tight">
            <span className="text-instrument">With </span>
            <span className="text-filmotype">love </span>
            for gourmet
            <br />
            <span className="text-filmotype">pleasures</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90">
            A truly unforgettable dining experience
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default AmbianceSection;