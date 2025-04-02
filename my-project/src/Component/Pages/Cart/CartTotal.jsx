/** @format */

import React, { useContext, useEffect, useState } from "react";
import dust from "../../../assets/svgs/Delete.svg";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Context/CartProvider";

const CartTotal = () => {
  const navigate = useNavigate();

  //get data from context
  const { cartItems, removeItem, updateItemQuantity } = useContext(CartContext);

  const [subtotal, setSubTotal] = useState(0);
  const handleClick = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    console.log("cartItems", cartItems);
    if (cartItems.length === 0) {
      setSubTotal(0);
      console.log("cart is empty");
      return;
    }
    const calculatedSubTotal = cartItems.reduce((acc, item) => {
      const priceWithoutRp = item.price.replace("Rp.", ""); // Remove "Rp."
      return acc + priceWithoutRp * item.quantity;
    }, 0);
    console.log("calculatedsubtotal", calculatedSubTotal);
    setSubTotal(calculatedSubTotal);
  }, [cartItems]);

  const handleDelete = (id) => {
    removeItem(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateItemQuantity(id, newQuantity);
    }
    console.log(newQuantity);
  };

  return (
    <div className="bg-white-light h-[700px] font-poppins">
      <div
        className="bg-white-light 
      xl:mx-[100px] xl:mt-[72px] xl:mb-[85px]
      lg:mx-[20px] lg:my-[20px]
      md:mx-[20px] md:my-[20px]
      sm:mx-[0px] sm:my-[20px]

      ">
        <div className="md:flex">
          {/*left */}
          <div
            className=" 
          xl:w-[817px] xl:h-[55px]
          lg:w-[600px] lg:h-[55px]
          md:w-[400px] md:h-[55px]
          sm:w-full sm:h-[55px]
          bg-cream-bglight 
          xl:mr-[30px] lg:mr-[20px]
           md:mr-[20px] sm:mr-[3px]">
            <div
              className="sm:flex 
            xl:pl-[142px] xl:pt-[15px] xl:pb-[16px]
            lg:pl-[115px] lg:py-[15px]
            md:pl-[40px] md:py-[15px]
            sm:pl-[10px] sm:py-[15px]
            xs:pl-[25px] xs:pt-[23px] 
            ">
              <div className="sm:mt-[0px] xs:mt-[60px]">
                <h2
                  className="font-medium 
                md:text-[16px]
                sm:text-[14px]
                xs:text-[14px]
                text-black-darkest">
                  Product
                </h2>
              </div>

              <div>
                <h2
                  className="font-medium 
                md:text-[16px]
                sm:text-[14px] xs:text-[14px]
                xl:pl-[114px] lg:pl-[100px]
                md:pl-[54px] sm:pl-[35px] xs:pl-[0px] sm:pt-[0px] xs:pt-[15px]
                text-black-darkest">
                  Price
                </h2>
              </div>

              <div>
                <h2
                  className="font-medium 
               md:text-[16px]
               sm:text-[14px] xs:text-[14px]
                xl:pl-[137px] lg:pl-[70px]
                md:pl-[50px] sm:pl-[40px] xs:pl-[0px] sm:pt-[0px] xs:pt-[16px]
                text-black-darkest">
                  Quantity
                </h2>
              </div>

              <div>
                <h2
                  className="font-medium 
                md:text-[16px]
                sm:text-[14px] xs:text-[14px]
                xl:pl-[36px] lg:pl-[32px]
                md:pl-[20px] sm:pl-[15px] xs:pl-[1px] sm:pt-[0px] xs:pt-[12px]
                text-black-darkest">
                  Subtotal
                </h2>
              </div>
            </div>

            {cartItems?.map((item, index) => (
              <div key={index} className="sm:flex">
                <div
                  className="
                xl:w-[105px] xl:h-[95px]  
                lg:w-[80px] lg:h-[66px]
                md:w-[70px] md:h-[60px]
                sm:w-[60px] sm:h-[43px]
                xs:w-[72px] xs:h-[35px]
                xl:mt-[55px] lg:mt-[42px] md:mt-[40px] sm:mt-[50px] xs:mt-[-210px] lg:ml-[0px] md:ml-[2px] xs:ml-[10px]">
                  <img
                    src={item?.image}
                    alt={item?.heading}
                    className="py-[8px] px-[3px]"
                  />
                </div>

                <div className="sm:mt-[0px] sm:ml-[22px] xs:mt-[48px] xs:ml-[95px]">
                  <p
                    className="text-black-light
                  xl:text-[16px]  lg:text-[15px] md:text-[14px] sm:text-[12px] xs:text-[12px]
                  xl:pl-[34px] lg:pl-[20px] md:pl-[10px] sm:pl-[5px] xs:pl-[5px]
                  xl:pt-[100px] lg:pt-[75px] md:pt-[65px] sm:pt-[55px] xs:pt-[0px]
                  ">
                    {item.heading}
                  </p>
                </div>
                <div className="sm:ml-[0px] xs:ml-[86px]">
                  <p
                    className="text-black-light 
                  xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] xs:text-[12px]
                  xl:pl-[80px] lg:pl-[73px] md:pl-[10px] sm:pl-[5px] xs:pl-[15px]
                  xl:pt-[100px] lg:pt-[75px] md:pt-[65px] sm:pt-[55px] xs:pt-[15px]
                  ">
                    {item.price}
                  </p>
                </div>

                <div
                  className="
                xl:pt-[100px] xl:ml-[67px] 
                lg:pt-[75px] lg:pl-[47px] 
                md:pt-[65px] md:pl-[0px]
                sm:pt-[55px] sm:pl-[15px]
                xs:pt-[15px] xs:pl-[19px] sm:ml-[0px] xs:ml-[81px]
                ">
                  <div className="flex items-center">
                    <button
                      className="border rounded-lg px-2 py-1"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }>
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="border rounded-lg px-2 py-1"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }>
                      +
                    </button>
                  </div>
                </div>
                <div className=" sm:ml-[0px] xs:ml-[78px]">
                  <p
                    className="text-black-darkest
                  xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] xs:text-[12px]
                  xl:pl-[70px] lg:pl-[45px] md:pl-[20px] sm:pl-[15px] xs:pl-[18px]
                  xl:pt-[100px] lg:pt-[75px] md:pt-[65px] sm:pt-[55px] xs:pt-[15px]">
                    {`Rs. ${item.price.replace("Rp.", "") * item.quantity}`}
                  </p>
                </div>
                <div
                  className="
                xl:ml-[65px] xl:mt-[97px]
                lg:ml-[36px] lg:mt-[75px]
                md:ml-[10px] md:mt-[65px]
                sm:ml-[5px] sm:mt-[55px]
                xs:ml-[160px] xs:mt-[-63px]
                ">
                  <img
                    onClick={() => handleDelete(item.id)}
                    src={dust}
                    alt="distbn"
                  />
                </div>
              </div>
            ))}
          </div>

          {/*right */}
          <div
            className="flex-wrap
          xl:w-[393px] xl:h-[390px]
          lg:w-[350px] lg:h-[323px]
          md:w-[300px] md:h-[280px]
          sm:w-full sm:h-[230px]
          md:mt-[0px] sm:mt-[25px]
          bg-cream-bglight">
            <h2
              className="
              xl:pl-[96px] xl:pt-[15px] xl:pr-[118px] 
              lg:px-[90px] lg:pt-[10px] 
              md:px-[80px] md:pt-[10px]
              sm:px-[36px] sm:pt-[10px]
              xs:px-[110px] xs:pt-[50px]
              xl:text-[32px] lg:text-[30px] 
              md:text-[25px] sm:text-[20px] xs:text-[18px]
              font-semibold 
             text-black-darkest">
              Cart Totals
            </h2>

            <div className="flex">
              <div>
                <p
                  className="
                    xl:pl-[75px] xl:pt-[61px] 
                    lg:pl-[70px] lg:pt-[50px]
                    md:pl-[60px] md:pt-[40px]
                    sm:pl-[30px] sm:pt-[20px]
                    xs:pl-[85px] xs:pt-[20px]
                    md:text-[16px] sm:text-[14px] xs:text-[13px]
                    font-medium 
                    text-black-darkest">
                  Subtotal
                </p>
              </div>
              <div
                className="
              xl:pl-[62px] xl:pt-[61px] xl:pr-[75px]
              lg:pl-[55px] lg:pt-[50px]
              md:pl-[50px] md:pt-[45px]
              sm:pl-[13px] sm:pt-[21px]
              xs:pl-[13px] xs:pt-[19px]
              ">
                <p
                  className="text-black-light
                lg:text-[16px] md:text-[15px] sm:text-[13px] xs:text-[13px] ">
                  Rs.{subtotal}
                </p>
              </div>
            </div>

            <div className="flex">
              <div>
                <p
                  className="
              xl:pl-[75px] xl:pt-[31px] 
              lg:pl-[70px] lg:pt-[25px]
              md:pl-[60px] md:pt-[15px]
              sm:pl-[30px] sm:pt-[15px]
              xs:pl-[85px] xs:pt-[13px]
              md:text-[16px] sm:text-[14px] xs:text-[12px]
              font-medium 
             text-black-darkest">
                  Total
                </p>
              </div>
              <div
                className="
              xl:pl-[58px] xl:pt-[31px]
              lg:pl-[55px] lg:pt-[25px]
              md:pl-[50px] md:pt-[15px]
              sm:pl-[25px] sm:pt-[15px]
              xs:pl-[37px] xs:pt-[12px]
              ">
                <p
                  className="font-medium text-yellow-dark 
                lg:text-[20px] md:text-[18px] sm:text-[12px] xs:text-[14px]"></p>
              </div>
            </div>

            <div
              className="
            xl:ml-[86px] xl:mt-[48px]
            lg:ml-[75px] lg:mt-[20px]
            md:ml-[50px] md:mt-[20px]
            sm:mx-[28px] sm:mt-[20px]
            xs:mx-[93px] xs:mt-[20px]
            ">
              <button
                type="submit"
                className=" text-black-darkest border border-black-darkest
                     rounded-xl
                     xl:w-[222px] xl:h-[58px]
                     md:w-[200px] md:h-[55px]
                     sm:w-[130px] sm:h-[45px]
                     xs:w-[130px] xs:h-[40px]
                     md:pl-[59px] md:pt-[13.77px] md:pb-[14.71px] md:pr-[58px]
                     xl:text-[20px] lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[14px] sm:mb-[1px] xs:mb-[25px]
                     "
                onClick={handleClick}>
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
