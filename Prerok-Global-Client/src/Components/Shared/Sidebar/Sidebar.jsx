import { NavLink } from "react-router-dom";
import logo from "../../../assets/Prerok_Global_Logo.png";
const Sidebar = () => {
    
    const navLinksDashboard = <>
        <NavLink to={"/dashboard/profile"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Profile
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"productTracking"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Bookings
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"/dashboard/address-book"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Address Book
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>

        </NavLink>
        <NavLink to={"/payment-history"} className={({ isActive }) => isActive ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2" : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"}>
            Payment History
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
        <div className="min-h-screen px-2 pt-[5vh] fixed">
            <div className="min-h-[90vh] my-auto flex items-center justify-center flex-col w-full shadow-xl rounded-md text-center ">
                <div>
                    <img src={logo} className="w-52 py-3 mx-3" alt="logo of prerok global" />
                </div>
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