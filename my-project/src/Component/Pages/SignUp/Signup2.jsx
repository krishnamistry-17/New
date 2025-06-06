import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { FaFacebook } from "react-icons/fa";
import Auth from "../Auth/Auth";
import bcrypt from "bcryptjs";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();

  const { setIsSignedIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is requrired"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      number: Yup.string()
        .matches(/^[0-9]{10,}$/, "Enter a valid 10-digit number")
        .required("Number is required"),
      password: Yup.string()
        .min(6, "Password must be atleast 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      // Handle form submission
      const { name, email, number, password } = values;

      const hashedPassword = await bcrypt.hash(password, 7);

      const user = {
        name,
        email,
        number,
        password: hashedPassword,
      };

      localStorage.setItem("user", JSON.stringify(user));

      // set isSignedIn value true for toggling the logout button
      setIsSignedIn(true);
      navigate("/signin");
    },
  });

  return (
    <div className="bg-white-light lg:w-[600px] lg:h-[1280px] md:w-[500px] md:h-[980px] sm:w-[441px] sm:h-[955px] xs:w-[300px] xs:h-[820px] lg:mt-[20px] md:mt-[30px] sm:mt-[40px] xs:mt-[30px] xl:ml-[480px] lg:mx-[215px] md:mx-[140px] sm:mx-[20px] xs:mx-[10px]">
      <div className="font-medium text-black-darkest md:pl-[70px] sm:pl-[35px] xs:pl-[20px] pt-[25px] lg:text-[30px] md:text-[28px] sm:text-[25px] xs:text-[23px]">
        Sign Up
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <p className="sm:pt-[36px] xs:pt-[25px] font-medium text-black-darkest md:pl-[75px] sm:pl-[35px] xs:pl-[20px] lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]">
            Name<span className="text-red-700">*</span>
          </p>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
            className="bg-white-light border border-black-light rounded-lg sm:pl-[25px] xs:pl-[10px] xl:w-[320px] xl:h-[60px] lg:w-[350px] lg:h-[70px] md:w-[250px] md:h-[50px] sm:w-[350px] sm:h-[50px] xs:w-[260px] xs:h-[40px] xl:ml-[76px] xl:mt-[22px] lg:ml-[70px] lg:mt-[20px] md:ml-[70px] md:mt-[18px] sm:ml-[35px] sm:mt-[17px] xs:ml-[20px] xs:mt-[15px]"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
              {formik.errors.name}
            </p>
          )}
        </div>

        <div>
          <p className="sm:pt-[36px] xs:pt-[25px] font-medium text-black-darkest md:pl-[75px] sm:pl-[35px] xs:pl-[20px] lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]">
            Email<span className="text-red-700">*</span>
          </p>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="abc12@gmail.com"
            className="bg-white-light border border-black-light rounded-lg sm:pl-[25px] xs:pl-[10px] xl:w-[320px] xl:h-[60px] lg:w-[350px] lg:h-[70px] md:w-[250px] md:h-[50px] sm:w-[350px] sm:h-[50px] xs:w-[260px] xs:h-[40px] xl:ml-[76px] xl:mt-[22px] lg:ml-[70px] lg:mt-[20px] md:ml-[70px] md:mt-[18px] sm:ml-[35px] sm:mt-[17px] xs:ml-[20px] xs:mt-[15px]"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div>
          <p className="sm:pt-[36px] xs:pt-[25px] font-medium text-black-darkest md:pl-[75px] sm:pl-[35px] xs:pl-[20px] lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]">
            Password<span className="text-red-700">*</span>
          </p>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="border border-black-light bg-white-light text-black-light rounded-lg sm:pl-[25px] xs:pl-[10px] xl:w-[320px] xl:h-[60px] lg:w-[350px] lg:h-[70px] md:w-[250px] md:h-[50px] sm:w-[350px] sm:h-[50px] xs:w-[260px] xs:h-[40px] xl:ml-[76px] xl:mt-[22px] lg:ml-[70px] lg:mt-[20px] md:ml-[70px] md:mt-[18px] sm:ml-[35px] sm:mt-[17px] xs:ml-[20px] xs:mt-[15px]"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div>
          <p className="text-black-darkest font-medium lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] md:pl-[75px] sm:pl-[35px] xs:pl-[20px] sm:pt-[36px] xs:pt-[25px]">
            Confirm Password<span className="text-red-700">*</span>
          </p>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password"
            className="border border-black-light bg-white-light text-black-light rounded-lg sm:pl-[25px] xs:pl-[10px] xl:w-[320px] xl:h-[60px] lg:w-[350px] lg:h-[70px] md:w-[250px] md:h-[50px] sm:w-[350px] sm:h-[50px] xs:w-[260px] xs:h-[40px] xl:ml-[76px] xl:mt-[22px] lg:ml-[70px] lg:mt-[20px] md:ml-[70px] md:mt-[18px] sm:ml-[35px] sm:mt-[17px] xs:ml-[20px] xs:mt-[15px]"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        <div>
          <p className="text-black-darkest font-medium lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] md:pl-[75px] sm:pl-[35px] xs:pl-[20px] sm:pt-[36px] xs:pt-[25px]">
            Contact Number<span className="text-red-700">*</span>
          </p>
          <input
            type="text"
            name="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            placeholder="1234567890"
            className="border border-black-light bg-white-light text-black-light rounded-lg sm:pl-[25px] xs:pl-[10px] xl:w-[320px] xl:h-[60px] lg:w-[350px] lg:h-[70px] md:w-[250px] md:h-[50px] sm:w-[350px] sm:h-[50px] xs:w-[260px] xs:h-[40px] xl:ml-[76px] xl:mt-[22px] lg:ml-[70px] lg:mt-[20px] md:ml-[70px] md:mt-[18px] sm:ml-[35px] sm:mt-[17px] xs:ml-[20px] xs:mt-[15px]"
          />
          {formik.touched.number && formik.errors.number && (
            <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
              {formik.errors.number}
            </p>
          )}
        </div>

        <div className="flex lg:mt-[10px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
          <p className="md:pl-[75px] sm:pl-[35px] xs:pl-[20px] text-[14px]">
            already have an account?
          </p>
          <a href="/signin" className="pl-[25px] underline text-[14px]">
            Sign in
          </a>
        </div>

        <div className="sm:ml-[80px] xs:ml-[20px] mt-[20px]">
          <button
            type="submit"
            className="bg-yellow-dark w-[200px] h-[40px] rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="sm:ml-[75px] sm:mt-[30px] xs:ml-[30px] xs:mt-[20px]">
        <Auth />
      </div>

      <div className="ml-[80px] mt-[20px]">
        <p className="text-black-darkest text-[15px] pt-[0px] sm:pl-[90px] xs:pl-[17px]">
          Or
        </p>
        <button
          className="bg-white-light border border-black-border sm:mt-[10px] xs:mt-[12px] sm:w-[190px] sm:h-[50px] sm:text-[13px] sm:ml-[0px] xs:ml-[-50px] xs:w-[190px] xs:h-[35px] xs:text-[12px]"
          // onClick={handleFaceBook}
        >
          Continue with Facebook
        </button>
        <div className="sm:mt-[-32px] sm:ml-[170px] xs:mt-[-26px] xs:ml-[120px]">
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const { setIsSignedIn } = useAuth();

