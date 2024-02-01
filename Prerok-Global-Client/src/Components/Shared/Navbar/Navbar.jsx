import { useEffect, useState } from "react";
import logo from "../../../assets/Prerok_Global_Logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [prevPosition, setPrevPosition] = useState(0);
  const { user, logoutUser } = useAuth();

  const onScroll = () => {
    const currentPosition = window.scrollY;
    setIsScroll(currentPosition > 80)
    setPrevPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [prevPosition])


  const handleLogout = () => {
    logoutUser();
  };
  // console.log(prevPosition);

  const navLinks = <>
    <NavLink to={"/"} className="font-semibold py-2 px-2">
      Home
    </NavLink>
    <NavLink to={"productTracking"} className="font-semibold py-2 px-2">
      Tracking
    </NavLink>
    <NavLink to={"#"} className="font-semibold py-2 px-2">
      Shipping
    </NavLink>
    <NavLink to={"/support"} className="font-semibold py-2 px-2">
      Support
    </NavLink>
    <NavLink to={"/customDocument"} className="font-semibold py-2 px-2">
      Customs
    </NavLink>
    <NavLink to={"/placeOrder"} className="font-semibold py-2 px-2">
      Place Order
    </NavLink>
    {user && (
      <NavLink to={"/userProfile"} className="font-semibold py-2 px-2">
        Dashboard
      </NavLink>
    )}
  </>
  return (
    <div className="z-50">
      <div className="bg-slate-800">
        <div className="md:flex justify-between max-w-screen-2xl mx-auto px-2">
          <div className="flex flex-row items-center justify-center lg:justify-between text-white text-xs py-4">
            <div>
              <Link>SITEMAP</Link>
              <span> &nbsp; |&nbsp; </span>
              <Link>PRIVACY</Link>
              <span> &nbsp; |&nbsp; </span>
              <Link>PRICING</Link>
            </div>
          </div>
          <div className="py-4 flex justify-center">
            <div className="mr-3 flex flex-row items-center">
              <span className="text-white">Call us now: </span>
              <span className="text-yellow-600"> +880-1756-390-370</span>
            </div>
            {!user ? (
              <Link
                to="/login"
                className="btn bg-yellow-400 w-32 h-10 flex text-center items-center justify-center"
              >
                SIGN IN
              </Link>
            ) : (
              <Link
                onClick={handleLogout}
                className="btn bg-yellow-400 w-32 h-10 flex text-center items-center justify-center"
              >
                SIGN OUT
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* main navbar section */}
      <nav className={`transition-transform duration-300 ${isScroll ? "fixed top-0 shadow-xl w-full" : ""} w-full z-50 bg-white`}>
        <div className="py-4 max-w-screen-2xl mx-auto flex items-center justify-between">
          <img src={logo} className="w-40 h-16" alt="Prerok-Global Logo" />
          {/* navlinks for larger device */}
          <div className='hidden lg:flex flex-col lg:flex-row items-center gap-10'>
            {
              navLinks
            }
          </div>
          {/* navlinks for small device */}
          <div className={`lg:hidden flex z-30 flex-col gap-4 absolute ${isScroll? "top-24" : "top-56"} w-full py-3 px-3 bg-white/70  ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-50"} transition duration-300`}>
            {navLinks}
          </div>
          {/* menu dropdown */}
          <div className='lg:hidden mx-2'>
            <Hamburger toggled={isMobileMenuOpen} toggle={setMobileMenuOpen} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;