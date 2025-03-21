import React from "react";

const Footer = () => {
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
                Funiro
              </h2>

              <p
                className="w-full 
              xl:w-[250px] lg:w-[170px] 
              sm:w-[150px] xs:w-[200px] 
              text-[16px] sm:text-[14px] 
              xs:text-[12px]
              text-black-light"
              >
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>

            <div>
              <p className="text-black-light text-[16px] xs:text-[13px] pb-[15px]">
                Links
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px] 
              xs:text-[12px] 
              font-medium lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
              >
                Home
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px]
               xs:text-[12px]
                font-medium
                 lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
              >
                Shop
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px]
               xs:text-[12px]
                font-medium
                 lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
              >
                About
              </p>
              <p
                className="text-black-darkest 
              text-[16px] sm:text-[14px]
               xs:text-[12px]
                font-medium
                 pb-[20px] xs:pb-[8px]"
              >
                Contact
              </p>
            </div>

            <div>
              <p
                className="text-black-light 
              text-[16px]
               xs:text-[13px]
                pb-[15px]"
              >
                Help
              </p>
              <p
                className="text-black-darkest 
              text-[16px]
               sm:text-[14px]
                xs:text-[12px] 
                font-medium 
                lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
              >
                Payment Options
              </p>
              <p
                className="text-black-darkest 
              text-[16px]
               sm:text-[14px]
                xs:text-[12px] 
                font-medium lg:pb-[20px] md:pb-[16px] xs:pb-[8px]"
              >
                Returns
              </p>

              <p
                className="text-black-darkest 
              text-[16px]
               sm:text-[14px]
                xs:text-[12px] 
                font-medium lg:pb-[20px] md:pb-[16px]"
              >
                Privacy Policies
              </p>
            </div>

            <div>
              <p
                className="text-black-light text-[16px] xs:text-[13px] 
            pb-[15px]
            "
              >
                Newsletter
              </p>

              <div className="flex">
                <div className="mr-[10px]">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
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
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[35px] flex flex-col items-center">
            <hr className="w-full" />
            <p className="md:text-[16px] xs:text-[12px] w-[239px] text-center">
              {" "}
              2023 Funiro. All rights reserved
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
