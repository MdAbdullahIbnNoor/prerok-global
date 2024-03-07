import { useEffect, useState } from "react";
import logo from "../../../assets/Prerok_Global_Logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [prevPosition, setPrevPosition] = useState(0);
  const { user, logoutUser } = useAuth();

  const onScroll = () => {
    const currentPosition = window.scrollY;
    setIsScroll(currentPosition > 80);
    setPrevPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [prevPosition]);

  const handleLogout = () => {
    logoutUser();
  };
  // console.log(prevPosition);

  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
            : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
        }
      >
        Home
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
      </NavLink>
      <NavLink
        to={"productTracking"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
            : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
        }
      >
        Tracking
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
      </NavLink>
      {/* <NavLink
        to={"/placeOrder"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2"
            : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2"
        }
      >
        Place Order
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
      </NavLink> */}
      {/*<NavLink
        to={"/shipping"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
            : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
        }
      >
        Shipping
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
      </NavLink>*/}
      <NavLink
        to={"/forum"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
            : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
        }
      >
        Forum
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
      </NavLink>
      <NavLink
        to={"/customDocument"}
        className={({ isActive }) =>
          isActive
            ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
            : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2"
        }
      >
        Customs
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
      </NavLink>

      {user && (
        <NavLink
          to={"/dashboard/bookings"}
          className={({ isActive }) =>
            isActive
              ? "relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2"
              : "relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 pl-1 pr-2"
          }
        >
          Dashboard
          <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200 w-full"></span>
        </NavLink>
      )}
    </>
  );
  return (
    <div className="z-50">
      <div className="bg-slate-800">
        <div className="md:flex justify-between wrapper">
          <div className="flex flex-row items-center justify-center lg:justify-between text-white text-xs py-4">
            <div>
              <Link>SITEMAP</Link>
              <span> &nbsp; |&nbsp; </span>
              <Link to="/privacy-policy">PRIVACY</Link>
              <span> &nbsp; |&nbsp; </span>
              <Link>PRICING</Link>
            </div>
          </div>
          <div className="py-4 flex justify-center">
            <div className="mr-3 flex flex-row items-center">
              <span className="text-white">Call us now: </span>
              <span className="text-yellow-600"> +8801700000000</span>
            </div>
            {!user ? (
              <Link
                to="/login"
                className="btn bg-amber-500 border-none font-semibold text-white hover:text-black w-32 h-10 flex text-center items-center justify-center"
              >
                SIGN IN
              </Link>
            ) : (
              <Link
                onClick={handleLogout}
                className="btn bg-amber-500 border-none font-semibold text-white hover:text-black w-32 h-10 flex text-center items-center justify-center"
              >
                SIGN OUT
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* main navbar section */}
      <nav
        className={`transition-transform duration-300 ${isScroll ? "fixed top-0 shadow-xl w-full" : ""
          } w-full z-50 bg-white`}
      >
        <div className="py-4 max-w-7xl mx-auto flex items-center justify-between">
          <Link to={'/'}>
            <img src={logo} className="w-40 h-16" alt="Prerok Global Logo" />
          </Link>
          {/* navlinks for larger device */}
          <div className="hidden lg:flex flex-col lg:flex-row items-center gap-10">
            {navLinks}
          </div>
          {/* navlinks for small device */}
          <div
            className={`lg:hidden flex z-30 flex-col gap-4 absolute ${isScroll ? "top-24" : "top-56"
              } w-full py-3 px-3 bg-white/70  ${isMobileMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-50"
              } transition duration-300`}
          >
            {navLinks}
          </div>
          {/* menu dropdown */}
          <div className="lg:hidden mx-2">
            <Hamburger toggled={isMobileMenuOpen} toggle={setMobileMenuOpen} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
