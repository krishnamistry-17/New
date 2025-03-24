import React from "react";
import sofa1 from "../../../assets/images/sofa1.png";
import sofa2 from "../../../assets/images/sofa2.png";
import linep from "../../../assets/svgs/LineP.svg";
import star from "../../../assets/svgs/Star.svg";
import starh from "../../../assets/svgs/StarH.svg";
import Dropdown from "./Dropdown";

const ComapreDetail = () => {
  return (
    <div className="font-poppins">
      <div className="w-full h-[2800px] bg-white-light">
        {/*Compare Image */}
        <div className="grid  md:grid-cols-4 sm:grid-cols-2">
          {/*1 */}
          <div
            className="
                    xl:ml-[96px] 
                    lg:ml-[2px]
                    mt-[55px]"
          >
            <h2
              className="font-medium 
                        xl:text-[28px]
                         lg:text-[18px] 
                        md:text-[18px]
                        w-[223px] text-black-darkest"
            >
              Go to Product page for more Products
            </h2>

            <div>
              <button
                className="border border-t-0 border-b-[3px] border-r-0 border-l-0 
                        border-w-[75px]
                    border-b-gray-comapreg drop-shadow-md
                        cursor-pointer text-gray-comapreg
                        md:text-[20px] xs:text-[12px] pt-[21px]
                        "
                type="submit"
              >
                View More
              </button>
            </div>
          </div>
          {/*2 */}
          <div
            className="
            xl:ml-[45px]
            mt-[34px]"
          >
            <div
              className="
            xl:w-[280px] xl:h-[177px] bg-cream-bglight rounded-xl"
            >
              <img
                src={sofa1}
                alt="s1"
                className="pt-[20px] pr-[22px] pb-[15px] pl-[19px]"
              ></img>
            </div>
            <h2
              className="pt-[18px] font-medium 
            xl:text-[24px] lg:text-[23px] md:text-[18px] text-black-darkest"
            >
              Asgaard Sofa
            </h2>
            <h2
              className="font-medium 
            xl:text-[18px] lg:text-[17px] md:text-[14px] pt-[6px] text-black-darkest"
            >
              Rs. 250,000.00
            </h2>
            <div className="flex pt-[7px]">
              <div>
                <h2
                  className="font-medium 
                lg:text-[18px] md:text-[15px] text-black-darkest"
                >
                  4.7
                </h2>
              </div>
              <div className="flex pl-[4px]">
                <img
                  className="
                  lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px]
                  m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className=" lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className=" lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className="lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className="lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={starh}
                  alt="str"
                />
                <img
                  className="
                  lg:ml-[6px] md:ml-[1px]  mt-[-3px] border-black-light"
                  src={linep}
                  alt="lin"
                />
                <p
                  className="text-black-light 
                            lg:text-[13px] md:text-[11px] sm:text-[12px] pl-[5px] pt-[2px] "
                >
                  204 Review
                </p>
              </div>
            </div>
          </div>
          {/*3 */}
          <div
            className="
          xl:ml-[50px] lg:ml-[40px] md:ml-[6px] mt-[34px]"
          >
            <div
              className="
            xl:w-[280px] xl:h-[177px]
            lg:w-[230px] lg:h-[162px]
            bg-cream-bglight rounded-xl"
            >
              <img
                src={sofa2}
                alt="s2"
                className="pt-[0px] pr-[22px] pb-[15px] pl-[19px]"
              ></img>
            </div>
            <h2
              className="pt-[18px] font-medium 
            xl:text-[24px] lg:text-[23px] md:text-[18px]
            text-black-darkest"
            >
              Outdoor Sofa Set
            </h2>
            <h2
              className="font-medium 
             xl:text-[18px] lg:text-[17px] md:text-[14px] 
            pt-[6px] text-black-darkest"
            >
              Rs. 224,000.00
            </h2>
            <div className="flex pt-[7px]">
              <div>
                <h2
                  className="font-medium 
               lg:text-[18px] md:text-[15px]
                 text-black-darkest"
                >
                  4.2
                </h2>
              </div>
              <div className="flex pl-[4px]">
                <img
                  className="lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className="lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className="lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className="lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={star}
                  alt="str"
                />
                <img
                  className="lg:w-[18px] lg:h-[18px]
                  sm:w-[15px] sm:h-[15px] m-[2px]"
                  src={starh}
                  alt="str"
                />
                <img
                  className="
                  lg:ml-[6px] md:ml-[1px] mt-[-3px] border-black-light"
                  src={linep}
                  alt="lin"
                />
                <p
                  className="text-black-light 
                            lg:text-[13px] md:text-[11px] sm:text-[12px] pl-[5px] pt-[2px] "
                >
                  145 Review
                </p>
              </div>
            </div>
          </div>
          {/*4 */}
          <div
            className="
          xl:ml-[9px]
          lg:ml-[51px]
          md:ml-[25px]
          sm:ml-[20px]
          sm:mt-[83px] xs:mt-[30px]"
          >
            <h2
              className="font-semibold 
            xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-black-darkest"
            >
              Add A Product
            </h2>
            <div className="pt-[14px]">
              <Dropdown />
            </div>
          </div>
        </div>
        {/*Compare detail - use overflow-x-auto*/}
        <hr className="xl:ml-[96px] mt-[64px]" />
        <div className="overflow-x-auto w-full">
          <div className="flex space-x-4">
            <div
              className="xl:ml-[96px] lg:ml-[50px] md:ml-[30px]
             pt-[42px] border-r border-gray-300 xl:pr-[70px] lg:pr-[78px] md:pr-[74px] sm:pr-[132px] xs:pr-[50px]"
            >
              <h2 className="font-medium xl:text-[28px] lg:text-[24px] md:text-[22px] sm:text-[20px] xs:text-[16px] text-black-darkest">
                General
              </h2>
              <p className="pt-[28px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Sales Package
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Model Number
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Secondary Material
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Configuration
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Upholstery Material
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Upholstery Color
              </p>
            </div>

            <div className="border-r border-gray-300 xl:pr-[82px] lg:pr-[136px] md:pr-[87px] xs:pr-[64px]">
              <div className="mt-[92px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p className="xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  1 sectional sofa
                </p>
                <p className="pt-[47px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  TFCBLIGRBL6SRHS
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  Solid Wood
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  L-shaped
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  Fabric + Cotton
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  Bright Grey & Lion
                </p>
              </div>
            </div>

            <div className="border-r border-gray-300 xl:pr-[45px] lg:pr-[57px] md:pr-[22px] xs:pr-[28px]">
              <div className="mt-[79px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p className="xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] xl:w-[226px] text-black-darkest">
                  1 Three Seater, 2 Single Seater
                </p>
                <p className="pt-[35px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  DTUBLIGRBL568
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  Solid Wood
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  L-shaped
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  Fabric + Cotton
                </p>
                <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  Bright Grey & Lion
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div
              className=" 
            xl:ml-[96px] lg:ml-[50px] md:ml-[30px] pt-[96px] border-r border-gray-300 
            xl:pr-[39px] lg:pr-[35px] md:pr-[38px] sm:pr-[71px] xs:pr-[54px]"
            >
              <h2
                className="font-medium 
              xl:text-[28px] lg:text-[24px] 
              md:text-[22px] sm:text-[20px]
              xs:text-[16px]
              text-black-darkest"
              >
                Product{" "}
              </h2>
              <p
                className="pt-[28px] 
              
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
              text-black-darkest"
              >
                Filling Material
              </p>
              <p
                className="pt-[34px] 
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Finish Type
              </p>
              <p
                className="pt-[34px] 
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Adjustable Headrest
              </p>
              <p
                className="pt-[34px] xl:w-[203px] 
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Maximum Load Capacity
              </p>
              <p
                className="pt-[34px] 
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Origin of Manufacture
              </p>
            </div>
            <div className=" border-r border-gray-300 xl:pr-[109px] lg:pr-[160px] md:pr-[107px] sm:pr-[46px] xs:pr-[147px]">
              <div className="  mt-[159px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p
                  className="
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  Foam
                </p>
                <p
                  className="pt-[34px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  Bright Grey & Lion
                </p>
                <p
                  className="pt-[34px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  No
                </p>
                <p
                  className="pt-[34px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  280 KG
                </p>
                <p
                  className="pt-[59px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  India
                </p>
              </div>
            </div>

            <div className=" border-r border-gray-300 xl:pr-[45px] lg:pr-[160px] md:pr-[109px] xs:pr-[93px]">
              <div className="  mt-[159px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p
                  className="xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                xl:w-[226px] text-black-darkest"
                >
                  Matte
                </p>
                <p
                  className="pt-[34px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  Bright Grey & Lion
                </p>
                <p
                  className="pt-[34px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  yes
                </p>
                <p
                  className="pt-[34px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  300 KG
                </p>
                <p
                  className="pt-[59px] 
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div
              className="xl:ml-[96px] lg:ml-[50px] md:ml-[30px] pt-[96px] border-r border-gray-300 
            xl:pr-[39px] lg:pr-[108px] md:pr-[88px] sm:pr-[99px] xs:pr-[37px]"
            >
              <h2
                className="font-medium 
              xl:text-[28px] lg:text-[24px] 
              md:text-[22px]  sm:text-[20px]
              xs:text-[16px]
                text-black-darkest"
              >
                Dimensions
              </h2>
              <p
                className="pt-[28px]  
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Width
              </p>
              <p
                className="pt-[34px]  
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Height
              </p>
              <p
                className="pt-[34px]  
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Depth
              </p>
              <p
                className="pt-[34px] xl:w-[203px]  
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Weight
              </p>
              <p
                className="pt-[34px]  
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Seat Height
              </p>
              <p
                className="pt-[34px]  
              xl:text-[20px] lg:text-[18px]
              md:text-[15px] sm:text-[12px]
              xs:text-[12px]
              text-black-darkest"
              >
                Leg Height
              </p>
            </div>
            <div className=" border-r border-gray-300 xl:pr-[179px] lg:pr-[223px] md:pr-[160px] sm:pr-[87px] xs:pr-[142px]">
              <div className="  mt-[159px]  xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p className=" xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  265.32 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  76 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  167.76 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  45 KG
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  41.52 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  5.46 cm
                </p>
              </div>
            </div>

            <div className=" border-r border-gray-300 xl:pr-[177px] lg:pr-[222px] md:pr-[161px] xs:pr-[87px]">
              <div className="   mt-[159px]  xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p
                  className=" xl:text-[20px] lg:text-[18px] 
                md:text-[15px] sm:text-[12px]
                xs:text-[12px]
                text-black-darkest"
                >
                  265.32 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px] 
                text-black-darkest"
                >
                  76 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px] 
                text-black-darkest"
                >
                  167.76 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px] 
                text-black-darkest"
                >
                  65 KG
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px] 
                text-black-darkest"
                >
                  41.52 cm
                </p>
                <p
                  className="pt-[34px]  
                xl:text-[20px] lg:text-[18px]
                md:text-[15px] sm:text-[12px]
                xs:text-[12px] 
                text-black-darkest"
                >
                  5.46 cm
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div
              className="xl:ml-[96px] 
            lg:ml-[50px] md:ml-[30px]
             pt-[96px] border-r border-gray-300 
            xl:pr-[1px] lg:pr-[137px] md:pr-[115px] sm:pr-[123px] xs:pr-[57px]"
            >
              <h2
                className="font-medium 
              xl:text-[28px] lg:text-[24px]
               md:text-[22px] sm:text-[20px] 
               xs:text-[16px] text-black-darkest"
              >
                Warranty
              </h2>
              <p className="pt-[28px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Warranty Summary
              </p>
              <p className="xl:pt-[63px] lg:pt-[20px] md:pt-[30px] sm:pt-[39px] xs:pt-[46px] xl:w-[241px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Warranty Service Type
              </p>
              <p className="xl:pt-[109px] lg:pt-[38px] md:pt-[73px] sm:pt-[91px] xs:pt-[70px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Covered in Warranty
              </p>
              <p className="xl:pt-[121px] lg:pt-[56px] md:pt-[50px] sm:pt-[55px] xs:pt-[55px] xl:w-[175px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Not Covered in Warranty
              </p>
              <p className="xl:pt-[159px] lg:pt-[87px]  md:pt-[74px] sm:pt-[115px] xs:pt-[145px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                Domestic Warranty
              </p>
            </div>

            <div className="border-r border-gray-300 pr-[30px]">
              <div className="mt-[163px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p className="xl:w-[226px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[11px] text-black-darkest">
                  1 Year Manufacturing Warranty
                </p>
                <p className="pt-[34px] xl:w-[241px] h-[125px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[11px] text-black-darkest">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at operations@trevifurniture.com
                </p>
                <p className="sm:pt-[42px] xs:pt-[31px] xl:w-[241px] h-[50px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[11px] text-black-darkest">
                  Warranty Against Manufacturing Defect
                </p>
                <p className="xl:pt-[145px] lg:pt-[100px] sm:pt-[77px] xs:pt-[72px]  md:pt-[80px] xl:w-[241px] xl:h-[175px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[11px] xs:text-[11px] text-black-darkest">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </p>
                <p className="xl:pt-[195px] lg:pt-[55px] md:pt-[45px] sm:pt-[52px] xs:pt-[104px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[13px] xs:text-[12px] text-black-darkest">
                  1 Year
                </p>
                <button
                  className="bg-yellow-dark 
                xl:text-[20px] lg:text-[18px] 
                md:text-[15px] sm:text-[12px] 
                xs:text-[12px] text-white-light 
                xl:w-[215px] xl:h-[64px] 
                lg:w-[200px] lg:h-[64px] 
                md:w-[152px] md:h-[46px] 
                sm:w-[140px] sm:h-[40px] 
                xs:W-[81px] xs:h-[40px] 
                md:mt-[70px] sm:mt-[108px] xs:mt-[50px]
                md:mb-[5px] xs:mb-[25px]
                "
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="border-r border-gray-300 pr-[30px]">
              <div className="mt-[159px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
                <p className="xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] xs:text-[12px] xl:w-[226px] text-black-darkest">
                  1.2 Year Manufacturing Warranty
                </p>
                <p className="sm:pt-[36px] xs:pt-[14px] xl:w-[241px] xl:h-[100px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at support@xyz.com
                </p>
                <p className="sm:pt-[68px] xs:pt-[10px] xl:w-[241px] xl:h-[100px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  Warranty of the product is limited to manufacturing defects
                  only.
                </p>
                <p className="xl:pt-[121px] lg:pt-[52px] md:pt-[62px] sm:pt-[18px] xs:pt-[21px] xl:w-[241px] xl:h-[175px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] xs:text-[12px] text-black-darkest">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </p>
                <p className="xl:pt-[195px] lg:pt-[57px] md:pt-[45px] sm:pt-[34px] xs:pt-[27px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[13px] xs:text-[12px] text-black-darkest">
                  3 Months
                </p>
                <button
                  className="bg-yellow-dark 
                xl:text-[20px] lg:text-[18px] 
                md:text-[15px] sm:text-[12px] 
                xs:text-[12px] text-white-light 
                xl:w-[215px] xl:h-[64px] 
                lg:w-[200px] lg:h-[64px] 
                md:w-[152px] md:h-[46px] 
                sm:w-[140px] sm:h-[40px] 
                xs:W-[81px] xs:h-[40px] 
                xl:mt-[53px] lg:mt-[70px] md:mt-[75px] sm:mt-[102px] xs:mt-[50px]
                md:mb-[5px] xs:mb-[25px]
                "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComapreDetail;
