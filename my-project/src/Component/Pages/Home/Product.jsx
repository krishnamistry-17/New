import React, { useEffect, useState } from 'react'
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import product5 from "../../../assets/images/product5.png";
import product6 from "../../../assets/images/product6.png";
import product7 from "../../../assets/images/product7.png";
import product8 from "../../../assets/images/product8.png";

const Product = () => {
  const [posts,setPosts] = useState([]);

  const data = [
    {
      image: product1,
      heading: "Syltherine",
      subheading: "Stylish Cafe Chair",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "-30%",
      discountFlag:true,
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
      discountFlag:true,
    },
    {
      image: product4,
      heading: "Respira",
      subheading: "Bar table and stool",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag:false,
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
      discountFlag:false,
    },
    {
      image: product7,
      heading: "Pingky",
      subheading: "Cute bed set",
      price: "700.000",
      discount: "Rp.900.000",
      tag: "-50%",
      discountFlag:true,
    },
    {
      image: product8,
      heading: "Potty",
      subheading: "Minimalist flower pot",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag:false,
    },
  ];

  // For fetching url
  // const getData = async () => {
  //   const respone = await fetch(data)
  //   const result = await respone.json()
  //   return data;
  // }

  // const allData = async () => {
  //   const allPost = await getData()
  //   setPosts(allPost);
  // }

  const loadData = () =>{
    setPosts(data)
  }

  useEffect(()=>{
    loadData();
  },[])


return (
  <div>
     <h2 className="font-bold 
     lg:text-[35px] md:text-[30px] sm:text-[25px] xs:text-[20px]
     pb-[32px] text-black-dark text-center">Our Products</h2>

    <div className="grid grid-cols-1 
                    lg:grid-cols-4 md:grid-cols-3 
                    sm:grid-cols-2 gap-8 
                    mx-4 sm:mx-8  ">

        {posts.map((post,index)=>(
          <div key={index} className="relative max-w-full w-full mx-auto">
            <div>
              <img src={post.image} alt={post.heading} className="w-full h-auto object-cover"></img>
            </div>
            <div className="bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]">
              <h2 className="text-black-dark
            font-semibold 
            text-[18px] lg:text-[24px]
             md:text-[20px] sm:text-[18px] xs:text-[16px]
             pb-[8px]
            ">
               {post.heading} 
              </h2>
              <p className="text-gray-graypara
           font-medium
            text-[14px] lg:text-[16px] 
            md:text-[15px] sm:text-[14px] xs:text-[13px]
            pb-[8px]
            ">
              {post.subheading}
            </p>
            <div className="flex gap-4">
           <div className="mr-[5px]">
             <h2 className="text-black-dark font-semibold 
             xl:text-[20px] lg:text-[17px] md:text-[12px] sm:text-[13px] xs:text-[14px]">
              {post.price}
            </h2>
            </div>
            <div>
            <p className="text-gray-graymoney
             lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[13px] line-through mt-[1px]">
                {post.discount}
              </p>
            </div>
            </div>
            </div>
            {post.discount && post.tag && (
             <div className={`${post.discountFlag ?'bg-red-600 ':'bg-green-500'}
                     rounded-full h-12 w-12 absolute top-2 right-7 
                    justify-center items-center`} >
                      <p className="text-white-light
                      text-[15px] p-[9px]
                      ">{post.tag}</p>
                    </div>
            )}  
          </div>
        ))}
     </div>

       <div className="flex justify-center items-center
         md:w-[100%] md:h-[48px] 
         p-[20px 0]
         bg-white-light 
         mt-[32px] mb-[69px]" style={{ textAlign: "center" }}>
           <button className="text-yellow-dark font-bold 
           text-[16px] p-[15px] w-[245px]
            bg-white-light border border-yellow-dark  "> Show More</button>
       </div>
  </div>
)

  //   const displayData = allData.map(post=>{
  //     return (
  //      ` <div className='post'>
  //         <div className='image'>
  //             <img src=${post.image}></img>
  //         </div>
  //         <div className='details'>
  //         <p><b>Heading:</b>{post.heading}</p>
  //         <p>Subheading:{post.subheading}</p>
  //         <p>Price:{post.price}</p>
  //         <p>Discount:{post.discount}</p>
  //         </div>
  //       </div>`
  //     )
  //   })
  //   console.log("DisplayData",displayData)
  // }

  // return (
  //   <>
  //   <h2 className="font-bold 
  //   lg:text-[35px] md:text-[30px] sm:text-[25px] xs:text-[20px]
  //   pb-[32px] text-black-dark text-center">Our Products</h2>

  //   <div className="grid grid-cols-1 
  //   lg:grid-cols-4 md:grid-cols-3 
  //   sm:grid-cols-2 gap-8 
  //   mx-4 sm:mx-8 md:mx-16 lg:mx-24 ">

  //     <div className="relative max-w-full w-full mx-auto">
  //       <div>
  //         <img src={product1} alt="p1" className="w-full h-auto object-cover" />
  //       </div>
  //       <div className="bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]">
  //         <h2 className="text-black-dark
  //          font-semibold 
  //          text-[18px] lg:text-[24px]
  //           md:text-[20px] sm:text-[18px] xs:text-[16px]
  //           pb-[8px]
  //           ">
  //           Syltherine
  //         </h2>
  //         <p className="text-gray-graypara
  //          font-medium
  //           text-[14px] lg:text-[16px] 
  //           md:text-[15px] sm:text-[14px] xs:text-[13px]
  //           pb-[8px]
  //           ">
  //           Stylish cafe chair
  //         </p>
  //         <div className="flex gap-4">
  //           <div className="mr-[5px]">
  //             <h2 className="text-black-dark font-semibold xl:text-[20px] lg:text-[17px] md:text-[12px] sm:text-[13px] xs:text-[14px]">
  //               Rp 500.000
  //             </h2>
  //           </div>
  //           <div>
  //             <p className="text-gray-graymoney lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[13px] line-through mt-[1px]">
  //               Rp 3.500.000
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="bg-red-600 
  //        rounded-full h-12 w-12 absolute top-2 right-7 
  //       justify-center items-center">
  //         <p className="text-white-light
  //         text-[15px] p-[9px]
  //         ">-30%</p>
  //       </div>
  //     </div>



  //    <div className='relative max-w-full w-full mx-auto'>
  //       <div>
  //         <img  src={product2} alt='p2' className='w-full h-auto object-cover'></img>
  //       </div>

  //       <div className='bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px] '>
  //       <h2 className='text-black-dark font-semibold
  //        text-[18px] lg:text-[24px]
  //        md:text-[20px] sm:text-[18px] xs:text-[16px]
  //        pb-[8px]
  //        '>Leviosa</h2>

  //       <p className='text-gray-graypara font-medium 
  //       text-[14px] lg:text[16px]
  //       md:text-[15px] sm:text-[14px] xs:text-[13px]
  //       pb-[8px]
  //       '> Stylish cafe chair</p>

  //       <div className='flex gap-4'>
  //         <div className='mr-[5px]'>
  //           <h2 className=' text-black-dark font-semibold 
  //         xl:text-[20px] lg:text-[17px]
  //         md:text-[12px] sm:text-[13px] xs:text-[14px]'>Rp 300.000</h2>
  //         </div>
  //         <div>
  //           <p className='text-gray-graymoney
  //           lg:text-[16px] md:text-[12px]
  //           sm:text-[11px] xs:text-[13px] line-through mt-[1px]
  //           '>Rp 500.000</p>
  //         </div>
  //       </div>
  //       </div>
  //     </div>

  //     <div className='relative max-w-full w-full mx-auto'>
  //       <div>
  //         <img  src={product3} alt='p3' className='w-full h-auto object-cover'></img>
  //       </div>
  //       <div className='bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]'>
  //       <h2 className='text-black-dark font-semibold
  //        text-[18px] lg:text-[24px]
  //        md:text-[20px] sm:text-[18px] xs:text-[16px]
  //        pb-[8px]
  //        '>Lolito</h2>

  //       <p className='text-gray-graypara font-medium 
  //       text-[14px] lg:text[16px]
  //       md:text-[15px] sm:text-[14px] xs:text-[13px]
  //       pb-[8px] 
  //       '> Luxury big sofa</p>
  //       <div className='flex gap-4'>
  //         <div className='mr-[5px]'>
  //           <h2 className=' text-black-dark font-semibold 
  //         xl:text-[20px] lg:text-[17px]
  //         md:text-[12px] sm:text-[13px] xs:text-[14px]'> Rp 700.000</h2>
  //         </div>
  //         <div>
  //           <p className='text-gray-graymoney
  //           lg:text-[16px] md:text-[12px]
  //           sm:text-[11px] xs:text-[13px] line-through mt-[1px]
  //           '>Rp 900.000</p>
  //         </div>
  //       </div>
  //       </div>
  //       <div className="bg-red-600 
  //        rounded-full h-12 w-12 absolute top-2 right-7 
  //       justify-center items-center">
  //         <p className="text-white-light
  //         text-[15px] p-[9px]
  //         ">-50%</p>
  //       </div>
  //     </div>

  //     <div className='relative max-w-full w-full mx-auto'>
  //     <div>
  //   <img  src={product4} alt='p4' className='w-full h-auto object-cover'></img>
  // </div>
  // <div className='bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px] lg:w-full'>
  // <h2 className='text-black-dark font-semibold
  //  text-[18px] lg:text-[24px]
  //  md:text-[20px] sm:text-[18px] xs:text-[16px]
  //  pb-[8px]
  //  '> Respira</h2>

  // <p className='text-gray-graypara font-medium 
  // text-[14px] lg:text[16px]
  // md:text-[15px] sm:text-[14px] xs:text-[13px] 
  // pb-[8px]
  // '>  Bar table and stool</p>
  // <div className='flex gap-4'>
  //   <div className='mr-[5px]'>
  //     <h2 className=' text-black-dark font-semibold 
  //   xl:text-[20px] lg:text-[17px]
  //   md:text-[12px] sm:text-[13px] xs:text-[14px]'>Rp 500.000</h2>
  //   </div>
  //   <div>
  //         <p className='text-gray-graymoney
  //         lg:text-[16px] md:text-[12px]
  //         sm:text-[11px] xs:text-[13px] line-through mt-[1px]
  //         '>Rp 900.000</p>
  //       </div>
  // </div>
  // </div>
  // <div className="bg-green-400 
  //        rounded-full h-12 w-12 absolute top-2 right-7 
  //       justify-center items-center">
  //         <p className="text-white-light
  //         text-[15px] p-[9px]
  //         ">New</p>
  //       </div>
  //     </div>

  //     <div className='relative max-w-full w-full mx-auto'>
  //       <div>
  //         <img  src={product5} alt='p5' className='w-full h-auto object-cover'></img>
  //       </div>
  //       <div className='bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]'>
  //       <h2 className='text-black-dark font-semibold
  //        text-[18px] lg:text-[24px]
  //        md:text-[20px] sm:text-[18px] xs:text-[16px]
  //        pb-[8px]
  //        '> Grifo</h2>

  //       <p className='text-gray-graypara font-medium 
  //       text-[14px] lg:text[16px]
  //       md:text-[15px] sm:text-[14px] xs:text-[13px] 
  //       pb-[8px]
  //       '>Night lamp</p>
  //       <div className='flex gap-4'>
  //         <div className='mr-[5px]'>
  //           <h2 className=' text-black-dark font-semibold 
  //         xl:text-[20px] lg:text-[17px]
  //         md:text-[12px] sm:text-[13px] xs:text-[14px]'>Rp 500.000</h2>
  //         </div>
  //         <div>
  //         <p className='text-gray-graymoney
  //         lg:text-[16px] md:text-[12px]
  //         sm:text-[11px] xs:text-[13px] line-through mt-[1px]
  //         '>Rp 800.000</p>
  //       </div>
  //       </div>
  //       </div>
  //     </div>

  //     <div className='relative max-w-full w-full mx-auto'>
  //       <div>
  //         <img  src={product6} alt='p6' className='w-full h-auto object-cover'></img>
  //       </div>
  //       <div className='bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]'>
  //       <h2 className='text-black-dark font-semibold
  //        text-[18px] lg:text-[24px]
  //        md:text-[20px] sm:text-[18px] xs:text-[16px]
  //        pb-[8px]
  //        '> Muggo</h2>

  //       <p className='text-gray-graypara font-medium 
  //       text-[14px] lg:text[16px]
  //       md:text-[15px] sm:text-[14px] xs:text-[13px] 
  //       pb-[8px]
  //       '>Small mug</p>
  //       <div className='flex gap-4'>
  //         <div className='mr-[5px]'>
  //           <h2 className=' text-black-dark font-semibold 
  //         xl:text-[20px] lg:text-[17px]
  //         md:text-[12px] sm:text-[13px] xs:text-[14px]'>Rp 500.000</h2>
  //         </div>
  //         <div>
  //         <p className='text-gray-graymoney
  //         lg:text-[16px] md:text-[12px]
  //         sm:text-[11px] xs:text-[13px] line-through mt-[1px]
  //         '>Rp 900.000</p>
  //       </div>
  //       </div>
  //       </div>
  //       <div className="bg-green-400 
  //        rounded-full h-12 w-12 absolute top-2 right-7 
  //       justify-center items-center">
  //         <p className="text-white-light
  //         text-[15px] p-[9px]
  //         ">New</p>
  //       </div>
  //     </div>

  //     <div className='relative max-w-full w-full mx-auto'>
  // <div>
  //   <img  src={product7} alt='p7' className='w-full h-auto object-cover'></img>
  // </div>
  // <div className='bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]'>
  // <h2 className='text-black-dark font-semibold
  // text-[18px] lg:text-[24px]
  // md:text-[20px] sm:text-[18px] xs:text-[16px]
  // pb-[8px]
  // '> Pingky</h2>

  // <p className='text-gray-graypara font-medium 
  // text-[14px] lg:text[16px]
  // md:text-[15px] sm:text-[14px] xs:text-[13px] 
  // pb-[8px]
  // '>Cute bed set</p>
  // <div className='flex gap-4'>
  //   <div className='mr-[5px]'>
  //     <h2 className=' text-black-dark font-semibold 
  //   xl:text-[20px] lg:text-[17px]
  //   md:text-[12px] sm:text-[13px] xs:text-[14px]'>Rp 700.000</h2>
  //   </div>
  //   <div>
  //     <p className='text-gray-graymoney
  //     lg:text-[16px] md:text-[12px]
  //     sm:text-[11px] xs:text-[13px] line-through mt-[1px]
  //     '>Rp 900.000</p>
  //   </div>
  // </div>
  // </div>
  // <div className="bg-red-600 
  //    rounded-full h-12 w-12 absolute top-2 right-7 
  //   justify-center items-center">
  //     <p className="text-white-light
  //     text-[15px] p-[9px]
  //     ">-50%</p>
  //   </div>
  //   </div>


  //     <div className='relative max-w-full w-full mx-auto'>
  //       <div>
  //         <img  src={product8} alt='p8' className='w-full h-auto object-cover'></img>
  //       </div>
  //       <div className='bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]'>
  //       <h2 className='text-black-dark font-semibold
  //        text-[18px] lg:text-[24px]
  //        md:text-[20px] sm:text-[18px] xs:text-[16px]
  //        pb-[8px]
  //        '>Potty</h2>

  //       <p className='text-gray-graypara font-medium 
  //       text-[14px] lg:text[16px]
  //       md:text-[15px] sm:text-[14px] xs:text-[13px] 
  //       pb-[8px]
  //       '>Minimalist flower pot</p>
  //       <div className='flex gap-4'>
  //         <div className='mr-[5px]'>
  //           <h2 className=' text-black-dark font-semibold 
  //         xl:text-[20px] lg:text-[17px]
  //         md:text-[12px] sm:text-[13px] xs:text-[14px]'>Rp 500.000</h2>
  //         </div>
  //         <div>
  //         <p className='text-gray-graymoney
  //         lg:text-[16px] md:text-[12px]
  //         sm:text-[11px] xs:text-[13px] line-through mt-[1px]
  //         '>Rp 900.000</p>
  //       </div>
  //       </div>
  //       </div>
  //       <div className="bg-green-400 
  //        rounded-full h-12 w-12 absolute top-2 right-7 
  //       justify-center items-center">
  //         <p className="text-white-light
  //         text-[15px] p-[9px]
  //         ">New</p>
  //       </div>
  //     </div>

  //   </div>
      
  //     <div className="flex justify-center items-center
  //       md:w-[100%] md:h-[48px] 
  //       p-[20px 0]
  //       bg-white-light 
  //       mt-[32px] mb-[69px]" style={{ textAlign: "center" }}>
  //         <button className="text-yellow-dark font-bold 
  //         text-[16px] p-[15px] w-[245px]
  //          bg-white-light border border-yellow-dark  "> Show More</button>
  //     </div>
        
  //      {/* <div className='post'>
  //       <div className='image'>

  //       {post && (
  //         <div className='post'>
  //         <p><b>Heading:</b>{post.heading}</p>
  //         <p>Subheading:{post.subheading}</p>
  //         <p>Price:{post.price}</p>
  //         <p>Discount:{post.discount}</p>
  //       </div>)}

  //       </div> 
  //       </div> */}
  //       </>
  // ) 
}

export default Product

