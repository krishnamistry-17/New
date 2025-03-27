import React, { useState } from "react";
import Profile from "../../assets/svgs/Profile.svg";
import Search from "../../assets/svgs/Search.svg";
import Favourite from "../../assets/svgs/Favourite.svg";
import Cart from "../../assets/svgs/Cart.svg";
import Logo from "../../assets/svgs/Logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleHome = () => {
    navigate("/");
  };
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="flex justify-between items-center py-[15px] px-[5px] sm:p-[20px] md:flex-row lg:p-[30px]">
      <div
        className="bg-white h-[15px] sm:h-[20px] p-[15px] sm:p-[20px] 
      flex md:justify-evenly justify-between items-center w-full"
      >
        <img
          src={Logo}
          onClick={handleHome}
          alt="nav-logo"
          className="nav-logo h-[41px] w-[120px] 
          ml-[-10px] sm:w-auto stroke-black sm:h-[40px] md:h-[40px] lg:h-[60px] xl:h-auto"
        />

        <div className="hidden md:flex justify-between items-center w-[430px] h-[37px] text-black">
          <a
            className="p-[10px] text-black inline-block text-[16px] font-medium"
            href="/"
          >
            Home
          </a>
          <a
            className="p-[10px] text-black inline-block text-[16px] font-medium"
            href="/shop"
          >
            Shop
          </a>
          <a
            className="p-[10px] text-black inline-block text-[16px] font-medium"
            href="/about"
          >
            About
          </a>
          <a
            className="p-[10px] text-black inline-block text-[16px] font-medium"
            href="/contact"
          >
            Contact
          </a>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-[60px] right-0 bg-white shadow-lg w-[200px] p-[20px] rounded-md z-10 bg-white-light">
            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/"
            >
              Home
            </a>
            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/shop"
            >
              Shop
            </a>
            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/about"
            >
              About
            </a>
            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="block p-[10px] pr-[4px] text-black text-[16px] font-medium"
              href="/signin"
            >
              Signin /
              <span>
                <a
                  className="pl-[4px] p-[10px] text-black text-[16px] font-medium"
                  href="/signup"
                >
                  Signup
                </a>
              </span>
            </a>

            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/logout"
            >
              Logout
            </a>
          </div>
        )}

        {profileOpen && (
          <div
            className=" absolute 
          xl:top-[67px] xl:right-[180px]
          lg:top-[67px] lg:right-[98px]
          md:top-[67px] md:right-[46px]
          bg-white shadow-lg w-[200px] p-[20px] rounded-md z-10 bg-white-light"
          >
            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/signin"
            >
              Signin
            </a>
            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/signup"
            >
              Signup
            </a>
            <a
              className="block p-[10px] text-black text-[16px] font-medium"
              href="/logout"
            >
              Logout
            </a>
          </div>
        )}
        {/* //sm-md set */}
        <div className="flex justify-between items-center">
          <img
            onClick={handleProfile}
            src={Profile}
            alt="Profile"
            className="w-[24px] h-[24px] md:ml-[15px]  hidden md:block"
          />
          <img
            src={Search}
            alt="Search"
            className="w-[24px] h-[24px] md:ml-[15px] "
          />
          <img
            src={Favourite}
            alt="Fav"
            className="w-[24px] h-[24px] md:ml-[15px] sm:ml-[26px] xs:ml-[20px]"
          />
          <img
            src={Cart}
            alt="Cart"
            onClick={handleCart}
            className="w-[24px] h-[24px] md:ml-[15px] sm:ml-[26px] xs:ml-[20px]"
          />
        </div>
        <div className="flex justify-between items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="md:p-[15px] xs:p-[8px] text-black text-[24px] transform: rotate(90deg)"
            aria-label="Menu"
          >
            &#x2022;&#x2022;&#x2022;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
