import React from "react";
import shopbg from "../../../assets/images/shopbg.png";
import great from "../../../assets/svgs/Greater.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/svgs/AppLogo.svg";
import { useTranslation } from "react-i18next";

const CartBg = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="relative w-full font-poppins">
      <div className="relative w-full h-[316px]">
        <img
          src={shopbg}
          alt="bgshop"
          className="w-full h-full object-cover py-1"
        ></img>
      </div>
      <div
        className=" absolute left-1/2 transform -translate-x-1/2 
      top-[75px] text-center"
      >
        <img
          src={logo}
          alt="applogo"
          className="
          w-[77px] h-[77px] 
          md:ml-[11px]  mb-[-20px]
          sm:ml-[3px] 
          xs:ml-[0px] 
          "
        ></img>
        <h2
          className="font-medium 
        md:text-[48px] 
        sm:text-[35px]
        xs:text-[30px] text-black-darkest font-poppins"
        >
          {t("cart")}
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
            {t("cart")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartBg;
