"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Correct import for the app directory
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const productId = params.product; // Extract the dynamic route parameter from props

  useEffect(() => {
    const productId = params?.product;
    if (productId) {
      async function fetchProductDetails() {
        try {
          const query = `*[_type == "product" && _id == "${productId}"][0]`; // Sanity query for a single product
          const fetchedProduct: Product = await client.fetch(query);
          setProduct(fetchedProduct);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
      fetchProductDetails();
    }
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }
  

  return (
    <div className="text-gray-600 body-font overflow-hidden bg-gray-100 mt-10">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full p-5 flex justify-center items-center">
          <Image
            alt={product.title}
            className="object-contain rounded-lg"
            src={urlFor(product.productImage).url()}
            width={500}
            height={500}
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-5">
          <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
            Furniro
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-semibold mb-4">
            {product.title}
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  fill={index < 4 ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-gray-600 ml-2">4 Reviews</span>
            </div>
          </div>
          <p className="leading-relaxed text-sm text-justify mb-4">
            {product.description.length > 150
              ? `${product.description.slice(0, 800)}...`
              : product.description}
          </p>
          <span className="font-bold text-xl ">#{product.tags}</span>

          <div className=" bottom-0 flex items-center justify-between pb-4 border-b border-gray-200">
            <span className="title-font font-medium text-2xl text-gray-900">
              Price: ${product.price}
            </span>
            {product.dicountPercentage && (
              <span className="text-red-500 font-bold text-sm">
                {product.dicountPercentage}% OFF
              </span>
            )}
          </div>
          
          <div className="flex mt-6">
            <button className="flex-1 text-white bg-indigo-500 border-0 py-2 px-6 x hover:bg-indigo-600 rounded-lg">
              For Order Visit The Shop Page.
            </button>
            <button className="ml-4 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
  

export default ProductDetail;

