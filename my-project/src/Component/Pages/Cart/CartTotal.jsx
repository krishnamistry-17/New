import React from 'react'

const CartTotal = () => {
  return (
    <div className='bg-white-light xl:h-[547] font-poppins'>
        <div className='bg-white-light xl:mx-[100px] xl:mt-[72px] xl:mb-[85px]'>
            <div className='flex'>
                <div className='xl:w-[817px] xl:h-[55px] bg-cream-bglight xl:mr-[30px]'>
                    <div className='flex xl:pl-[142px] xl:pt-[15px] xl:pb-[16px]'>
                        <div>
                            <h2 className='font-medium text-[16px] text-black-darkest'>Product</h2>
                        </div>
                        <div>
                            <h2 className='font-medium text-[16px] xl:pl-[114px] text-black-darkest'>Price</h2>
                        </div>
                        <div>
                            <h2 className='font-medium text-[16px] xl:pl-[137px] text-black-darkest'>Quantity</h2>
                        </div>
                        <div>
                            <h2 className='font-medium text-[16px] xl:pl-[36px] text-black-darkest'>Subtotal</h2>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[393px] xl:h-[390px] bg-cream-bglight'>
                    <h2 className='xl:pl-[96px] xl:pt-[15px] xl:pr-[118px] font-semibold text-[32px] text-black-darkest'>Cart Totals</h2>
                    <p className='xl:pl-[75px] xl:pt-[61px] font-medium text-[16px] text-black-darkest'>Subtotal</p>
                    <p className='xl:pl-[75px] xl:pt-[31px] font-medium text-[16px] text-black-darkest'>Total</p>
                    <div className='xl:ml-[86px] xl:mt-[48px] '>
                    <button type='submit' className='text-[20px] text-black-darkest border border-black-darkest
                     rounded-md 
                     xl:pl-[59px] xl:pt-[13.77px] xl:pb-[14.71px] xl:pr-[53px]'>Check Out</button>
                    </div>
                </div>
               
           </div>
          
        </div>
    </div>
  )
}

export default CartTotal