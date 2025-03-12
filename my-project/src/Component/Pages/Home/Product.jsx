import React from 'react'
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import product5 from "../../../assets/images/product5.png";
import product6 from "../../../assets/images/product6.png";
import product7 from "../../../assets/images/product7.png";
import product8 from "../../../assets/images/product8.png";

// xs: "320px",
// sm: "480px",
// md: "768px",
// lg: "992px",
// xl: "1440px",  

const Product = () => {
  return (
    <>
    <h2 className="font-bold 
    lg:text-[35px] md:text-[30px] sm:text-[25px] xs:text-[20px]
    pb-[32px] text-black-dark text-center">Our Products</h2>

    <div className="grid grid-cols-1
    lg:grid-cols-4 md:grid-cols-3 
    sm:grid-cols-2 xs:grid-cols-1 
    gap-8 mx-24">

<div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1"> 
      <img
        className="w-full h-full object-cover"
        src={product1} alt="Product 1"
      />                                                                                                                                                         
    </div>
    <div className="bg-gray-200 p-3 ">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
        Syltherine
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
        Stylish cafe chair
      </p>
      <div className="flex gap-4">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
          Rp500.000
        </h2>
        <p className="text-gray-500 
        text-[16px] md:text-[12px] 
        sm:text-[12px] xs:text-[11px] 
        mt-[3px]
        line-through ">Rp500.000</p>
      </div>
    </div>
    <div className="bg-red-600 h-12 w-12 rounded-full absolute top-2 right-2 flex justify-center items-center">
      <p className="text-white text-xs xs:text-sm">-30%</p>
    </div>
  </div>
        
  <div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1">
      <img
        className="w-full h-full object-cover"
        src={product2} alt="Product 2"
      />
    </div>
    <div className="bg-gray-200 p-3">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
        Leviosa
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
        Stylish cafe chair
      </p>
      <div className="flex gap-4">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
          Rp 2.500.000
        </h2>
      </div>
    </div>
  </div>

  <div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1"> 
      <img
        className="w-full h-full object-cover"
        src={product3} alt="Product 3"
      />
    </div>
    <div className="bg-gray-200 p-3">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
        Lolito
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
        Luxury big sofa
      </p>
      <div className="flex gap-4">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
          Rp 7.000.000
        </h2> 
      </div>
    </div>
    <div className="bg-red-600 h-12 w-12 rounded-full absolute top-2 right-2 flex justify-center items-center">
      <p className="text-white text-xs xs:text-sm">-30%</p>
    </div>
  </div>

  <div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1"> 
      <img
        className="w-full h-full object-cover"
        src={product4} alt="Product 4"
      />
    </div>
    <div className="bg-gray-200 p-3">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
      Respira
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
     Bar table and stool
      </p>
      <div className="flex gap-4">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
        Rp500.000
        </h2> 
        <p className="text-gray-500 text-[16px] md:text-[12px] sm:text-[12px] xs:text-[11px] mt-[3px]  line-through ">Rp500.000</p>
      </div>
    </div>
    <div className="bg-green-400 h-[48px] w-[48px] rounded-full absolute top-[5%] right-[32px] flex justify-center items-center">
            <p className="text-white">New</p>
    </div> 
  </div>

  <div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1"> 
      <img
        className="w-full h-full object-cover"
        src={product5} alt="Product 5"
      />
    </div>
    <div className="bg-gray-200 p-3">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
     Grifo
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
      Night lamp
      </p>
      <div className="flex gap-2">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
        Rp 500.000
        </h2> 
        <p className="text-gray-500 text-[16px] md:text-[12px] sm:text-[12px] xs:text-[11px] mt-[3px] line-through ">Rp 500.000</p>
      </div>
    </div>
  </div>

  <div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1"> 
      <img
        className="w-full h-full object-cover"
        src={product6} alt="Product 6"
      />
    </div>
    <div className="bg-gray-200 p-3">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
      Muggo
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
      Small mug
      </p>
      <div className="flex gap-2">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
        Rp 150.500
        </h2> 
        <p className="text-gray-500 text-[16px] md:text-[12px] sm:text-[12px] xs:text-[11px] mt-[3px] line-through ">Rp 500.000</p>
      </div>
    </div>
    <div className="bg-green-400 h-[48px] w-[48px] rounded-full absolute top-[5%] right-[32px] flex justify-center items-center">
            <p className="text-white">New</p>
          </div>  
  </div>
       
  <div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1"> 
      <img
        className="w-full h-full object-cover"
        src={product7} alt="Product 7"
      />
    </div>
    <div className="bg-gray-200 p-3">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
      Pingky
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
      Cute bed set
      </p>
      <div className="flex gap-2">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
        Rp7.000.000
        </h2> 
        <p className="text-gray-500 text-[16px] md:text-[12px] sm:text-[12px] xs:text-[11px] mt-[3px] line-through ">Rp4.000.000</p>
      </div>
    </div>
    <div className="bg-red-600 h-[48px] w-[48px] rounded-full absolute
          top-[5%] right-[32px] flex justify-center items-center">
            <p className="text-white"> -50% </p>
          </div> 
  </div>     

  <div className="relative max-w-full mx-auto">
    <div className="aspect-w-1 aspect-h-1"> 
      <img
        className="w-full h-full object-cover"
        src={product8} alt="Product 8"
      />
    </div>
    <div className="bg-gray-200 p-3">
      <h2 className="text-black font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[16px]">
      Rustique
      </h2>
      <p className="text-gray-600 font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[12px] mt-2">
      Wooden chair
      </p>
      <div className="flex gap-2">
        <h2 className="text-black font-semibold text-[18px] lg:text-[20px] md:text-[14px] sm:text-[13px] xs:text-[12px]">
        Rp700.000
        </h2> 
        <p className="text-gray-500 text-[16px] md:text-[12px] sm:text-[12px] xs:text-[11px] mt-[3px] line-through ">Rp900.000</p>
      </div>
    </div>
    <div className="bg-green-400 h-[48px] w-[48px] rounded-full absolute top-[5%] right-[32px] flex justify-center items-center">
                    <p className="text-white">New</p>
    </div>
  </div>   
        
    
      </div>
        <div className="flex justify-center items-center
        md:w-[100%] md:h-[48px] 
        p-[20px 0]
        bg-white-light 
        mt-[32px] mb-[69px]" style={{ textAlign: "center" }}>
          <button className="text-yellow-dark font-bold text-[16px] p-[15px] w-[245px] bg-white-light border border-yellow-dark  ">Show More</button>
        </div> 
        
        </>
  )
}

export default Product