//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (password != confirmPassword) {
//       alert("Password do not match!!");
//       return;
//     }

//     if (name && email && number && password) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s]+$/;
//       if (!emailRegex.test(email)) {
//         alert("Enter valid email address");
//         return;
//       }

//       const numberRegex = /^[0-9]{10,}$/;

//       if (!numberRegex.test(number)) {
//         alert("Enter valid number");
//         return;
//       }

//       const hashedPassword = await bcrypt.hash(password, 7);

//       const user = {
//         name,
//         email,
//         number,
//         password: hashedPassword,
//       };

//       localStorage.setItem("user", JSON.stringify(user));

//       console.log("User Data (hashed password):", user);

//       //set isSignedIn value true for toggle the logout button
//       setIsSignedIn(true);
//       navigate("/signin");
//     } else {
//       alert("Enter valid details");
//     }
//   };

//   const handleSubmit = () => {
//     window.scrollTo(0, 0);
//   };

//   // const handleFaceBook = () => {
//   //   navigate("https://developers.facebook.com/");
//   // };

//   return (
//     <div
//       className="bg-white-light
//     lg:w-[600px] lg:h-[1280px]
//     md:w-[500px] md:h-[980px]
//     sm:w-[441px] sm:h-[955px]
//     xs:w-[300px] xs:h-[820px]
//     lg:mt-[20px] md:mt-[30px] sm:mt-[40px] xs:mt-[30px]
//     xl:ml-[480px] lg:mx-[215px] md:mx-[140px] sm:mx-[20px] xs:mx-[10px] "
//     >
//       <div
//         className="font-medium text-black-darkest
//       md:pl-[70px] sm:pl-[35px] xs:pl-[20px] pt-[25px]
//       lg:text-[30px] md:text-[28px] sm:text-[25px] xs:text-[23px]"
//       >
//         Sign Up
//       </div>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           number: "",
//           password: "",
//           confirmPassword: "",
//         }}
//         onSubmit={(values) => console.log(values)}
//         validationSchema={Yup.object({
//           email: Yup.string().required("Email is required"),
//           name: Yup.string().required("Name is required"),
//           number: Yup.number().required("Number is required"),
//           password: Yup.number().required("Password is required"),
//           confirmPassword: Yup.number().required("Password is required"),
//         })}
//       >
//         {({ errors, touched }) => (
//           <Form onSubmit={handleFormSubmit}>
//             <div>
//               <p
//                 className="sm:pt-[36px] xs:pt-[25px] font-medium text-black-darkest
//           md:pl-[75px] sm:pl-[35px] xs:pl-[20px]
//           lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
//               >
//                 Name<span className="text-red-700">*</span>
//               </p>
//               <Field
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="name"
//                 className="bg-white-light border
//                 border-black-light rounded-lg
//             sm:pl-[25px] xs:pl-[10px]
//           xl:w-[320px] xl:h-[60px]
//             lg:w-[350px] lg:h-[70px]
//             md:w-[250px] md:h-[50px]
//             sm:w-[350px] sm:h-[50px]
//             xs:w-[260px] xs:h-[40px]
//             xl:ml-[76px] xl:mt-[22px]
//             lg:ml-[70px] lg:mt-[20px]
//             md:ml-[70px] md:mt-[18px]
//             sm:ml-[35px] sm:mt-[17px]
//             xs:ml-[20px] xs:mt-[15px]
//             "
//               />
//               <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
//                 {errors.name && touched.name && <div>{errors.name}</div>}
//               </p>
//             </div>

