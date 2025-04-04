// import React, { useState } from 'react';
// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';
// import bcrypt from 'bcryptjs';
// import { useNavigate } from 'react-router-dom';

// const MyForm = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const navigate = useNavigate(); // For navigation

//   // Form validation schema using Yup
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     number: Yup.string()
//       .matches(/^[0-9]{10,}$/, "Enter a valid phone number")
//       .required("Phone number is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm password is required'),
//   });

//   // Custom form submit handler
//   const handleFormSubmit = async (values) => {
//     const { password, confirmPassword, name, email, number } = values;

//     // Password and confirm password check is done using Yup validation
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // Hash password using bcrypt
//     const hashedPassword = await bcrypt.hash(password, 7);

//     const user = {
//       name,
//       email,
//       number,
//       password: hashedPassword,
//     };

//     // Store user data in localStorage
//     localStorage.setItem("user", JSON.stringify(user));
//     console.log("User Data (hashed password):", user);

//     // Update the signed-in state and navigate to the SignIn page
//     setIsSignedIn(true);
//     navigate("/signin"); // Navigate to the SignIn page after successful submission
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         number: '',
//         password: '',
//         confirmPassword: '',
//       }}
//       validationSchema={validationSchema}
//       onSubmit={handleFormSubmit}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           {/* Name Field */}
//           <div>
//             <label>Name</label>
//             <Field
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//             />
//             {errors.name && touched.name && <div>{errors.name}</div>}
//           </div>

//           {/* Email Field */}
//           <div>
//             <label>Email</label>
//             <Field
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//             />
//             {errors.email && touched.email && <div>{errors.email}</div>}
//           </div>

//           {/* Phone Number Field */}
//           <div>
//             <label>Phone Number</label>
//             <Field
//               type="text"
//               name="number"
//               placeholder="Enter your phone number"
//             />
//             {errors.number && touched.number && <div>{errors.number}</div>}
//           </div>

//           {/* Password Field */}
//           <div>
//             <label>Password</label>
//             <Field
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//             />
//             {errors.password && touched.password && <div>{errors.password}</div>}
//           </div>

//           {/* Confirm Password Field */}
//           <div>
//             <label>Confirm Password</label>
//             <Field
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//             />
//             {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}
//           </div>

//           {/* Submit Button */}
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default MyForm;
