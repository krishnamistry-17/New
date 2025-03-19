const data = [
  {
    image: product1,
    heading: "Syltherine",
    subheading: "Stylish Cafe Chair",
    price: "Rp.500.000",
    discount: "Rp.3.500.000",
    tag: "-30%",
  },
  {
    image: product2,
    heading: "Leviosa",
    subheading: "Stylish cafe chair",
    price: "Rp.300.000",
    discount: "Rp.500.000",
  },
  {
    image: product3,
    heading: "Lolito",
    subheading: "Luxury big sofa",
    price: "Rp.700.000",
    discount: "Rp.900.000",
    tag: "-50%",
  },
  {
    image: product4,
    heading: "Respira",
    subheading: "Bar table and stool",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
  },
  {
    image: product5,
    heading: "Grifo",
    subheading: "Night lamp",
    price: "Rp.500.000",
    discount: "Rp.800.000",
  },
  {
    image: product6,
    heading: "Muggo",
    subheading: "Small mug",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
  },
  {
    image: product7,
    heading: "Pingky",
    subheading: "Cute bed set",
    price: "700.000",
    discount: "Rp.900.000",
    tag: "-50%",
  },
  {
    image: product8,
    heading: "Potty",
    subheading: "Minimalist flower pot",
    price: "Rp.500.000",
    discount: "Rp.900.000",
    tag: "New",
  },
];

// import React, { useState, useEffect } from 'react';

// const Product = () => {
//   const [posts, setPosts] = useState([]);  // State to store product data

//   // Static data
//   const data = [
//     {
//       image: "product1.jpg",
//       heading: "Syltherine",
//       subheading: "Stylish cafe chair",
//       price: "Rp 500.000",
//       discount: "-30%"
//     },
//     {
//       image: "product2.jpg",
//       heading: "Leviosa",
//       subheading: "Stylish cafe chair",
//       price: "Rp 300.000",
//       discount: "-15%"
//     },
//     {
//       image: "product3.jpg",
//       heading: "Lolito",
//       subheading: "Luxury big sofa",
//       price: "Rp 700.000",
//       discount: "-50%"
//     },
//     {
//       image: "product4.jpg",
//       heading: "Respira",
//       subheading: "Bar table and stool",
//       price: "Rp 500.000",
//       discount: "New"
//     },
//     // Add more products here as needed
//   ];

//   // Directly set data to posts state (no need for fetch here)
//   const loadData = () => {
//     setPosts(data);
//   };

//   // Use effect to load data when the component mounts
//   useEffect(() => {
//     loadData();
//   }, []); // Empty array means it will run once on mount

//   return (
//     <>
//       <h2 className="font-bold
//         lg:text-[35px] md:text-[30px] sm:text-[25px] xs:text-[20px]
//         pb-[32px] text-black-dark text-center">Our Products</h2>

//       <div className="grid grid-cols-1
//         lg:grid-cols-4 md:grid-cols-3
//         sm:grid-cols-2 gap-8
//         mx-4 sm:mx-8 md:mx-16 lg:mx-24 ">

//         {/* Render products dynamically based on posts data */}
//         {posts.map((post, index) => (
//           <div key={index} className="relative max-w-full w-full mx-auto">
//             <div>
//               <img src={post.image} alt={post.heading} className="w-full h-auto object-cover" />
//             </div>
//             <div className="bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]">
//               <h2 className="text-black-dark font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[18px] xs:text-[16px] pb-[8px]">
//                 {post.heading}
//               </h2>
//               <p className="text-gray-graypara font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] pb-[8px]">
//                 {post.subheading}
//               </p>
//               <div className="flex gap-4">
//                 <div className="mr-[5px]">
//                   <h2 className="text-black-dark font-semibold xl:text-[20px] lg:text-[17px] md:text-[12px] sm:text-[13px] xs:text-[14px]">
//                     {post.price}
//                   </h2>
//                 </div>
//                 <div>
//                   <p className="text-gray-graymoney lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[13px] line-through mt-[1px]">
//                     {/* You can add the original price if available */}
//                     Rp 3.500.000
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {post.discount && (
//               <div className="bg-red-600 rounded-full h-12 w-12 absolute top-2 right-7 justify-center items-center">
//                 <p className="text-white-light text-[15px] p-[9px]">{post.discount}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center items-center md:w-[100%] md:h-[48px] p-[20px 0] bg-white-light mt-[32px] mb-[69px]" style={{ textAlign: "center" }}>
//         <button className="text-yellow-dark font-bold text-[16px] p-[15px] w-[245px] bg-white-light border border-yellow-dark">
//           Show More
//         </button>
//       </div>
//     </>
//   );
// };

// export default Product;
