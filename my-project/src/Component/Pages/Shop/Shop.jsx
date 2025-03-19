import React from 'react'
import ShopBg from './ShopBg'
import ShopFilter from './ShopFilter'
import ShopAd from './ShopAd'
// import ShopGallery from './ShopGallery'
import GalleryShop from './GalleryShop'
const Shop = () => {
    
  return (
    <>
    <div className='font-poppins'>
          <div>
            <ShopBg/>
          </div> 
          <div>
            <ShopFilter/>
        </div>
        <div>
            <GalleryShop/>
        </div>
        <div>
            <ShopAd/>
          </div>
    </div>
    </>
  )
}

export default Shop

//pagiantion-mediascreen
//pagination-scroll