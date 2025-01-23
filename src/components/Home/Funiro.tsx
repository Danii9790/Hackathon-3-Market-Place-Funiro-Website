import React from 'react'
import Image from 'next/image';

const images = [
  { src: '/Rectangle 38.png', alt: 'Image 1', width: 451, height: 312 },
  { src: '/Rectangle 40.png', alt: 'Image 2', width: 381, height: 323 },
  { src: '/Rectangle 43.png', alt: 'Image 3', width: 344, height: 242 },
  { src: '/Rectangle 45.png', alt: 'Image 4', width: 290, height: 348 },
  { src: '/Rectangle 37.png', alt: 'Image 5', width: 178, height: 242 },
  { src: '/Rectangle 39.png', alt: 'Image 6', width: 425, height: 422 },
  { src: '/Rectangle 41.png', alt: 'Image 7', width: 258, height: 196 },
  { src: '/Rectangle 44.png', alt: 'Image 8', width: 451, height: 312 },
];

const ImageGrid = () => {
  return (
    <main className="bg-gray-100 py-8 mt-[100px]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-lg text-gray-700">Share your setup with</h1>
        <p className="text-2xl font-bold text-gray-900">#FuniroFurniture</p>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {images.map((image, index) => (
          <div key={index} className="relative group bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout="responsive"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ImageGrid;

