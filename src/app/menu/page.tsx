'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import HeroSection from '@/components/home/heroSection';

interface MenuItem {
    id: number;
    title: string;
    category: string;
    image: string;
    menuImage: string;
    description?: string;
    modalImageIndex?: number;
}

interface MenuModalImage {
    id: number;
    image: string;
    title: string;
    category: string;
}

// Array for modal carousel images only
const menuModalImages: MenuModalImage[] = [
    {
        id: 1,
        image: "/images/winelist-verdenyc-2.png",
        title: "Champagne Selection",
        category: "Champagne"
    },
    {
        id: 2,
        image: "/images/winelist-verdenyc-3.png",
        title: "Champagne Blanc de Blancs",
        category: "Champagne"
    },
    {
        id: 3,
        image: "/images/winelist-verdenyc-4.png",
        title: "French Rosé & White Wine",
        category: "Wine"
    },
    {
        id: 4,
        image: "/images/winelist-verdenyc-5.png",
        title: "French White Wine Collection",
        category: "Wine"
    },
    {
        id: 5,
        image: "/images/winelist-verdenyc-6.png",
        title: "French Red Wine",
        category: "Wine"
    },
    {
        id: 6,
        image: "/images/winelist-verdenyc-7.png",
        title: "Spirits Collection",
        category: "Spirits"
    },
    {
        id: 7,
        image: "/images/winelist-verdenyc-8.png",
        title: "Premium Spirits & By the Glass",
        category: "Spirits"
    }
];

const menuCategories = [
    {
        id: 1,
        title: "1. Gambas à la Provençale",
        category: "Champagne",
        image: "/images/40A4553-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-2.png",
        description: "Garlic, herbs, chili butter",
        modalImageIndex: 0
    },
    {
        id: 2,
        title: "Seared Pork Belly with Truffle Jus",
        category: "Champagne",
        image: "/images/40A4575-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-3.png",
        description: "Crispy pork belly, red wine reduction",
        modalImageIndex: 1
    },
    {
        id: 3,
        title: "Spicy Mediterranean Prawns",
        category: "Wine",
        image: "/images/40A4593-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-4.png",
        description: "Tomato, chili, fresh herbs",
        modalImageIndex: 2
    },
    {
        id: 4,
        title: "Crispy Calamari",
        category: "Wine",
        image: "/images/40A4610-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-5.png",
        description: "Fried squid, olives, chili, lemon",
        modalImageIndex: 3
    },
    {
        id: 5,
        title: "Melon & Burrata Salad",
        category: "Wine",
        image: "/images/40A4625-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-6.png",
        description: "Seasonal melon, burrata, fresh herbs",
        modalImageIndex: 4
    },
    {
        id: 6,
        title: "White Fish Crudo",
        category: "Spirits",
        image: "/images/40A4660-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-7.png",
        description: "Thinly sliced fish, olive oil, citrus, herbs",
        modalImageIndex: 5
    },
    {
        id: 7,
        title: "Burrata & Tomato Salad",
        category: "Spirits",
        image: "/images/40A4697-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-8.png",
        description: "Creamy burrata, heirloom tomatoes, basil, olive oil",
        modalImageIndex: 6
    },
    {
        id: 8,
        title: "Beef Tartare",
        category: "Food",
        image: "/images/40A4717-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-2.png",
        description: "Hand-cut beef, Mediterranean seasoning, grilled bread"
    },
    {
        id: 9,
        title: "3. Seafood Ravioli",
        category: "Food",
        image: "/images/40A4726-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-3.png",
        description: "House-made pasta, seafood filling, light tomato sauce"
    },
    {
        id: 10,
        title: "Seafood & Burrata Starter",
        category: "Food",
        image: "/images/40A4746-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-4.png",
        description: "Delicate seafood, creamy burrata, citrus notes"
    },
    {
        id: 11,
        title: "Seafood Carpaccio",
        category: "Food",
        image: "/images/40A4755-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-5.png",
        description: "Thinly sliced seafood, citrus dressing, olive oil"
    },
    {
        id: 12,
        title: "Crab & Avocado Salad",
        category: "Food",
        image: "/images/40A4761-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-6.png",
        description: "Fresh crab, avocado, herbs, light dressing"
    },
    {
        id: 13,
        title: "Roasted Sea Bass",
        category: "Food",
        image: "/images/40A4778-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-7.png",
        description: "Whole sea bass, tomato concassé, fresh herbs"
    },
    {
        id: 14,
        title: "Grilled Lamb Chops",
        category: "Food",
        image: "/images/40A4781-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-8.png",
        description: "Char-grilled lamb, herb sauce, olive oil"
    },
    {
        id: 15,
        title: "Mediterranean Garden Salad",
        category: "Beverages",
        image: "/images/40A4812-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-2.png",
        description: "Fresh greens, cherry tomatoes, nuts, citrus dressing"
    },
    {
        id: 16,
        title: "Grilled Sea Bream",
        category: "Food",
        image: "/images/40A4823-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-3.png",
        description: "Whole sea bream, olive oil, fresh herbs"
    },
    {
        id: 17,
        title: "Langoustine Pasta",
        category: "Food",
        image: "/images/40A4867-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-4.png",
        description: "Langoustines, garlic butter, Italian herbs"
    },
    {
        id: 18,
        title: "Chef's Grilled Steak",
        category: "Food",
        image: "/images/40A4901-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-5.png",
        description: "Premium cut, charcoal grilled, herb butter"
    },
    {
        id: 19,
        title: "Tuna Tartare Mille-Feuille",
        category: "Food",
        image: "/images/40A4947-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-6.png",
        description: "Fresh tuna, citrus cream, crisp layers"
    },
    {
        id: 20,
        title: "Golden Onion Soup",
        category: "Food",
        image: "/images/40A4987-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-7.png",
        description: "Slow-cooked onions, light broth, toasted brioche"
    },
    {
        id: 21,
        title: "Lobster Paccheri",
        category: "Food",
        image: "/images/40A5006-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-8.png",
        description: "Atlantic lobster, tomato sauce, fresh basil"
    },
    {
        id: 22,
        title: "Caramelized Banana Dessert",
        category: "Food",
        image: "/images/40A5026-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-2.png",
        description: "Banana, vanilla ice cream, salted caramel"
    },
    {
        id: 23,
        title: "Choux Cream Pastry",
        category: "Food",
        image: "/images/40A5048-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-3.png",
        description: "Light choux, vanilla cream, powdered sugar"
    },
    {
        id: 24,
        title: "Chocolate Tart Selection",
        category: "Beverages",
        image: "/images/40A5053-verde-newyork-750x750.jpg",
        menuImage: "/images/winelist-verdenyc-4.png",
        description: "Dark chocolate, crisp crust, vanilla ice cream"
    }
];

