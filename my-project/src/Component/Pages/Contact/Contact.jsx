import React from "react";
import ContactBg from "./ContactBg";
import ContactAd from "./ContactAd";
import ContactDetail from "./ContactDetail";

const Contact = () => {
  return (
    <>
      <div>
        <ContactBg />
      </div>
      <div>
        <ContactDetail />
      </div>
      <div>
        <ContactAd />
      </div>
    </>
  );
};

export default Contact;
