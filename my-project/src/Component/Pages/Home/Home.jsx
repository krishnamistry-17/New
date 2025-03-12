import React from "react";
import Navbar from "../../Navbar/Navbar";
import Card from "../Home/Card"
import Browse from "./Browse";
import Product from "./Product";
import Slider from "./Slider";
import Gallery from "./Gallery";
import Footer from "../../Footer/Footer";

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
            <Navbar />
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
       <div>
       <Footer/>
       </div>
    
      </div>
     
    </>
  );
};

export default Home;
//alt+ctrl for padding-margin