const MenuPage = () => {
    const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isViewingAllMenu, setIsViewingAllMenu] = useState(false);

    const openModal = (item: MenuItem, imageIndex: number) => {
        setCurrentImageIndex(imageIndex);
        setSelectedMenu(item);
        setIsViewingAllMenu(false);
        setIsModalOpen(true);
    };

    const openAllMenuModal = () => {
        setCurrentImageIndex(0);
        setSelectedMenu(null);
        setIsViewingAllMenu(true);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedMenu(null);
            setCurrentImageIndex(0);
            setIsViewingAllMenu(false);
        }, 300);
    };

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % menuModalImages.length;
        setCurrentImageIndex(nextIndex);
    };

    const prevImage = () => {
        const prevIndex = (currentImageIndex - 1 + menuModalImages.length) % menuModalImages.length;
        setCurrentImageIndex(prevIndex);
    };

    // Lock body scroll when modal is open
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

    return (
        <>
            <HeroSection />

            {/* Menu Grid Section */}
            <section className="relative section-padding overflow-hidden bg-white/95">
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-instrument mb-6">
                            Our Collection
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-black/80 text-instrument leading-relaxed">
                            From the finest champagnes to rare spirits, explore our carefully curated selection. Click on any category to view the complete menu with pricing.
                        </p>
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                        {menuCategories.map((item, index) => (
                            <div
                                key={item.id}
                                className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                                onClick={() => openModal(item, item.modalImageIndex ?? 0)}
                            >
                                <div className="overflow-hidden rounded-2xl mb-4 relative shadow-lg hover:shadow-2xl transition-all duration-500 bg-black/5">
                                    <div className="relative w-full pb-[100%]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                        {/* Category Badge */}
                                        {/* <div className="absolute top-3 left-3">
                                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-semibold text-black shadow-lg uppercase tracking-wide">
                                                {item.category}
                                            </span>
                                        </div> */}

                                        {/* Click Indicator */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                            <div className="bg-white rounded-full p-4 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5 px-1">
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-instrument group-hover:text-[#9b73a3] transition-colors duration-300 leading-tight line-clamp-2">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="text-xs sm:text-sm text-black/70 text-instrument line-clamp-2">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Menu Button */}
                    <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
                        <Button fill='#9b73a3' stroke='white' className="text-white font-semibold" onClick={openAllMenuModal}>
                            <span>VIEW ALL MENU</span>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Modal with Carousel */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm overflow-hidden"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col border-4 border-white/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Previous Button - Only show when viewing all menu */}
                        {isViewingAllMenu && (
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 transition-colors shadow-lg"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}

                        {/* Next Button - Only show when viewing all menu */}
                        {isViewingAllMenu && (
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 transition-colors shadow-lg"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}

                        {/* Modal Content */}
                        <div className="flex-1 overflow-hidden flex flex-col">
                            {/* Image Container - Full Height for VIEW ALL MENU */}
                            <div className={`flex-1 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center ${
                                isViewingAllMenu ? 'p-0' : 'p-3 sm:p-4 md:p-6'
                            }`}>
                                {isViewingAllMenu ? (
                                    // Slider images for "VIEW ALL MENU" - Full screen
                                    <img
                                        src={menuModalImages[currentImageIndex].image}
                                        alt={menuModalImages[currentImageIndex].title}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    // Single image for specific item
                                    <>
                                        <img
                                            src={selectedMenu?.image}
                                            alt={selectedMenu?.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </>
                                )}
                            </div>

                            {/* Title and Description - Show only for specific item, not for VIEW ALL MENU */}
                            {!isViewingAllMenu && selectedMenu && (
                                <div className="flex-shrink-0 mt-3 sm:mt-4 space-y-2 p-3 sm:p-4 md:p-6">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block px-2 sm:px-3 py-1 bg-[#9b73a3]/10 text-[#9b73a3] rounded-full text-[10px] sm:text-xs font-semibold">
                                            {selectedMenu.category}
                                        </span>
                                    </div>
                                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-instrument font-semibold line-clamp-2">
                                        {selectedMenu.title}
                                    </h2>
                                    {selectedMenu.description && (
                                        <p className="text-xs sm:text-sm md:text-base text-black/70 text-instrument line-clamp-2">
                                            {selectedMenu.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Navigation Dots - Only show when viewing all menu */}
                        {isViewingAllMenu && (
                            <div className="flex-shrink-0 flex justify-center gap-2 p-4 border-t border-black/10">
                                {menuModalImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex
                                                ? 'w-8 bg-[#9b73a3]'
                                                : 'w-2 bg-black/20 hover:bg-black/40'
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuPage;