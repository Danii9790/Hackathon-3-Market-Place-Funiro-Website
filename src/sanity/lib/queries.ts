import groq from "groq";



export const allProducts=groq`*[_type == "product"]`;
export const four=groq`*[_type == "product"][0..3]`;