import { createBrowserRouter } from "react-router-dom";
import Home from "./Layouts/Home/Home";
import Homepage from "./Layouts/Homepage/Homepage";

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
    ],
  },
]);

export default router;
