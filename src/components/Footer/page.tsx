import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 text-center">
    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-gray-800">
      {/* Brand and Address */}
      <div className="space-y-4 text-left">
        <h1 className="text-2xl font-bold ">Funiro</h1>
        <address className="not-italic text-sm leading-relaxed">
          100 University Drive Suite 200<br />
          Coral Gables, FL 33134 USA
        </address>
      </div>
  
      {/* Navigation Links */}
      <div className="grid grid-cols-2 gap-4 text-sm sm:text-left lg:text-center">
        <ul className="space-y-2">
          <h1 className='font-bold text-xl'>Links</h1>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/shop" className="hover:underline">Shop</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
        <ul className="space-y-2">
        <h1 className='font-bold text-xl'>Help</h1>

          <li><a href="/payment-options" className="hover:underline">Payment Options</a></li>
          <li><a href="/returns" className="hover:underline">Returns</a></li>
          <li><a href="/returns" className="hover:underline">Privacy Pollicies </a></li>

        </ul>
      </div>
  
      {/* Subscription Form */}
      <div className="space-y-4 text-left sm:text-center">
      <h1 className='font-bold text-xl'>Newletter</h1>

        <input 
          type="email" 
          placeholder="Enter Your Email Address" 
          className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Email address"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  
    {/* Footer Note */}
    <p className="text-sm text-gray-500 mt-12 lg:mt-16">
      © 2023 Funiro. All rights reserved.
    </p>
  </footer>
  
    );
  }

export default Footer
