// export default {
//   name: "order",
//   title: "Order",
//   type: "document",
//   fields: [
//     { name: "name", title: "Your Name", type: "string" },
//     { name: "email", title: "Email", type: "string" },
//     { name: "address", title: "Address", type: "string" },
//     { name: "mobile", title: "Mobile Number", type: "string" },
//     {
//       name: "province",
//       title: "Province",
//       type: "string",
//       options: {
//         list: [
//           { title: "Sindh", value: "sindh" },
//           { title: "Punjab", value: "punjab" }
//         ],
//         layout: "dropdown"
//       }
//     },
//     { name: "city", title: "City", type: "string" },
//     { name: "zipCode", title: "Zip Code", type: "string" },
//     {
//       name: "status",
//       title: "Status",
//       type: "string",
//       options: {
//         list: [
//           { title: "Pending", value: "pending" },
//           { title: "Delivered", value: "delivered" }
//         ],
//         layout: "radio"
//       }
//     },
//     {
//       name: "products",
//       title: "Products",
//       type: "array",
//       of: [
//         {
//           type: "reference", // ✅ Using reference instead of object
//           to: [{ type: "product" }], // ✅ Links to the "product" schema
//         }
//       ]
//     }
//   ]
// };

import { useInitialValue } from "sanity";

// export default {
//   name: "order",
//   title: "Order",
//   type: "document",
//   fields: [
//     { name: "name", title: "Your Name", type: "string" },
//     { name: "email", title: "Email", type: "string" },
//     { name: "address", title: "Address", type: "string" },
//     { name: "mobile", title: "Mobile Number", type: "string" },
//     {
//       name: "province",
//       title: "Province",
//       type: "string",
//       options: {
//         list: [
//           { title: "Sindh", value: "sindh" },
//           { title: "Punjab", value: "punjab" }
//         ],
//         layout: "dropdown"
//       }
//     },
//     { name: "city", title: "City", type: "string" },
//     { name: "zipCode", title: "Zip Code", type: "string" },
//     {
//      name: "status",
//       title: "Status",
//       type: "string",
//       options: {
//         list: [
//           { title: "Pending", value: "pending" },
//           { title: "Delivered", value: "delivered" }
//         ],
//         layout: "radio"
//       }
//     },
//     {
//       name: "products",
//       title: "Products",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             { name: "productId", title: "Product ID", type: "string" },
//             { name: "name", title: "Product Name", type: "string" },
//             { name: "image", title: "Product Image", type: "string" }, // ✅ Store image as a string URL
//             { name: "price", title: "Price", type: "number" },
//             { name: "quantity", title: "Quantity", type: "number" }
//           ]
//         }
//       ]
//     },
//     {
//       name: "totalPrice",
//       title: "Total Price",
//       type: "number",
//       validation: (Rule: { min: (arg0: number) => any; }) => Rule.min(0)
//     }
//   ]
// };

export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    { name: "name", title: "Your Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "mobile", title: "Mobile Number", type: "string" },
    {
      name: "province",
      title: "Province",
      type: "string",
      options: {
        list: [
          { title: "Sindh", value: "sindh" },
          { title: "Punjab", value: "punjab" },
        ],
        layout: "dropdown",
      },
    },
    { name: "city", title: "City", type: "string" },
    { name: "zipCode", title: "Zip Code", type: "string" },

    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }],
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Delivered", value: "delivered" },
        ],
        layout: "radio",
      },
      InitialValue: "Pending",
    },
  ],
};
