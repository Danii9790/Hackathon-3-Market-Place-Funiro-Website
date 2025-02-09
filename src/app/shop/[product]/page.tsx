// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../../types/products";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/app/store/cartSlice";

// const ShopDetail = () => {
//   const params = useParams(); // Use the useParams hook to access the params object
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const productId = params?.product; // Safely access params.product
//     if (productId) {
//       const fetchProductDetails = async () => {
//         try {
//           setLoading(true);
//           const query = `*[_type == "product" && _id == $productId][0]`;
//           const fetchedProduct: Product = await client.fetch(query, { productId });
//           if (fetchedProduct) {
//             setProduct(fetchedProduct);
//           } else {
//             setError("Product not found");
//           }
//         } catch (err) {
//           setError("Failed to fetch product details");
//           console.error("Error fetching product details:", err);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchProductDetails();
//     }
//   }, [params]);

//   if (loading) {
//     return <p>Loading product details...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!product) {
//     return <p>No product details found</p>;
//   }

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         id: product._id,
//         title: product.title,
//         price: product.price,
//         image: urlFor(product.productImage).url(),
//         quantity: 1,
//       })
//     );
//     alert("Product added to cart successfully!"); // Optional: Success message
//   };

//   return (
//     <div className="text-gray-600 body-font overflow-hidden bg-gray-100 mt-10">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-lg shadow-lg">
//           {/* Image Section */}
//           <div className="lg:w-1/2 w-full p-5 flex justify-center items-center">
//             <Image
//               alt={product.title}
//               className="object-contain rounded-lg"
//               src={urlFor(product.productImage).url()}
//               width={500}
//               height={500}
//             />
//           </div>

//           {/* Details Section */}
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-5">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
//               Furniro
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-semibold mb-4">
//               {product.title}
//             </h1>
//             <p className="leading-relaxed text-sm text-justify mb-4">
//               {product.description.length > 150
//                 ? `${product.description.slice(0, 800)}...`
//                 : product.description}
//             </p>
//             <span className="font-bold text-xl">#{product.tags}</span>

//             <div className="bottom-0 flex items-center justify-between pb-4 border-b border-gray-200">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 Price: ${product.price}
//               </span>
//             </div>

//             <div className="flex mt-6">
//               <button
//                 onClick={handleAddToCart}
//                 className="flex-1 text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded-lg"
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopDetail;
   


"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import Swal from "sweetalert2";

const ShopDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const productId = params?.product;
    if (productId) {
      const fetchProductDetails = async () => {
        try {
          setLoading(true);
          const query = `*[_type == "product" && _id == $productId][0]`;
          const fetchedProduct: Product = await client.fetch(query, { productId });
          if (fetchedProduct) {
            setProduct(fetchedProduct);
          } else {
            setError("Product not found");
          }
        } catch (err) {
          setError("Failed to fetch product details");
          console.error("Error fetching product details:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchProductDetails();
    }
  }, [params]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>No product details found</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        title: product.title,
        price: product.price,
        image: urlFor(product.productImage).url(),
        quantity: 1,
      })
    );

    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className="text-gray-600 body-font overflow-hidden bg-gray-100 mt-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-lg shadow-lg">
          <div className="lg:w-1/2 w-full p-5 flex justify-center items-center">
            <Image
              alt={product.title}
              className="object-contain rounded-lg"
              src={urlFor(product.productImage).url()}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-5">
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">Furniro</h2>
            <h1 className="text-gray-900 text-3xl title-font font-semibold mb-4">{product.title}</h1>
            <p className="leading-relaxed text-sm text-justify mb-4">
              {product.description.length > 150 ? `${product.description.slice(0, 800)}...` : product.description}
            </p>
            <span className="font-bold text-xl">#{product.tags}</span>
            <div className="bottom-0 flex items-center justify-between pb-4 border-b border-gray-200">
              <span className="title-font font-medium text-2xl text-gray-900">Price: ${product.price}</span>
            </div>
            <div className="flex mt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
