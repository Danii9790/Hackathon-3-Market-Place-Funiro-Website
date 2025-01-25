import React from 'react';
import Image from 'next/image';

const Browser = () => {
  return (
    <div className="mt-20 sm:mt-16 container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Browse The Range</h2>
      <p className="text-base sm:text-lg text-center mb-6 font-bold">Transform Your Space with Timeless Furniture Elegance.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Items */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Image
            src="/dinner.png"
            alt="Dining"
            className="w-full h-48 object-cover rounded-lg mb-4"
            width={400}
            height={400}
          />
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Dining</h3>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Image
            src="/living.png"
            alt="Living"
            className="w-full h-48 object-cover rounded-lg mb-4"
            width={400}
            height={400}
          />
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Living</h3>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Image
            src="/bedroom.png"
            alt="Bedroom"
            className="w-full h-48 object-cover rounded-lg mb-4"
            width={400}
            height={400}
          />
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default Browser;

