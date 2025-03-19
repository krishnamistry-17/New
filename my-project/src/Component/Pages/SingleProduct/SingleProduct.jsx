import React, { useEffect, useState } from 'react'
import nextarrow from "../../../assets/svgs/NextArrow.svg"
import line from "../../../assets/svgs/SingleLine.svg"
import RelatedProduct from './RelatedProduct'
import { useNavigate } from 'react-router-dom'
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import product5 from "../../../assets/images/product5.png";
import product6 from "../../../assets/images/product6.png";
import product7 from "../../../assets/images/product7.png";
import product8 from "../../../assets/images/product8.png";

const SingleProduct = () => {
  const [posts,setPosts] = useState([])

  const data = [
             {
               id:1, 
               image: product1,
               heading: "Syltherine",
               subheading: "Stylish Cafe Chair",
               price: "Rp.500.000",
               discount: "Rp.900.000",
               tag: "-30%",
               discountFlag:true,
             },
             {
              id:2, 
               image: product2,
               heading: "Leviosa",
               subheading: "Stylish cafe chair",
               price: "Rp.300.000",
               discount: "Rp.500.000",
             },
             {
              id:3, 
               image: product3,
               heading: "Lolito",
               subheading: "Luxury big sofa",
               price: "Rp.700.000",
               discount: "Rp.900.000",
               tag: "-50%",
               discountFlag:true,
             },
             {
              id:4, 
               image: product4,
               heading: "Respira",
               subheading: "Bar table and stool",
               price: "Rp.500.000",
               discount: "Rp.900.000",
               tag: "New",
               discountFlag:false,
             },
             {
              id:5, 
                image: product5,
                heading: "Grifo",
                subheading: "Night lamp",
                price: "Rp.500.000",
                discount: "Rp.800.000",
                 },
                 {
                  id:6, 
                   image: product6,
                   heading: "Muggo",
                   subheading: "Small mug",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 7,
                   image: product7,
                   heading: "Pingky",
                   subheading: "Cute bed set",
                   price: "700.000",
                   discount: "Rp.900.000",
                   tag: "-50%",
                   discountFlag:true,
                 },
                 {
                  id: 8,
                   image: product8,
                   heading: "Potty",
                   subheading: "Minimalist flower pot",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 9,
                   image: product8,
                   heading: "Potty",
                   subheading: "Minimalist flower pot",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 10,
                   image: product6,
                   heading: "Muggo",
                   subheading: "Small mug",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 11,
                   image: product4,
                   heading: "Respira",
                   subheading: "Bar table and stool",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 12,
                   image: product2,
                   heading: "Leviosa",
                   subheading: "Stylish cafe chair",
                   price: "Rp.300.000",
                   discount: "Rp.500.000",
                 },
                 {
                  id: 13,
                   image: product1,
                   heading: "Syltherine",
                   subheading: "Stylish Cafe Chair",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "-30%",
                   discountFlag:true,
                 },
                 {
                  id: 14,
                   image: product5,
                   heading: "Grifo",
                   subheading: "Night lamp",
                   price: "Rp.500.000",
                   discount: "Rp.800.000",
                 },
                 {
                  id: 15,
                   image: product3,
                   heading: "Lolito",
                   subheading: "Luxury big sofa",
                   price: "Rp.700.000",
                   discount: "Rp.900.000",
                   tag: "-50%",
                   discountFlag:true,
                 },
                 {
                  id: 16,
                   image: product7,
                   heading: "Pingky",
                   subheading: "Cute bed set",
                   price: "700.000",
                   discount: "Rp.900.000",
                   tag: "-50%",
                   discountFlag:true,
                 },
                 {
                  id: 17,
                   image: product8,
                   heading: "Potty",
                   subheading: "Minimalist flower pot",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 18,
                   image: product6,
                   heading: "Muggo",
                   subheading: "Small mug",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 19,
                   image: product4,
                   heading: "Respira",
                   subheading: "Bar table and stool",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "New",
                   discountFlag:false,
                 },
                 {
                  id: 20,
                   image: product2,
                   heading: "Leviosa",
                   subheading: "Stylish cafe chair",
                   price: "Rp.300.000",
                   discount: "Rp.500.000",
                 },
                 {
                  id: 21,
                   image: product1,
                   heading: "Syltherine",
                   subheading: "Stylish Cafe Chair",
                   price: "Rp.500.000",
                   discount: "Rp.900.000",
                   tag: "-30%",
                   discountFlag:true,
                 },
                 {
                  id: 22,
                   image: product5,
                   heading: "Grifo",
                   subheading: "Night lamp",
                   price: "Rp.500.000",
                   discount: "Rp.800.000",
                 },
                 {
                  id: 23,
                   image: product3,
                   heading: "Lolito",
                   subheading: "Luxury big sofa",
                   price: "Rp.700.000",
                   discount: "Rp.900.000",
                   tag: "-50%",
                   discountFlag:true,
                 },
                 {
                  id: 24,
                   image: product7,
                   heading: "Pingky",
                   subheading: "Cute bed set",
                   price: "700.000",
                   discount: "Rp.900.000",
                   tag: "-50%",
                   discountFlag:true,
                 },
                 {
                  id: 25,
                  image: product1,
                  heading: "Syltherine",
                  subheading: "Stylish Cafe Chair",
                  price: "Rp.500.000",
                  discount: "Rp.900.000",
                  tag: "-30%",
                  discountFlag:true,
                },
                {
                  id: 26,
                  image: product2,
                  heading: "Leviosa",
                  subheading: "Stylish cafe chair",
                  price: "Rp.300.000",
                  discount: "Rp.500.000",
                },
                {
                  id: 27,
                  image: product3,
                  heading: "Lolito",
                  subheading: "Luxury big sofa",
                  price: "Rp.700.000",
                  discount: "Rp.900.000",
                  tag: "-50%",
                  discountFlag:true,
                },
                {
                  id: 28,
                  image: product4,
                  heading: "Respira",
                  subheading: "Bar table and stool",
                  price: "Rp.500.000",
                  discount: "Rp.900.000",
                  tag: "New",
                  discountFlag:false,
                },
                {
                  id: 29,
                      image: product5,
                      heading: "Grifo",
                      subheading: "Night lamp",
                      price: "Rp.500.000",
                      discount: "Rp.800.000",
                    },
                    {
                      id: 30,
                      image: product6,
                      heading: "Muggo",
                      subheading: "Small mug",
                      price: "Rp.500.000",
                      discount: "Rp.900.000",
                      tag: "New",
                      discountFlag:false,
                    },
                    {
                      id: 31,
                      image: product7,
                      heading: "Pingky",
                      subheading: "Cute bed set",
                      price: "700.000",
                      discount: "Rp.900.000",
                      tag: "-50%",
                      discountFlag:true,
                    },
                    {
                      id: 32,
                      image: product8,
                      heading: "Potty",
                      subheading: "Minimalist flower pot",
                      price: "Rp.500.000",
                      discount: "Rp.900.000",
                      tag: "New",
                      discountFlag:false,
                    },
                    {
                      id: 33,
                      image: product1,
                      heading: "Syltherine",
                      subheading: "Stylish Cafe Chair",
                      price: "Rp.500.000",
                      discount: "Rp.900.000",
                      tag: "-30%",
                      discountFlag:true,
                    },
                    {
                      id: 34,
                      image: product2,
                      heading: "Leviosa",
                      subheading: "Stylish cafe chair",
                      price: "Rp.300.000",
                      discount: "Rp.500.000",
                    },
                    {
                      id: 35,
                      image: product3,
                      heading: "Lolito",
                      subheading: "Luxury big sofa",
                      price: "Rp.700.000",
                      discount: "Rp.900.000",
                      tag: "-50%",
                      discountFlag:true,
                    },
                    {
                      id: 36,
                      image: product4,
                      heading: "Respira",
                      subheading: "Bar table and stool",
                      price: "Rp.500.000",
                      discount: "Rp.900.000",
                      tag: "New",
                      discountFlag:false,
                    },
                    {
                      id: 37,
                          image: product5,
                          heading: "Grifo",
                          subheading: "Night lamp",
                          price: "Rp.500.000",
                          discount: "Rp.800.000",
                        },
                        {
                          id: 38,
                          image: product6,
                          heading: "Muggo",
                          subheading: "Small mug",
                          price: "Rp.500.000",
                          discount: "Rp.900.000",
                          tag: "New",
                          discountFlag:false,
                        },
                        {
                          id: 39,
                          image: product7,
                          heading: "Pingky",
                          subheading: "Cute bed set",
                          price: "700.000",
                          discount: "Rp.900.000",
                          tag: "-50%",
                          discountFlag:true,
                        },
                        {
                          id: 40,
                          image: product8,
                          heading: "Potty",
                          subheading: "Minimalist flower pot",
                          price: "Rp.500.000",
                          discount: "Rp.900.000",
                          tag: "New",
                          discountFlag:false,
                        },
               ]

  const navigate = useNavigate()
               
  const handleHome = () => {
    navigate("/")
  }

  const handleShop = () => {
    navigate('/shop')
  }

  const setLoadData = () => {
    setPosts(data)
  }
  useEffect(()=>{
    setLoadData()
  },[])

  return (
    <>
    <div className='font-poppins '>
            <div className="relative bg-cream-bglight w-full h-[100px]">
                <div className='flex'>
                    <p className='sm:pl-[93px] xs:pl-[25px] pt-[39px] pb-[37px] text-black-light text-[16px]' onClick={handleHome}>Home</p>
                    <img src={nextarrow} alt='arrow' className='pl-[14px]  pt-[41px] pb-[39px] '></img>
                    <p className='pl-[24px] pt-[39px] pb-[37px] text-black-light text-[16px]' onClick={handleShop}>Shop</p>
                    <img src={nextarrow} alt='arrow' className='pl-[21px]  pt-[41px] pb-[39px] '></img>
                    <img src={line} alt='lin' className='pl-[25px]  pt-[32px] pb-[31px]'></img>
                    
                    {posts.map((post,id)=>(
                      <div key={id}>
                        <p>{post.subheading}</p>
                      </div>
                    ))}
                    
                </div>
            </div>

          

            <div>
                <RelatedProduct/>
            </div>
    </div>
    </>
  )
}

export default SingleProduct