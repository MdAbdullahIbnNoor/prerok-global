import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";


const FAQ = () => {
    return (
        <div>
            <div className="md:flex">
                {/* dashboard side bar */}
                <div className="w-80 h-fit bg-white flex justify-center text-white">
                    <ul className="menu p-4 space-y-3">


                        {/* Shared Navlinks */}

                        <div className="divider"></div>

                        {/* <li className=""><NavLink to='generelfaq' className={({ isActive }) => isActive ? 'text-[#f5ab35] border-[#f5ab35] font-semibold border-2 px-4 mx-2 py-2' : 'text-black border-2 px-4 mx-5 py-2 border-black'}><span><FaEnvelopeOpenText /></span> GENERAL INQUIRIES</NavLink></li> */}

                        <li className={({ isActive }) => isActive ? 'border-2 border-[#f5ab35] px-4 mx-5 py-2' : 'text-black border-2 px-4 mx-5 py-2 border-black'}><NavLink to='generelfaq' className={({ isActive }) => isActive ? 'text-[#f5ab35] font-semibold' : 'text-black'}><span ><FaEnvelopeOpenText /></span> GENERAL INQUIRIES</NavLink></li>

                        <li className={({ isActive }) => isActive ? 'border-2 border-[#f5ab35] px-4 mx-5 py-2' : 'text-black border-2 px-4 mx-5 py-2 border-black'}><NavLink to='securityfaq' className={({ isActive }) => isActive ? 'text-[#f5ab35] font-semibold' : 'text-black'}><span className="text-xl"><MdOutlineSecurity /></span> PERMISSIONS & PRIVACY</NavLink></li>

                        <li className={({ isActive }) => isActive ? 'border-2 border-[#f5ab35] px-4 mx-5 py-2' : 'text-black border-2 px-4 mx-5 py-2 border-black'}><NavLink to='featurefaq' className={({ isActive }) => isActive ? 'text-[#f5ab35] font-semibold' : 'text-black'}><span className="text-xl"><MdOutlineStarRate /></span> PREROK-GLOBAL FEATURES</NavLink></li>

                        
                        {/* <li className='border-2 px-4 mx-5 py-2 border-black'><NavLink to='securityfaq' className='text-center text-black font-semibold'>Security</NavLink></li> */}

                    </ul>
                </div>
                {/* FAQ contant */}
                <div className="flex-1 ml-7">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default FAQ;