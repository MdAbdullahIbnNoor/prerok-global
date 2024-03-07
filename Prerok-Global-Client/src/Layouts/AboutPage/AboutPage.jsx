/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import deliveryVanImg from '../../assets/images/About/deliveryVan.jpg'
import { IoMdRocket } from "react-icons/io";
import { SiFsecure } from "react-icons/si";
import { TbWorldPin } from "react-icons/tb";
import { useEffect } from "react";



const AboutPage = () => {
    useEffect(() => {
      document.title = "About Us | PrerokGlobal";
    }, []);
    return (
        <div className="overflow-hidden"> 
            <div className="wrapper my-10">
                {/* about heading */}
                <div className="flex items-center justify-between relative">
                    <div data-aos="fade-right">
                        <p className="text-2xl font-black uppercase">About Us</p>
                        <h1 className="text-8xl uppercase absolute -left-1/4 font-bold text-black/5 top-40 -z-40">About</h1>
                        <p className="text-[#ACACAC]">Know about us more</p>
                    </div>
                    <div className="text-[#ACACAC] flex gap-2 text-sm">
                        <Link to="/">
                            <button className="uppercase">Home</button>
                        </Link>
                        /
                        <button className="uppercase">About</button>
                    </div>
                </div>

                {/* about details and image */}
                <div className="flex flex-col md:flex-row my-10 items-center justify-center">
                    <div className="flex-1" data-aos="fade-right">
                        <p className="max-w-xl text-[#ACACAC]">
                            Welcome to PrerokGlobal where innovation meets reliability in global shipping. As a dedicated team, we're
                            passionate about simplifying international logistics. With cutting-edge technology, transparent practices, and a
                            user-friendly approach, we're redefining the shipping experience. Join us in connecting the world seamlessly, one
                            shipment at a time.
                        </p>
                        <div className="space-y-3 my-6">
                            <div className="flex items-center justify-start gap-3">
                                <IoMdRocket className="text-4xl"></IoMdRocket>
                                <div>
                                    <h5 className="uppercase font-semibold">Fast Delivery</h5>
                                    <p className="text-[#ACACAC]">Very Fastest Delivery From Anywhere</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-3">
                                <SiFsecure className="text-4xl"></SiFsecure>
                                <div>
                                    <h5 className="uppercase font-semibold">Secured Service</h5>
                                    <p className="text-[#ACACAC]">Very Secured Service For Everyone</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-3">
                                <TbWorldPin className="text-4xl"></TbWorldPin>
                                <div>
                                    <h5 className="uppercase font-semibold">Worldwide Shipping</h5>
                                    <p className="text-[#ACACAC]">Shipping Are Available For Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1" data-aos="fade-left">
                        <img src={deliveryVanImg} alt="delivery van image" />
                    </div>
                </div>

                {/* about cards */}
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <div className="px-8 py-10 border relative" data-aos="fade-right">
                        <div className="absolute top-0 left-0 right-0 h-[1px] w-2/3 mx-auto bg-[#f5ab35]"></div>
                        <h3 className="font-semibold uppercase mb-6">What we do</h3>
                        <p className="box text-[#ACACAC]">
                            We are a passionate team of professionals driven by innovation and a commitment to excellence. With years of experience in the logistics industry, we recognized the need for a comprehensive and user-friendly platform that simplifies the complexities of international shipping.
                        </p>
                    </div>
                    <div className="px-8 py-10 border relative" data-aos="fade-up">
                        <div className="absolute top-0 left-0 right-0 h-[1px] w-2/3 mx-auto bg-[#f5ab35]"></div>
                        <h3 className="font-semibold uppercase mb-6">Our History</h3>
                        <p className="box text-[#ACACAC]">
                            Founded in 2024,  swiftly transformed global shipping. Pioneering innovation and simplicity, our journey reflects a commitment to redefining logistics. From inception to now, we continue to reshape the future of seamless, efficient shipping.
                        </p>
                    </div>
                    <div className="px-8 py-10 border relative" data-aos="fade-left">
                        <div className="absolute top-0 left-0 right-0 h-[1px] w-2/3 mx-auto bg-[#f5ab35]"></div>
                        <h3 className="font-semibold uppercase mb-6">Our Mission</h3>
                        <p className="box text-[#ACACAC]">
                            Revolutionizing global shipping with innovation and reliability. We're committed to simplifying logistics, ensuring seamless and effortless experiences for all. Join us in shaping the future of efficient global shipping.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;