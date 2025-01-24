
"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/app/store/cartSlice";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
        <p className="text-gray-600">
          Add some products to your cart and come back!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-200 py-4"
          >
            {/* Product Image and Details */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
              <div>
                <h2 className="font-medium text-lg">{item.title}</h2>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-300"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Price and Actions */}
      <div className="mt-6">
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <span className="text-xl font-bold">Total Price:</span>
          <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
          <Link href="/checkout">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;


