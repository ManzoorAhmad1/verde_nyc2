'use client';

import Link from 'next/link';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const foodItems = [
  {
    id: 1,
    title: "Mixed Berry Parfait",
    description: "Strawberries, blueberries, raspberries with vanilla cream",
    image: "/images/40A5070-verde-newyork-750x750.jpg"
  },
  {
    id: 2,
    title: "Chef’s Grilled Steak",
    description: "Premium cut, charcoal grilled, herb butter",
    image: "/images/40A4901.jpg"
  },
  {
    id: 3,
    title: "Grilled Sea Bream",
    description: "Whole sea bream, olive oil, fresh herbs",
    image: "/images/40A4823-verde-newyork.jpg"
  },
  {
    id: 4,
    title: "Langoustine Pasta",
    description: "Langoustines, garlic butter, Italian herbss",
    image: "/images/40A4867.jpg"
  },
  {
    id: 5,
    title: "Seafood & Burrata Starter",
    description: "Delicate seafood, creamy burrata, citrus notes",
    image: "/images/40A4746-verde-newyork.jpg"
  },
  {
    id: 6,
    title: "Caramelized Banana Dessert",
    description: "Banana, vanilla ice cream, salted caramel",
    image: "/images/40A5026-verde-newyork.jpg"
  }
];

const FoodSection = () => {
  const router= useRouter()
  return (
    <>
      {/* Food Hero Section */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden bg-[url('/images/eventSectionImageFrame.png')] bg-cover bg-center">
        {/* Background Video */}
        <div className="absolute inset-0">
          <img
            src="/images/Legends-verde-dubai-8406.jpg"
            alt="Ambiance Background"
            className="w-full h-full object-cover"
          />

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay bg-white/5"
          ></div>
        </div>

        {/* Content */}
        {/* <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
          <div className="transition-opacity duration-1000">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-base text-black/80">
                FOOD
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[170px] text-instrument mb-3 sm:mb-4 md:mb-6 leading-tight">
              A Symphony
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[120px]">of </span>
              <span className="text-filmotype text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">Flavours</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black/80/90">
              Inspired by the vibrant cuisine of the
              <br />
              <span className="text-instrument">South of France.</span>
            </p>
          </div>
        </div> */}
      </section>

      {/* Food Grid Section */}
      <section className="section-padding bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
              <span className="text-sm md:text-base lg:text-lg hidden lg:inline-block">FOOD</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-instrument leading-tight">
                A Symphony
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[120px]">of </span>
                <span className="text-filmotype text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">Flavours</span>
              </h2>
              <span className="text-sm md:text-base lg:text-lg hidden lg:inline-block">FOOD</span>
            </div>

            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-black/80 text-instrument">
              Join us for a chic lunch beneath our lavender ceiling, begin your evening in the seductive jewellery-box bar, or move on to the ocean-view terrace with sweeping vistas of Ain Dubai. Every visit is a journey to the Riviera — with hand-picked DJs setting the soundtrack, each night becomes an extraordinary dining experience to remember.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8">
            {foodItems.map((item, index) => (
              <div
                key={item.id}
                className={`group ${index % 3 === 1 ? 'lg:translate-y-20' : ''
                  }`}
              >
                <div className="overflow-hidden rounded-lg mb-3 sm:mb-4">
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-instrument">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/70 text-instrument">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="relative mt-16 md:mt-32">
            {/* Decorative Corner Images */}
            <img
              src="/images/gallerySectionCandle.png"
              alt="Decoration"
              className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 opacity-30"
            />
            <img
              src="/images/gallerySectionCandle.png"
              alt="Decoration"
              className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 opacity-30 scale-x-[-1]"
            />

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto px-4">
              <p className="text-base md:text-lg lg:text-base text-gray-600 text-center md:text-right md:flex-1 leading-relaxed text-instrument">
                Our menu dances to the rhythm of the day, blending
                Mediterranean flavours of land and sea—for a true taste of the Riviera.
              </p>

              <div className="flex-shrink-0">
                <Button
                  fill='#9b73a3' stroke='white' className="text-white font-semibold cursor-pointer"
                  onClick={() => router.push('/menu')}
                >
                  <span>VIEW MENU</span>
                </Button>
              </div>

              <p className="text-base md:text-lg lg:text-base text-gray-600 text-center md:text-left md:flex-1 leading-relaxed text-instrument">
                Each dish is a celebration of bold, sundrenched tastes. From Label{' '}
                <span className="italic text-gray-500">Rouge foie gras</span>, to the freshest catch and vibrant garden vegetables from{' '}
                <span className="italic text-gray-500">Menton</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodSection;