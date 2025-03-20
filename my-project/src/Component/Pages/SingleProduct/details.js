{
  /* <div className="  h-[730px] bg-white-light ml-[82px]">
  <div>
    <h1 className="text-[42px] text-black-darkest">{product.heading}</h1>
    <div className="flex">
      <p className="text-black-light font-medium text-[24px]">
        {product.price}
      </p>
      <p className="pl-[15px] pt-[4px] text-black-light line-through text-[18px]">
        {product.discount}
      </p>
    </div>
    <div className="flex mt-[15px] mb-[18px]">
      <img className="w-[18px] h-[18px] m-[2px]" src={star} alt="str"></img>
      <img className="w-[18px] h-[18px] m-[2px]" src={star} alt="str"></img>
      <img className="w-[18px] h-[18px] m-[2px]" src={star} alt="str"></img>
      <img className="w-[18px] h-[18px] m-[2px]" src={star} alt="str"></img>
      <img className="w-[18px] h-[18px] m-[2px]" src={starh} alt="str"></img>
      <img className="pl-[18px]" src={linep} alt="lin"></img>
      <p className="text-black-light text-[13px] pl-[22px] pt-[5px] pb-[5px]">
        5 Customer Review
      </p>
    </div>

    <p className=" xl:w-[424px] lg:w-[200px] h-[80px] text-[13px] text-black-darkest">
      {product.para}
    </p>

    <div className="w-[123px] h-[63px]">
      <p className="text-[14px] text-black-light">Size</p>
      <div className="flex mt-[12px]">
        <div className=" w-[30px] h-[30px] bg-yellow-dark rounded-md">
          <p className="text-[13px] text-white-light text-center p-[6px]">L</p>
        </div>
        <div className="ml-[16px] w-[30px] h-[30px] bg-cream-bglight rounded-md">
          <p className="text-[13px] text-black-darkest text-center p-[6px]">
            XL
          </p>
        </div>
        <div className="ml-[16px] w-[30px] h-[30px] bg-cream-bglight rounded-md">
          <p className="text-[13px] text-black-darkest text-center p-[6px]">
            XS
          </p>
        </div>
      </div>
    </div>

    <div className="w-[123px] h-[63px] mt-[18px]">
      <p className="text-[14px] text-black-light">Color</p>
      <div className="flex mt-[12px]">
        <div className=" w-[30px] h-[30px] bg-purple-light rounded-full"></div>
        <div className="ml-[16px] w-[30px] h-[30px] bg-black-darkest rounded-full"></div>
        <div className="ml-[16px] w-[30px] h-[30px] bg-yellow-dark rounded-full"></div>
      </div>
    </div>

    <div className="flex">
      <div className="w-[123px] flex h-[64px] mt-[32px] border border-black-light bg-white-light rounded-lg">
        <img
          className="ml-[15px] my-[20px] w-[9px] h-[24px]"
          src={minus}
          alt="-"
        ></img>
        <p className="font-medium text-[16px] text-black-darkest pl-[35px] py-[20px]">
          1
        </p>
        <img
          className="w-[11px] h-[24px] ml-[35px] my-[20px]"
          src={plus}
          alt="+"
        ></img>
      </div>
      <div className="ml-[18px] w-[215px] h-[64px] mt-[32px] border border-black-light bg-white-light rounded-lg">
        <p className="py-[17px] px-[48px] text-[20px] text-black-darkest">
          Add To Cart
        </p>
      </div>
      <div className=" flex ml-[18px] w-[215px] h-[64px] mt-[32px] border border-black-light bg-white-light rounded-lg">
        <img
          className="w-[16px] h-[35px] ml-[47px] my-[15px]"
          src={plus}
          alt="+"
        ></img>
        <p className="text-[20px] text-black-darkest pl-[10px] py-[17px]">
          Compare
        </p>
      </div>
    </div>

    <hr className="mt-[60px] border-black-border" />

    <div className="mt-[59px]">
      <div className="flex">
        <p className="text-[16px] text-black-light">SKU</p>
        <img className="pl-[61px] pr-[12px]" src={dot} alt="."></img>
        <p className="text-[16px] text-black-light">SS001</p>
      </div>
      <hr className="border-black-border" />

      <div className="flex mt-[18px]">
        <p className="text-[16px] text-black-light">Category</p>
        <img className="pl-[29px] pr-[12px]" src={dot} alt="."></img>
        <p className="text-[16px] text-black-light">Sofas</p>
      </div>

      <div className="flex mt-[12px]">
        <p className="text-[16px] text-black-light">Tags</p>
        <img className="pl-[61px] pr-[12px]" src={dot} alt="."></img>
        <p className="text-[16px] text-black-light">Sofa, Chair, Home, Shop</p>
      </div>

      <div className="flex mt-[14px]">
        <p className="text-[16px] text-black-light">Share</p>
        <img className="pl-[52px] pr-[12px]" src={dot} alt="."></img>
        <img className="ml-[12px]" src={facebook} alt="fcb"></img>
        <img className="ml-[25px]" src={linkdin} alt="lkd"></img>
        <img className="ml-[23px]" src={twitter} alt="twit"></img>
      </div>
    </div>
  </div>
</div>; */
}

<div className="flex flex-col xl:flex-row">
  <div
    className=" flex 
        sm:w-[123px] sm:h-[64px]
        xs:w-[80px] xs:h-[42px]
        mt-[32px]  border border-black-light bg-white-light rounded-lg"
  >
    <img
      className="
          sm:ml-[15px] xs:ml-[10px]
          sm:my-[20px] xs:my-[10px] 
          w-[9px] h-[24px]"
      src={minus}
      alt="-"
    ></img>
    <p
      className="font-medium text-[16px] text-black-darkest
         sm:pl-[35px] sm:py-[20px]
         xs:pl-[15px] xs:py-[10px]
         "
    >
      1
    </p>
    <img
      className="w-[11px] h-[24px]
          sm:ml-[35px] sm:my-[20px]
          xs:ml-[14px] xs:my-[10px]
          "
      src={plus}
      alt="+"
    ></img>
  </div>

  <div
    className="xl:ml-[18px] 
      sm:w-[215px] sm:h-[64px] 
      xs:w-[150px] xs:h-[45px]
      mt-[32px] border border-black-light bg-white-light rounded-lg"
  >
    <p
      className="
        sm:py-[17px] xs:py-[7px]
        sm:px-[48px] xs:px-[24px]
        sm:text-[20px] xs:text-[18px] text-black-darkest"
    >
      Add To Cart
    </p>
  </div>

  <div
    className=" flex 
      xl:ml-[18px] 
      sm:w-[215px] sm:h-[64px] 
      xs:w-[190px] xs:h-[50px]
      mt-[32px] border border-black-light bg-white-light rounded-lg"
  >
    <img
      className="w-[16px] h-[35px] 
          sm:ml-[47px] sm:my-[15px]
          xs:ml-[40px] xs:my-[10px]
          "
      src={plus}
      alt="+"
    ></img>
    <p
      className="
        sm:text-[20px] xs:text-[18px] text-black-darkest 
        sm:pl-[10px] sm:py-[17px]
        xs:pl-[10px] xs:py-[12px]
        "
    >
      Compare
    </p>
  </div>
</div>;
