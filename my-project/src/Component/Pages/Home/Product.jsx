import React, { useEffect, useState } from "react";
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import product5 from "../../../assets/images/product5.png";
import product6 from "../../../assets/images/product6.png";
import product7 from "../../../assets/images/product7.png";
import product8 from "../../../assets/images/product8.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Product = () => {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();
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
  ];

  const navigate = useNavigate();

  const loadData = () => {
    setPosts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handelProduct = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };

  const handleSinglePage = (id) => {
    navigate(`/singleproduct/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2
        className="font-bold 
     lg:text-[35px] md:text-[30px] sm:text-[25px] xs:text-[20px]
     pb-[32px] text-black-dark text-center"
      >
        {t("title")}
      </h2>

      <div
        className="grid grid-cols-1 
                    lg:grid-cols-4 md:grid-cols-3 
                    sm:grid-cols-2 gap-8 
                    mx-4 sm:mx-8  "
      >
        {posts.map((post, index) => (
          <div key={index} className="relative max-w-full w-full mx-auto">
            <div>
              <img
                onClick={() => handleSinglePage(post.id)}
                src={post.image}
                alt={post.heading}
                className="w-full h-auto object-cover"
              ></img>
            </div>
            <div className="bg-gray-graybg pt-[16px] pl-[16px] pr-[20px] pb-[30px]">
              <h2
                className="text-black-dark
            font-semibold 
            text-[18px] lg:text-[24px]
             md:text-[20px] sm:text-[18px] xs:text-[16px]
             pb-[8px]
            "
              >
                {post.heading}
              </h2>
              <p
                className="text-gray-graypara
           font-medium
            text-[14px] lg:text-[16px] 
            md:text-[15px] sm:text-[14px] xs:text-[13px]
            pb-[8px]
            "
              >
                {post.subheading}
              </p>
              <div className="flex gap-4">
                <div className="mr-[5px]">
                  <h2
                    className="text-black-dark font-semibold 
             xl:text-[20px] lg:text-[17px] md:text-[12px] sm:text-[13px] xs:text-[14px]"
                  >
                    {post.price}
                  </h2>
                </div>
                <div>
                  <p
                    className="text-gray-graymoney
             lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[13px] line-through mt-[1px]"
                  >
                    {post.discount}
                  </p>
                </div>
              </div>
            </div>
            {post.discount && post.tag && (
              <div
                className={`${
                  post.discountFlag ? "bg-red-600 " : "bg-green-500"
                }
                     rounded-full h-12 w-12 absolute top-2 right-7 
                    justify-center items-center`}
              >
                <p
                  className="text-white-light
                      text-[15px] p-[9px]
                      "
                >
                  {post.tag}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="flex justify-center items-center
         md:w-[100%] md:h-[48px] 
         p-[20px 0]
         bg-white-light 
         mt-[32px] mb-[69px]"
      >
        <button
          className="text-yellow-dark font-bold 
           text-[16px] p-[15px] w-[245px]
            bg-white-light border border-yellow-dark  "
          onClick={handelProduct}
        >
          {" "}
          {t("btn1")}
        </button>
      </div>
    </div>
  );
};

export default Product;
