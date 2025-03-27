import React, { useEffect, useState } from "react";
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import product5 from "../../../assets/images/product5.png";
import product6 from "../../../assets/images/product6.png";
import product7 from "../../../assets/images/product7.png";
import product8 from "../../../assets/images/product8.png";
import Pagination from "./Pagination";
import { useNavigate, useParams } from "react-router-dom";

const GalleryShop = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  //40 times data taken data and it's repeated not a new
  const data = [
    {
      id: 1,
      image: product1,
      heading: "Syltherine",
      subheading: "Stylish Cafe Chair",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "-30%",
      discountFlag: true,
    },
    {
      id: 2,
      image: product2,
      heading: "Leviosa",
      subheading: "Stylish cafe chair",
      price: "Rp.300.000",
      discount: "Rp.500.000",
    },
    {
      id: 3,
      image: product3,
      heading: "Lolito",
      subheading: "Luxury big sofa",
      price: "Rp.700.000",
      discount: "Rp.900.000",
      tag: "-50%",
      discountFlag: true,
    },
    {
      id: 4,
      image: product4,
      heading: "Respira",
      subheading: "Bar table and stool",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 5,
      image: product5,
      heading: "Grifo",
      subheading: "Night lamp",
      price: "Rp.500.000",
      discount: "Rp.800.000",
    },
    {
      id: 6,
      image: product6,
      heading: "Muggo",
      subheading: "Small mug",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 7,
      image: product7,
      heading: "Pingky",
      subheading: "Cute bed set",
      price: "700.000",
      discount: "Rp.900.000",
      tag: "-50%",
      discountFlag: true,
    },
    {
      id: 8,
      image: product8,
      heading: "Potty",
      subheading: "Minimalist flower pot",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 9,
      image: product8,
      heading: "Potty",
      subheading: "Minimalist flower pot",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 10,
      image: product6,
      heading: "Muggo",
      subheading: "Small mug",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 11,
      image: product4,
      heading: "Respira",
      subheading: "Bar table and stool",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
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
      discountFlag: true,
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
      discountFlag: true,
    },
    {
      id: 16,
      image: product7,
      heading: "Pingky",
      subheading: "Cute bed set",
      price: "700.000",
      discount: "Rp.900.000",
      tag: "-50%",
      discountFlag: true,
    },
    {
      id: 17,
      image: product8,
      heading: "Potty",
      subheading: "Minimalist flower pot",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 18,
      image: product6,
      heading: "Muggo",
      subheading: "Small mug",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 19,
      image: product4,
      heading: "Respira",
      subheading: "Bar table and stool",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
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
      discountFlag: true,
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
      discountFlag: true,
    },
    {
      id: 24,
      image: product7,
      heading: "Pingky",
      subheading: "Cute bed set",
      price: "700.000",
      discount: "Rp.900.000",
      tag: "-50%",
      discountFlag: true,
    },
    {
      id: 25,
      image: product1,
      heading: "Syltherine",
      subheading: "Stylish Cafe Chair",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "-30%",
      discountFlag: true,
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
      discountFlag: true,
    },
    {
      id: 28,
      image: product4,
      heading: "Respira",
      subheading: "Bar table and stool",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
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
      discountFlag: false,
    },
    {
      id: 31,
      image: product7,
      heading: "Pingky",
      subheading: "Cute bed set",
      price: "700.000",
      discount: "Rp.900.000",
      tag: "-50%",
      discountFlag: true,
    },
    {
      id: 32,
      image: product8,
      heading: "Potty",
      subheading: "Minimalist flower pot",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
    {
      id: 33,
      image: product1,
      heading: "Syltherine",
      subheading: "Stylish Cafe Chair",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "-30%",
      discountFlag: true,
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
      discountFlag: true,
    },
    {
      id: 36,
      image: product4,
      heading: "Respira",
      subheading: "Bar table and stool",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
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
      discountFlag: false,
    },
    {
      id: 39,
      image: product7,
      heading: "Pingky",
      subheading: "Cute bed set",
      price: "700.000",
      discount: "Rp.900.000",
      tag: "-50%",
      discountFlag: true,
    },
    {
      id: 40,
      image: product8,
      heading: "Potty",
      subheading: "Minimalist flower pot",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 490);
    }
  };

  const loadData = () => {
    setPosts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSinglePage = (id) => {
    navigate(`/singleproduct/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-[46px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mx-4 sm:mx-8">
        {currentPosts.map((post, index) => (
          <div key={index} className="relative max-w-full w-full mx-auto">
            <div>
              <img
                onClick={() => handleSinglePage(post.id)}
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
                  post.discountFlag ? "bg-red-600" : "bg-green-500"
                } rounded-full h-12 w-12 absolute top-2 right-7 justify-center items-center`}
              >
                <p className="text-white-light text-[15px] p-[9px]">
                  {post.tag}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default GalleryShop;
