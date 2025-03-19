import React from 'react'
import shopbg from "../../../assets/images/shopbg.png"
import great from "../../../assets/svgs/Greater.svg"
import { useNavigate } from 'react-router-dom'
import logo from "../../../assets/svgs/AppLogo.svg"

const CartBg = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    } 

  return (
     <div className='relative w-full'>
           <div className='relative w-full h-[316px]'> 
               <img src={shopbg} alt='bgshop'
                className='w-full h-full object-cover py-1'></img>
           </div>
           <div className=' absolute left-1/2 transform -translate-x-1/2 top-[75px] text-center'>
           <img src={logo} alt='applogo' className='w-[77px] h-[77px] md:ml-[30px]  md:mb-[-32px]'></img>
               <h2 className='font-medium md:text-[48px] xs:text-[30px] text-black-darkest'>Cart</h2>
               <div className=' absolute flex items-center justify-center '>
                   <p className='font-medium md:text-[16px] xs:text-[12px] text-black-darkest pr-[6.08px]' onClick={handleClick} >Home</p>
                   <img src={great} alt='grt'></img>
                   <p className='md:text-[16px] xs:text-[12px] text-black-darkest pl-[6.08px]'>Cart</p>
               </div>
           </div>
       </div>
  )
}

export default CartBg