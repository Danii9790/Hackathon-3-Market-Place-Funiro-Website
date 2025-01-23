// "use client"
// import React from "react";
// import { useSelector } from "react-redux";
// import Image from "next/image";
// import { RootState } from "@/app/store/store"; // Adjust the path as per your project

// const Checkout = () => {
//   // Access cart items from Redux state
//   const cart = useSelector((state: RootState) => state.cart.items); // Adjust `cart.items` based on your Redux slice

//   // Calculate subtotal
//   const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <main>
//       {/* Header Section */}
//       <div
//         className="bg-gray-100 py-16 text-center mt-[30px]"
//         style={{ backgroundImage: "url('shop.png')" }}
//       >
//         <Image
//           src="/logo.png"
//           alt="Furniro Logo"
//           width={50}
//           height={32}
//           className="ml-[650px]"
//         />
//         <h1 className="text-4xl font-bold">Checkout</h1>
//         <p className="text-gray-500">
//           <a href="/" className="text-blue-500 hover:underline">
//             Home
//           </a>{" "}
//           / CheckOut
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-center p-4 lg:p-10">
//         {/* Billing Details */}
//         <div className="lg:w-2/3 p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold mb-6">Billing details</h2>
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Form fields */}
//             {/* Add your form fields here */}
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
//           <ul className="mb-4">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between border-b border-gray-300 pb-2"
//               >
//                 <span>
//                   {item.name} x {item.quantity}
//                 </span>
//                 <span>Rs. {item.price * item.quantity}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-between font-semibold">
//             <span>Subtotal</span>
//             <span>Rs. {subtotal}</span>
//           </div>
//           <div className="mt-6">
//             <label className="block mb-4">
//               <input type="radio" name="payment" className="mr-2" />
//               Direct Bank Transfer
//             </label>
//             <label className="block mb-4">
//               <input type="radio" name="payment" className="mr-2" />
//               Cash On Delivery
//             </label>
//             <p>
//               Your personal data will be used to support your experience
//               throughout this website, to manage access to your account, and
//               for other purposes described in our <b>privacy policy</b>.
//             </p>
//             <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-8">
//               Place order
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Checkout;
"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Adjust the path to your sanityClient.ts file
import { RootState } from "@/app/store/store";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const Checkout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useSelector((state: RootState) => state.cart.items);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      const products = await client.fetch(
        `*[_type == "product"]{
          _id,
          productImage,
          name,
          price,
          "image": image.asset->url,
          
        }`
      );
      setProducts(products);
    };

    fetchProducts();
  }, []);
  // Handle Place Order button click
  const handlePlaceOrder = () => {
    // Here you would usually send the order details to your backend
    // For now, we'll just set orderPlaced to true to display the message
    setOrderPlaced(true);
  };

  return (
    <main>
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
          className="ml-[650px]"
        />
        <h1 className="text-4xl font-bold">Checkout</h1>
        <p className="text-gray-500">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          / CheckOut
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center p-4 lg:p-10">
        {/* Billing Details */}
        <div className="lg:w-2/3 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form fields */}
            <div>
            <label htmlFor="firstName" className="block text-sm font-medium">First name</label>
            <input type="text" id="firstName" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">Last name</label>
            <input type="text" id="lastName" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="companyName" className="block text-sm font-medium">Company name (optional)</label>
            <input type="text" id="companyName" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium">Country / Region</label>
            <select id="country" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select a country</option>
              <option>Pakistan</option>
              <option>United States</option>
            </select>
          </div>
          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium">Street address</label>
            <input type="text" id="streetAddress" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium">Town / City</label>
            <input type="text" id="city" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="province" className="block text-sm font-medium">Province</label>
            <select id="province" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Western Province</option>
              <option>Punjab</option>
              <option>Sindh</option>
            </select>
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium">ZIP code</label>
            <input type="text" id="zipCode" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
            <input type="text" id="phone" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="additionalInfo" className="block text-sm font-medium">Additional information</label>
            <textarea id="additionalInfo" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
          <ul className="mb-4">
            {/* Cart Items */}
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-gray-300 pb-2"
              >
                <span>
                <img src={urlFor(item.image).width(60).url()} />
                  {item.title} x {item.quantity}
                </span>
                <span>Rs. {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>
          <div className="mt-6">
           
            <p className="mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our <b>privacy policy</b>.
            </p>
            <button onClick={handlePlaceOrder} 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-8">
              Place order
            </button>
            {orderPlaced && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-md">
                Your order has been placed successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
function setOrderPlaced(arg0: boolean) {
  throw new Error("Function not implemented.");
}

