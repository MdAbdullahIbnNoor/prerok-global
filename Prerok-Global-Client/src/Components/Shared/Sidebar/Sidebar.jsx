import { NavLink } from "react-router-dom";
import logo from "../../../assets/Prerok_Global_Logo.png";
import { useState } from "react";
import Hamburger from "hamburger-react";
const Sidebar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinksDashboard = <>

        <NavLink to={"/dashboard/bookings"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Bookings
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink>
        <NavLink to={"/dashboard/address-book"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Address Book
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        {/* <NavLink to={"/dashboard/payment"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Payment 
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink> */}
       
        <NavLink to={"/dashboard/create-booking"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Create Booking
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink>
        <NavLink to={"/dashboard/pricing/1"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Add Booking
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink>
        <NavLink to={"/dashboard/booking-details"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Booking Details
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink>
        <NavLink to={"/dashboard/payment-history"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Payment History
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink>
        <NavLink to={"/dashboard/profile"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Profile
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink>
        <NavLink to={"/support"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Support
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
        </NavLink>
    </>
    const navLinks = <>
        <NavLink to={"/"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Home
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"productTracking"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Tracking
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"/shipping"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Shipping
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"/support"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Support
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"/customDocument"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Customs
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"/placeOrder"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2"}>
            Place Order
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-center transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
        </NavLink>
    </>
    return (
        <div className="min-h-screen lg:px-2 pt-1 md:mt-[5vh] fixed lg:w-auto w-full">
            {/* menu dropdown */}
            <div className='lg:hidden flex items-center justify-between mx-2 bg-white shadow-md'>
                <Hamburger toggled={isMobileMenuOpen} toggle={setMobileMenuOpen} />
                <div>
                    <img src={logo} className="w-36 py-3 mx-3" alt="logo of prerok global" />
                </div>
            </div>
            <div className="min-h-[90vh] hidden w-72 my-auto lg:flex items-center justify-center flex-col shadow-xl rounded-md text-center ">
                <div className="fixed top-6">
                    <img src={logo} className="w-52 py-3 mx-3" alt="logo of prerok global" />
                </div>
                <div className="py-[113px]">
                    <div className="flex flex-col gap-3">
                        {navLinksDashboard}
                    </div>
                    <hr className="my-6" />
                    <div className="flex flex-col gap-3">
                        {navLinks}
                    </div>
                </div>
            </div>

            <div className={`min-h-[90vh] lg:hidden my-auto flex items-center justify-center flex-col w-56 bg-white shadow-xl rounded-md text-center  ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-[500px] opacity-50"} transition duration-300`}>
                <div className="">
                    <div className="flex flex-col gap-3">
                        {navLinksDashboard}
                    </div>
                    <hr className="my-6" />
                    <div className="flex flex-col gap-3">
                        {navLinks}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;