import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
