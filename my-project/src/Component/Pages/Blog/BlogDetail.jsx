import React from "react";
import blog1 from "../../../assets/images/Blog1.png";
import blog2 from "../../../assets/images/Blog2.png";
import blog3 from "../../../assets/images/Blog3.png";
import admin from "../../../assets/svgs/Admin.svg";
import cal from "../../../assets/svgs/Calander.svg";
import tag from "../../../assets/svgs/Tag.svg";
import search from "../../../assets/svgs/SearchB.svg";
import post1 from "../../../assets/images/post1.png";
import post2 from "../../../assets/images/post2.png";
import post3 from "../../../assets/images/post3.png";
import post4 from "../../../assets/images/post4.png";
import post5 from "../../../assets/images/post5.png";

const BlogDetail = () => {
  return (
    <div className="font-poppins">
      <div className="w-full md:h-[2710px]">
        <div className="md:flex">
          {/*left */}
          <div
            className="bg-white-light 
          xl:w-[820px] xl:h-[2490px] 
          lg:w-[600px] lg:h-[2490px]
          xl:ml-[97px] xl:mt-[106px] xl:mb-[114px]
          lg:ml-[17px] lg:mt-[100px] md:mt-[50px] sm:mt-[40px] xs:mt-[30px]
          "
          >
            {/*first div */}
            <div
              className="bg-white-light 
            xl:w-[820px] xl:h-[794px] 
            lg:w-[600px] lg:h-[700px]
            "
            >
              <div>
                <img
                  src={blog1}
                  alt="b1"
                  className="xl:w-[817px] xl:h-[500px]"
                />
                <div className="flex">
                  <div className="flex mt-[17px]">
                    <img src={admin} alt="ad" />
                    <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]">
                      Admin
                    </p>
                  </div>
                  <div className="flex mt-[17px] ml-[35px]">
                    <img src={cal} alt="cal" />
                    <p className="pl-[11px] text-black-light sm:text-[16px] xs:text-[12px]">
                      14 Oct 2022
                    </p>
                  </div>
                  <div className="flex mt-[17px] ml-[35px]">
                    <img src={tag} alt="tag" />
                    <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]">
                      Wood
                    </p>
                  </div>
                </div>
                <div>
                  <h2
                    className="pt-[15px] font-medium text-black-darkest 
                  lg:text-[30px] md:text-[27px]"
                  >
                    Going all-in with millennial design
                  </h2>
                </div>
                <div>
                  <p
                    className="text-black-light 
                  lg:text-[15px] md:text-[14px] pt-[12px] text-justify"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                </div>
                <div>
                  <div className="">
                    <button
                      className="border border-t-0 border-b-[3px] border-r-0 border-l-0 
                        border-w-[75px]
                    border-b-gray-comapreg drop-shadow-md
                        cursor-pointer text-black-darkest
                        xl:text-[16px] lg:text-[15px] xl:pt-[30px] lg:pt-[15px] md:pt-[14px]
                        "
                      type="submit"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*second div */}
            <div
              className="bg-white-light  
            xl:w-[820px] xl:h-[794px] 
            lg:w-[600px] lg:h-[700px] mt-[54px]
            "
            >
              <div>
                <img
                  src={blog3}
                  alt="b2"
                  className="xl:w-[817px] xl:h-[500px]"
                />
                <div className="flex">
                  <div className="flex mt-[17px]">
                    <img src={admin} alt="ad" />
                    <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]">
                      Admin
                    </p>
                  </div>
                  <div className="flex mt-[17px] ml-[35px]">
                    <img src={cal} alt="cal" />
                    <p className="pl-[11px] text-black-light sm:text-[16px] xs:text-[12px]">
                      14 Oct 2022
                    </p>
                  </div>
                  <div className="flex mt-[17px] ml-[35px]">
                    <img src={tag} alt="tag" />
                    <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]">
                      Handmade
                    </p>
                  </div>
                </div>
                <div>
                  <h2
                    className="pt-[15px] font-medium text-black-darkest 
                  lg:text-[30px] md:text-[27px]
                  "
                  >
                    Exploring new ways of decorating
                  </h2>
                </div>
                <div>
                  <p
                    className="text-black-light 
                  lg:text-[15px] md:text-[14px] pt-[12px] text-justify"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                </div>
                <div>
                  <div>
                    <button
                      className="border border-t-0 border-b-[3px] border-r-0 border-l-0 
                        border-w-[75px]
                    border-b-gray-comapreg drop-shadow-md
                        cursor-pointer text-black-darkest
                        xl:text-[16px] lg:text-[15px] xl:pt-[30px] lg:pt-[15px] md:pt-[14px]
                        "
                      type="submit"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*Third div */}
            <div
              className="bg-white-light 
            xl:w-[820px] xl:h-[794px] 
            lg:w-[600px] lg:h-[700px] mt-[54px]
            "
            >
              <div>
                <img
                  src={blog2}
                  alt="b3"
                  className="xl:w-[817px] xl:h-[500px]"
                />
                <div className="flex">
                  <div className="flex mt-[17px]">
                    <img src={admin} alt="ad" />
                    <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]   ">
                      Admin
                    </p>
                  </div>
                  <div className="flex mt-[17px] ml-[35px]">
                    <img src={cal} alt="cal" />
                    <p className="pl-[11px] text-black-light sm:text-[16px] xs:text-[12px]  ">
                      14 Oct 2022
                    </p>
                  </div>
                  <div className="flex mt-[17px] ml-[35px]">
                    <img src={tag} alt="tag" />
                    <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]   ">
                      Wood
                    </p>
                  </div>
                </div>
                <div>
                  <h2
                    className="pt-[15px] font-medium text-black-darkest 
                  lg:text-[30px] md:text-[27px]
                  "
                  >
                    Exploring new ways of decorating
                  </h2>
                </div>
                <div>
                  <p
                    className="text-black-light 
                  lg:text-[15px] md:text-[14px] pt-[12px] text-justify"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mus mauris vitae ultricies leo integer malesuada
                    nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi
                    blandit cursus risus at ultrices mi tempus imperdiet. Libero
                    enim sed faucibus turpis in. Cursus mattis molestie a
                    iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                    libero. Pellentesque elit ullamcorper dignissim cras
                    tincidunt. Pharetra et ultrices neque ornare aenean euismod
                    elementum.
                  </p>
                </div>
                <div>
                  <div>
                    <button
                      className="border border-t-0 border-b-[3px] border-r-0 border-l-0 
                        border-w-[75px]
                    border-b-gray-comapreg drop-shadow-md
                        cursor-pointer text-black-darkest
                        xl:text-[16px] lg:text-[15px] xl:pt-[30px] lg:pt-[15px] md:pt-[14px]
                        "
                      type="submit"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*right */}
          <div>
            {/*first */}
            <div
              className=" bg-white-light border border-black-border 
          xl:w-[393px] xl:h-[537px] xl:ml-[30px] mt-[84px]
          lg:w-[360px] lg:h-[537px] lg:ml-[10px]
          md:w-[350px] md:h-[537px] md:ml-[10px]
          sm:w-[393px] sm:h-[537px] sm:ml-[42px]
          xs:w-[310 px] xs:h-[537px] xs:mx-[2px]
          "
            >
              <div>
                <input
                  type="text"
                  className="bg-white-light border border-black-light rounded-md
                  xl:w-[311px] xl:h-[58px]
                  lg:w-[300px] lg:h-[50px]
                  md:w-[285px] md:h-[50px]
                  sm:w-[200px] sm:h-[45px]
                  xs:w-[200px] xs:h-[45px]
                  xl:mx-[41px] xl:mt-[22px]
                  lg:mx-[30px] lg:mt-[15px]
                  md:mx-[33px] md:mt-[16px]
                  sm:mx-[10px] sm:mt-[15px]
                  xs:mx-[10px] xs:mt-[15px]
                  "
                />
                <img
                  src={search}
                  alt="srch"
                  className="
                  xl:ml-[318px] xl:mt-[-40px]
                  lg:ml-[300px] lg:mt-[-36px]
                  md:ml-[280px] md:mt-[-35px]
                  sm:ml-[180px] sm:mt-[-34px]
                  xs:ml-[180px] xs:mt-[-34px]
                  "
                />
              </div>
              <div
                className="bg-white-light  
              lg:ml-[77px] lg:mr-[65px] lg:mt-[43px] lg:mb-[61px]
              md:mx-[50px] sm:mx-[10px] xs:mx-[14px]
              md:mt-[58px] md:mb-[50px]
              sm:mt-[45px] xs:mt-[40px]
              w-[251px] h-[353px]"
              >
                <h2 className="text-black-darkest font-medium text-[24px]">
                  Categories
                </h2>
                <div>
                  <div className="flex mt-[33px]">
                    <p className="text-black-light text-[16px]">Crafts</p>
                    <p className="text-black-light text-[16px] pl-[191px]">2</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Design</p>
                    <p className="text-black-light text-[16px] pl-[185px]">8</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Handmade</p>
                    <p className="text-black-light text-[16px] pl-[156px]">7</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Interior</p>
                    <p className="text-black-light text-[16px] pl-[183px]">1</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Wood</p>
                    <p className="text-black-light text-[16px] pl-[193px]">6</p>
                  </div>
                </div>
              </div>
            </div>

            {/*second */}
            <div
              className="bg-white-light flex-wrap border border-black-border 
           xl:w-[393px] xl:h-[650px] xl:ml-[30px]
           lg:w-[360px] lg:h-[650px] lg:ml-[10px]
           md:w-[350px] md:h-[650px] md:ml-[10px]
           sm:w-[393px] sm:h-[650px] sm:ml-[42px]
           xs:w-[310 px] xs:h-[650px] xs:mx-[2px]
           mt-[41px]"
            >
              <div className="bg-white-light    xl:w-[252px] h-[618px] xl:ml-[76px] xl:mr-[65px] my-[16px]">
                <h2 className="font-medium text-black-darkest text-[24px]">
                  Recent Posts
                </h2>
                <div>
                  <div className="flex mt-[26px]">
                    <img src={post1} alt="p1" />
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post2} alt="p2" />
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post3} alt="p3" />
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post4} alt="p4" />
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post5} alt="p5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