//             <div>
//               <p
//                 className="sm:pt-[36px] xs:pt-[25px] font-medium text-black-darkest
//           md:pl-[75px] sm:pl-[35px] xs:pl-[20px]
//           lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
//               >
//                 Email<span className="text-red-700">*</span>
//               </p>
//               <Field
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="abc12@gmail.com"
//                 className="bg-white-light border border-black-light rounded-lg
//             sm:pl-[25px] xs:pl-[10px]
//            xl:w-[320px] xl:h-[60px]
//             lg:w-[350px] lg:h-[70px]
//             md:w-[250px] md:h-[50px]
//             sm:w-[350px] sm:h-[50px]
//             xs:w-[260px] xs:h-[40px]
//             xl:ml-[76px] xl:mt-[22px]
//             lg:ml-[70px] lg:mt-[20px]
//             md:ml-[70px] md:mt-[18px]
//             sm:ml-[35px] sm:mt-[17px]
//             xs:ml-[20px] xs:mt-[15px]
//             "
//               />
//               <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
//                 {errors.email && touched.email && <div>{errors.email}</div>}
//               </p>
//             </div>

//             <div>
//               <p
//                 className="text-black-darkest font-medium
//           lg:text-[16px] md:text-[15px]
//            sm:text-[14px] xs:text-[13px]
//            md:pl-[75px] sm:pl-[35px] xs:pl-[20px] sm:pt-[36px] xs:pt-[25px]"
//               >
//                 Password<span className="text-red-700">*</span>
//               </p>
//               <Field
//                 type="number"
//                 name="password"
//                 placeholder="123"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="border border-black-light bg-white-light text-black-light rounded-lg
//            sm:pl-[25px] xs:pl-[10px]
//              xl:w-[320px] xl:h-[60px]
//             lg:w-[350px] lg:h-[70px]
//             md:w-[250px] md:h-[50px]
//             sm:w-[350px] sm:h-[50px]
//             xs:w-[260px] xs:h-[40px]
//             xl:ml-[76px] xl:mt-[22px]
//             lg:ml-[70px] lg:mt-[20px]
//             md:ml-[70px] md:mt-[18px]
//             sm:ml-[35px] sm:mt-[17px]
//             xs:ml-[20px] xs:mt-[15px]"
//               />
//               <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px] ">
//                 {errors.password && touched.password && (
//                   <div>{errors.password}</div>
//                 )}
//               </p>
//             </div>

