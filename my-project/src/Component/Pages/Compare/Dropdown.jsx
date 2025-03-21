import React from "react";
import drop from "../../../assets/svgs/Drop.svg";
const Dropdown = () => {
  return (
    <div>
      <button
        className="
    xl:w-[200px] xl:h-[39px]
    lg:w-[190px] lg:h-[39px]
    md:w-[162px] md:h-[39px]
    sm:w-[168px] sm:h-[39px]
    xs:w-[177px] xs:h-[39px]
     bg-yellow-dark font-semibold rounded-lg 
     xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[11px] xs:text-[12px] text-white-light 
    px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-dark"
        type="button"
      >
        Choose a Product{" "}
        <img src={drop} className="ml-[42px] w-5 h-2.5 ms-3 " alt="d" />
      </button>

      {/* <!-- Dropdown menu --> */}
      {/* <div  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */}
    </div>
  );
};

export default Dropdown;
