import React from "react";
import Image from "next/image";

const Beautyroom = () => {
  return (
    <main className="w-full bg-[#FCF8F3] py-10 mt-10">
      {/* Text Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
        {/* Heading and Description */}
        <div className="text-center sm:text-left">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#3A3A3A] font-bold leading-tight">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-sm">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="mt-6 bg-[#B88E2F] hover:bg-[#996b23] text-white px-6 py-3 rounded-lg text-sm sm:text-base">
            Explore More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-0">
          <Image
            src="/beautyroom2.png"
            alt="Beautyroom Image 1"
            width={304}
            height={382}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Beautyroom;
