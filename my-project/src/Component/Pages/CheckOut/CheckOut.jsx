import React from "react";
import CheckBg from "./CheckBg";
import CheckAd from "./CheckAd";
import CheckOutDetails from "./CheckOutDetails";

const CheckOut = () => {
  return (
    <>
      <div>
        <CheckBg />
      </div>
      <div>
        <CheckOutDetails />
      </div>
      <div>
        <CheckAd />
      </div>
    </>
  );
};

export default CheckOut;
