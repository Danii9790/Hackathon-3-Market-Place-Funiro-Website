"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Features from "@/components/features";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Shop = () => {
  const [shop, setShop] = useState<Product[]>([]);

  useEffect(() => {

    async function shopProducts() {
      const fetched: Product[] = await client.fetch(allProducts);
      setShop(fetched);
    }
    shopProducts();
  }, []);

  return (
    <main className="bg-white">
      {/* Header Section */}
      <div
        className="bg-gray-100 py-16 text-center mt-[30px]"
        style={{ backgroundImage: "url('shop.png')" }}
      >
        <Image
          src="/logo.png"
          alt="Furniro Logo"
          width={50}
          height={32}
          className="ml-auto mr-auto"
        />
        <h1 className="text-4xl font-bold">Shop</h1>
        <p className="text-gray-500">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          / Shop
        </p>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shop.map((product) => (
            <Link href={`/shop/${product._id}`} key={product._id}>
              <div className="bg-white shadow rounded-lg overflow-hidden group cursor-pointer">
                <div className="relative h-[300px] w-full">
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                  {product.dicountPercentage && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                      OFF TO {product.dicountPercentage}%
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <div className="flex justify-between">
                    <p className="text-gray-700">${product.price}</p>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center border-t">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
                   Click 
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Features />
    </main>
  );
};

export default Shop;

