import React from "react";
import Image from "next/image";

interface HeroProps {
  image?: string;
  heading?: string;
  subheading?: string;
  isLoading?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  image, 
  heading = "", 
  subheading = "",
  isLoading = false
}) => {
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    setImageError(false);
  }, [image]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        {image && !imageError ? (
          <Image
            key={image}
            src={image}
            alt="Hero"
            fill
            className="object-cover"
            priority
            loading="eager"
            unoptimized
            onLoad={() => {
              console.log('✅ Hero image loaded:', image);
            }}
            onError={(e) => {
              console.error('❌ Failed to load hero image:', image);
              setImageError(true);
            }}
          />
        ) : null}
        
        {(heading || subheading) && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white bg-black/30">
            {heading && <h1 className="text-4xl md:text-6xl font-serif mb-4">{heading}</h1>}
            {subheading && <p className="text-lg md:text-xl max-w-2xl px-4">{subheading}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
