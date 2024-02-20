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
// import PaymentHistory from "./Layouts/Dashboard/User/PaymentHistory/PaymentHistory";
import CreateBooking from "./Layouts/Dashboard/User/CreateBooking/CreateBooking";
import Payment from "./Layouts/Dashboard/User/Payment/Payment";
import PrivateRoute from "./routes/PrivateRoute";
import AllUsersPage from "./Layouts/Dashboard/Admin/AllUsersPage/AllUsersPage";
import AllBookingsPage from "./Layouts/Dashboard/Admin/AllBokingsPage/AllBookingsPage";
import AdminRoute from "./routes/AdminRoute";
import AllPaymentPage from "./Layouts/Dashboard/Admin/AllPaymentPage/AllPaymentPage";
import ErrorPage from "./Layouts/ErrorPage/ErrorPage";
import BookingDetails from "./Layouts/Dashboard/BookingDetails/BookingDetails";
import ForumFeed from "./Layouts/Forum/ForumFeed/ForumFeed";
import SinglePost from "./Layouts/Forum/SinglePost/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/forum",
        element: <ForumFeed></ForumFeed>,
      },
      {
        path: "/forum/:id",
        element: <SinglePost></SinglePost>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "address-book",
        element: (
          <PrivateRoute>
            <AddressBook></AddressBook>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <AllPaymentPage></AllPaymentPage>
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile/:email",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <PrivateRoute>
              <Bookings></Bookings>
            </PrivateRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "create-booking",
        element: (
          <PrivateRoute>
            <CreateBooking></CreateBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsersPage></AllUsersPage>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-bookings",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllBookingsPage></AllBookingsPage>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "create-booking",
        element: <CreateBooking></CreateBooking>,
      },
      {
        path: "booking-details",
        element: <BookingDetails></BookingDetails>,
      },
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
