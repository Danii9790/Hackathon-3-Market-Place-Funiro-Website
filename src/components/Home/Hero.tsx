import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="relative md:w-[1349px] lg:w-[1349px] w-full ">
      {/* Background Image */}
      <div className="relative">
        <Image
          src="/home.png"
          alt="Home Page Image"
          layout="responsive"
          width={1440}
          height={900}
          className="object-cover w-full h-[300px] sm:h-[600px] md:h-auto lg:h-auto"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex sm:items-center sm:justify-center  md:ml-[739px] md:mt-[253px] px-4 md:px-8 lg:px-16">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center md:max-w-lg lg:max-w-xl">
          <p className="text-xs md:text-sm font-bold text-[#000000] uppercase">
            New Arrival
          </p>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#B88E2F] mb-4">
            Discover Our New Collection
          </h1>
          <p className="hidden md:block text-gray-600 text-sm sm:text-base md:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/shop" >
          <button className="bg-[#B88E2F] hover:bg-yellow-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg">
            Buy Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
