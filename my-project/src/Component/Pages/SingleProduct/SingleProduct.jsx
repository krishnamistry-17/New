import React, { useContext, useEffect, useState } from "react";
import nextarrow from "../../../assets/svgs/NextArrow.svg";
import line from "../../../assets/svgs/SingleLine.svg";
import RelatedProduct from "./RelatedProduct";
import star from "../../../assets/svgs/Star.svg";
import starh from "../../../assets/svgs/StarH.svg";
import { useNavigate, useParams } from "react-router-dom";
import linep from "../../../assets/svgs/LineP.svg";
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import product5 from "../../../assets/images/product5.png";
import product6 from "../../../assets/images/product6.png";
import product7 from "../../../assets/images/product7.png";
import product8 from "../../../assets/images/product8.png";
import plus from "../../../assets/svgs/Plus.svg";
import minus from "../../../assets/svgs/Minus.svg";
import facebook from "../../../assets/svgs/FaceBook.svg";
import linkdin from "../../../assets/svgs/Linkdin.svg";
import twitter from "../../../assets/svgs/Twitter.svg";
import dot from "../../../assets/svgs/Dot.svg";
import { CartContext } from "../Cart/Context/CartProvider";

const SingleProduct = () => {
  const data = [
    {
      id: 1,
      image: product1,
      heading: "Syltherine",
      subheading: "Stylish Cafe Chair",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.300.000",
      discount: "Rp.500.000",
    },
    {
      id: 3,
      image: product3,
      heading: "Lolito",
      subheading: "Luxury big sofa",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.500.000",
      discount: "Rp.800.000",
    },
    {
      id: 6,
      image: product6,
      heading: "Muggo",
      subheading: "lgall mug",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.300.000",
      discount: "Rp.500.000",
    },
    {
      id: 13,
      image: product1,
      heading: "Syltherine",
      subheading: "Stylish Cafe Chair",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.500.000",
      discount: "Rp.800.000",
    },
    {
      id: 15,
      image: product3,
      heading: "Lolito",
      subheading: "Luxury big sofa",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.300.000",
      discount: "Rp.500.000",
    },
    {
      id: 21,
      image: product1,
      heading: "Syltherine",
      subheading: "Stylish Cafe Chair",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.500.000",
      discount: "Rp.800.000",
    },
    {
      id: 23,
      image: product3,
      heading: "Lolito",
      subheading: "Luxury big sofa",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.300.000",
      discount: "Rp.500.000",
    },
    {
      id: 27,
      image: product3,
      heading: "Lolito",
      subheading: "Luxury big sofa",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.500.000",
      discount: "Rp.800.000",
    },
    {
      id: 30,
      image: product6,
      heading: "Muggo",
      subheading: "Small mug",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.300.000",
      discount: "Rp.500.000",
    },
    {
      id: 35,
      image: product3,
      heading: "Lolito",
      subheading: "Luxury big sofa",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.500.000",
      discount: "Rp.800.000",
    },
    {
      id: 38,
      image: product6,
      heading: "Muggo",
      subheading: "Small mug",
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
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
      para: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      price: "Rp.500.000",
      discount: "Rp.900.000",
      tag: "New",
      discountFlag: false,
    },
  ];

  const [posts, setPosts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, increase, decrease } = useContext(CartContext);

  const product = data.find((item) => item.id === parseInt(id));

  const handleHome = () => {
    navigate("/");
  };

  const handleShop = () => {
    navigate("/shop");
  };

  const handleCompare = () => {
    navigate("/prodcompare");
  };

  const setLoadData = () => {
    setPosts(data);
  };

  useEffect(() => {
    setLoadData();
  }, []);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <div className="font-poppins">
        <div className="relative bg-cream-bglight w-full h-[100px]">
          <div className="flex">
            <p
              className="sm:pl-[93px] xs:pl-[25px] pt-[39px] pb-[37px] text-black-light sm:text-[16px] xs:text-[14px]"
              onClick={handleHome}
            >
              Home
            </p>
            <img
              src={nextarrow}
              alt="arrow"
              className="pl-[14px] pt-[41px] pb-[39px]"
            />
            <p
              className="pl-[24px] pt-[39px] pb-[37px] text-black-light sm:text-[16px] xs:text-[14px]"
              onClick={handleShop}
            >
              Shop
            </p>
            <img
              src={nextarrow}
              alt="arrow"
              className="pl-[21px] pt-[41px] pb-[39px]"
            />
            <img
              src={line}
              alt="lin"
              className="pl-[25px] pt-[32px] pb-[31px]"
            />
            {product ? (
              <div>
                <p className="sm:pl-[34px] xs:pl-[20px] pt-[38px] sm:text-[16px] xs:text-[12px] text-black-darkest">
                  {product.subheading}
                </p>
              </div>
            ) : (
              <p>Heading not defined</p>
            )}
          </div>
        </div>

        <div className="product-details h-[820px] bg-white-light mt-[55px]">
          <div className="h-[730px] sm:ml-[66px] xs:ml-[12px]">
            {product ? (
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div
                  className="
          xl:w-[553px] xl:h-[500px] 
          lg:w-[500px] lg:h-[450px] 
          md:w-[400px] md:h-[350px]"
                >
                  <div className="flex">
                    {/* Left Image */}
                    <div className="lg:w-[74px] lg:h-[416px]">
                      <div className="w-[76px] h-[80px] bg-cream-bg rounded-lg lg:mb-[32px] md:mb-[20px] sm:mb-[15px] xs:mb-[10px]">
                        <img
                          className="w-[83px] h-[83px] p-[10px]"
                          src={product.image}
                          alt={product.heading}
                        ></img>
                      </div>

                      <div className="w-[76px] h-[80px] bg-cream-bg rounded-lg lg:mb-[32px] md:mb-[20px] sm:mb-[15px] xs:mb-[10px]">
                        <img
                          className="w-[83px] h-[83px] p-[10px]"
                          src={product.image}
                          alt={product.heading}
                        ></img>
                      </div>

                      <div className="w-[76px] h-[80px] bg-cream-bg rounded-lg lg:mb-[32px] md:mb-[20px] sm:mb-[15px] xs:mb-[10px]">
                        <img
                          className="w-[83px] h-[83px] p-[10px]"
                          src={product.image}
                          alt={product.heading}
                        ></img>
                      </div>

                      <div className="w-[76px] h-[80px] bg-cream-bg rounded-lg lg:mb-[32px] md:mb-[20px] sm:mb-[15px] xs:mb-[10px]">
                        <img
                          className="w-[83px] h-[83px] p-[10px]"
                          src={product.image}
                          alt={product.heading}
                        ></img>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div
                      className="sm:mt-0 xs:mt-[53px] 
              xl:w-[423px] xl:h-[500px] xl:ml-[31px] 
              lg:w-[400px] lg:h-[400px] lg:ml-[20px] 
              md:w-[400px] md:h-[380px] md:ml-[20px] 
              sm:w-[285px] sm:h-[365px] sm:ml-[20px] 
              xs:w-[210px] xs:h-[273px] xs:ml-[10px]
               bg-cream-bglight"
                    >
                      <div
                        className="
                xl:pt-[78px] lg:pt-[21px] 
                md:pt-[25px] sm:pt-[30px] xs:pt-[27px]"
                      >
                        <img
                          className="
                  xl:w-[423px] xl:h-[356px] 
                  lg:w-[400px] lg:h-[356px]
                   md:w-[315px] md:h-[330px]"
                          src={product.image}
                          alt={product.heading}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div
                  className="h-[730px] bg-white-light
           xl:ml-[82px] lg:ml-[42px] md:ml-[24px]"
                >
                  <div>
                    <h1
                      className="
              xl:text-[42px] lg:text-[32px] 
              md:text-[26px] xs:text-[20px]
               text-black-darkest"
                    >
                      {product.heading}
                    </h1>

                    <div className="flex">
                      <p
                        className="text-black-light font-medium
                 xl:text-[24px] lg:text-[20px] 
                 md:text-[17px]
                 "
                      >
                        {product.price}
                      </p>

                      <p
                        className="pl-[15px] pt-[1px] text-black-light line-through 
                lg:text-[18px] md:text-[16px]"
                      >
                        {product.discount}
                      </p>
                    </div>

                    <div className="flex mt-[15px] mb-[18px]">
                      <img
                        className="w-[18px] h-[18px] m-[2px]"
                        src={star}
                        alt="str"
                      />
                      <img
                        className="w-[18px] h-[18px] m-[2px]"
                        src={star}
                        alt="str"
                      />
                      <img
                        className="w-[18px] h-[18px] m-[2px]"
                        src={star}
                        alt="str"
                      />
                      <img
                        className="w-[18px] h-[18px] m-[2px]"
                        src={star}
                        alt="str"
                      />
                      <img
                        className="w-[18px] h-[18px] m-[2px]"
                        src={starh}
                        alt="str"
                      />
                      <img
                        className="lg:pl-[18px] md:pl-[6px]"
                        src={linep}
                        alt="lin"
                      />
                      <p
                        className="text-black-light 
                text-[13px] pl-[22px] pt-[5px] pb-[5px]"
                      >
                        5 Customer Review
                      </p>
                    </div>

                    <p
                      className="
              xl:w-[424px] lg:w-[370px]
              md:w-[270px] sm:w-[415px] xs:w-[299px]
              h-[80px] 
              lg:text-[13px] md:text-[12px] sm:text-[12px] xs:text-[12px] text-black-darkest"
                    >
                      {product.para}
                    </p>

                    <div className="w-[123px] h-[63px]">
                      <p className="text-[14px] text-black-light">Size</p>
                      <div className="flex mt-[12px]">
                        <div className=" w-[30px] h-[30px] bg-yellow-dark rounded-md">
                          <p className="sm:text-[13px] xs:text-[12px] text-white-light text-center p-[6px]">
                            L
                          </p>
                        </div>
                        <div className="ml-[16px] w-[30px] h-[30px] bg-cream-bglight rounded-md">
                          <p className="sm:text-[13px] xs:text-[12px] text-black-darkest text-center p-[6px]">
                            XL
                          </p>
                        </div>
                        <div className="ml-[16px] w-[30px] h-[30px] bg-cream-bglight rounded-md">
                          <p className="sm:text-[13px] xs:text-[12px] text-black-darkest text-center p-[6px]">
                            XS
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-[123px] h-[63px] mt-[18px]">
                      <p className="text-[14px] text-black-light">Color</p>
                      <div className="flex mt-[12px]">
                        <div
                          className=" 
                  md:w-[30px] md:h-[30px]
                  xs:w-[25px] xs:h-[25px]
                  bg-purple-light rounded-full"
                        ></div>
                        <div
                          className="ml-[16px] 
                  md:w-[30px] md:h-[30px]
                  xs:w-[25px] xs:h-[25px]
                  bg-black-darkest rounded-full"
                        ></div>
                        <div
                          className="ml-[16px]
                    md:w-[30px] md:h-[30px]
                  xs:w-[25px] xs:h-[25px]
                  bg-yellow-dark rounded-full"
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-col xl:flex-row">
                      <div
                        className=" flex 
                  lg:w-[123px] lg:h-[64px]
                  xs:w-[80px] xs:h-[42px]
                  mt-[32px]  border border-black-light bg-white-light rounded-lg"
                      >
                        <button onClick={handleDecrease}>
                          <img
                            className="
                    lg:ml-[15px] xs:ml-[10px]
                    lg:my-[20px] xs:my-[10px] 
                    w-[9px] h-[24px]"
                            src={minus}
                            alt="-"
                          ></img>
                        </button>
                        <p
                          className="font-medium text-[16px] text-black-darkest
                  lg:pl-[28px] lg:py-[20px]
                  xs:pl-[15px] xs:py-[10px]
                  "
                        >
                          {quantity}
                        </p>
                        <button onClick={handleIncrease}>
                          <img
                            className="w-[11px] h-[24px]
                    lg:ml-[35px] lg:my-[20px]
                    xs:ml-[14px] xs:my-[10px]
                    "
                            src={plus}
                            alt="+"
                          ></img>
                        </button>
                      </div>

                      <div
                        className="xl:ml-[18px] 
            lg:w-[215px] lg:h-[64px] 
            md:w-[140px] md:h-[45px]
            xs:w-[135px] xs:h-[45px]
          xl:mt-[32px] lg:mt-[20px] md:mt-[10px] xs:mt-[20px] border border-black-light bg-white-light rounded-lg"
                      >
                        <button
                          className="lg:py-[17px] xs:py-[12px] md:py-[10px] lg:px-[48px] xs:px-[34px] md:px-[30px] lg:text-[20px] md:text-[14px] xs:text-[12px] text-black-darkest"
                          onClick={handleAddToCart}
                        >
                          Add To Cart
                        </button>
                      </div>

                      <div
                        className=" flex 
            xl:ml-[18px] 
            lg:w-[215px] lg:h-[64px] 
            md:w-[165px] md:h-[53px]
            xs:w-[135px] xs:h-[45px]
            xl:mt-[32px] lg:mt-[20px] md:mt-[10px] xs:mt-[20px] border border-black-light bg-white-light rounded-lg"
                      >
                        <img
                          className="
                lg:w-[16px] lg:h-[35px] 
                md:w-[14px] md:h-[28px]
                xs:w-[11px] xs:h-[29px]
                lg:ml-[47px] lg:my-[15px]
                xs:ml-[27px] xs:my-[7px]
                "
                          src={plus}
                          alt="+"
                        ></img>
                        <p
                          className="
              lg:text-[20px]  md:text-[15px] xs:text-[12px] text-black-darkest 
              lg:pl-[10px] lg:py-[17px]
              xs:pl-[10px] xs:py-[12px]
              "
                          onClick={handleCompare}
                        >
                          Compare
                        </p>
                      </div>
                    </div>

                    <hr className="md:mt-[60px] sm:mt-[30px] xs:mt-[20px] border-black-border" />

                    <div className="md:mt-[59px] sm:mt-[30px] xs:mt-[20px]">
                      <div className="flex">
                        <p className="text-[16px] text-black-light">SKU</p>
                        <img
                          className="pl-[61px] pr-[12px]"
                          src={dot}
                          alt="."
                        ></img>
                        <p className="text-[16px] text-black-light">SS001</p>
                      </div>
                      <hr className="border-black-border" />

                      <div className="flex mt-[18px]">
                        <p className="text-[16px] text-black-light">Category</p>
                        <img
                          className="pl-[29px] pr-[12px]"
                          src={dot}
                          alt="."
                        ></img>
                        <p className="text-[16px] text-black-light">Sofas</p>
                      </div>

                      <div className="flex mt-[12px]">
                        <p className="text-[16px] text-black-light">Tags</p>
                        <img
                          className="pl-[61px] pr-[12px]"
                          src={dot}
                          alt="."
                        ></img>
                        <p className="text-[16px] text-black-light">
                          Sofa, Chair, Home, Shop
                        </p>
                      </div>

                      <div className="flex mt-[14px]">
                        <p className="text-[16px] text-black-light">Share</p>
                        <img
                          className="pl-[52px] pr-[12px]"
                          src={dot}
                          alt="."
                        ></img>
                        <img
                          className="ml-[12px]"
                          src={facebook}
                          alt="fcb"
                        ></img>
                        <img
                          className="ml-[25px]"
                          src={linkdin}
                          alt="lkd"
                        ></img>
                        <img
                          className="ml-[23px]"
                          src={twitter}
                          alt="twit"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Product not found!</p>
            )}
          </div>
        </div>

        <div>
          <RelatedProduct />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
