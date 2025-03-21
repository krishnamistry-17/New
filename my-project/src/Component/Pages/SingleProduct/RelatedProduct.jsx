import React, { useEffect, useState } from 'react'
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import { useNavigate } from 'react-router-dom';

const RelatedProduct = () => {
    const navigate = useNavigate()
    
    const [posts, setPosts] = useState([])
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
          ]
    
        const loadData = () => {
            setPosts(data);
        }
    
        useEffect(() => {
            loadData();
        }, [])

        const handleSinglePage = (id) => {
            navigate(`/singleproduct/${id}`)
            window.scrollTo(0,0)
        }

  return (
    <>
    <div className='lg:mt-[100px] md:mt-[200px] sm:mt-[500px] xs:mt-[475px]'>
    <h1 className='mb-[26px] font-medium md:text-[36px] xs:text-[26px] items-center text-center text-black-darkest'>Related Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mx-4 sm:mx-8">
           
    {posts.map((post, index) => (
        <div key={index} className="relative max-w-full w-full mx-auto">
            <div>
                <img
                  onClick={()=> handleSinglePage(post.id)}
                    src={post.image}
                    alt={post.heading}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]">
                <h2 className="text-black-dark font-semibold text-[18px] lg:text-[24px] md:text-[20px] sm:text-[18px] xs:text-[16px] pb-[8px]">
                    {post.heading}
                </h2>
                <p className="text-gray-graypara font-medium text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] pb-[8px]">
                    {post.subheading}
                </p>
                <div className="flex gap-4">
                    <div className="mr-[5px]">
                        <h2 className="text-black-dark font-semibold xl:text-[20px] lg:text-[17px] md:text-[12px] sm:text-[13px] xs:text-[14px]">
                            {post.price}
                        </h2>
                    </div>
                    <div>
                <p className="text-gray-graymoney lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[13px] line-through mt-[1px]">
                    {post.discount}
                </p>
            </div>
        </div>
    </div>
    {post.discount && post.tag && (
        <div
            className={`${
                post.discountFlag ? 'bg-red-600' : 'bg-green-500'
            } rounded-full h-12 w-12 absolute top-2 right-7 justify-center items-center`}
        >
            <p className="text-white-light text-[15px] p-[9px]">{post.tag}</p>
        </div>
            )}
        </div>
    ))}
        </div>

        <div className="flex justify-center items-center
        md:w-[100%] md:h-[48px] 
        p-[20px 0]
        bg-white-light 
        mt-[32px] mb-[69px]">
        <button className="text-yellow-dark font-bold 
                text-[16px] p-[15px] w-[245px]
            bg-white-light border border-yellow-dark  "> Show More</button>
        </div>
        
      </div>
      </>
  )
}

export default RelatedProduct