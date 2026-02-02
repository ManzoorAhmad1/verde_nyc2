import Image from 'next/image'

const foodImages = [
  {
    src: '/images/40A4867-750x750.jpg',
    alt: 'Verde NYC Food'
  },
  {
    src: '/images/Legends-verde-dubai-8354-750x750.jpg',
    alt: 'Verde NYC Dish'
  },
  {
    src: '/images/Legends-verde-dubai-8406.jpg',
    alt: 'Verde NYC Cuisine'
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/61d2ccabbc553c1fec7c16e9/1751563918370-81QWHG8LYH4D04GBL420/MediterrAsian+Black+Cod.jpg',
    alt: 'MediterrAsian Black Cod.jpg'
  },
  {
    src: '/images/40A5026-verde-newyork-750x750.jpg',
    alt: 'Verde NYC Plate'
  },
  {
    src: '/images/Legends-verde-dubai-8354-750x750.jpg',
    alt: 'Verde NYC Specialty'
  }
]

const FoodGallery = () => {
  return (
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {foodImages.map((image, index) => (
          <div key={index} className="relative aspect-[3/2] overflow-hidden group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="image-overlay" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodGallery