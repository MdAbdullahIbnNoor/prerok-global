import { useEffect } from "react";
import contactImg from "../../assets/contact-page-img.jpg";

import { MdOutlineHomeWork } from "react-icons/md";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | PrerokGlobal";
  }, []);
  return (
    <div className="my-10 wrapper overflow-hidden">
      <hr />
      {/* 1st part  */}
      <div className="flex justify-between items-center px-20 mb-20 my-10">
        <div data-aos="fade-up">
          <h1 className="text-3xl text-[#222222] font-bold">CONTACT US</h1>
          <p className="text-xl text-[#acacac]">Get in touch with us easily</p>
        </div>
        <div>
          <p className="text-sm text-[#acacac]">Home / Contact</p>
        </div>
      </div>
      {/* form part */}

      {/* contact  */}
      <div className="flex justify-around mb-14">
        <div className="space-y-8" data-aos="fade-right">
          <div className="flex justify-around space-x-10 items-start">
            <h4 className="font-semibold">UK NUMBERS:</h4>
            <div className=" text-[#acacac] font-semibold">
              <p>+001-2463-957</p>
              <p>+001-2463-957</p>
            </div>
          </div>
          <div className="flex justify-around space-x-10 items-start">
            <h4 className="font-semibold">USA NUMBERS:</h4>
            <div className=" text-[#acacac] font-semibold">
              <p>+001-2463-957</p>
              <p>+001-2463-957</p>
            </div>
          </div>
          <div className="flex justify-around space-x-10 items-start">
            <h4 className="font-semibold ml-1">EMAIL ADDRESS:</h4>
            <div className=" text-[#acacac] font-semibold">
              <p>abir@gmail.com</p>
              <p>exe@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border h-36 mt-10"></div>
        {/* form  */}
        <div>
          <form className="space-y-5" data-aos="fade-left">
            <div className="flex justify-around items-center space-x-10">
              <h4 className="font-semibold">Name: </h4>
              <input
                type="text"
                name="name"
                placeholder=""
                id=""
                className="border rounded-sm w-80 h-11"
              />
            </div>
            <div className="flex justify-around items-center space-x-10">
              <h4 className="font-semibold">Email: </h4>
              <input
                type="text"
                name="name"
                placeholder=""
                id=""
                className="border rounded-sm w-80 h-11"
              />
            </div>
            <div className="flex justify-around items-center space-x-10">
              <h4 className="font-semibold">Phone: </h4>
              <input
                type="text"
                name="name"
                placeholder=""
                id=""
                className="border rounded-sm w-80 h-11"
              />
            </div>
            <div className="flex justify-around items-center space-x-9">
              <h4 className="font-semibold">Message: </h4>
              <textarea
                type="text"
                name="name"
                placeholder=""
                id=""
                className="border rounded-sm w-80 h-20"
              />
            </div>
            <input
              type="submit"
              value="Send Message"
              className="px-6 py-3 bg-[#f5ab35] text-white font-bold uppercase rounded-sm ml-[105px] hover:cursor-pointer hover:bg-black text-sm"
            />
          </form>
        </div>
      </div>

      {/* office sections  */}
      <div className="my-10">
        <div>
          <p className="text-center font-bold text-[#222222] uppercase text-4xl">
            Our Office
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 ">
          <div className="card  " data-aos="fade-down">
            <figure className="px-10 pt-10">
              <MdOutlineHomeWork className="text-5xl text-orange-500"></MdOutlineHomeWork>
            </figure>
            <div
              className="card-body items-center text-center"
              data-aos="fade-up"
            >
              <h2 className="card-title">Dhaka</h2>
              <p>5489 2nd ave, Road no-23</p>
              <p>House No-37a</p>
            </div>
          </div>
          <div className="card  " data-aos="fade-down">
            <figure className="px-10 pt-10">
              <MdOutlineHomeWork className="text-5xl text-orange-500"></MdOutlineHomeWork>
            </figure>
            <div
              className="card-body items-center text-center"
              data-aos="fade-up"
            >
              <h2 className="card-title">Rajshahi</h2>
              <p>5489 2nd ave, Road no-23</p>
              <p>House No-37a</p>
            </div>
          </div>
          <div className="card  " data-aos="fade-down">
            <figure className="px-10 pt-10">
              <MdOutlineHomeWork className="text-5xl text-orange-500"></MdOutlineHomeWork>
            </figure>
            <div
              className="card-body items-center text-center"
              data-aos="fade-up"
            >
              <h2 className="card-title">Khulna</h2>
              <p>5489 2nd ave, Road no-23</p>
              <p>House No-37a</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <img src={contactImg} />
      </div>
    </div>
  );
};

export default ContactUs;
