import React from "react";
import arrow from "../../../assets/svgs/Down.svg";
import dark from "../../../assets/svgs/DarkEli.svg";
import light from "../../../assets/svgs/LightEli.svg";
const CheckOutDetails = () => {
  return (
    <div className="bg-white-light w-full h-[1829px] font-poppins">
      <div
        className="bg-white-light w-full h-[1714px] 
      xl:pl-[100px] xl:pr-[98px] xl:pt-[63px] xl:pb-[52px]
      "
      >
        <div className="md:flex">
          {/*left */}
          <div className="bg-white-light max-w-[608px] h-[1714px] md:mr-[26px]">
            <div>
              <h2
                className="font-poppins font-semibold text-black-darkest 
            xl:pl-[74px] xl:pt-[35px] xl:pr-[289px]
            lg:pl-[74px] lg:pt-[30px]
            md:pl-[74px] md:pt-[29px]
            sm:pl-[70px] sm:pt-[20px]
            xs:pl-[30px] xs:pt-[20px]
            xl:text-[36px] lg:text-[32px] md:text-[30px] sm:text-[25px] xs:text-[20px]
            "
              >
                Billing details
              </h2>
            </div>

            <div className="sm:flex">
              {/*first */}
              <div className="xl:mr-[30px] lg:mr-[20px] md:mr-[10px] sm:mr-[23px] xs:mr-[20px]">
                <p
                  className="font-medium text-black-darkest 
                lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]
                sm:pl-[75px] xs:pl-[30px] pt-[36px]"
                >
                  First Name
                </p>
                <input
                  type="text"
                  className=" bg-white-light border border-black-light rounded-lg 
                  xl:w-[211px] xl:h-[75px] 
                  lg:w-[162px] lg:h-[70px]
                  md:w-[120px] md:h-[42px]
                  sm:w-[160px] sm:h-[30px]
                  xs:w-[100%] xs:h-[35px]
                  xl:ml-[76px] xl:mt-[22px]
                  lg:ml-[70px] lg:mt-[20px]
                  md:ml-[70px] md:mt-[18px]
                  sm:ml-[70px] sm:mt-[17px]
                  xs:mx-[10px] xs:mt-[16px]
                  "
                />
              </div>
              {/*last */}
              <div>
                <p
                  className="font-medium text-black-darkest 
                lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] pt-[36px] sm:pl-[0px] xs:pl-[30px]"
                >
                  Last Name
                </p>
                <input
                  type="text"
                  className=" bg-white-light border border-black-light rounded-lg 
                  xl:w-[211px] xl:h-[75px] 
                  lg:w-[162px] lg:h-[70px]
                  md:w-[120px] md:h-[42px]
                  sm:w-full sm:h-[30px]
                  xs:w-[93%] xs:h-[35px]
                  xl:mt-[22px] lg:mt-[20px] 
                  md:mt-[18px] sm:mt-[17px] xs:mt-[16px] xs:mx-[10px]
                  "
                />
              </div>
            </div>

            <div>
              <p
                className=" pt-[36px] font-medium text-black-darkest 
                sm:pl-[75px] xs:pl-[30px]
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
              >
                Company Name (Optional)
              </p>
              <input
                type="text"
                className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] 
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
                Country / Region
              </p>
              <input
                type="text"
                className=" border border-black-light rounded-md bg-white-light text-black-light
                xl:w-[453px] xl:h-[75px]
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
                placeholder="Sri Lanka"
              />
              <img
                src={arrow}
                alt="da"
                className="
                xl:ml-[450px] xl:mt-[-45px]
                lg:ml-[350px] lg:mt-[-45px]
                md:ml-[270px] md:mt-[-36px]
                sm:ml-[365px] sm:mt-[-35px]
                xs:ml-[286px] xs:mt-[-34px]
                "
              />
            </div>

            <div>
              <p
                className="sm:pl-[75px] xs:pl-[30px] pt-[60px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
              >
                Street address
              </p>
              <input
                type="text"
                className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] 
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
                className="sm:pl-[75px] xs:pl-[30px] pt-[36px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
              >
                Town / City
              </p>
              <input
                type="text"
                className="max-w-full bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] 
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
              lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] sm:pl-[75px] xs:pl-[30px] pt-[36px]"
              >
                Province
              </p>
              <input
                type="text"
                className=" border border-black-light rounded-md bg-white-light text-black-light
                xl:w-[453px] xl:h-[75px]
                lg:w-[350px] lg:h-[70px]
                md:w-[250px] md:h-[42px]
                 sm:w-[350px] sm:h-[50px]
                xs:w-[93%] xs:h-[43px]
                xl:ml-[76px] xl:mt-[22px] 
                lg:ml-[70px] lg:mt-[20px]
                md:ml-[70px] md:mt-[18px]
                 sm:ml-[70px] sm:mt-[17px]
                xs:mx-[10px] xs:mt-[16px]
                xl:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] pl-[31px] py-[25px]"
                placeholder="Western Province"
              />
              <img
                src={arrow}
                alt="da"
                className="
                xl:ml-[450px] xl:mt-[-45px]
                lg:ml-[350px] lg:mt-[-45px]
                md:ml-[270px] md:mt-[-36px]
                sm:ml-[365px] sm:mt-[-35px]
                xs:ml-[285px] xs:mt-[-34px] 
                "
              />
            </div>

            <div>
              <p
                className="sm:pl-[75px] xs:pl-[30px] pt-[60px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
              >
                ZIP code
              </p>
              <input
                type="number"
                className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] 
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
                className="sm:pl-[75px] xs:pl-[30px] pt-[36px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
              >
                Phone
              </p>
              <input
                type="number"
                className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] 
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
                className="sm:pl-[75px] xs:pl-[30px] pt-[36px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
              >
                Email address
              </p>
              <input
                type="email"
                className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] 
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
              <input
                type="text"
                className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] 
                lg:w-[350px] lg:h-[70px]
                 md:w-[250px] md:h-[50px]
                  sm:w-[350px] sm:h-[50px]
                xs:w-[93%] xs:h-[43px]
                xl:ml-[76px] xl:mr-[79px] xl:mt-[66px] 
                lg:ml-[70px] lg:mt-[35px]
                md:ml-[70px] md:mt-[25px]
                sm:ml-[70px] sm:mt-[22px]
                xs:mx-[10px] xs:mt-[20px]
                pl-[29px] py-[25px]
                "
                placeholder="Additional information"
              />
            </div>
          </div>

          {/*right */}
          <div
            className="bg-white-light 
          lg:w-[608px] h-[789px] font-poppins 
          md:mt-[63px] sm:mt-[-436px] xs:mt-[-413px]"
          >
            <div
              className="bg-white-light lg:w-[533px] h-[616px] 
            md:px-[38px] md:py-[87px]
            sm:px-[70px] sm:py-[30px]
            xs:px-[30px] xs:py-[20px]
            "
            >
              <div className="flex">
                <div>
                  <h2
                    className="text-black-darkest font-medium 
                  lg:text-[24px] md:text-[22px] 
                  sm:text-[20px] xs:text-[18px]
                  "
                  >
                    Product
                  </h2>
                </div>
                <div>
                  <h2
                    className="text-black-darkest font-medium 
                  lg:text-[24px] md:text-[22px] 
                   sm:text-[20px] xs:text-[18px]
                  lg:pl-[285px] md:pl-[145px] 
                  sm:pl-[130px] xs:pl-[100px]
                  lg:pr-[37px]"
                  >
                    Subtotal
                  </h2>
                </div>
              </div>
              <div className="flex">
                <div className="flex md:pt-[14px] sm:pt-[13px] xs:pt-[12px]">
                  <p
                    className="text-black-light 
                  md:text-[16px] sm:text-[15px] xs:text-[14px] "
                  >
                    Asgaard sofa
                  </p>
                  <p
                    className="pl-[9px] pt-[1px] font-medium text-black-darkest 
                  md:text-[15px] sm:text-[14px] xs:text-[13px]"
                  >
                    X
                  </p>
                  <p
                    className="pl-[10px] pt-[1px] font-medium text-black-darkest 
                  md:text-[16px] sm:text-[15px] xs:text-[14px]"
                  >
                    1
                  </p>
                </div>
                <div className="">
                  <p
                    className="text-black-darkest font-light 
                    md:text-[16px] sm:text-[15px] xs:text-[14px]
                  lg:pl-[217px] lg:pt-[14px] 
                  md:pl-[85px] md:pt-[14px]
                  sm:pl-[70px] sm:pt-[13px]
                  xs:pl-[42px] xs:pt-[12px]
                  "
                  >
                    Rs. 250,000.00
                  </p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <p
                    className="
                  lg:pt-[22px] md:pt-[20px]
                  sm:pt-[13px] xs:pt-[13px]
                  text-black-darkest 
                  md:text-[16px] sm:text-[15px] xs:text-[14px]"
                  >
                    Subtotal
                  </p>
                </div>
                <div>
                  <p
                    className="font-light text-black-darkest 
                  md:text-[16px] sm:text-[15px] xs:text-[14px]
                  lg:pt-[22px] lg:pl-[290px]
                  md:pt-[20px] md:pl-[158px]
                  sm:pt-[15px] sm:pl-[139px]
                  xs:pt-[15px] xs:pl-[110px]
                  "
                  >
                    Rs. 250,000.00
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <p
                    className="text-black-darkest 
                  md:text-[16px] sm:text-[15px] xs:text-[14px] 
                  md:pt-[22px] sm:pt-[20px] xs:pt-[18px]"
                  >
                    Total
                  </p>
                </div>
                <div>
                  <h2
                    className="text-yellow-dark font-bold 
                    lg:text-[24px] md:text-[22px]
                    sm:text-[20px] xs:text-[18px]
                    pt-[16px] 
                    lg:pl-[259px] md:pl-[155px]
                    sm:pl-[130px] xs:pl-[100px]
                    "
                  >
                    Rs. 250,000.00
                  </h2>
                </div>
              </div>
              <hr className="border-black-border mt-[39.5px]" />
              <div className=" flex">
                <img src={dark} alt="de" className="mt-[27px]" />
                <p
                  className="text-black-darkest 
                lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
                md:pt-[22.5px] md:pl-[15px]
                sm:pt-[27px] sm:pl-[14px]
                xs:pt-[26px] xs:pl-[13px]
                "
                >
                  Direct Bank Transfer
                </p>
              </div>
              <p
                className="font-light text-black-light 
              lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
              lg:w-[477px] lg:h-[72px]
              md:w-[330px] sm:w-[307px] xs:w-[280px]
              pt-[11px]"
              >
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex">
                <img src={light} alt="le" className="mt-[25px]" />
                <p
                  className="pl-[15px] font-medium text-black-light 
                lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
                 pt-[27px]"
                >
                  Direct Bank Transfer{" "}
                </p>
              </div>
              <div className="flex">
                <img src={light} alt="le" className="mt-[12px]" />
                <p
                  className="pl-[15px] font-medium text-black-light 
                lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px] pt-[11px]"
                >
                  Cash On Delivery{" "}
                </p>
              </div>
              <p
                className="pt-[22px] font-light text-black-darkest 
              lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px] 
              lg:w-[481px] lg:h-[72px]
              md:w-[340px] sm:w-[316px] xs:w-[285px]
              "
              >
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <b className="font-semibold">privacy policy</b>.
              </p>

              <div className="md:mt-[52px] sm:mt-[20px] xs:mt-[30px]  lg:mx-[70px]">
                <button
                  className="
                lg:w-[318px] lg:h-[64px]
                md:w-[290px] md:h-[60px]
                sm:w-[250px] sm:h-[50px]
                xs:w-[200px] xs:h-[40px]
                md:px-[102px] md:py-[17px] border rounded-lg border-black-darkest 
                lg:text-[20px] md:text-[15px] sm:text-[14px] xs:text-[13px] text-black-darkest"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetails;
