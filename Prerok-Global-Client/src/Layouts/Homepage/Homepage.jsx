import { useEffect } from "react";
import ChatBot from "../../Components/ChatBot/ChatBot";
import Banner from "../../Components/Homepage/Banner/Banner";
import CalculateCost from "../../Components/Homepage/CalculateCost/CalculateCost";
import ContactUs from "../../Components/Homepage/ContactUs/ContactUs";
import Delivery from "../../Components/Homepage/Delivery/Delivery";
import Steps from "../../Components/Homepage/Steps/Steps";
import Testimonial from "../../Components/Homepage/Testimonial/Testimonial";
import AboutUs from "./AboutUs/AboutUs";

const Homepage = () => {
  useEffect(() => {
    document.title =
      "PrerokGlobal | Seamless Shipping | Your Goods | Our Guarantee";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <ChatBot></ChatBot>
      <AboutUs></AboutUs>
      <Steps></Steps>
      <Delivery></Delivery>
      <CalculateCost></CalculateCost>
      {/*<Pricing></Pricing>*/}
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Homepage;
