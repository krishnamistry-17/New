import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { FaFacebook } from "react-icons/fa";
import Auth from "../Auth/Auth";
import bcrypt from "bcryptjs";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const { setIsSignedIn } = useAuth();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      city: "",
    },
    
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      number: Yup.string()
        .matches(/^[0-9]{10,}$/, "Enter a valid 10-digit number")
        .required("Number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: async (values) => {
      const { name, email, number, password, city } = values;

      const hashedPassword = await bcrypt.hash(password, 7);

      const user = {
        name,
        email,
        number,
        city,
        password: hashedPassword,
      };

      localStorage.setItem("user", JSON.stringify(user));

      console.log("User Data (hashed password):", user);

      //set isSignedIn value true for toggle the logout button
      setIsSignedIn(true);
      navigate("/signin");
    },
  });

  const handleSubmit = () => {
    window.scrollTo(0, 0);
  };

  // const handleFaceBook = () => {
  //   navigate("https://developers.facebook.com/");
  // };

  return (
    <div
      className="bg-cream-bg 
    lg:w-[750px] lg:h-[750px] 
    md:w-[700px] md:h-[830px]
    sm:w-[441px] sm:h-[1210px]
    xs:w-[300px] xs:h-[1100px]
    lg:mt-[20px] md:mt-[30px] sm:mt-[40px] xs:mt-[30px]
    xl:ml-[380px] lg:mx-[110px] md:mx-[40px] sm:mx-[20px] xs:mx-[10px] "
    >
      <div className="xl:mx-[25px] lg:mx-[31px] md:mx-[39px] sm:mx-[15px]">
        <div
          className="font-medium text-black-darkest 
          md:pl-[16px] sm:pl-[35px] xs:pl-[20px] pt-[25px]
          lg:text-[30px] md:text-[28px] sm:text-[25px] xs:text-[23px]"
        >
          Sign Up
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="md:flex ">
            <div className="mr-[30px]">
              <p
                className=" font-medium text-black-darkest 
                      xl:pl-[14px] xl:pt-[20px]
                      lg:pl-[15px] lg:pt-[20px]
                      md:pl-[16px] md:pt-[20px]
                      sm:pl-[37px] sm:pt-[20px]
                      xs:pl-[22px] xs:pt-[20px]
                  "
              >
                Name
                <span className="text-red-700">*</span>
              </p>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="name"
                className="bg-white-light border border-black-light rounded-lg
            
                      xl:w-[320px] xl:h-[60px] 
                      lg:w-[310px] lg:h-[60px] 
                      md:w-[250px] md:h-[50px] 
                      sm:w-[350px] sm:h-[50px] 
                      xs:w-[260px] xs:h-[40px]
                      xl:px-[10px] lg:px-[10px] md:px-[10px] sm:px-[10px] xs:px-[10px]
                      xl:ml-[10px] xl:mt-[20px] 
                      lg:ml-[10px] lg:mt-[20px] 
                      md:ml-[16px] md:mt-[18px] 
                      sm:ml-[35px] sm:mt-[17px] 
                      xs:ml-[20px] xs:mt-[15px]
                      "
              />

              {formik.touched.name && formik.errors.name && (
                <p
                  className="text-red-700 
                xl:pl-[20px] lg:pl-[20px] md:pl-[20px]
              sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div>
              <p
                className=" font-medium text-black-darkest 
                      xl:pl-[14px] xl:pt-[20px]
                      lg:pl-[15px] lg:pt-[20px]
                        md:pl-[69px] md:pt-[20px]
                          sm:pl-[37px] sm:pt-[20px]
                          xs:pl-[22px] xs:pt-[20px]
                  "
              >
                Email <span className="text-red-700">*</span>
              </p>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="abc@xyzgmail.com"
                className="bg-white-light border border-black-light rounded-lg
                    
                      xl:w-[320px] xl:h-[60px] 
                      lg:w-[310px] lg:h-[60px] 
                      md:w-[250px] md:h-[50px] 
                      sm:w-[350px] sm:h-[50px] 
                      xs:w-[260px] xs:h-[40px]
                      xl:px-[10px] lg:px-[10px] md:px-[10px] sm:px-[10px] xs:px-[10px]
                      xl:ml-[10px] xl:mt-[20px] 
                      lg:ml-[10px] lg:mt-[20px] 
                      md:ml-[70px] md:mt-[18px] 
                      sm:ml-[35px] sm:mt-[17px] 
                      xs:ml-[20px] xs:mt-[15px]"
              />
              {formik.touched.email && formik.errors.email && (
                <p
                  className="text-red-700 
                xl:pl-[20px] lg:pl-[20px]
              md:pl-[75px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="md:flex ">
            <div className="mr-[30px]">
              <p
                className=" font-medium text-black-darkest 
                      xl:pl-[14px] xl:pt-[20px]
                      lg:pl-[15px] lg:pt-[20px]
                      md:pl-[16px] md:pt-[20px]
                        sm:pl-[37px] sm:pt-[20px]
                          xs:pl-[22px] xs:pt-[20px]
                  "
              >
                Password
                <span className="text-red-700">*</span>
              </p>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="123"
                className="bg-white-light border border-black-light rounded-lg
                    
                      xl:w-[320px] xl:h-[60px] 
                      lg:w-[310px] lg:h-[60px] 
                      md:w-[250px] md:h-[50px] 
                      sm:w-[350px] sm:h-[50px] 
                      xs:w-[260px] xs:h-[40px]
                      xl:px-[10px] lg:px-[10px] md:px-[10px] sm:px-[10px] xs:px-[10px]
                      xl:ml-[10px] xl:mt-[20px] 
                      lg:ml-[10px] lg:mt-[20px] 
                      md:ml-[16px] md:mt-[18px] 
                      sm:ml-[35px] sm:mt-[17px] 
                      xs:ml-[20px] xs:mt-[15px]
                      "
              />

              {formik.touched.password && formik.errors.password && (
                <p
                  className="text-red-700 
                xl:pl-[20px] lg:pl-[20px]
              md:pl-[20px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div>
              <p
                className=" font-medium text-black-darkest 
                      xl:pl-[14px] xl:pt-[20px]
                      lg:pl-[15px] lg:pt-[20px]
                        md:pl-[69px] md:pt-[20px]
                          sm:pl-[37px] sm:pt-[20px]
                          xs:pl-[22px] xs:pt-[20px]
                  "
              >
                Confirm Password <span className="text-red-700">*</span>
              </p>
              <input
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="confirm password"
                className="bg-white-light border border-black-light rounded-lg
                    
                      xl:w-[320px] xl:h-[60px] 
                      lg:w-[310px] lg:h-[60px] 
                      md:w-[250px] md:h-[50px] 
                      sm:w-[350px] sm:h-[50px] 
                      xs:w-[260px] xs:h-[40px]
                      xl:px-[10px]  lg:px-[10px] md:px-[10px] sm:px-[10px] xs:px-[10px]
                      xl:ml-[10px] xl:mt-[20px] 
                      lg:ml-[10px] lg:mt-[20px] 
                      md:ml-[70px] md:mt-[18px] 
                      sm:ml-[35px] sm:mt-[17px] 
                      xs:ml-[20px] xs:mt-[15px]"
              />

              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p
                    className="text-red-700
                xl:pl-[20px] lg:pl-[20px]
            md:pl-[75px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                  >
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
          </div>
          <div className="md:flex ">
            <div className="mr-[30px]">
              <p
                className=" font-medium text-black-darkest 
                      xl:pl-[14px] xl:pt-[20px]
                      lg:pl-[15px] lg:pt-[20px]
                      md:pl-[16px] md:pt-[20px]
                        sm:pl-[37px] sm:pt-[20px]
                        xs:pl-[22px] xs:pt-[20px]
                  "
              >
                Contact Number
                <span className="text-red-700">*</span>
              </p>
              <input
                type="number"
                name="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                placeholder="12345"
                className="bg-white-light border border-black-light rounded-lg
                    
                      xl:w-[320px] xl:h-[60px] 
                      lg:w-[310px] lg:h-[60px] 
                      md:w-[250px] md:h-[50px] 
                      sm:w-[350px] sm:h-[50px] 
                      xs:w-[260px] xs:h-[40px]
                      xl:px-[10px] lg:px-[10px] md:px-[10px] sm:px-[10px] xs:px-[10px]
                      xl:ml-[10px] xl:mt-[20px] 
                      lg:ml-[10px] lg:mt-[20px] 
                      md:ml-[16px] md:mt-[18px] 
                      sm:ml-[35px] sm:mt-[17px] 
                      xs:ml-[20px] xs:mt-[15px]
                      "
              />

              {formik.touched.number && formik.errors.number && (
                <p
                  className="text-red-700
                xl:pl-[20px] lg:pl-[20px]
              md:pl-[20px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {formik.errors.number}
                </p>
              )}
            </div>
            <div>
              <p
                className=" font-medium text-black-darkest 
                      xl:pl-[14px] xl:pt-[20px]
                      lg:pl-[15px] lg:pt-[20px]
                      md:pl-[69px] md:pt-[20px]
                        sm:pl-[37px] sm:pt-[20px]
                          xs:pl-[22px] xs:pt-[20px]
                  "
              >
                City <span className="text-red-700">*</span>
              </p>
              <input
                type="text"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                placeholder="xyz"
                className="bg-white-light border border-black-light rounded-lg
                    
                      xl:w-[320px] xl:h-[60px] 
                      lg:w-[310px] lg:h-[60px] 
                      md:w-[250px] md:h-[50px] 
                      sm:w-[350px] sm:h-[50px] 
                      xs:w-[260px] xs:h-[40px]
                      xl:px-[10px] lg:px-[10px] md:px-[10px] sm:px-[10px] xs:px-[10px]
                      xl:ml-[10px] xl:mt-[20px] 
                      lg:ml-[10px] lg:mt-[20px] 
                      md:ml-[70px] md:mt-[18px] 
                      sm:ml-[35px] sm:mt-[17px] 
                      xs:ml-[20px] xs:mt-[15px]"
              />
              {formik.touched.city && formik.errors.city && (
                <p
                  className="text-red-700
                xl:pl-[20px] lg:pl-[20px]
            md:pl-[75px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {formik.errors.city}
                </p>
              )}
            </div>
          </div>
          <div className="flex lg:mt-[10px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
            <p className="xl:pl-[209px] lg:pl-[216px] md:pl-[212px] sm:pl-[35px] xs:pl-[20px] text-[14px]">
              already have an account?
            </p>
            <a href="/signin" className="pl-[25px] underline text-[14px]">
              Sign in
            </a>
          </div>

          <div className="md:ml-[233px] sm:ml-[37px] xs:ml-[20px] mt-[20px]">
            <button
              onClick={handleSubmit}
              className="bg-yellow-dark w-[200px] h-[40px] rounded-md"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="md:ml-[233px]  sm:ml-[37px] xs:ml-[20px] sm:mt-[30px]  xs:mt-[20px]">
          <Auth />
        </div>

        <div className="md:ml-[233px] sm:ml-[37px] xs:ml-[20px] sm:mt-[20px] xs:mt-[10px]">
          <p className="text-black-darkest text-[15px] pt-[0px] sm:pl-[90px] xs:pl-[78px]">
            Or
          </p>
          <button
            className="bg-white-light border border-black-border 
            sm:mt-[10px] xs:mt-[12px] sm:w-[190px] sm:h-[50px] sm:text-[13px]
            sm:ml-[0px] xs:ml-[0px] xs:w-[190px] xs:h-[35px] xs:text-[12px]
            "
            // onClick={handleFaceBook}
          >
            Continue with Facebook
          </button>
          <div
            className="sm:mt-[-32px] sm:ml-[170px]
            xs:mt-[-26px] xs:ml-[168px]
            "
          >
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
