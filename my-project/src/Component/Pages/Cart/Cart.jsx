import React from 'react'
import CartBg from './CartBg'
import CartAd from './CartAd'
import CartTotal from './CartTotal'

const Cart = () => {
  return (
    <>
    <div>
        <CartBg/>
    </div>
    <div>
      <CartTotal/>
    </div>
    <div>
        <CartAd/>
    </div>
    </>
  )
}

export default Cart