// sections/BrunchBanner.jsx
'use client';

const BrunchBanner = () => {
  return (
    <section id="brunch-banner" className="Index-page Index-page--has-image relative min-h-screen">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="Parallax-item absolute top-0 left-0 w-full h-full">
          <figure className="Index-page-image loaded absolute inset-0 overflow-hidden">
            <img
              data-src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg"
              data-image="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg"
              alt="DSC_4013.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=2500w"
              srcSet="https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/c8c68392-6a86-4a9c-8d19-b0d9921657a0/DSC_4013.jpg?format=2500w 2500w"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="Index-page-scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
        <div className="Index-page-scroll-indicator-text text-xs tracking-wider mb-2">Scroll</div>
        <svg className="Index-page-scroll-indicator-arrow Icon Icon--caretLarge--down w-6 h-6 mx-auto mb-2" viewBox="0 0 48 23">
          <path d="M24 23L48 0H0l24 23z" fill="currentColor"/>
        </svg>
        <div className="Index-page-scroll-indicator-line w-px h-12 bg-white mx-auto"></div>
      </div>

      {/* Content */}
      <div className="Index-page-content relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center mt-24">
          <h1 className="text-4xl md:text-6xl font-normal text-white px-5 py-2 bg-black/40 inline-block">
            VERDE NYC BRUNCH
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BrunchBanner;
