import React from "react";
import shopbg from "../../../assets/images/shopbg.png";
import great from "../../../assets/svgs/Greater.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ShopBg = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[316px]">
        <img
          src={shopbg}
          alt="bgshop"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className=" absolute left-1/2 transform -translate-x-1/2 top-[120px] text-center">
        <h2 className="font-medium md:text-[48px] xs:text-[30px] text-black-darkest">
          {t("shop")}
        </h2>
        <div className=" absolute flex items-center justify-center ">
          <p
            className="font-medium md:text-[16px] xs:text-[12px] text-black-darkest pr-[6.08px]"
            onClick={handleClick}
          >
            {t("home")}
          </p>
          <img src={great} alt="grt"></img>
          <p className="md:text-[16px] xs:text-[12px] text-black-darkest pl-[6.08px]">
            {t("shop")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopBg;
