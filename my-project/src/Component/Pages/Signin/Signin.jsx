import React from "react";

import Auth from "../Auth/Auth";

const Signin = () => {
  return (
    <div>
      <div className="bg-cream-bglight   md:w-[600px] md:h-[500px] md:ml-[150px] md:mr-[20px] md:mb-[20px]">
        <div className="text-[30px] font-medium text-black-darkest pl-[70px] ">
          Sign in
        </div>
        <div>
          <p
            className=" pt-[36px] font-medium text-black-darkest 
                        sm:pl-[75px] 
                        lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
          >
            Email
          </p>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="bg-white-light border border-black-light rounded-md
              sm:pl-[25px] 
                            xl:w-[300px] xl:h-[75px] 
                            lg:w-[350px] lg:h-[70px]
                            md:w-[250px] md:h-[50px]
                            sm:w-[350px] sm:h-[50px]
                            xs:w-[93%] xs:h-[43px]
                            xl:ml-[76px] xl:mr-[79px] xl:mt-[22px] 
                            lg:ml-[70px] lg:mt-[20px]
                            md:ml-[70px] md:mt-[18px]
                            sm:ml-[70px] sm:mt-[17px]
                            xs:mx-[10px] xs:mt-[16px]
                            "
          />
        </div>

        <div>
          <p
            className="text-black-darkest font-medium 
                          lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] 
                          sm:pl-[75px] xs:pl-[30px] pt-[36px]"
          >
            Password
          </p>
          <input
            type="number"
            className=" border border-black-light rounded-md bg-white-light text-black-light
                            xl:w-[300px] xl:h-[75px]
                            lg:w-[350px] lg:h-[70px]
                            md:w-[250px] md:h-[42px]
                             sm:w-[350px] sm:h-[50px]
                            xs:w-[93%] xs:h-[43px]
                            xl:ml-[76px] xl:mt-[22px] 
                            lg:ml-[70px] lg:mt-[20px]
                            md:ml-[70px] md:mt-[18px]
                            sm:ml-[70px] sm:mt-[17px]
                            xs:mx-[10px] xs:mt-[16px]
  
                            lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] pl-[31px] py-[25px]"
            placeholder="123.."
          />
        </div>

        <div className="ml-[80px] mt-[20px]">
          <Auth />
          <p className="text-black-darkest text-[15px] pl-[75px]">Or</p>
          <button className="bg-yellow-yelbg border border-black-border mt-[10px] p-[5px]">
            Continue with facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
