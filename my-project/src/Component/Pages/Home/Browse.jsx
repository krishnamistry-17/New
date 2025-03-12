import React from 'react'
import homeliv from "../../../assets/images/home-liv.png";
import living from "../../../assets/images/living.png";
import living2 from "../../../assets/images/living-2.png";

const Browse = () => {  
  return (

    <div className="mb-[51.95px]">

    <div className="w-full max-w-[559px] mx-auto text-center justify-center">
      <h1 className="text-[32px] md:text-[32px] sm:text-[25px] xs:text-[15px] font-bold mt-[26px]"> 
        Browse The Range
      </h1>
      <p className="text-[20px] md:text-[20px] sm:text-[10px] xs:text-[9px] text-black-paradark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    gap-4 mt-[15px] 
    px-4 md:px-0">
      
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[381px] h-[426px] 
           md:w-[381px] md:h-[426px]
           sm:w-[292px] sm:h-[351px]
           xs:w-[245px] xs:h-[265px]
          object-cover"
          src={homeliv}
          alt="dine"
        />
        <p className="text-black-para font-semibold text-[24px] sm:text-[15px] 
        xs:text-[12px] text-center mt-2">
          Dining
        </p>
      </div>
  
      
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[381px] h-[426px] 
           md:w-[381px] md:h-[426px]
           sm:w-[292px] sm:h-[351px]
           xs:w-[245px] xs:h-[265px]
          object-cover"
          src={living}
          alt="livingroom"
        />
        <p className="text-black-para font-semibold text-[24px] sm:text-[15px] xs:text-[12px] text-center mt-2">
          Living
        </p>
      </div>
  
      
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[381px] h-[426px] 
           md:w-[381px] md:h-[426px]
           sm:w-[292px] sm:h-[351px]
           xs:w-[245px] xs:h-[265px]
          object-cover"
          src={living2}
          alt="bedroom"
        />
        <p className="text-black-para font-semibold text-[24px] sm:text-[15px] xs:text-[12px] text-center mt-2">
          Bedroom
        </p>
      </div>

    </div>
  </div> 
  
 
  )
}

export default Browse