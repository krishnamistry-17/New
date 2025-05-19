import React from "react";
import quality from "../../../assets/svgs/Quality.svg";
import warnty from "../../../assets/svgs/Warnty.svg";
import shipping from "../../../assets/svgs/Shipping.svg";
import support from "../../../assets/svgs/CustomerSup.svg";
import { useTranslation } from "react-i18next";

const CheckAd = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:mt-[150px] md:mt-[0px] xs:mt-[355px] w-full h-[270px] bg-cream-bg">
      <div
        className="
            md:px-[53px] md:py-[100px]
            sm:px-[20px] sm:py-[12px]
            xs:px-[15px] xs:py-[12px]
            "
      >
        <div className="flex flex-col md:flex-row">
          <div className="flex lg:mr-[55.33px] md:mr-[10px]">
            <img
              src={quality}
              alt="quality"
              className="
                        lg:w-[60px] lg:h-[60px] 
                        md:w-[50px] md:h-[50px]
                        sm:w-[35px] sm:h-[35px]
                        xs:w-[25px] xs:h-[25px]
                        lg:mr-[10px] "
            ></img>
            <div className="w-auto h-[70px] ">
              <h2
                className="font-semibold +
                            lg:text-[25px] md:text-[20px]
                            sm:text-[16px] xs:text-[14px]
                             text-black-bname"
              >
                {t("quality")}
              </h2>
              <p
                className="font-medium 
                            lg:text-[20px] md:text-[15px]
                            sm:text-[14px] xs:text-[12px]
                             text-gray-graypara"
              >
                {t("top")}
              </p>
            </div>
          </div>

          <div className="flex  lg:mr-[55.33px] md:mr-[10px]">
            <img
              src={warnty}
              alt="warnty"
              className="
                        lg:w-[60px] lg:h-[60px] 
                         md:w-[50px] md:h-[50px]
                          sm:w-[35px] sm:h-[35px]
                           xs:w-[25px] xs:h-[25px]
                        lg:mr-[10px]"
            ></img>
            <div className="w-auto h-[70px] ">
              <h2
                className="font-semibold
                             lg:text-[25px] md:text-[20px]
                             sm:text-[16px] xs:text-[14px]
                               text-black-bname"
              >
                {t("warnty")}
              </h2>
              <p
                className="font-medium 
                           lg:text-[20px] md:text-[15px]
                           sm:text-[14px] xs:text-[12px]
                            text-gray-graypara"
              >
                {t("year")}
              </p>
            </div>
          </div>

          <div className="flex  lg:mr-[55.33px] md:mr-[10px]">
            <img
              src={shipping}
              alt="shipping"
              className="
                        lg:w-[60px] lg:h-[60px]
                         md:w-[50px] md:h-[50px]
                          sm:w-[35px] sm:h-[35px]
                           xs:w-[25px] xs:h-[25px]
                        lg:mr-[10px]"
            ></img>
            <div className="w-auto h-[70px] ">
              <h2
                className="font-semibold 
                           lg:text-[25px] md:text-[20px]
                           sm:text-[16px] xs:text-[14px]
                            text-black-bname"
              >
                {t("shipping")}
              </h2>
              <p
                className="font-medium 
                            lg:text-[20px] md:text-[15px]
                            sm:text-[14px] xs:text-[12px]
                             text-gray-graypara"
              >
                {t("order")}
              </p>
            </div>
          </div>

          <div className="flex  lg:mr-[55.33px] md:mr-[10px]">
            <img
              src={support}
              alt="suprt"
              className="
                        lg:w-[60px] lg:h-[60px]
                         md:w-[50px] md:h-[50px]
                          sm:w-[35px] sm:h-[35px]
                           xs:w-[25px] xs:h-[25px]
                        lg:mr-[10px]"
            ></img>
            <div className="w-auto h-[70px] ">
              <h2
                className="font-semibold 
                           lg:text-[25px] md:text-[20px]
                           sm:text-[16px] xs:text-[14px]
                            text-black-bname"
              >
                {t("support")}
              </h2>
              <p
                className="font-medium 
                           lg:text-[20px] md:text-[15px]
                           sm:text-[14px] xs:text-[12px]
                            text-gray-graypara"
              >
                {t("dsupport")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAd;
