'use client';

import { useState, useEffect } from 'react';

const galleryImages = [
  { id: 1, image: "/images/40A4553-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 2, image: "/images/40A4575-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 3, image: "/images/40A4585-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 4, image: "/images/40A4593-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 5, image: "/images/40A4610-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 6, image: "/images/40A4625-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 7, image: "/images/40A4660-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 8, image: "/images/40A4697-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 9, image: "/images/40A4717-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 10, image: "/images/40A4726-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 11, image: "/images/40A4746-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 12, image: "/images/40A4755-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 13, image: "/images/40A4761-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 14, image: "/images/40A4778-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 15, image: "/images/40A4781-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 16, image: "/images/40A4812-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 17, image: "/images/40A4823-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 18, image: "/images/40A4867-750x750.jpg", title: "Verde NYC" },
  { id: 19, image: "/images/40A4901-750x750.jpg", title: "Verde NYC" },
  { id: 20, image: "/images/40A4947-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 21, image: "/images/40A4987-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 22, image: "/images/40A5006-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 23, image: "/images/40A5026-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 24, image: "/images/40A5048-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 25, image: "/images/40A5053-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 26, image: "/images/40A5070-verde-newyork-750x750.jpg", title: "Verde NYC" },
  { id: 27, image: "/images/Legends-verde-dubai-0100-750x750.jpg", title: "Legends Verde" },
  { id: 28, image: "/images/Legends-verde-dubai-8354-750x750.jpg", title: "Legends Verde" },
  { id: 29, image: "/images/Legends-verde-dubai-8406-750x750.jpg", title: "Legends Verde" },
  { id: 30, image: "/images/Legends-verde-dubai-8546-750x750.jpg", title: "Legends Verde" },
  { id: 31, image: "/images/Legends-verde-dubai-9584-750x750.jpg", title: "Legends Verde" },
  { id: 32, image: "/images/verde-lifestyle-1-750x750.jpg", title: "Verde Lifestyle" },
  { id: 33, image: "/images/verde-lifestyle-11-750x750.jpg", title: "Verde Lifestyle" },
  { id: 34, image: "/images/verde-lifestyle-5-750x750.jpg", title: "Verde Lifestyle" },
  { id: 35, image: "/images/verde-lifestyle-6.jpg", title: "Verde Lifestyle" },
  { id: 36, image: "/images/verde-lifestyle-8-750x750.jpg", title: "Verde Lifestyle" }
];

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  return (
    <>
      <section className="section-padding bg-[#fff] text-black mt-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Header */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
              <img
                src="/images/gallerySectionCandle.png"
                alt="Candle Holder"
                className="w-12 sm:w-14 md:w-16 h-auto hidden lg:block opacity-60"
              />

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-instrument text-center leading-tight">
                <span className="text-filmotype text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Gallery:</span> Moments
                <br />
                that <span className="text-filmotype text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Mesmerize</span>
              </h2>

              <img
                src="/images/gallerySectionCandle.png"
                alt="Candle Holder"
                className="w-12 sm:w-14 md:w-16 h-auto hidden lg:block opacity-60"
              />
            </div>
            <p className="text-center text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto text-instrument">
              Explore our collection of memorable moments from Verde NYC
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-4">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 30}ms` }}
                onClick={() => openModal(index)}
              >
                <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative border-8 border-white">
                  <div className="relative w-full pb-[100%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* View icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                        <svg className="w-8 h-8 sm:w-10 sm:h-8 md:w-12 md:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Logo overlay */}
                    {/* <img
                      src="/images/logo-Verde-NYC-white.png"
                      alt="Verde"
                      className="absolute bottom-4 right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal with Carousel */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm overflow-hidden"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-[90vh] max-w-[95vw] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-3 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-4 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-4 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
              <span className="text-sm font-semibold text-black">
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-12 py-4 overflow-hidden">
              <img
                src={galleryImages[currentImageIndex].image}
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 pb-8 px-4 overflow-x-auto">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                    index === currentImageIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
