import Banner from "../../Components/Homepage/Banner/Banner";
import CalculateCost from "../../Components/Homepage/CalculateCost/CalculateCost";
import ContactUs from "../../Components/Homepage/ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <CalculateCost></CalculateCost>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Homepage;