//             <div>
//               <p
//                 className="text-black-darkest font-medium
//           lg:text-[16px] md:text-[15px]
//            sm:text-[14px] xs:text-[13px]
//            md:pl-[75px] sm:pl-[35px] xs:pl-[20px] sm:pt-[36px] xs:pt-[25px]"
//               >
//                 Confirm Password<span className="text-red-700">*</span>
//               </p>
//               <Field
//                 type="numebr"
//                 name="confirmPassword"
//                 placeholder="confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="border border-black-light bg-white-light text-black-light rounded-lg
//            sm:pl-[25px] xs:pl-[10px]
//              xl:w-[320px] xl:h-[60px]
//             lg:w-[350px] lg:h-[70px]
//             md:w-[250px] md:h-[50px]
//             sm:w-[350px] sm:h-[50px]
//             xs:w-[260px] xs:h-[40px]
//             xl:ml-[76px] xl:mt-[22px]
//             lg:ml-[70px] lg:mt-[20px]
//             md:ml-[70px] md:mt-[18px]
//             sm:ml-[35px] sm:mt-[17px]
//             xs:ml-[20px] xs:mt-[15px]"
//               />
//               <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
//                 {errors.confirmPassword && touched.confirmPassword && (
//                   <div>{errors.confirmPassword}</div>
//                 )}
//               </p>
//             </div>

//             <div>
//               <p
//                 className="text-black-darkest font-medium
//           lg:text-[16px] md:text-[15px]
//            sm:text-[14px] xs:text-[13px]
//            md:pl-[75px] sm:pl-[35px] xs:pl-[20px] sm:pt-[36px] xs:pt-[25px]"
//               >
//                 Contact Number<span className="text-red-700">*</span>
//               </p>
//               <Field
//                 type="number"
//                 name="number"
//                 placeholder="12345"
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//                 className="border border-black-light bg-white-light text-black-light rounded-lg
//            sm:pl-[25px] xs:pl-[10px]
//              xl:w-[320px] xl:h-[60px]
//             lg:w-[350px] lg:h-[70px]
//             md:w-[250px] md:h-[50px]
//             sm:w-[350px] sm:h-[50px]
//             xs:w-[260px] xs:h-[40px]
//             xl:ml-[76px] xl:mt-[22px]
//             lg:ml-[70px] lg:mt-[20px]
//             md:ml-[70px] md:mt-[18px]
//             sm:ml-[35px] sm:mt-[17px]
//             xs:ml-[20px] xs:mt-[15px]"
//               />
//               <p className="text-red-700 md:pl-[76px] sm:pl-[35px] xs:pl-[20px] pt-[8px]">
//                 {errors.number && touched.number && <div>{errors.number}</div>}
//               </p>
//             </div>

//             <div className="flex lg:mt-[10px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
//               <p className="md:pl-[75px] sm:pl-[35px] xs:pl-[20px] text-[14px]">
//                 already have an account?
//               </p>
//               <a href="/signin" className="pl-[25px] underline text-[14px]">
//                 Sign in
//               </a>
//             </div>

//             <div className="sm:ml-[80px] xs:ml-[20px] mt-[20px]">
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="bg-yellow-dark w-[200px] h-[40px] rounded-md"
//               >
//                 Submit
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <div className="sm:ml-[75px] sm:mt-[30px] xs:ml-[30px] xs:mt-[20px]">
//         <Auth />
//       </div>

//       <div className="ml-[80px] mt-[20px]">
//         <p className="text-black-darkest text-[15px] pt-[0px] sm:pl-[90px] xs:pl-[17px]">
//           Or
//         </p>
//         <button
//           className="bg-white-light border border-black-border
//         sm:mt-[10px] xs:mt-[12px] sm:w-[190px] sm:h-[50px] sm:text-[13px]
//         sm:ml-[0px] xs:ml-[-50px] xs:w-[190px] xs:h-[35px] xs:text-[12px]
//         "
//           // onClick={handleFaceBook}
//         >
//           Continue with Facebook
//         </button>
//         <div
//           className="sm:mt-[-32px] sm:ml-[170px]
//         xs:mt-[-26px] xs:ml-[120px]
//         "
//         >
//           <FaFacebook />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
