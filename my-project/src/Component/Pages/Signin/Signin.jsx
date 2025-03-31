import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";
import Auth from "../Auth/Auth";
import bcrypt from "bcryptjs";

const Signin = () => {  
  const { setIsSignedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s]+$/;
      if (!emailRegex.test(email)) {
        alert("Enter valid email address");
        return;
      }

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
    } else {
      alert("Please enter valid details");
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="bg-cream-bglight 
    lg:w-[600px] lg:h-[630px] 
    md:w-[500px] md:h-[600px]
    sm:w-[441px] sm:h-[600px]
    xs:w-[300px] xs:h-[500px]
    lg:mt-[20px] md:mt-[30px]
    xl:ml-[480px] lg:mx-[215px] md:mx-[140px] sm:mx-[20px] xs:mx-[10px] "
    >
      <div
        className="font-medium text-black-darkest 
      md:pl-[70px] sm:pl-[35px] xs:pl-[20px] pt-[25px]
      lg:text-[30px] md:text-[28px] sm:text-[25px] xs:text-[23px]"
      >
        Sign in
      </div>
      <form onSubmit={handleSignInSubmit}>
        <div>
          <p
            className="sm:pt-[30px] xs:pt-[25px] font-medium text-black-darkest 
          md:pl-[75px] sm:pl-[35px] xs:pl-[20px] 
          lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
          >
            Email
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc12@gmail.com"
            className="bg-white-light border border-black-light 
            sm:pl-[25px] xs:pl-[10px]
            xl:w-[300px] xl:h-[70px] 
            lg:w-[350px] lg:h-[70px] 
            md:w-[250px] md:h-[50px] 
            sm:w-[350px] sm:h-[50px] 
            xs:w-[200px] xs:h-[40px]
            xl:ml-[76px] xl:mt-[22px] 
            lg:ml-[70px] lg:mt-[20px] 
            md:ml-[70px] md:mt-[18px] 
            sm:ml-[35px] sm:mt-[17px] 
            xs:ml-[20px] xs:mt-[15px]
            "
          />
        </div>

        <div>
          <p
            className="text-black-darkest font-medium 
          lg:text-[16px] md:text-[15px]
           sm:text-[14px] xs:text-[13px] 
           md:pl-[75px] sm:pl-[35px] xs:pl-[20px] sm:pt-[36px] xs:pt-[25px]"
          >
            Password
          </p>
          <input
            type="password"
            placeholder="123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black-light bg-white-light text-black-light 
           sm:pl-[25px] xs:pl-[10px]
            xl:w-[300px] xl:h-[70px] 
            lg:w-[350px] lg:h-[70px] 
            md:w-[250px] md:h-[50px] 
            sm:w-[350px] sm:h-[50px] 
            xs:w-[200px] xs:h-[40px]
            xl:ml-[76px] xl:mt-[22px] 
            lg:ml-[70px] lg:mt-[20px] 
            md:ml-[70px] md:mt-[18px] 
            sm:ml-[35px] sm:mt-[17px] 
            xs:ml-[20px] xs:mt-[15px]"
          />
        </div>

        <div className="flex lg:mt-[10px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
          <p className="md:pl-[75px] sm:pl-[35px] xs:pl-[20px] text-[14px]">
            Don't have an account?
          </p>
          <a href="/signup" className="pl-[25px] underline text-[14px]">
            Signup
          </a>
        </div>

        <div
          onClick={handleClick}
          className="sm:ml-[80px] xs:ml-[20px] mt-[20px]"
        >
          <button className="bg-yellow-dark w-[200px] h-[40px] rounded-md">
            Submit
          </button>
        </div>
      </form>

      <div className="sm:ml-[75px] sm:mt-[30px] xs:ml-[30px] xs:mt-[20px]">
        <Auth />
      </div>

      <div className="ml-[80px] mt-[10px]">
        <p
          className="text-black-darkest 
        text-[15px] pt-[0px] sm:pl-[90px] xs:pl-[17px]"
        >
          Or
        </p>
        <button
          className="bg-white-light border border-black-border 
        sm:mt-[10px] xs:mt-[10px] sm:w-[190px] sm:h-[50px] sm:text-[13px]
        sm:ml-[0px] xs:ml-[-50px] xs:w-[190px] xs:h-[35px] xs:text-[12px]
        "
        >
          Continue with Facebook
        </button>
        <div
          className="sm:mt-[-32px] sm:ml-[170px]
        xs:mt-[-26px] xs:ml-[120px]
        "
        >
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Signin;
