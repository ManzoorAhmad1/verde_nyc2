import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/_40A8461.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
