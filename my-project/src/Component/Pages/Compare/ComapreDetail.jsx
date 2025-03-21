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

        <div className="grid md:grid-cols-4 xs:grid-cols-3  ">
          <div
            className="
          xl:ml-[96px] lg:ml-[50px] md:ml-[30px] pt-[42px] border-r border-gray-300 pr-[30px]"
          >
            <h2
              className="font-medium 
            xl:text-[28px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-black-darkest"
            >
              General
            </h2>
            <p
              className="pt-[28px] 
            xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest"
            >
              Sales Package
            </p>
            <p
              className="pt-[34px] 
             xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest"
            >
              Model Number
            </p>
            <p
              className="pt-[34px] 
             xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest"
            >
              Secondary Material
            </p>
            <p
              className="pt-[34px] 
             xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest"
            >
              Configuration
            </p>
            <p
              className="pt-[34px] 
             xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest"
            >
              Upholstery Material
            </p>
            <p
              className="pt-[34px] 
             xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest"
            >
              Upholstery Color
            </p>
          </div>
          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="mt-[92px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
              <p className=" xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                1 sectional sofa
              </p>
              <p className="pt-[47px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                TFCBLIGRBL6SRHS
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                Solid Wood
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                L-shaped
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                Fabric + Cotton
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                Bright Grey & Lion
              </p>
            </div>
          </div>
          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="mt-[79px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px] ">
              <p className=" xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  xl:w-[226px] text-black-darkest">
                1 Three Seater, 2 Single Seater
              </p>
              <p className="pt-[35px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                DTUBLIGRBL568
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                Solid Wood
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                L-shaped
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                Fabric + Cotton
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]  text-black-darkest">
                Bright Grey & Lion
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 xs:grid-cols-3  ">
          <div
            className="
          xl:ml-[96px] lg:ml-[50px] md:ml-[30px] pt-[96px] border-r border-gray-300 pr-[30px]"
          >
            <h2
              className="font-medium 
            xl:text-[28px] lg:text-[24px] md:text-[22px]
             text-black-darkest"
            >
              Product{" "}
            </h2>
            <p
              className="pt-[28px] 
            xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]
             text-black-darkest"
            >
              Filling Material
            </p>
            <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Finish Type
            </p>
            <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Adjustable Headrest
            </p>
            <p className="pt-[34px] xl:w-[203px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Maximum Load Capacity
            </p>
            <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Origin of Manufacture
            </p>
          </div>
          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="mt-[159px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
              <p className="xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                Foam
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                Bright Grey & Lion
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                No
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                280 KG
              </p>
              <p className="pt-[59px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                India
              </p>
            </div>
          </div>

          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="mt-[159px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
              <p className="xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] w-[226px] text-black-darkest">
                Matte
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                Bright Grey & Lion
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                yes
              </p>
              <p className="pt-[34px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                300 KG
              </p>
              <p className="pt-[59px] xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                India
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 xs:grid-cols-3  ">
          <div className="xl:ml-[96px] lg:ml-[50px] md:ml-[30px] pt-[96px] border-r border-gray-300 pr-[30px]">
            <h2 className="font-medium xl:text-[28px] lg:text-[24px] md:text-[22px] text-black-darkest">
              Dimensions
            </h2>
            <p className="pt-[28px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Width
            </p>
            <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Height
            </p>
            <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Depth
            </p>
            <p className="pt-[34px] w-[203px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Weight
            </p>
            <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Seat Height
            </p>
            <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Leg Height
            </p>
          </div>
          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="mt-[159px]  xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
              <p className=" xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                265.32 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                76 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                167.76 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                45 KG
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                41.52 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                5.46 cm
              </p>
            </div>
          </div>

          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="mt-[159px]  xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
              <p className=" xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                265.32 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                76 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                167.76 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                65 KG
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                41.52 cm
              </p>
              <p className="pt-[34px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
                5.46 cm
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 xs:grid-cols-3  ">
          <div className="overflow-x-auto xl:ml-[96px] lg:ml-[50px] md:ml-[30px] pt-[96px] border-r border-gray-300 pr-[30px]">
            <h2 className="font-medium  xl:text-[28px] lg:text-[24px] md:text-[22px]  text-black-darkest">
              {" "}
              Warranty
            </h2>
            <p className="pt-[28px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px]   text-black-darkest">
              Warranty Summary
            </p>
            <p className="pt-[63px] w-[241px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Warranty Service Type
            </p>
            <p className="pt-[109px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Covered in Warranty
            </p>
            <p className="pt-[121px] xl:w-[175px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Not Covered in Warranty
            </p>
            <p className="pt-[159px]  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-black-darkest">
              Domestic Warranty
            </p>
          </div>

          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="overflow-x-auto mt-[163px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
              <p className=" xl:text-[20px] lg:text-[16px] md:text-[12px] xl:w-[226px] sm:text-[10px] text-black-darkest">
                1 Year Manufacturing Warranty
              </p>
              <p className="pt-[34px] xl:w-[241px] h-[125px]  xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-black-darkest">
                For Warranty Claims or Any Product Related Issues Please Email
                at operations@trevifurniture.com
              </p>
              <p className="pt-[42px] xl:w-[241px] h-[50px]  xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-black-darkest">
                Warranty Against Manufacturing Defect
              </p>
              <p className="pt-[145px] xl:w-[241px] h-[175px]  xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-black-darkest">
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </p>
              <p className="pt-[195px]  xl:text-[20px] lg:text-[16px] md:text-[12px] text-black-darkest">
                1 Year
              </p>
              <button
                className="bg-yellow-dark  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-white-light 
              xl:w-[215px] xl:h-[64px]
              lg:w-[200px] lg:h-[64px]
              md:w-[152px] md:h-[46px]
              mt-[53px] "
              >
                Add To Cart
              </button>
            </div>
          </div>

          <div className=" border-r border-gray-300 pr-[30px]">
            <div className="overflow-x-auto mt-[159px] xl:pl-[62px] lg:pl-[30px] md:pl-[20px]">
              <p className=" xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] xl:w-[226px] text-black-darkest">
                1.2 Year Manufacturing Warranty
              </p>
              <p className="pt-[36px] xl:w-[241px] h-[100px]  xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-black-darkest">
                For Warranty Claims or Any Product Related Issues Please Email
                at support@xyz.com
              </p>
              <p className="pt-[68px] xl:w-[241px] h-[100px]  xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-black-darkest">
                Warranty of the product is limited to manufacturing defects
                only.
              </p>
              <p className="pt-[121px] xl:w-[241px] h-[175px]  xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-black-darkest">
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </p>
              <p className="pt-[180px]  xl:text-[20px] lg:text-[16px] md:text-[12px] text-black-darkest">
                3 Months
              </p>
              <button
                className="bg-yellow-dark  xl:text-[20px] lg:text-[18px] md:text-[15px] sm:text-[12px] text-white-light 
               xl:w-[215px] xl:h-[64px]
              lg:w-[200px] lg:h-[64px] 
               md:w-[152px] md:h-[46px]
              mt-[53px] "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComapreDetail;
