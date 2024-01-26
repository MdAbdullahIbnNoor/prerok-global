import { createBrowserRouter } from "react-router-dom";
import Home from "./Layouts/Home/Home";
import Homepage from "./Layouts/Homepage/Homepage";
import AboutPage from "./Layouts/AboutPage/AboutPage";
import ContactUs from "./Components/Homepage/ContactUs/ContactUs";
import UserProfile from "./Components/UserProfile/UserProfile";
import FAQ from './Components/FAQ/FAQ';
import GenerelFAQ from './Components/FAQ/GenerelFAQ/GenerelFAQ';
import SecurityFAQ from './Components/FAQ/SecurityFAQ/SecurityFAQ';
import FeatureFAQ from './Components/FAQ/FeatureFAQ/FeatureFAQ';

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
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },

  {
    path:'faq',
    element: <FAQ></FAQ>,
    children:[
        // normal users route
        {
            path:'generelfaq',
            element:<GenerelFAQ></GenerelFAQ>,
        },
        {
          path:'securityfaq',
          element:<SecurityFAQ></SecurityFAQ>,
        },
        {
          path: 'featurefaq',
          element: <FeatureFAQ></FeatureFAQ>,
        },
    ]
}


]);

export default router;
