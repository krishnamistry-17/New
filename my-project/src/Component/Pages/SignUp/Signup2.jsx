import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { FaFacebook } from "react-icons/fa";
import Auth from "../Auth/Auth";
import bcrypt from "bcryptjs";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");

  const { setIsSignedIn } = useAuth();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      alert("Password do not match!!");
      return;
    }

    if (name && email && number && password) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s]+$/;
      if (!emailRegex.test(email)) {
        alert("Enter valid email address");
        return;
      }

      const numberRegex = /^[0-9]{10,}$/;

      if (!numberRegex.test(number)) {
        alert("Enter valid number");
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 7);

      const user = {
        name,
        email,
        number,
        password: hashedPassword,
      };

      localStorage.setItem("user", JSON.stringify(user));

      console.log("User Data (hashed password):", user);

      //set isSignedIn value true for toggle the logout button
      setIsSignedIn(true);
      navigate("/signin");
    } else {
      alert("Enter valid details");
    }
  };

  const handleSubmit = () => {
    window.scrollTo(0, 0);
  };

  // const handleFaceBook = () => {
  //   navigate("https://developers.facebook.com/");
  // };

  return (
    <div
      className="bg-white-light border border-black-border
    lg:w-[710px] lg:h-[800px] 
    md:w-[700px] md:h-[980px]
    sm:w-[441px] sm:h-[1055px]
    xs:w-[300px] xs:h-[975px]
    lg:mt-[20px] md:mt-[30px] sm:mt-[40px] xs:mt-[30px]
    xl:ml-[380px] lg:mx-[110px] md:mx-[40px] sm:mx-[20px] xs:mx-[10px] "
    >
      <div
        className="font-medium text-black-darkest 
      md:pl-[16px] sm:pl-[35px] xs:pl-[20px] pt-[25px]
      lg:text-[30px] md:text-[28px] sm:text-[25px] xs:text-[23px]"
      >
        Sign Up
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          number: "",
          password: "",
          confirmPassword: "",
          city: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email is required"),
          name: Yup.string().required("Name is required"),
          number: Yup.number().required("Number is required"),
          password: Yup.number().required("Password is required"),
          confirmPassword: Yup.number().required("Password is required"),
          city: Yup.string().required("City is required"),
        })}
      >
        {({ errors, touched }) => (
          <form onSubmit={handleFormSubmit}>
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
                <Field
                  type="text"
                  name="name"
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
                <p
                  className="text-red-700 
                xl:pl-[20px] lg:pl-[20px] md:pl-[20px]
              sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {errors.name && touched.name && <div>{errors.name}</div>}
                </p>
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
                <Field
                  type="email"
                  name="email"
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
                <p
                  className="text-red-700 
                xl:pl-[20px] lg:pl-[20px]
              md:pl-[75px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {errors.email && touched.email && <div>{errors.email}</div>}
                </p>
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
                <Field
                  type="password"
                  name="password"
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
                <p
                  className="text-red-700 
                 xl:pl-[20px] lg:pl-[20px]
               md:pl-[20px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {errors.password && touched.password && (
                    <div>{errors.password}</div>
                  )}
                </p>
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
                <Field
                  type="password"
                  name="confirmPassword"
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
                <p
                  className="text-red-700
                  xl:pl-[20px] lg:pl-[20px]
               md:pl-[75px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div>{errors.confirmPassword}</div>
                  )}
                </p>
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
                <Field
                  type="number"
                  name="number"
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
                <p
                  className="text-red-700
                  xl:pl-[20px] lg:pl-[20px]
                md:pl-[20px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {errors.number && touched.number && (
                    <div>{errors.number}</div>
                  )}
                </p>
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
                <Field
                  type="text"
                  name="city"
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
                <p
                  className="text-red-700 
                xl:pl-[20px] lg:pl-[20px]
              md:pl-[75px] sm:pl-[35px] xs:pl-[20px] pt-[8px]"
                >
                  {errors.city && touched.city && <div>{errors.city}</div>}
                </p>
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
        )}
      </Formik>

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
  );
};

export default SignUp;
