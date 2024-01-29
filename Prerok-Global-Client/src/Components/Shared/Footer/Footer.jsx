import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../../../../public/Prerok_Global.png";
import "./Footer.css";
import visa from "../../../../public/visa.webp";
import paypal from "../../../../public/paypal.png";
import stripe from "../../../../public/stripe.png";
import ssl from "../../../../public/ssl_commerz.png";
import { Link } from "react-router-dom";

// import  Link  from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative containerB">
      <div className="overlyB px-4 md:px-20 mt-20 bg-gray-800 text-white min-h-[40vh] ">
        <div className="md:flex justify-between items-center space-y-20 ">
          <div className="pt-10">
            {/* logo section  */}
            <div className="">
              <img className="w-28" src={logo} alt="" />
              <h1 className="text-2xl font-bold">
                {" "}
                <span className="text-2xl"> Prerok</span>{" "}
                <span className="text-yellow-500"> Global</span>{" "}
              </h1>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl">QUICK LINKS</h1>
            <div className="flex flex-col space-y-5 mt-5 ">
              {/* <Link></Link> */}
              <Link to="#">SITEMAP</Link>
              <Link to="#">PRICING</Link>
              <Link to="#">PAYMENT METHOD</Link>
              <Link to="#">SUPPORT</Link>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl">IMPORTANT LINKS</h1>
            <div className="flex flex-col space-y-5 mt-5">
              {/* <Link></Link> */}
              <Link to="/faq">FAQ</Link>
              <Link to={"/about"} className=" ">
                About
              </Link>
              <Link to={"/contact"} className=" ">
                Contact
              </Link>
              <Link to="#">Returns and Refunds</Link>
            </div>
          </div>

          {/* icon section  */}
          <div>
            <h1 className="font-bold text-xl">GET IN TOUCH</h1>
            <div className="flex gap-2 pb-7 mt-4">
              <div className="">
                <FaFacebook className="text-2xl text-gray-500 hover:text-gray-300 " />
              </div>
              <div className="">
                <FaLinkedin className="text-2xl text-gray-500 hover:text-gray-300 " />
              </div>
              <div className="">
                <FaTwitter className="text-2xl text-gray-500 hover:text-gray-300 " />
              </div>
              <div className=" ">
                <FaGithub className="text-2xl text-gray-500 hover:text-gray-300 " />
              </div>
            </div>

            <div className="flex gap-1">
              <img className="w-16" src={paypal} alt="paypal" />
              <img className="w-16" src={visa} alt="visa card " />
              <img className="w-16" src={ssl} alt="sslcomarz" />
              <img className="w-16" src={stripe} alt="stripe" />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-900 w-full md:h-16  bottom-0">
        <div className="md:flex justify-between px-5 py-5 md:px-20 items-center">
          <h1 className="text-gray-300">
            © Copyright 2024, All rights reserved
          </h1>
          <h1 className="text-gray-300">
            Design by <span className="text-lg font-semibold">Prerok</span>
            <span className="text-lg font-semibold text-yellow-500">
              Global
            </span>{" "}
            Company
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
