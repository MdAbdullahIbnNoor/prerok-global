import deliveryTruck from "../../../../public/images/deliveryTruck.png";

const Steps = () => {
  return (
    <div className="h-72 border bg-[url('../../../../public/images/city.jpg')]">
      <div className="relative bg-black/70 flex flex-col md:flex-row justify-between items-center ">
      <div className="flex flex-row justify-around text-white px-12">
        <div className="flex justify-between items-center">
          <h1 className="text-7xl font-semibold">1.</h1>
          <div className=" ml-3">
            <h3 className="text-2xl font-semibold">Order</h3>
            <p className="md:w-3/4 mt-2 text-[#98968c] text-sm">
              Duis autem vel eum iriur hendrerit in vulputat
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around text-white ">
        <div className="flex justify-between items-center">
          <h1 className="text-7xl font-semibold">2.</h1>
          <div className=" ml-3">
            <h3 className="text-2xl font-semibold">Wait</h3>
            <p className="md:w-3/4 mt-2 text-[#98968c] text-sm">
              Duis autem vel eum iriur hendrerit in vulputat
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-7xl font-semibold">3.</h1>
          <div className=" ml-3">
            <h3 className="text-2xl font-semibold">Deliver</h3>
            <p className="md:w-3/4 mt-2 text-[#98968c] text-sm">
              Duis autem vel eum iriur hendrerit in vulputat
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={deliveryTruck} alt="" className="md:mt-16 hidden md:block" />
      </div>
      </div>
    </div>
  );
};

export default Steps;
