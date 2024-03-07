import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';


const Home = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
