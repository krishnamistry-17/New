import React from "react";
import shopbg from "../../../assets/images/shopbg.png";
import great from "../../../assets/svgs/Greater.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/svgs/AppLogo.svg";
import { useTranslation } from "react-i18next";
const ContactBg = () => {
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
          className="w-full h-full object-cover py-1"
        ></img>
      </div>
      <div className=" absolute left-1/2 transform -translate-x-1/2 top-[75px] text-center">
        <img
          src={logo}
          alt="applogo"
          className="w-[77px] h-[77px] 
          lg:ml-[30px]  md:mb-[-32px]
          md:ml-[19px]
          sm:ml-[14px] sm:mb-[-20px]
          xs:ml-[6px] xs:mb-[-20px]
          "
        ></img>
        <h2
          className="font-medium text-black-darkest 
        lg:text-[48px] md:text-[37px]
        sm:text-[35px] xs:text-[30px] 
        md:ml-[-10px] sm:ml-[-5px] xs:ml-[-7px] 
        "
        >
          {t("contact")}
        </h2>
        <div className=" absolute flex items-center justify-center ">
          <p
            className="font-medium 
            md:text-[16px] xs:text-[12px] text-black-darkest pr-[6.08px]"
            onClick={handleClick}
          >
            {t("home")}
          </p>
          <img src={great} alt="grt"></img>
          <p className="md:text-[16px] xs:text-[12px] text-black-darkest pl-[6.08px]">
            {t("contact")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBg;
