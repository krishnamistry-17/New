import React, { useState } from "react";
import address from "../../../assets/svgs/Address.svg";
import call from "../../../assets/svgs/Call.svg";
import clock from "../../../assets/svgs/Clock.svg";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const ContactDetail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    e.preventDefault();
    alert("We'll update you soon..");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s]+$/;
      if (!emailRegex.test(email)) {
        alert("Enter valid email address");
        return;
      }
    }
  };

  return (
    <div className="font-poppins">
      <div>
        <h2
          className=" font-poppins font-semibold text-black-darkest 
        xl:text-[36px] lg:text-[30px]
        md:text-[28px] sm:text-[25px] xs:text-[20px]
        xl:pl-[533px] xl:pt-[98px]
        lg:pl-[350px] lg:pt-[80px]
        md:pl-[248px] md:pt-[70px]
        sm:pl-[113px] sm:pt-[50px]
        xs:pl-[61px] xs:pt-[20px]
        "
        >
          Get In Touch With Us
        </h2>
        <p
          className="text-black-light 
        xl:text-[16px] lg:text-[15px] 
        md:text-[14px] sm:text-[13px] xs:text-[12px]
        xl:px-[400px] pt-[7px]
        lg:px-[200px] md:px-[100px] sm:px-[16px] xs:px-[10px]
        xl:ml-[58px] lg:ml-[68px] md:ml-[71px] sm:ml-[21px] xs:ml-[17px]
        "
        >
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div
        className=" md:flex mt-[14px] bg-white-light
      xl:mx-[191px]  lg:mx-[30px] md:mx-[20px]  sm:mx-[10px] xs:mx-[20px]
      xl:w-[1058px] xl:h-[923px]"
      >
        {/*left */}
        <div
          className="bg-white-light md:flex-col sm:flex 
        lg:w-[393px] lg:h-[537px] 

        sm:mt-[68px]  lg:mr-[30px] md:mr-[20px]
        md:w-[325px] md:h-[500px]
        sm:w-[460px] sm:h-[250px]
        "
        >
          <div>
            <div className="md:flex sm:flex-wrap xs:flex">
              <img
                src={address}
                alt="ads"
                className="
                xl:ml-[54px] lg:ml-[32px] md:ml-[30px] xs:ml-[15px]
                sm:ml-[74px] md:mt-[0px]
                sm:mt-[27.12px] xs:mt-[20px]
                "
              />
              <p
                className="font-medium text-black-darkest 
                xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] xs:text-[16px]
                xl:pl-[28px] xs:pt-[20px]
                md:pl-[20px] xs:pl-[20px]
                sm:pt-[14px] sm:pl-[49px]
                "
              >
                Address
              </p>
            </div>
            <p
              className="text-black-darkest 
            lg:text-[16px]  md:text-[13px] sm:text-[12px] xs:text-[11px]
            xl:pl-[106px] lg:pl-[74px] md:pl-[72px] sm:pl-[19px] xs:pl-[56px] md:ml-[0px] sm:ml-[]
            "
            >
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
          <div>
            <div className="md:flex sm:flex-wrap xs:flex">
              <img
                src={call}
                alt="cl"
                className="
                md:mt-[45px] sm:mt-[27.12px] xs:mt-[20px]
                xl:ml-[46px]
                lg:ml-[32px] md:ml-[30px]
                sm:ml-[14px] xs:ml-[15px]
                "
              />
              <p
                className="font-medium text-black-darkest 
                xl:text-[24px] lg:text-[22px]  md:text-[20px]  sm:text-[18px] xs:text-[16px]
                xl:pl-[30px] md:pl-[20px] xs:pl-[20px] md:pt-[42px] xs:pt-[23px]
                sm:pt-[9px] sm:pl-[0px] "
              >
                Phone
              </p>
            </div>
            <p
              className="text-black-darkest 
            lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
            xl:pl-[106px] lg:pl-[85px] md:pl-[80px] sm:pl-[0px] xs:pl-[66px]
            "
            >
              Mobile: +(84) 546-6789
            </p>
            <p
              className="text-black-darkest 
            lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
            xl:pl-[106px] lg:pl-[85px] md:pl-[80px] sm:pl-[0px] xs:pl-[66px]
            "
            >
              Hotline: +(84) 456-6789
            </p>
          </div>

          <div>
            <div className="md:flex sm:flex-wrap xs:flex">
              <img
                src={clock}
                alt="clk"
                className="
              md: mt-[45px] sm:mt-[27.12px] xs:mt-[20px]
              xl:ml-[53px]  lg:ml-[32px]
              md:ml-[30px] sm:ml-[75px] xs:ml-[15px]"
              />
              <p
                className="font-medium text-black-darkest 
             xl:text-[24px] lg:text-[22px]  md:text-[20px] sm:text-[18px] xs:text-[16px]
             xl:pl-[30px] md:pl-[20px] xs:pl-[20px] md:pt-[42px] xs:pt-[23px]
             sm:pt-[14px] sm:pl-[25px] 
             "
              >
                Working Time
              </p>
            </div>
            <p
              className="text-black-darkest 
           lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
          xl:pl-[106px] lg:pl-[76px]  md:pl-[76px] sm:pl-[26px] xs:pl-[62px]
          "
            >
              Monday-Friday: 9:00 - 22:00
            </p>
            <p
              className="text-black-darkest 
          lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
          xl:pl-[106px] lg:pl-[76px]  md:pl-[76px] sm:pl-[26px] xs:pl-[62px]
          "
            >
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/*right */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().required("Email is required"),
            message: Yup.string().required("Message is required"),
          })}
        >
          {({ errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <div
                className="bg-white-light 
    xl:w-[635px] xl:h-[923px]
    lg:w-[500px] lg:h-[800px]
    md:w-[430px] md:h-[700px]
    sm:w-[100%] sm:h-[600px]
    xs:w-[100%] xs:h-[555px]
    md:mt-[14px]"
              >
                <div
                  className="
      xl:w-[531px] xl:h-[741px] 
      lg:w-[400px] lg:h-[706px]
      md:w-[335px] md:h-[650px]
      sm:w-[100%] sm:h-[500px]
      xs:w-[100%] xs:h-[545px]
      xl:mx-[52px] lg:mx-[40px] md:mx-[30px] 
      lg:my-[40px] md:my-[40px] sm:my-[0px] xs:my-[20px]
      xl:mt-[119px] xl:mb-[63px]
    "
                >
                  <div>
                    <p className="font-medium text-black-darkest xs:text-[16px]">
                      Your name<span className="text-red-700">*</span>
                    </p>
                    <Field
                      type="text"
                      name="name"
                      className="bg-white-light border border-black-light rounded-lg 
          mt-[22px] text-[16px] text-black-darkest pl-[31px] px-[25px]
          xs:w-full xs:max-w-full xs:h-[50px] 
          sm:w-full sm:max-w-full sm:h-[60px] 
          md:w-full md:max-w-[335px] md:h-[65px] 
          lg:w-full lg:max-w-[400px] lg:h-[70px] 
          xl:w-full xl:max-w-[528.75px] xl:h-[75px] 
        "
                      placeholder="Abc"
                    />
                    <p className="text-red-700 text-[15px] pt-[7px] pl-[4px]">
                      {errors.name && touched.name && <div>{errors.name}</div>}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-black-darkest xs:text-[16px] pt-[36px]">
                      Email address<span className="text-red-700">*</span>
                    </p>
                    <Field
                      type="text"
                      name="email"
                      className="bg-white-light border border-black-light rounded-lg 
          mt-[22px] text-[16px] text-black-darkest pl-[31px] px-[25px]
          xs:w-full xs:max-w-full xs:h-[50px]
          sm:w-full sm:max-w-full sm:h-[60px]
          md:w-full md:max-w-[335px] md:h-[65px]
          lg:w-full lg:max-w-[400px] lg:h-[70px]
          xl:w-full xl:max-w-[528.75px] xl:h-[75px]
        "
                      placeholder="Abc@def.com"
                    />
                    <p className="text-red-700 text-[15px] pt-[7px] pl-[4px]">
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-black-darkest xs:text-[16px] pt-[36px]">
                      Subject
                    </p>
                    <input
                      type="text"
                      className="bg-white-light border border-black-light rounded-lg 
          mt-[22px] text-[16px] text-black-darkest pl-[31px] px-[25px]
          xs:w-full xs:max-w-full xs:h-[50px]
          sm:w-full sm:max-w-full sm:h-[60px]
          md:w-full md:max-w-[335px] md:h-[65px]
          lg:w-full lg:max-w-[400px] lg:h-[70px]
          xl:w-full xl:max-w-[528.75px] xl:h-[75px]
        "
                      placeholder="This is an optional"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-black-darkest xs:text-[16px] pt-[36px]">
                      Message<span className="text-red-700">*</span>
                    </p>
                    <input
                      type="text"
                      className="bg-white-light border border-black-light rounded-lg 
          mt-[22px] text-[16px] text-black-darkest pl-[30px] pt-[26px] pb-[70px]
          xs:w-full xs:max-w-full xs:h-[30px] // Full width for xs with max-width
          sm:w-full sm:max-w-full sm:h-[60px]
          md:w-full md:max-w-[335px] md:h-[60px]
          lg:w-full lg:max-w-[400px] lg:h-[70px]
          xl:w-full xl:max-w-[527px] xl:h-[120px]
        "
                      placeholder="Hi! i’d like to ask about"
                    />
                    <p className="text-red-700 text-[15px] pt-[7px] pl-[4px]">
                      {errors.message && touched.message && (
                        <div>{errors.message}</div>
                      )}
                    </p>
                  </div>
                  <div className="lg:mt-[49px] sm:mt-[30px] xs:mt-[20px] md:ml-[7px] ">
                    <button
                      className="bg-yellow-dark rounded-md text-[16px] text-white-light
          lg:w-[237px] lg:h-[55px] py-[13.75px] px-[89px]"
                      onClick={handleMessage}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactDetail;
