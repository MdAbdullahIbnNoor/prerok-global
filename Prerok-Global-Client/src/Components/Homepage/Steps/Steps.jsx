import deliveryTruck from "../../../../public/images/deliveryTruck.png";

const Steps = () => {
  return (
    <div className="h-full lg:h-72 bg-[url('../../../../public/images/city.jpg')]">
      <div className="pt-8 lg:pt-0 relative bg-black/70 flex flex-col lg:flex-row justify-between items-center ">
        <div className="flex justify-around text-white px-12">
          <div className="flex justify-between items-center">
            <h1 className="text-7xl font-semibold">1.</h1>
            <div className=" ml-3">
              <h3 className="text-2xl font-semibold">Order</h3>
              <p className="md:w-3/4 mt-2 text-[#98968c] text-sm">
              Swiftly select your items and checkout.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around text-white " data-aos="fade-up"> 
          <div className="flex justify-between items-center">
            <h1 className="text-7xl font-semibold">2.</h1>
            <div className=" ml-3">
              <h3 className="text-2xl font-semibold">Wait</h3>
              <p className="md:w-3/4 mt-2 text-[#98968c] text-sm">
              Relax as our team prepares your order.
              </p>
            </div>
          </div>
        </div>

        <div className="relative right-6 flex justify-around text-white">

          <div className="flex justify-between items-center">
            <h1 className="text-7xl font-semibold">3.</h1>
            <div className=" ml-3">
              <h3 className="text-2xl font-semibold">Deliver</h3>
              <p className="md:w-3/4 mt-2 text-[#98968c] text-sm">
              Experience our reliable service.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={deliveryTruck} alt="" className="md:mt-16 relative left-10 lg:left-0" />

        </div>
      </div>
    </div>
  );
};

export default Steps;
