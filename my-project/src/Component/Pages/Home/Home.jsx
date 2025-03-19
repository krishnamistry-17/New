import React from "react";
import Card from "../Home/Card"
import Browse from "./Browse";
import Product from "./Product";
import Slider from "./Slider";
import Gallery from "./Gallery";

{/*      xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px", 
        */}

const Home = () => {
  return (
    <>            
        <div className="font-poppins">
          <div>
            <Card/>
         </div>
          <div>
            <Browse/>
          </div>
         <div>
            <Product/>
         </div>
        <div>
            <Slider/>
        </div>
        <div>
           <Gallery/> 
        </div>

      </div>
     
    </>
  );
};

export default Home;

