import React from 'react'
import shopbg from "../../../assets/images/shopbg.png"
import great from "../../../assets/svgs/Greater.svg"
import { useNavigate } from 'react-router-dom'
import logo from "../../../assets/svgs/AppLogo.svg"
const ComapreBg = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    } 
    
  return (
     <div className='relative w-full font-poppins'>
           <div className='relative w-full h-[316px]'> 
               <img src={shopbg} alt='bgshop'
                className='w-full h-full object-cover py-1'></img>
           </div>
           <div className=' absolute left-1/2 transform -translate-x-1/2 top-[75px] text-center'>

           <img src={logo} alt='applogo' className='
           w-[77px] h-[77px]
            md:ml-[130px] md:mb-[-32px]
            sm:ml-[80px] sm:mb-[-15px]
            xs:ml-[37px] xs:mb-[-13px]
            '></img>

               <h2 className='font-medium 
               lg:text-[48px] 
               md:text-[39px]
               sm:text-[27px]
               xs:text-[23px] text-black-darkest'>Product Comparison</h2>

               <div className=' absolute flex items-center justify-center 
               md:pl-[100px] sm:pl-[56px] xs:pl-[20px]
               md:pt-[0px] sm:pt-[10px] xs:pt-[8px]
               '>

                   <p className='font-medium md:text-[16px] xs:text-[12px] text-black-darkest pr-[6.08px]' onClick={handleClick} >Home</p>
                   <img src={great} alt='grt'></img>
                   <p className='md:text-[16px] xs:text-[12px] text-black-darkest pl-[6.08px]'>Comparison</p>
               </div>
           </div>
       </div>
  )
}

export default ComapreBg