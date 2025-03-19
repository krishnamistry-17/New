import React from 'react'
import filter from "../../../assets/svgs/Filter.svg"
import biground from "../../../assets/svgs/Biground.svg"
import viewlist from "../../../assets/svgs/viewlist.svg"
import line from "../../../assets/svgs/Lineshop.svg"

const ShopFilter = () => {
     
  return (

      <div className="relative bg-cream-bglight w-full h-[100px]">
      <div className="absolute flex items-center space-x-4 
           lg:ml-[96px] lg:mt-[20px]
           md:ml-[50px] md:mt-[30px]
           sm:ml-[85px] 
           xs:ml-[15px] 
           xs:mt-[14px] flex-wrap">
       
        <img src={filter} alt="flt" className="lg:w-[25px] lg:h-[25px]
             md:w-[20px] md:h-[20px]
             sm:w-[18px] sm:h-[18px]
             xs:w-[16px] xs:h-[16px]" />
             
        <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]
             text-black-darkest lg:pl-[12px] lg:pr-[15px]">Filter</p>
       
        <img src={biground} alt="round" className="lg:w-[16.33px] lg:h-[16.33px] 
             sm:w-[14px] sm:h-[14px]
             xs:w-[12px] xs:h-[12px] lg:mt-[6px]" />
       
        <img src={viewlist} alt="view" className="lg:w-[21px] lg:h-[19.5px] 
             sm:w-[18px] sm:h-[15px]
             xs:w-[15px] xs:h-[12px] lg:ml-[23px] lg:mt-[6px]" />
             
        <img src={line} alt="line" className="lg:pl-[18px] lg:pr-[18px]
             sm:pl-[5px] sm:pr-[5px]
             xs:pl-[3px] xs:pr-[3px]" />
       
        <p className="xl:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[11px]">
          Showing 1–4 of 40 results
        </p>
    
        <div className="flex flex-wrap justify-between items-center">
          <p className="xl:pl-[348px] 
             xl:text-[20px] md:text-[15px] 
             sm:text-[12px] xs:text-[11px] 
             md:mt-[3px] lg:mt-[12px] xs:mt-[5px]">
             Show
          </p>
           
          <input className="
             lg:w-[55px] lg:h-[55px] 
             md:w-[40px] md:h-[40px]
             sm:w-[45px] sm:h-[35px]
             xs:w-[35px] xs:h-[35px] 
             lg:mt-[3px] md:mt-[6px]
             lg:ml-[17px] 
             lg:p-[12px]  md:p-[9px] xs:p-[10px]
             md:ml-[10px] sm:ml-[10px] xs:ml-[10px]
             sm:text-[15px] xs:text-[12px]
             text-black-light" 
             type="number" placeholder="16" />
       
          <p className="lg:pl-[29px] md:pl-[20px] sm:pl-[20px] xs:pl-[10px]
           lg:text-[20px] md:text-[15px] 
           sm:text-[12px] xs:text-[11px]
            text-black-darkest 
             md:mt-[3px] lg:mt-[12px] sm:mt-[5px] xs:mt-[5px]">
             Short by
          </p>
       
          <input className="
           xl:w-[188px] 
           lg:w-[150px] lg:h-[55px] 
           md:w-[120px] md:h-[50px]
           sm:w-[94px] sm:h-[35px]
           xs:w-[75px] xs:h-[37px] 
           lg:ml-[14px] md:ml-[10px] sm:ml-[10px] xs:ml-[10px]
           lg:p-[20px] md:p-[15px]   xs:p-[18px]
           lg:mt-[3px] md:mt-[6px] 
           sm:text-[15px] xs:text-[12px]
            text-black-light" 
             type="text" placeholder="Default" />
        </div>
      </div>
    </div>
    
  )
}

export default ShopFilter

