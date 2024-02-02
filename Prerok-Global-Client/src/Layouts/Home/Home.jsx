import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';


const Home = () => {
  return (
    <div className="px-4">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
