import { createBrowserRouter } from "react-router-dom";
import Home from "./Layouts/Home/Home";
import Homepage from "./Layouts/Homepage/Homepage";
import AboutPage from "./Layouts/AboutPage/AboutPage";
import ContactUs from "./Components/Homepage/ContactUs/ContactUs";

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
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
