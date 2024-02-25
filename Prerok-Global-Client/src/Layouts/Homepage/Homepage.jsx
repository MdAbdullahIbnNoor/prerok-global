import ChatBot from "../../Components/ChatBot/ChatBot";
import Banner from "../../Components/Homepage/Banner/Banner";
import CalculateCost from "../../Components/Homepage/CalculateCost/CalculateCost";
import ContactUs from "../../Components/Homepage/ContactUs/ContactUs";
import Delivery from "../../Components/Homepage/Delivery/Delivery";
import Pricing from "../../Components/Homepage/Pricing/Pricing";
import Steps from "../../Components/Homepage/Steps/Steps";
import Testimonial from "../../Components/Homepage/Testimonial/Testimonial";
import AboutUs from "./AboutUs/AboutUs";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <ChatBot></ChatBot>
      <AboutUs></AboutUs>
      <Delivery></Delivery>
      <Steps></Steps>
      <CalculateCost></CalculateCost>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Homepage;
