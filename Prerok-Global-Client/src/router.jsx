import { createBrowserRouter } from "react-router-dom";
import Home from "./Layouts/Home/Home";
import Homepage from "./Layouts/Homepage/Homepage";
import AboutPage from "./Layouts/AboutPage/AboutPage";
import UserProfile from "./Components/UserProfile/UserProfile";
import FAQ from "./Components/FAQ/FAQ";
import GenerelFAQ from "./Components/FAQ/GenerelFAQ/GenerelFAQ";
import SecurityFAQ from "./Components/FAQ/SecurityFAQ/SecurityFAQ";
import FeatureFAQ from "./Components/FAQ/FeatureFAQ/FeatureFAQ";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductTracking from "./Components/ProductTracking/ProductTracking";
import LoginPage from "./Layouts/LoginPage/LoginPage";
import RegistrationPage from "./Layouts/RegistrationPage/RegistrationPage";
// import PlaceOrder from "./Components/Shipping/PlaceOrder/PlaceOrder";
import CustomsDocument from "./Layouts/CustomsDocument/CustomsDocument";
import UpdateProfile from "./Components/UserProfile/UpdateProfile";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Bookings from "./Layouts/Dashboard/User/Bookings/Bookings";
import AddressBook from "./Layouts/Dashboard/User/AddressBooking/AddressBook";
import PaymentHistory from "./Layouts/Dashboard/User/PaymentHistory/PaymentHistory";
import CreateBooking from "./Layouts/Dashboard/User/CreateBooking/CreateBooking";
import Payment from "./Layouts/Dashboard/User/Payment/Payment";
import PrivateRoute from "./routes/PrivateRoute";



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
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/registration",
        element: <RegistrationPage></RegistrationPage>,
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
        path: "/productTracking",
        element: <ProductTracking></ProductTracking>,
      },
      // {
      //   path: "/placeOrder",
      //   element: <PlaceOrder></PlaceOrder>,
      // },
      {
        path: "/customDocument",
        element: <CustomsDocument />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,

      },
      {
        path: "address-book",
        element: <PrivateRoute><AddressBook></AddressBook></PrivateRoute>,
      },
      {
        path: "payment",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
      },
      {
        path: "payment-history",
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>,
      },
      {
        path: "update-profile/:email",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: "bookings",
        element: <PrivateRoute><PrivateRoute><Bookings></Bookings></PrivateRoute></PrivateRoute>,
      },
      {
        path: "create-booking",
        element: <PrivateRoute><CreateBooking></CreateBooking></PrivateRoute>,
      }
    ],
  },

  {
    path: "faq",
    element: <FAQ></FAQ>,
    children: [
      // normal users route
      {
        path: "generelfaq",
        element: <GenerelFAQ></GenerelFAQ>,
      },
      {
        path: "securityfaq",
        element: <SecurityFAQ></SecurityFAQ>,
      },
      {
        path: "featurefaq",
        element: <FeatureFAQ></FeatureFAQ>,
      },
    ],
  },
]);

export default router;
