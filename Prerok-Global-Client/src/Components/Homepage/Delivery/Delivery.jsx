import deliveryMan from "../../../assets/Home/deliveryMan.png";

const Delivery = () => {
  return (
    <div className=" bg-[#fefefe] py-20 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="md:relative md:left-20 relative md:bottom-0">
          <h2 className="text-3xl text-[#222222] font-bold mb-2">
            GET THE <span className="text-[#f5ab35]">FASTEST</span> PRODUCT
            DELIVERY
          </h2>
          <p className="text-md text-[#c9b4ac] space-y-2">
            Welcome to our seamless delivery experience!
            <br />
            Explore our menu and place your order with ease.
            <br />
            Sit back and relax as we prepare your items with care.
            <br />
            Track your delivery in real-time for ultimate convenience.
            <br />
            Enjoy doorstep delivery with our swift and reliable service.
          </p>
        </div>
        <div data-aos="fade-left">
          <img src={deliveryMan} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
