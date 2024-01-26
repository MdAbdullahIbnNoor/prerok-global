import { useState } from "react";
import logo from "../../../assets/Prerok_Global_Logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="bg-slate-800 lg:flex">
        <div className="flex-1  flex flex-row items-center justify-center lg:pl-24 lg:justify-start mx-auto text-white text-xs py-4">
          <div>
            <Link>SITEMAP</Link>
            <span> &nbsp; |&nbsp; </span>
            <Link>PRIVACY</Link>
            <span> &nbsp; |&nbsp; </span>
            <Link>PRICING</Link>
          </div>
        </div>
        <div className="py-4 flex-1 flex justify-center">
          <div className="mx-3 flex flex-row items-center">
            <span className="text-white">Call us now: </span>
            <span className="text-yellow-600"> +880-1756-390-370</span>
          </div>
          <button className="btn bg-yellow-400 w-32 h-10 flex text-center items-center justify-center">
            SIGN IN
          </button>
        </div>
      </div>
      <nav className=" p-4 w-[90%] mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} className="w-40 h-16" alt="Prerok-Global Logo" />
          </div>
          <div
            className={`   py-4 px-8 md:flex lg:space-x-12 md:space-x-8 space-x-2 ${
              isMobileMenuOpen
                ? "block absolute text-white bg-gray-600"
                : "hidden"
            }`}
          >
            <NavLink to={"/"} className=" ">
              Home
            </NavLink>
            <NavLink to={"/about"} className=" ">
              About
            </NavLink>
            <NavLink to={"#"} className=" ">
              Tracking
            </NavLink>
            <NavLink to={"#"} className=" ">
              Pricing
            </NavLink>
            <NavLink to={"/contact"} className=" ">
              Contact
            </NavLink>
            <NavLink to={"/customsDocument"} className=" ">
              Customs
            </NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
            >
              <path
                fill="#B197FC"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </div>

          <div className="md:hidden">
            <button className=" " onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
