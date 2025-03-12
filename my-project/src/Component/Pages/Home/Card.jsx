import React from 'react'
import image from "../../../assets/images/home.jpg";
const Card = () => {
  return (
    <div className="relative bg-cover bg-center w-full h-[100vh]"
    style={{ backgroundImage: `url(${image})` }}>
 
 <div className="absolute right-5 md:right-8 lg:right-12    
   top-[135px] sm:top-[100px] md:top-[120px] lg:top-[135px] xl:top-[150px]">
   {/* 768-999 */}
   <div className="bg-yellow-yelbg 
     max-w-[643px] h-auto
     pt-[62px] pb-[37px] px-[39px] 
     xl:pt-[62px] xl:pb-[37px] xl:pl-[39px] 
     md:w-[643px] md:h-[378px]
     md:max-w-[500px] lg:max-w-[643px] lg:h-[425px]
     sm:max-w-[295px] sm:h-[243px] sm:mt-[-10px]
     xs:max-w-[300px]  xs:mt-[-17px]">
      
     <h2 className="font-semibold text-[15px] 
       xl:text-[22px] lg:text-[20px] md:text-[19px] 
       sm:text-[13px] xs:text-[12px] text-shadow-stroke" 
       style={{ WebkitTextStroke: "2px black" }}>
       N e w
     </h2>

     <h1 className="text-yellow-dark    
       text-[52px] 2xl:text-[55px] lg:text-[53px] 
       md:text-[35px] sm:text-[15px] xs:text-[12px] 
        font-bold">
       Discover Our {" "}
       New Collection {" "}
     </h1>

     <p className="text-black-para 
       text-[20px] md:text-[18px] sm:text-[10px] xs:text-[10px]
       font-medium pt-4  ">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
       tellus, luctus nec ullamcorper mattis.
     </p>

     <button className="bg-yellow-dark mt-7  bg-white text-white-light font-bold text-[16px]
       md:w-[220px] md:h-[74px]
       sm:w-[165px] sm:h-[55px] xs:w-[152px] xs:h-[50px] xs:mt-3 drop-shadow-[0_0px_4px_rgba(0,0,0,0.25)] ">
       BUY NOW
     </button>
   </div>
 </div>
</div>

  
  )
}   

export default Card

  //   <div className="mb-[51.95px]">

  //   <div className="w-full max-w-[559px] mx-auto text-center justify-center">
  //     <h1 className="text-[32px] md:text-[32px] sm:text-[25px] xs:text-[15px] font-bold mt-[26px]">
  //       Browse The Range
  //     </h1>
  //     <p className="text-[20px] md:text-[20px] sm:text-[10px] xs:text-[9px] text-black-paradark">
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit
  //     </p>
  //   </div>
  
  //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[15px] 
  //   px-4 md:px-0">
      
  //     <div className="flex flex-col justify-center items-center">
  //       <img
  //         className="w-full h-auto object-cover"
  //         src={homeliv}
  //         alt="dine"
  //       />
  //       <p className="text-black-para font-semibold text-[24px] sm:text-[15px] 
  //       xs:text-[12px] text-center mt-2">
  //         Dining
  //       </p>
  //     </div>
  
      
  //     <div className="flex flex-col justify-center items-center">
  //       <img
  //         className="w-full h-auto object-cover"
  //         src={living}
  //         alt="livingroom"
  //       />
  //       <p className="text-black-para font-semibold text-[24px] sm:text-[15px] xs:text-[12px] text-center mt-2">
  //         Living
  //       </p>
  //     </div>
  
      
  //     <div className="flex flex-col justify-center items-center">
  //       <img
  //         className="w-full h-auto object-cover"
  //         src={living2}
  //         alt="bedroom"
  //       />
  //       <p className="text-black-para font-semibold text-[24px] sm:text-[15px] xs:text-[12px] text-center mt-2">
  //         Bedroom
  //       </p>
  //     </div>

  //   </div>
  // </div> 