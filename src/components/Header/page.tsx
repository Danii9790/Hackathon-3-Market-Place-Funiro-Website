"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet components
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Menu icon
import { useSelector } from "react-redux"; // Import Redux selector
import { RootState } from "@/app/store/store"; // Import RootState for Redux types

const Header = () => {
  // Fetch cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <main>
      {/* Header Container */}
      <div className="top-0 bg-[#FAFAFA] flex justify-between items-center w-full h-[35px] max-w-[1365px] mx-auto pt-10 px-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Furniro Logo" width={50} height={32} />
          <h1 className="text-2xl font-bold text-black">Furniro</h1>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-black underline hover:text-gray-700 transition">
            Home
          </a>
          <a href="/shop" className="text-black underline hover:text-gray-700 transition">
            Shop
          </a>
          <a href="/blog" className="text-black underline hover:text-gray-700 transition">
            Blog
          </a>
          <a href="/contact" className="text-black underline hover:text-gray-700 transition">
            Contact
          </a>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/checkout">
            <Image
              src="/icons/Vector.png"
              alt="Checkout icon"
              width={23.33}
              height={18.67}
              className="cursor-pointer"
            />
          </Link>
          <Image
            src="/icons/search.png"
            alt="Search icon"
            width={22.17}
            height={22.17}
            className="cursor-pointer"
          />
          <Image
            src="/icons/heart.png"
            alt="Wishlist icon"
            width={23.33}
            height={20.81}
            className="cursor-pointer"
          />
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <Image
                src="/icons/cart.png"
                alt="Shopping cart icon"
                width={24.53}
                height={22.06}
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Sheet Button for Small Screens */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 space-y-4">
                <a href="/" className="text-lg font-semibold text-gray-800 block">
                  Home
                </a>
                <a href="/shop" className="text-lg font-semibold text-gray-800 block">
                  Shop
                </a>
                <a href="/blog" className="text-lg font-semibold text-gray-800 block">
                  Blog
                </a>
                <a href="/contact" className="text-lg font-semibold text-gray-800 block">
                  Contact
               
               </a>
               <div className="flex flex-row items-center justify-between">
                <Link href="/checkout">
            <Image
              src="/icons/Vector.png"
              alt="Checkout icon"
              width={23.33}
              height={18.67}
              className="cursor-pointer"
            />
          </Link>
          <Image
            src="/icons/search.png"
            alt="Search icon"
            width={22.17}
            height={22.17}
            className="cursor-pointer"
          />
          <Image
            src="/icons/heart.png"
            alt="Wishlist icon"
            width={23.33}
            height={20.81}
            className="cursor-pointer"
          />
                <Link href="/cart">
            <div className="relative cursor-pointer mt-5">
              
              <Image
                src="/icons/cart.png"
                alt="Shopping cart icon"
                width={22.53}
                height={23.06}
              />
              {totalItems > 0 && (
                <span className="absolute -top-2  bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
          </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  );
};

export default Header;
