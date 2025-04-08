import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Cart/Context/CartProvider";
import { Field, Formik } from "formik";
import * as Yup from "yup";

const CheckOutDetails = () => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubTotal] = useState(0);
  const [isSelected, setSelected] = useState("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleMessage = () => {
    alert("Your order has been placed");
  };
  console.log(fname);

  const handleMethodChange = (e) => {
    setSelected(e.target.value);
  };

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log("cartItems", cartItems);
    if (cartItems.length === 0) {
      setSubTotal(0);
      console.log("cart is empty");
      return;
    }

    const calculatedSubTotal = cartItems.reduce((acc, item) => {
      const priceWithoutRp = item.price.replace("Rp.", ""); // Remove "Rp."
      return acc + priceWithoutRp * item.quantity; //for this total is reepeated
    }, 0);

    setSubTotal(calculatedSubTotal);
    console.log("calculated subtotal", calculatedSubTotal);

    const calculatedTotal = calculatedSubTotal;

    setTotal(calculatedTotal);
    console.log("calculated Total :", calculatedTotal);
  }, [cartItems]);

  return (
    <div className="bg-white-light w-full h-[1829px] font-poppins">
      <div
        className="bg-white-light w-full h-[1970px] 
      xl:pl-[100px] xl:pr-[98px] xl:pt-[63px] xl:pb-[52px]
      "
      >
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            companyname: "",
            country: "",
            address: "",
            city: "",
            province: "",
            code: "",
            phone: "",
            email: "",
          }}
          // onChange={() => console.log("changing")}
          onSubmit={(values) => console.log(values)}
          validationSchema={Yup.object().shape({
            fname: Yup.string().required("First Name is required"),
            lname: Yup.string().required("Last Name is required"),
            companyname: Yup.string().required("Companyname is required"),
            country: Yup.string().required("Country is required"),
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            province: Yup.string().required("Province is required"),
            code: Yup.number().required("Code is required"),
            phone: Yup.number().required("Phone Number is required"),
            email: Yup.string().required("Email is required"),
          })}
        >
          {({ errors, touched, handleChange }) => (
            <div className="md:flex">
              {/*left */}
              <div className="bg-white-light max-w-[608px] h-[1714px] lg:mr-[26px] md:mr-[2px]">
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
                <form>
                  <div className="md:flex mt-[36px]">
                    {/*first */}
                    <div className="xl:mr-[30px] lg:mr-[20px] md:mr-[10px] sm:mr-[23px] xs:mr-[20px]">
                      <label
                        className="font-medium text-black-darkest 
      lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]
      sm:pl-[75px] xs:pl-[30px] pt-[36px]"
                      >
                        First Name<span className="text-red-700">*</span>
                      </label>
                      <Field
                        type="text"
                        name="fname"
                        className=" bg-white-light border border-black-light rounded-lg 
        xl:w-[211px] xl:h-[75px] pl-[15px]
                  lg:w-[162px] lg:h-[70px]
                  md:w-[120px] md:h-[42px]
                  sm:w-[350px] sm:h-[50px]
                  xs:w-[100%] xs:h-[35px]
                  xl:ml-[76px] xl:mt-[22px]
                  lg:ml-[70px] lg:mt-[20px]
                  md:ml-[70px] md:mt-[18px]
                  sm:ml-[70px] sm:mt-[17px]
                  xs:mx-[10px] xs:mt-[16px]
                  "
                      />
                      <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px] md:text-[12px]">
                        {errors.fname && touched.fname && (
                          <div>{errors.fname}</div>
                        )}
                      </p>
                    </div>
                    {/*last */}
                    <div className="md:mt-[0px] sm:mt-[36px] xs:mt-[36px]">
                      <label
                        className="font-medium text-black-darkest 
                lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] 
                pt-[36px] md:pl-[0px]  sm:pl-[75px] xs:pl-[30px]"
                      >
                        Last Name<span className="text-red-700">*</span>
                      </label>
                      <Field
                        type="text"
                        name="lname"
                        className=" bg-white-light border border-black-light rounded-lg 
                  xl:w-[211px] xl:h-[75px] pl-[15px]
                  lg:w-[162px] lg:h-[70px]
                  md:w-[120px] md:h-[42px]
                 sm:w-[350px] sm:h-[50px]
                  xs:w-[93%] xs:h-[35px]

                  xl:mt-[22px] 
                  lg:mt-[20px] 
                  md:mt-[18px] md:ml-[0px]
                  sm:ml-[70px] sm:mt-[17px]
                  xs:mt-[16px] xs:mx-[10px]
                  "
                      />
                      <p className=" text-red-700 sm:pl-[11px] xs:pl-[25px] sm:pt-[4px] xs:pt-[8px] text-[13px] md:text-[12px]">
                        {errors.lname && touched.lname && (
                          <div>{errors.lname}</div>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className=" pt-[36px] font-medium text-black-darkest 
                sm:pl-[75px] xs:pl-[30px]
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
                    >
                      Company Name
                      <span className="text-red-700">*</span>
                    </label>
                    <Field
                      type="text"
                      name="companyname"
                      className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] pl-[15px]
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
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.companyname && touched.companyname && (
                        <div>{errors.companyname}</div>
                      )}
                    </p>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className="text-black-darkest font-medium 
              lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] 
              sm:pl-[75px] xs:pl-[30px] pt-[36px]"
                    >
                      Country / Region<span className="text-red-700">*</span>
                    </label>
                    <select
                      type="text"
                      name="country"
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
                lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] pl-[15px] py-[25px]"
                      placeholder="Sri Lanka"
                    >
                      <option>India</option>
                      <option>USA</option>
                      <option>London</option>
                    </select>
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.country && touched.country && (
                        <div>{errors.country}</div>
                      )}
                    </p>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className="sm:pl-[75px] xs:pl-[30px] pt-[60px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
                    >
                      Street address<span className="text-red-700">*</span>
                    </label>
                    <Field
                      type="text"
                      name="address"
                      className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] pl-[15px]
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
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.address && touched.address && (
                        <div>{errors.address}</div>
                      )}
                    </p>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className="sm:pl-[75px] xs:pl-[30px] pt-[36px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
                    >
                      Town / City<span className="text-red-700">*</span>
                    </label>
                    <Field
                      type="text"
                      name="city"
                      className="max-w-full bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] pl-[15px]
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
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.city && touched.city && <div>{errors.city}</div>}
                    </p>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className="text-black-darkest font-medium 
              lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] sm:pl-[75px] xs:pl-[30px] pt-[36px]"
                    >
                      Province<span className="text-red-700">*</span>
                    </label>
                    <select
                      type="text"
                      name="province"
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
                xl:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px] pl-[15px] py-[25px]"
                      placeholder="Western Province"
                    >
                      <option>Western Province</option>
                      <option>Alberta</option>
                      <option>Ontario</option>
                      <option>Quebec</option>
                    </select>
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.province && touched.province && (
                        <div>{errors.province}</div>
                      )}
                    </p>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className="sm:pl-[75px] xs:pl-[30px] pt-[60px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
                    >
                      ZIP code<span className="text-red-700">*</span>
                    </label>
                    <Field
                      type="number"
                      name="code"
                      className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] pl-[15px]
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
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.code && touched.code && <div>{errors.code}</div>}
                    </p>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className="sm:pl-[75px] xs:pl-[30px] pt-[36px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
                    >
                      Phone<span className="text-red-700">*</span>
                    </label>
                    <Field
                      type="number"
                      name="phone"
                      className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] pl-[15px]
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
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.phone && touched.phone && (
                        <div>{errors.phone}</div>
                      )}
                    </p>
                  </div>

                  <div className="mt-[36px]">
                    <label
                      className="sm:pl-[75px] xs:pl-[30px] pt-[36px] font-medium text-black-darkest 
                 lg:text-[16px] md:text-[15px] sm:text-[14px] xs:text-[13px]"
                    >
                      Email address<span className="text-red-700">*</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="bg-white-light border border-black-light rounded-md
                xl:w-[453px] xl:h-[75px] pl-[15px]
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
                    <p className=" text-red-700 sm:pl-[75px] xs:pl-[25px]  sm:pt-[4px] xs:pt-[8px] text-[13px]">
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                    </p>
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
                pl-[15px] py-[25px]
                "
                      placeholder="Additional information"
                    />
                  </div>
                </form>
              </div>

              {/*right */}
              <div
                className="bg-white-light 
          lg:w-[608px] h-[789px] font-poppins 
          md:mt-[63px] sm:mt-[-250px] xs:mt-[-180px]"
              >
                <div
                  className="bg-white-light lg:w-[533px] h-[800px] 
            md:px-[38px] md:py-[87px]
            sm:px-[70px] sm:py-[30px] md:mb-[0px] sm:mb-[25px]
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

                  {cartItems.map((item, index) => (
                    <div key={index}>
                      <div className="flex">
                        <div className="flex md:pt-[14px] sm:pt-[13px] xs:pt-[12px]">
                          <p
                            className="text-black-light 
                   lg:text-[20px] md:text-[16px] sm:text-[15px] xs:text-[14px] "
                          >
                            {item.heading}
                          </p>
                          <p
                            className="pl-[9px] pt-[5px] font-medium text-black-darkest 
                    md:text-[15px] sm:text-[14px] xs:text-[13px]"
                          >
                            X
                          </p>
                          <p
                            className="pl-[10px] pt-[2px] font-medium text-black-darkest 
                     lg:text-[20px] md:text-[16px] sm:text-[15px] xs:text-[14px]"
                          >
                            {item.quantity}
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-black-darkest font-light 
                    lg:text-[20px]  md:text-[16px] sm:text-[15px] xs:text-[14px]
                    lg:pl-[255px] lg:pt-[14px] 
                    md:pl-[130px] md:pt-[14px]
                    sm:pl-[113px] sm:pt-[13px]
                    xs:pl-[78px] xs:pt-[12px]
                    "
                          >
                            {`Rs. ${
                              item.price.replace("Rp.", "") * item.quantity
                            }`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div>
                    <p
                      className="
                    lg:pt-[22px] md:pt-[15px]
                    sm:pt-[13px] xs:pt-[13px]
                    text-black-darkest 
                    lg:text-[24px] md:text-[20px] sm:text-[19px] xs:text-[17px]"
                    >
                      SubTotal{" "}
                      <span
                        className="text-black-darkest 
                  lg:text-[24px] lg:pl-[261px]
                  md:text-[20px] md:pl-[133px]
                  sm:text-[19px] xs:text-[17px] sm:pl-[117px] xs:pl-[91px]
                  "
                      >
                        Rs.{subtotal}
                      </span>
                    </p>
                    <p
                      className="text-black-darkest 
                   lg:text-[27px] md:text-[20px] sm:text-[20px] xs:text-[20px] 
                    md:pt-[12px] sm:pt-[9px] xs:pt-[10px]"
                    >
                      Total{" "}
                      <span
                        className="text-yellow-dark font-bold 
                      lg:text-[27px] md:text-[22px]
                      sm:text-[22px] xs:text-[22px]
                      pt-[16px] 
                      lg:pl-[280px] md:pl-[155px]
                      sm:pl-[131px] xs:pl-[100px]
                      "
                      >
                        Rs.{total}
                      </span>
                    </p>
                  </div>

                  <hr className="border-black-border mt-[39.5px]" />

                  <div className=" flex">
                    {isSelected === "CashDelivery" ? (
                      <p
                        className="text-black-darkest 
                  lg:text-[18px] md:text-[14px] sm:text-[13px] xs:text-[12px]
                  md:pt-[22.5px] md:pl-[0px]
                  sm:pt-[27px] sm:pl-[14px]
                  xs:pt-[26px] xs:pl-[0px]
                  "
                      >
                        Cash On Delivery
                      </p>
                    ) : (
                      <p
                        className="text-black-darkest 
                  lg:text-[18px] md:text-[14px] sm:text-[13px] xs:text-[12px]
                  md:pt-[22.5px] md:pl-[0px]
                  sm:pt-[27px] sm:pl-[14px]
                  xs:pt-[26px] xs:pl-[0px]
                  "
                      >
                        {" "}
                        Direct Bank Transfer
                      </p>
                    )}
                  </div>

                  <p
                    className="font-light text-black-light 
              lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]
              lg:w-[477px] lg:h-[72px]
              md:w-[330px] sm:w-[307px] xs:w-[280px]
              pt-[11px]"
                  >
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>

                  <div>
                    <div className="flex">
                      <input
                        type="radio"
                        value="BankTransfer"
                        className="mt-[25px]"
                        checked={isSelected === "BankTransfer"}
                        onChange={handleMethodChange}
                      />
                      <p
                        className="mt-[25px] pl-[15px] font-medium text-black-light 
                lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px]"
                      >
                        {" "}
                        Direct Bank Transfer
                      </p>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        value="CashDelivery"
                        className="mt-[12px]"
                        checked={isSelected === "CashDelivery"}
                        onChange={handleMethodChange}
                      />
                      <p
                        className="pl-[15px] font-medium text-black-light 
                lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px] pt-[12px]"
                      >
                        {" "}
                        Cash On Delivery
                      </p>
                    </div>
                  </div>

                  <p
                    className="pt-[22px] font-light text-black-darkest 
              lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px] 
              lg:w-[481px] lg:h-[72px]
              md:w-[340px] sm:w-[316px] xs:w-[285px]
              "
                  >
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
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
                      onClick={handleMessage}
                    >
                      Place order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckOutDetails;
