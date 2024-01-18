import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

// import  Link  from "react-router-dom";
const Footer = () => {
  return <div className="relative">
    <div className=" px-4 md:px-20 mt-20 bg-gray-800 text-white min-h-[70vh] ">
    <div className="md:flex justify-between items-center space-y-20 ">
      <div className="pt-10">
        {/* logo section  */}
        <h1 className="text-4xl font-bold">PrerokGlobal</h1>
      </div>

      <div>
        <h1 className="font-bold text-xl">QUICK LINKS</h1>
        <div className="flex flex-col space-y-5 mt-5 ">
          {/* <Link></Link> */}
          <a href="#">SITEMAP</a>
          <a href="#">PRICING</a>
          <a href="#">PAYMENT METHOD</a>
          <a href="#">SUPPORT</a>
        </div>

      </div>

      <div>
      <h1 className="font-bold text-xl">IMPORTANT LINKS</h1>
        <div className="flex flex-col space-y-5 mt-5">
          {/* <Link></Link> */}
          <a href="#">THEMEFOREST</a>
          <a href="#">ENVATO</a>
          <a href="#">AUDIOJUNGLE </a>
          <a href="#">VIDEOHIBE</a>
        </div>
      </div>

    {/* icon section  */}
      <div>
        <h1 className="font-bold text-xl">GET IN TOUCH</h1>
       <div className="flex gap-2 mt-4">
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
       
      </div>
    </div>
 
    </div>
    <div className=" bg-gray-900 w-full md:h-16 absolute bottom-0">
<div className="md:flex justify-between px-5 my-5 md:px-20 mt-5 items-center">
<h1 className="text-gray-300">© Copyright 2024, All rights reserved</h1>
  <h1 className="text-gray-300">Design by PrerokGlobal Company</h1>
</div>
</div>
   
    </div>;
};

export default Footer;