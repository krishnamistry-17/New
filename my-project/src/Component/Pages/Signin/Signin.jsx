import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";
import Auth from "../Auth/Auth";
import bcrypt from "bcryptjs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const Signin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setIsSignedIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No User Found! Please Signup first!");
        return;
      }

      const isPasswordMatch = await bcrypt.compare(
        password,
        storedUser.password
      );

      //set isSignedIn value true for toggle the logout button
      if (isPasswordMatch) {
        setIsSignedIn(true);
        navigate("/");
      } else {
        alert("Incoreecet email or password");
      }
    },
  });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="bg-cream-bg font-poppins
    lg:w-[514px] lg:h-[670px] 
    md:w-[500px] md:h-[600px]
    sm:w-[441px] sm:h-[686px]
    xs:w-[300px] xs:h-[615px]
    lg:mt-[20px] md:mt-[30px]
    xl:ml-[480px] lg:mx-[215px] md:mx-[140px] sm:mx-[20px] xs:mx-[10px] "
    >
      <div className="lg:mx-[10px] sm:mx-[0px] xs:mx-[20px]">
        <div
          className="font-medium text-black-darkest 
      md:pl-[70px] sm:pl-[35px] xs:pl-[20px] pt-[25px]
     xl:text-[40px] lg:text-[30px] md:text-[28px] sm:text-[25px] xs:text-[23px]"
        >
          {t("signin")}
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <p
              className="sm:pt-[30px] xs:pt-[25px] font-medium text-black-darkest 
          md:pl-[75px] sm:pl-[35px] xs:pl-[20px] 
          lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
            >
              {t("email")}
              <span className="text-red-700">*</span>
            </p>
            <input
              type="email"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              placeholder={t("placeemail")}
              className="bg-white-light border border-black-light rounded-lg
            sm:pl-[25px] xs:pl-[10px]
            xl:w-[320px] xl:h-[50px] 
            lg:w-[350px] lg:h-[70px] 
            md:w-[250px] md:h-[50px] 
            sm:w-[350px] sm:h-[50px] 
            xs:w-[220px] xs:h-[40px]
            xl:ml-[76px] xl:mt-[22px] 
            lg:ml-[70px] lg:mt-[20px] 
            md:ml-[70px] md:mt-[18px] 
            sm:ml-[35px] sm:mt-[17px] 
            xs:ml-[20px] xs:mt-[15px]
            "
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div>
            <p
              className="text-black-darkest font-medium 
          lg:text-[16px] md:text-[15px]
           sm:text-[14px] xs:text-[13px] 
           md:pl-[75px] sm:pl-[35px] xs:pl-[20px] sm:pt-[36px] xs:pt-[25px]"
            >
              {t("password")}
              <span className="text-red-700">*</span>
            </p>
            <input
              type="password"
              name="password"
              placeholder="123"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="border border-black-light bg-white-light text-black-light rounded-lg
           sm:pl-[25px] xs:pl-[10px]
            xl:w-[320px] xl:h-[50px] 
            lg:w-[350px] lg:h-[70px] 
            md:w-[250px] md:h-[50px] 
            sm:w-[350px] sm:h-[50px] 
            xs:w-[220px] xs:h-[40px]
            xl:ml-[76px] xl:mt-[22px] 
            lg:ml-[70px] lg:mt-[20px] 
            md:ml-[70px] md:mt-[18px] 
            sm:ml-[35px] sm:mt-[17px] 
            xs:ml-[20px] xs:mt-[15px]"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div className="md:ml-[76px] sm:ml-[45px] xs:ml-[20px] mt-[20px]">
            <a className="underline" href="/signup">
              {t("forgetpass")}
            </a>
          </div>

          <div
            onClick={handleClick}
            className="md:ml-[80px] sm:ml-[42px] xs:ml-[20px] mt-[20px]"
          >
            <button className="bg-yellow-dark w-[200px] h-[40px] rounded-lg">
              {t("btn6")}
            </button>
          </div>

          <div className="flex lg:mt-[10px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
            <p className="md:pl-[76px] sm:pl-[46px] xs:pl-[20px] text-[14px]">
              {t("notacc")}
            </p>
            <a href="/signup" className="pl-[25px] underline text-[14px]">
              {t("signup")}
            </a>
          </div>
        </form>

        <div className="md:ml-[75px] sm:ml-[45px] sm:mt-[30px] xs:ml-[30px] xs:mt-[20px]">
          <Auth />
        </div>

        <div className="ml-[80px] mt-[10px]">
          <p
            className="text-black-darkest 
        text-[15px] pt-[0px] md:pl-[90px] sm:pl-[38px] xs:pl-[17px]"
          >
            {t("or")}
          </p>
          <button
            className="bg-white-light border border-black-border 
        sm:mt-[10px] xs:mt-[10px] 
         md:ml-[0px] sm:ml-[-37px] xs:ml-[-50px]
        sm:w-[190px] sm:h-[50px] sm:text-[13px]
        xs:w-[190px] xs:h-[40px] xs:text-[12px]
        "
          >
            {t("fb")}
          </button>
          <div
            className="sm:mt-[-32px] md:ml-[170px] sm:ml-[132px]
        xs:mt-[-26px] xs:ml-[120px]
        "
          >
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
