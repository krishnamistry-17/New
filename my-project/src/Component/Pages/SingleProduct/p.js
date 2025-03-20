// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import nextarrow from "../../../assets/svgs/NextArrow.svg";
// import line from "../../../assets/svgs/SingleLine.svg";
// import RelatedProduct from './RelatedProduct';
// import product1 from "../../../assets/images/product1.png";
// import product2 from "../../../assets/images/product2.png";
// import product3 from "../../../assets/images/product3.png";
// import product4 from "../../../assets/images/product4.png";
// import product5 from "../../../assets/images/product5.png";
// import product6 from "../../../assets/images/product6.png";
// import product7 from "../../../assets/images/product7.png";
// import product8 from "../../../assets/images/product8.png";

// const SingleProduct = () => {
//   const [posts, setPosts] = useState([]);
//   const { id } = useParams(); // Access the id from the URL
//   const navigate = useNavigate();

//   const data = [
//     { id: 1, image: product1, heading: "Syltherine", subheading: "Stylish Cafe Chair", price: "Rp.500.000", discount: "Rp.900.000", tag: "-30%", discountFlag: true },
//     { id: 2, image: product2, heading: "Leviosa", subheading: "Stylish cafe chair", price: "Rp.300.000", discount: "Rp.500.000" },
//     { id: 3, image: product3, heading: "Lolito", subheading: "Luxury big sofa", price: "Rp.700.000", discount: "Rp.900.000", tag: "-50%", discountFlag: true },
//     { id: 4, image: product4, heading: "Respira", subheading: "Bar table and stool", price: "Rp.500.000", discount: "Rp.900.000", tag: "New", discountFlag: false },
//     // ... (other product data)
//   ];

//   // Find the specific product by id
//   const product = data.find(item => item.id === parseInt(id));

//   const handleHome = () => {
//     navigate("/");
//   };

//   const handleShop = () => {
//     navigate('/shop');
//   };

//   useEffect(() => {
//     setPosts(data);
//   }, []);

//   return (
//     <>
//       <div className='font-poppins'>
//         <div className="relative bg-cream-bglight w-full h-[100px]">
//           <div className='flex'>
//             <p className='sm:pl-[93px] xs:pl-[25px] pt-[39px] pb-[37px] text-black-light text-[16px]' onClick={handleHome}>Home</p>
//             <img src={nextarrow} alt='arrow' className='pl-[14px] pt-[41px] pb-[39px]' />
//             <p className='pl-[24px] pt-[39px] pb-[37px] text-black-light text-[16px]' onClick={handleShop}>Shop</p>
//             <img src={nextarrow} alt='arrow' className='pl-[21px] pt-[41px] pb-[39px]' />
//             <img src={line} alt='line' className='pl-[25px] pt-[32px] pb-[31px]' />
//           </div>
//         </div>

//         <div className="product-details">
//           {/* Check if product exists */}
//           {product ? (
//             <div>
//               <h1>{product.heading}</h1>
//               <p>{product.subheading}</p>
//               <img src={product.image} alt={product.heading} />
//               <p>Price: {product.price}</p>
//               {product.discountFlag &&
//  <p>Discount: {product.discount}</p>}
//             </div>
//           ) : (
//             <p>Product not found!</p>
//           )}
//         </div>

//         <div>
//           <RelatedProduct />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProduct;
