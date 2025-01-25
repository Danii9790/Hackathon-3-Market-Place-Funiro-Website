import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full ">
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
      <div className=" absolute inset-0 flex items-center justify-center md:justify-end px-4 sm:px-8 lg:px-16">
  <div className="bg-opacity-0 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-center md:text-left">
    <p className="text-xs sm:text-sm md:text-base font-bold text-black uppercase">
      New Arrival
    </p>
    <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#B88E2F] mb-4">
      Discover Our New Collection
    </h1>
    <p className="hidden md:block text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl mb-6">
      Discover furniture that blends elegance with comfort,  
      crafted to redefine the beauty of your living spaces.
    </p>
    <Link href="/shop">
      <button className="bg-[#B88E2F] hover:bg-yellow-600 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg">
        Buy Now
      </button>
    </Link>
  </div>
</div>

</div>

      
    
  );
};

export default Hero;

