import React, { useEffect, useState } from "react";
import { CarouselCustomArrows } from "../Home/Slide";
import vectore from "../../../assets/svgs/Line.svg";
import arrow from "../../../assets/svgs/Arrow.svg";
import { t } from "i18next";

const Slider = () => {
  const [posts, setPosts] = useState([]);

  const data = [
    {
      heading: " 50+ Beautiful rooms inspiration",
      subheading:
        " Our designer already made a lot of beautiful prototype of rooms that inspire you",
    },
    {
      numb: "01",
      head: "Bed Room",
      desc: "Inner Peace",
    },
  ];

  const loadData = () => {
    setPosts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="w-full h-[670px] mt-[69px] bg-yellow-light">
        <div
          className="flex flex-col
         justify-between items-center
         md:flex-row 
         px-8 py-8 
         md:px-12 md:py-[223px]"
        >
          <div className="md:w-[50%] w-full mb-8 md:mb-0">
            {posts.map((post, index) => (
              <div key={index}>
                <h2
                  className="font-bold 
            text-2xl sm:text-3xl
            md:text-4xl lg:text-5xl"
                >
                  {t("slidehead")}
                </h2>
                <p
                  className="text-gray-lightpara 
            text-sm sm:text-base 
            md:text-lg lg:text-xl"
                >
                  {t("slidesubhead")}
                </p>
              </div>
            ))}
            <button
              className="mt-[25px] bg-yellow-dark
              w-[176px] h-[48px]
              text-white-light 
              font-semibold text-[16px]"
            >
              {t("slidebtn")}
            </button>
          </div>

          <div className="md:w-[45%] w-full relative">
            <div
              className="absolute
             md:top-[-265px] 
             right-[5%] sm:right-[10%] md:right-[5%]"
            >
              <CarouselCustomArrows />
            </div>

            {posts.map((post, index) => (
              <div key={index}>
                <div className="md:visible xs:invisible">
                  <div
                    className="w-[217px] h-[130px]
              bg-white-light opacity-70 absolute 
                top-7 sm:top-[160px] lg:top-[170px]
                right-[15%] sm:right-[10%] md:right-[26%] lg:right-[59%] "
                  >
                    <p
                      className=" text-gray-lightpara text-[16px] font-medium 
                pt-[32px] pr-[43px] pb-[74px] pl-[32px]
                "
                    >
                      {post.numb}{" "}
                      <img src={vectore} alt="arrow" className="mt-0" />{" "}
                      {t("smallhead")}
                    </p>
                    <h2 className="text-[28px] font-semibold mt-[-70px] ml-[32px]">
                      {t("smalldesc")}
                    </h2>
                  </div>

                  <div
                    className="bg-yellow-dark
                w-[48px] h-[48px]
                absolute
                top-[97px] sm:top-[85px] md:top-[239px] lg:top-[250px]
                right-[10%] sm:right-[7%] md:right-[10%] lg:right-[52%]"
                  >
                    <img
                      className="pt-[12px] pr-[12px] pb-[12px] pl-[12px]"
                      src={arrow}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
