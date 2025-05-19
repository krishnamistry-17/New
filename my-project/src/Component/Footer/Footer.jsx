import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const handleShop = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };
  const handleAbout = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };
  const handleContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  const handlePayment = () => {
    navigate("/checkout");
    window.scrollTo(0, 600);
  };
  const handleSub = () => {
    navigate("/signup");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="mt-[30px]">
        <div className="w-full h-auto ">
          <div
            className="h-auto 
          mt-[84px] ml-[20px] xl:pl-[100px] mr-[20px] mb-[2px]
          grid xs:grid-cols-1  md:grid-cols-3 xl:grid-cols-4
          gap-5 md:gap-4 px-4 sm:px-6 lg:px-8"
          >
            <div>
              <h2
                className="font-bold 
              text-[24px] sm:text-[20px] 
              xs:text-[16px]
               text-black-darkest pb-[20px]"
              >
                {t("footer")}
              </h2>

              <p
                className="w-full 
              xl:w-[250px] lg:w-[170px] 
              sm:w-[150px] xs:w-[200px] 
              text-[16px] sm:text-[14px] 
              xs:text-[12px]
              text-black-light"
              >
                {t("add")}
              </p>
            </div>

            <div>
              <p className="text-black-light text-[16px] xs:text-[13px] pb-[15px]">
                {t("link")}
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px] 
              xs:text-[12px] 
              font-medium lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
                onClick={handleHome}
              >
                {t("home")}
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px]
               xs:text-[12px]
                font-medium
                 lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
                onClick={handleShop}
              >
                {t("shop")}
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px]
               xs:text-[12px]
                font-medium
                 lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
                onClick={handleAbout}
              >
                {t("about")}
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px]
               xs:text-[12px]
                font-medium
                 pb-[20px] xs:pb-[8px]"
                onClick={handleContact}
              >
                {t("contact")}
              </p>
            </div>

            <div>
              <p
                className="text-black-light 
              text-[16px]
               xs:text-[13px]
                pb-[15px]"
              >
                {t("help")}
              </p>
              <p
                className="text-black-darkest 
              text-[16px]
               sm:text-[14px]
                xs:text-[12px] 
                font-medium 
                lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
                onClick={handlePayment}
              >
                {t("paymentoption")}
              </p>
              <p
                className="text-black-darkest 
              text-[16px]
               sm:text-[14px]
                xs:text-[12px] 
                font-medium lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
              >
                {t("returns")}
              </p>

              <p
                className="text-black-darkest 
              text-[16px]
               sm:text-[14px]
                xs:text-[12px] 
                font-medium lg:pb-[20px] md:pb-[16px]"
              >
                {t("privacy")}
              </p>
            </div>

            <div>
              <p
                className="text-black-light text-[16px] xs:text-[13px] 
            pb-[15px]
            "
              >
                {t("newsletter")}
              </p>

              <div className="flex">
                <div className="mr-[10px]">
                  <input
                    type="text"
                    placeholder={t("placeholder")}
                    className="border-t-0 border-r-0 border-l-0 outline-none
                border-b-[3px] md:text-[14px] xs:text-[12px] text-black-light drop-shadow-sm"
                  ></input>
                </div>

                <div>
                  <button
                    className="border border-t-0 border-b-[3px] border-r-0 border-l-0 border-w-[75px]
                mt-7  border-b-black-darkest drop-shadow-md
                  cursor-pointer md:text-[14px] xs:text-[12px]
                  xs:mt-[-2.25px]"
                    type="submit"
                    onClick={handleSub}
                  >
                    {t("sub")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[35px] flex flex-col items-center">
            <hr className="w-full" />
            <p className="md:text-[16px] xs:text-[12px] w-[239px] text-center">
              {" "}
              {t("foot")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
//https://github.com/krishnamistry-17/E-commerce.git
//mistrykrishna17103@gmail.com
//krishna7271
// echo "# E-commerce" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/krishnamistry-17/E-commerce.git
// git push -u origin main
// git remote add origin https://github.com/krishnamistry-17/E-commerce.git
// git branch -M main
// git push -u origin main

//End of day
//1. git add .
//2. git commit -m "Describe the changes you've made"
//3. git push origin main
