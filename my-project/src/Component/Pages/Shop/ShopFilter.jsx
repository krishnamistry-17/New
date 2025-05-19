import React, { useState } from "react";
import filter from "../../../assets/svgs/Filter.svg";
import biground from "../../../assets/svgs/Biground.svg";
import viewlist from "../../../assets/svgs/viewlist.svg";
import line from "../../../assets/svgs/Lineshop.svg";
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";
import product4 from "../../../assets/images/product4.png";
import product5 from "../../../assets/images/product5.png";
import product6 from "../../../assets/images/product6.png";
import product7 from "../../../assets/images/product7.png";
import product8 from "../../../assets/images/product8.png";
import { useTranslation } from "react-i18next";

const ShopFilter = () => {
  const [showCount, SetShowCount] = useState("");
  const [sortOption, setSortOption] = useState("Default");
  const [searchId, setSearchId] = useState("");

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
  const { t } = useTranslation();
  const handleShowChange = (e) => {
    const value = e.target.value;
    SetShowCount(value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
    console.log("id", searchId);
  };

  const filteredData = data.filter((product) =>
    product.id.toString().includes(searchId)
  );

  const sortedData = () => {
    let sortedItems = [...filteredData];
    if (sortOption === "price") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortOption === "heading") {
      sortedItems.sort((a, b) => a.heading.localeCompare(b.heading));
    }
    return sortedItems;
  };

  const displayedData = sortedData().slice(0, showCount);
  console.log("id", searchId);

  return (
    <div className="relative bg-cream-bglight w-full h-[100px]">
      <div
        className="absolute flex items-center space-x-4 
           lg:ml-[96px] lg:mt-[20px]
           md:ml-[50px] md:mt-[30px]
           sm:ml-[85px] 
           xs:ml-[15px] 
           xs:mt-[14px] flex-wrap"
      >
        <img
          src={filter}
          alt="flt"
          className="lg:w-[25px] lg:h-[25px]
             md:w-[20px] md:h-[20px]
             sm:w-[18px] sm:h-[18px]
             xs:w-[16px] xs:h-[16px]"
        />

        <p
          className="lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]
             text-black-darkest lg:pl-[12px] lg:pr-[15px]"
        >
          {t("filter")}
        </p>

        <img
          src={biground}
          alt="round"
          className="lg:w-[16.33px] lg:h-[16.33px] 
             sm:w-[14px] sm:h-[14px]
             xs:w-[12px] xs:h-[12px] lg:mt-[6px]"
        />

        <img
          src={viewlist}
          alt="view"
          className="lg:w-[21px] lg:h-[19.5px] 
             sm:w-[18px] sm:h-[15px]
             xs:w-[15px] xs:h-[12px] lg:ml-[23px] lg:mt-[6px]"
        />

        <img
          src={line}
          alt="line"
          className="lg:pl-[18px] lg:pr-[18px]
             sm:pl-[5px] sm:pr-[5px]
             xs:pl-[3px] xs:pr-[3px]"
        />

        <p className="xl:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[11px]">
          {t("showing")} {/*{searchId} */}
        </p>

        <div className="flex flex-wrap justify-between items-center">
          <p
            className="xl:pl-[348px] 
             xl:text-[20px] md:text-[15px] 
             sm:text-[12px] xs:text-[11px] 
             md:mt-[3px] lg:mt-[12px] xs:mt-[5px]"
          >
            {t("show")}
          </p>

          <input
            className="
             lg:w-[55px] lg:h-[55px] 
             md:w-[40px] md:h-[40px]
             sm:w-[45px] sm:h-[35px]
             xs:w-[35px] xs:h-[35px] 
             lg:mt-[3px] md:mt-[6px]
             lg:ml-[17px] 
             lg:p-[12px]  md:p-[9px] xs:p-[10px]
             md:ml-[10px] sm:ml-[10px] xs:ml-[10px]
             sm:text-[15px] xs:text-[12px]
             text-black-light"
            type="number"
            placeholder="16"
            onChange={handleSearchChange}
            value={searchId}
          />

          <p
            className="lg:pl-[29px] md:pl-[20px] sm:pl-[20px] xs:pl-[10px]
           lg:text-[20px] md:text-[15px] 
           sm:text-[12px] xs:text-[11px]
            text-black-darkest 
             md:mt-[3px] lg:mt-[12px] sm:mt-[5px] xs:mt-[5px]"
          >
            {t("short")}
          </p>

          <select
            className="
           xl:w-[188px] 
           lg:w-[150px] lg:h-[55px] 
           md:w-[120px] md:h-[50px]
           sm:w-[94px] sm:h-[35px]
           xs:w-[75px] xs:h-[37px] 
           lg:ml-[14px] md:ml-[10px] sm:ml-[10px] xs:ml-[10px]
           lg:p-[20px] md:p-[15px]   xs:p-[18px]
           lg:mt-[3px] md:mt-[6px] 
           sm:text-[15px] xs:text-[12px]
            text-black-light"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default">{t("o1")}</option>
            <option value="price">{t("o2")}</option>
            <option value="heading">{t("o3")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
