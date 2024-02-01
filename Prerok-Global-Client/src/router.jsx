import { createBrowserRouter } from "react-router-dom";
import Home from "./Layouts/Home/Home";
import Homepage from "./Layouts/Homepage/Homepage";
import AboutPage from "./Layouts/AboutPage/AboutPage";
import UserProfile from "./Components/UserProfile/UserProfile";
import FAQ from './Components/FAQ/FAQ';
import GenerelFAQ from './Components/FAQ/GenerelFAQ/GenerelFAQ';
import SecurityFAQ from './Components/FAQ/SecurityFAQ/SecurityFAQ';
import FeatureFAQ from './Components/FAQ/FeatureFAQ/FeatureFAQ';
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductTracking from "./Components/ProductTracking/ProductTracking";
import LoginPage from "./Layouts/LoginPage/LoginPage";
import RegistrationPage from "./Layouts/RegistrationPage/RegistrationPage";
import PlaceOrder from "./Components/Shipping/PlaceOrder/PlaceOrder";
import CustomsDocument from "./Layouts/CustomsDocument/CustomsDocument";
import UpdateProfile from "./Components/UserProfile/UpdateProfile";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Bookings from "./Layouts/Dashboard/User/Bookings/Bookings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/registration",
        element: <RegistrationPage></RegistrationPage>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/productTracking",
        element: <ProductTracking></ProductTracking>,
      },
      {
        path: "/placeOrder",
        element: <PlaceOrder></PlaceOrder>,
      },
      {
        path: "/customDocument",
        element: <CustomsDocument />
      },
      {
        path: "/updateProfile/:email",
        element: <UpdateProfile></UpdateProfile>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: 'update-profile/:email',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: 'bookings',
        element: <Bookings></Bookings>
      }
    ]
  },

  {
    path: 'faq',
    element: <FAQ></FAQ>,
    children: [
      // normal users route
      {
        path: 'generelfaq',
        element: <GenerelFAQ></GenerelFAQ>,
      },
      {
        path: 'securityfaq',
        element: <SecurityFAQ></SecurityFAQ>,
      },
      {
        path: 'featurefaq',
        element: <FeatureFAQ></FeatureFAQ>,
      },
    ]
  }


]);

export default router;
