import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./Components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/contact",
    element: <ContactUs></ContactUs>,
  },

]);

export default router;
