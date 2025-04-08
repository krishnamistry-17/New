import React, { useEffect, useState } from "react";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";
import image6 from "../../../assets/images/image6.png";
import image7 from "../../../assets/images/image7.png";
import image8 from "../../../assets/images/image8.png";
import image9 from "../../../assets/images/image9.png";

const Gallery = () => {
  const [posts, setPosts] = useState([]);

  const data = [
    { product1: image1, product2: image2, product3: image3 },
    { product4: image4, product5: image5, product6: image6 },
    { product7: image7, product8: image8, product9: image9 },
    { product10: image1, product11: image5, product12: image7 },
  ];

  const loadData = () => {
    setPosts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="w-full max-w-[356px] mx-auto text-center justify-center">
        <p
          className="text-[20px] md:text-[20px]
                      sm:text-[15px] xs:text-[12px] mt-[67px]
                       text-gray-lightpara font-semibold"
        >
          Share your setup with
        </p>
        <h1
          className="text-[40px]
                      md:text-[40px] sm:text-[25px]
                       xs:text-[20px] font-bold
                        text-black-dark"
        >
          #FuniroFurniture
        </h1>
      </div>

      <div className="gallery p-[20px]">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <div key={index} className="grid gap-4">
              {Object.keys(post).map(
                (
                  key,
                  id ////Object.keys(post).map it shows that all product are rendered ,
                ) => (
                  // iterart each img and render it
                  <div key={id}>
                    <img
                      src={post[key]}
                      alt={key}
                      className="h-auto w-full max-w-full object-cover"
                    ></img>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Gallery;

// <div className='w-full h-auto bg-white-light'>

//     <div className="w-full max-w-[356px] mx-auto text-center justify-center">
//         <p className="text-[20px] md:text-[20px]
//         sm:text-[15px] xs:text-[12px] mt-[67px]
//         text-gray-lightpara font-semibold">
//         Share your setup with
//         </p>
//         <h1 className="text-[40px]
//         md:text-[40px] sm:text-[25px]
//         xs:text-[20px] font-bold
//         text-black-dark">
//         #FuniroFurniture
//         </h1>
//     </div>

//     <div className='gallery p-[20px]'>
//         <div className="grid
//         xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
//             <div className="grid gap-4">
//                 <div>
//                     <img className="h-auto max-w-full w-full object-cover
//                     "
//                     src={image1} alt='im1'
//                     />
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     "
//                     src={image2} alt="im2"
//                     />
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     "
//                     src={image1} alt="im1r"/>
//                 </div>
//             </div>

//             <div className="grid gap-2 ">
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     "
//                     src={image3} alt="im3"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     " src={image4} alt="im4"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image3} alt="im3r"/>
//                 </div>
//             </div>
//             <div className="grid gap-2">
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image5} alt="im5"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image6} alt="im6"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image7} alt="im7"/>
//                 </div>
//             </div>
//             <div className="grid gap-2">
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image8} alt="im8"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image9} alt="im9"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image2} alt="im2r"/>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
