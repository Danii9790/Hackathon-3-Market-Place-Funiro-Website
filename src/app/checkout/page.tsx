

// "use client";

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { client } from "@/sanity/lib/client";
// import { RootState } from "@/app/store/store";
// import { urlFor } from "@/sanity/lib/image";

// const Checkout = () => {
//   const cart = useSelector((state: RootState) => state.cart.items);
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [formData, setFormData] = useState({
//     name:"",
//     email: "",
//     mobile: "",
//     province: "sindh", // Default selection
//     address: "",
//     city: "",
//     zipCode: "",
//   });

//   // Calculate subtotal
//   const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   // Handle placing the order
//   const handlePlaceOrder = async () => {
//     const orderData = {
//       name: formData.name,
//       email: formData.email,
//       address: formData.address,
//       mobile: formData.mobile,
//       province: formData.province,
//       city: formData.city,
//       zipCode: formData.zipCode,
//       status: "pending",
//       products: cart.map((item) => ({
//         title: item.title,
//         price: item.price,
//         quantity: item.quantity,
//         image: urlFor(item.image).width(200).url() // ✅ Use `urlFor()`
//       })),
//     };
  
//     try {
//       const response = await fetch("/api/addOrder", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to place order");
//       }
  
//       const result = await response.json();
//       console.log("Order placed successfully!", result);
//       setOrderPlaced(true);
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };
  
  
//   return (
//     <main>
//       <div className="flex flex-col lg:flex-row justify-center p-4 lg:p-10">
//         {/* Billing Details Form */}
//         <div className="lg:w-2/3 p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold mb-6">Billing Details</h2>
//           <form className="grid grid-cols-1 gap-4">
//           <div>
//               <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
//               <input type="name" id="name" value={formData.name} onChange={handleChange} 
//                 className="w-full border border-gray-300 p-2 rounded-md" />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium">Email address</label>
//               <input type="email" id="email" value={formData.email} onChange={handleChange} 
//                 className="w-full border border-gray-300 p-2 rounded-md" />
//             </div>
//             <div>
//               <label htmlFor="mobile" className="block text-sm font-medium">Mobile Number</label>
//               <input type="text" id="mobile" value={formData.mobile} onChange={handleChange} 
//                 className="w-full border border-gray-300 p-2 rounded-md" />
//             </div>
//             <div>
//   <label htmlFor="province" className="block text-sm font-medium">
//     Province
//   </label>
//   <select
//     id="province"
//     value={formData.province}
//     onChange={handleChange}
//     className="w-full border border-gray-300 p-2 rounded-md"
//   >
//     <option value="sindh">Sindh</option>
//     <option value="punjab">Punjab</option>
//   </select>
// </div>
//             <div>
//               <label htmlFor="address" className="block text-sm font-medium">Address</label>
//               <input type="text" id="address" value={formData.address} onChange={handleChange} 
//                 className="w-full border border-gray-300 p-2 rounded-md" />
//             </div>
//             <div>
//               <label htmlFor="city" className="block text-sm font-medium">City</label>
//               <input type="text" id="city" value={formData.city} onChange={handleChange} 
//                 className="w-full border border-gray-300 p-2 rounded-md" />
//             </div>
//             <div>
//               <label htmlFor="zipCode" className="block text-sm font-medium">Zip Code</label>
//               <input type="text" id="zipCode" value={formData.zipCode} onChange={handleChange} 
//                 className="w-full border border-gray-300 p-2 rounded-md" />
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
//           <ul className="mb-4">
//             {cart.map((item, index) => (
//               <li key={index} className="flex justify-between border-b border-gray-300 pb-2">
//                 <span>
//                   <img src={urlFor(item.image).width(60).url()} /> {item.title} x {item.quantity}
//                 </span>
//                 <span>Rs. {item.price * item.quantity}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-between font-semibold">
//             <span>Subtotal</span>
//             <span>Rs. {subtotal}</span>
//           </div>
//           <button onClick={handlePlaceOrder} 
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-8">
//             Place Order
//           </button>
//           {orderPlaced && (
//             <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-md">
//               Your order has been placed successfully!
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Checkout;

"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    province: "sindh", // Default selection
    address: "",
    city: "",
    zipCode: "",
  });

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle placing the order
  const handlePlaceOrder = async () => {
    const orderData = {
      _type: "order",
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      province: formData.province,
      city: formData.city,
      zipCode: formData.zipCode,
      cartItems: cart.map((item) => ({
        _type: "reference",
        _ref: item.id,
      })),
      total: subtotal,
      status: "pending",
    };

    try {
      const response = await fetch("/api/addOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: "Your order has been placed successfully.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });

    } catch (error) {
      console.error("Error placing order:", error);
      Swal.fire({
        icon: "error",
        title: "Order Failed",
        text: "Something went wrong while placing your order.",
      });
    }
  };
  return (
    <main>
      <div className="flex flex-col lg:flex-row justify-center p-4 lg:p-10">
        {/* Billing Details Form */}
        <div className="lg:w-2/3 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-6">Billing Details</h2>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email address</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium">Mobile Number</label>
              <input type="text" id="mobile" value={formData.mobile} onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label htmlFor="province" className="block text-sm font-medium">Province</label>
              <select id="province" value={formData.province} onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md">
                <option value="sindh">Sindh</option>
                <option value="punjab">Punjab</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">Address</label>
              <input type="text" id="address" value={formData.address} onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium">City</label>
              <input type="text" id="city" value={formData.city} onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium">Zip Code</label>
              <input type="text" id="zipCode" value={formData.zipCode} onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b border-gray-300 pb-2">
                <span>
                  <img src={urlFor(item.image).width(60).url()} alt={item.title} /> {item.title} x {item.quantity}
                </span>
                <span>Rs. {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>
          <button onClick={handlePlaceOrder}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-8">
            Place Order
          </button>
          {orderPlaced && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-md">
              Your order has been placed successfully!
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Checkout;
