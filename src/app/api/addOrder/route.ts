// import { NextRequest, NextResponse } from "next/server";
// import sanityClient from "@sanity/client";
// import { v4 as uuidv4 } from "uuid"; // Import UUID for unique keys

// const client = sanityClient({
//   projectId: "l9u9ixri",
//   dataset: "production",
//   useCdn: false,
//   token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN, // Store token securely in .env
//   apiVersion: "2023-01-01",
// });

// export async function POST(req: NextRequest) {
//   try {
//     const orderData = await req.json();

//     // Ensure products are in correct reference format
//     const formattedProducts = orderData.products.map((product: { _id: string }) => ({
//       _key: uuidv4(), // Generate a unique key for each item

//       _type: "reference",
//       _ref: product._id,
//     }));

//     const newOrder = await client.create({
//       _type: "order",
//       name:orderData.name,
//       email: orderData.email,
//       address: orderData.address,
//       mobile: orderData.mobile,
//       province:orderData.province,
//       city: orderData.city,
//       zipCode: orderData.zipCode,
//       status: "pending",
//       products: formattedProducts,
//     });

//     return NextResponse.json({ message: "Order placed successfully!", order: newOrder }, { status: 200 });
//   } catch (error: any) {
//     console.error("Order Placement Error:", error.message);
//     return NextResponse.json({ message: "Failed to place order", error: error.message }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import sanityClient from "@sanity/client";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique keys

const client = sanityClient({
  projectId: "l9u9ixri",
  dataset: "production",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN, // Store token securely in .env
  apiVersion: "2023-01-01",
});

export async function POST(req: NextRequest) {
  try {
    const orderData = await req.json();

    // Ensure cartItems are in the correct reference format
    const formattedCartItems = orderData.cartItems.map((item: { _ref: string }) => ({
      _key: uuidv4(), // Generate a unique key for each item
      _type: "reference",
      _ref: item._ref,
    }));

    // Create the new order document in Sanity
    const newOrder = await client.create({
      _type: "order",
      name: orderData.name,
      email: orderData.email,
      address: orderData.address,
      mobile: orderData.mobile,
      province: orderData.province,
      city: orderData.city,
      zipCode: orderData.zipCode,
      status: "pending", // Initial status is set to 'pending'
      cartItems: formattedCartItems,
      total: orderData.total, // Total amount from checkout
      orderDate: new Date().toISOString(), // Store the current timestamp as ISO format
    });

    return NextResponse.json(
      { message: "Order placed successfully!", order: newOrder },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Order Placement Error:", error.message);
    return NextResponse.json(
      { message: "Failed to place order", error: error.message },
      { status: 500 }
    );
  }
}

