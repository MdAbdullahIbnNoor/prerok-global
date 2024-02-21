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
import CustomsDocument from "./Layouts/CustomsDocument/CustomsDocument";
import UpdateProfile from "./Components/UserProfile/UpdateProfile";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Bookings from "./Layouts/Dashboard/User/Bookings/Bookings";
import AddressBook from "./Layouts/Dashboard/User/AddressBooking/AddressBook";
import CreateBooking from "./Layouts/Dashboard/User/CreateBooking/CreateBooking";
import Payment from "./Layouts/Dashboard/User/Payment/Payment";
import PrivateRoute from "./routes/PrivateRoute";
import AllUsersPage from "./Layouts/Dashboard/Admin/AllUsersPage/AllUsersPage";
import AllBookingsPage from "./Layouts/Dashboard/Admin/AllBokingsPage/AllBookingsPage";
import AdminRoute from "./routes/AdminRoute";
import AllPaymentPage from "./Layouts/Dashboard/Admin/AllPaymentPage/AllPaymentPage";
import ErrorPage from "./Layouts/ErrorPage/ErrorPage";
import BookingDetails from "./Layouts/Dashboard/BookingDetails/BookingDetails";
import ReturnPage from "./Layouts/Dashboard/User/ReturnPage/ReturnPage";
import CreatePost from "./Layouts/Forum/CreatePost/CreatePost";
import ForumFeed from "./Layouts/Forum/ForumFeed/ForumFeed";
import SinglePost from "./Layouts/Forum/SinglePost/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/productTracking",
        element: <ProductTracking />,
      },
      {
        path: "/customDocument",
        element: <CustomsDocument />,
      },
      {
        path: "/forum",
        element: <ForumFeed />,
      },
      {
        path: "/forum/:id",
        element: <SinglePost />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "address-book",
        element: (
          <PrivateRoute>
            <AddressBook />
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <AllPaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile/:email",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "create-booking",
        element: (
          <PrivateRoute>
            <CreateBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsersPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-bookings",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllBookingsPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "booking-details",
        element: <BookingDetails />,
      },
      {
        path: "return-product",
        element: (
          <PrivateRoute>
            <ReturnPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "faq",
    element: <FAQ />,
    children: [
      // normal users route
      {
        path: "generelfaq",
        element: <GenerelFAQ />,
      },
      {
        path: "securityfaq",
        element: <SecurityFAQ />,
      },
      {
        path: "featurefaq",
        element: <FeatureFAQ />,
      },
    ],
  },
]);

export default router;
