import React from 'react'
import Image from 'next/image';
import Features from '@/components/features';
const page = () => {
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
          className="ml-auto mr-auto"
        />
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-gray-500">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          / Blog
        </p>
      </div>
    <div className="container mx-auto px-4 py-8">
    {/* Main Blog Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Blog Posts */}
      <div className="col-span-2 space-y-8">
        {/* Single Blog Post */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Image
            src="/blog1.png"
            alt="Blog Post Image"
            width={800}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Admin</span>
              <span>·</span>
              <span>14 Oct 2022</span>
              <span>·</span>
              <span>Wood</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              Going all-in with millennial design
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
          
        </div>
         {/* Single Blog Post */}
         <div className="bg-white shadow rounded-lg overflow-hidden">
          <Image
            src="/blog2.png"
            alt="Blog Post Image"
            width={800}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Admin</span>
              <span>·</span>
              <span>14 Oct 2022</span>
              <span>·</span>
              <span>Wood</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Handmade pieces that took time to make            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
          </div>
           {/* Single Blog Post 3 */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Image
            src="/blog3.png"
            alt="Blog Post Image"
            width={800}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Admin</span>
              <span>·</span>
              <span>14 Oct 2022</span>
              <span>·</span>
              <span>Wood</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Exploring new ways of decorating            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
          </div>
      </div>

      {/* Sidebar */}
      <aside>
        {/* Categories */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800">Categories</h3>
          <ul className="mt-4 space-y-2">
            {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map(
              (category, index) => (
                <li
                  key={index}
                  className="flex justify-between text-gray-600"
                >
                  <span>{category}</span>
                  <span>{Math.floor(Math.random() * 10) + 1}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="bg-white shadow rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800">Recent Posts</h3>
          <ul className="mt-4 space-y-4">
            
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogr1.png"
                  alt="Recent Post"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-500 font-semibold"
                  >
                    Going all-in with millennial design
                  </a>
                  <p className="text-sm text-gray-500">23 Aug 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogr2.png"
                  alt="Recent Post"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-500 font-semibold"
                  >
Exploring new ways of decorating                  </a>
                  <p className="text-sm text-gray-500">23 Aug 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogr3.png"
                  alt="Recent Post"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-500 font-semibold"
                  >
Handmade pieces that took time to make                  </a>
                  <p className="text-sm text-gray-500">23 Aug 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogr4.png"
                  alt="Recent Post"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-500 font-semibold"
                  >
Modern home in Milan                  </a>
                  <p className="text-sm text-gray-500">23 Aug 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/blogr5.png"
                  alt="Recent Post"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-500 font-semibold"
                  >
Colorful office redesign                  </a>
                  <p className="text-sm text-gray-500">23 Aug 2022</p>
                </div>
              </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
  <Features/>
  </main>
);
}

export default page
