import { useState } from "react";
// import deliveryman from "./../../../assets/Home/delivery-man02.png";
import useAuth from "./../../../hooks/useAuth";
import { axiosPublic } from "../../../api/axiosInstances";
import { FaSpinner } from "react-icons/fa";

const CalculateCost = () => {
  const { user } = useAuth();
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const countries = [
    "Bangladesh",
    "India",
    "China",
    "UK",
    "USA",
    "Malaysia",
    "Turkistan",
    "Afghanistan",
    "Indonesia",
  ];

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // console.log(countries);

  const handleCalculateCost = async (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.height.value) || 0;
    const width = parseFloat(e.target.width.value) || 0;
    const weight = parseFloat(e.target.weight.value) || 0;
    const pick = e.target.pick.value;
    const fromCountry = e.target.from_country.value;
    const toCountry = e.target.to_country.value;

    const requestBody = {
      height,
      width,
      weight,
      fromCountry,
      toCountry,
      deliveryType: pick === "FASTED DELIVERY: +$25" ? "Faster" : "Usual",
    };
    setLoading(false);
    try {
      setLoading(true)
      const { data: dbResponse } = await axiosPublic.post(
        "/api/packages/calculateCost",
        requestBody
      );
      setTotalCost(dbResponse.cost);
      setLoading(false);
      document.getElementById("my_modal").showModal()
    } catch (error) {
      setLoading(false);
      console.error("Error calculating cost:", error);
    }
    setLoading(false);
  };

  return (
    <div className="md:flex gap-5 items-end justify-between h-full overflow-hidden wrapper">
      {/* For Left side image section */}
      <div className="flex-1 md:h-[75vh] object-cover"
       data-aos="fade-right"
      >
        <img
          className="w-full"
          src={"https://i.ibb.co/FD46k1X/delivery-Man.png"}
          alt="Delivery man image"
        />
      </div>
      {/* For the right side Section */}
      <div className="pb-12 flex-1 max-w-lg" data-aos="fade-left">
        <h2 className="text-xl md:text-3xl font-bold mt-10 text-[#222222]">
          CALCULATE YOUR COST
        </h2>
        <p className="text-base text-[#acacac] mt-5 mb-3">
          Please provide your product information to calculate your total cost.
        </p>
        <button
          className="border bg-[#f5ab35] px-5 mb-3 py-3 border-none shadow-xl text-white font-semibold"
          onClick={() => document.getElementById("my_modal_002").showModal()}
        >
          See Cost Details
        </button>

        {/* modal */}
        <dialog id="my_modal_002" className="modal">
          <div className="modal-box flex justify-center">
            <div className="space-y-3">
              <h3 className="font-bold text-2xl">Cost Details</h3>
              <ul className="space-y-3">
                <li>Delivery charge: $2 (Intra-Country)</li>
                <li>Delivery charge: $0.001 per KM (Foreign Country)</li>
                <li>
                  Normal Delivery Charge: Weight(0.1 - 50 KG), Size(0.1 - 500
                  CM)
                </li>
                <li>Extra $5 for each extra 20 KG weight</li>
                <li>Extra $5 for each extra 100 CM size</li>
              </ul>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        {/* Form section */}
        <form
          onSubmit={handleCalculateCost}
          className="flex justify-center items-center"
        >
          <div className="w-full space-y-3">
            <div>
              <label className="md:text-lg font-bold mr-3 text-[#222222]">
                HEIGHT (CM):
              </label>
              <input
                className="border-2 outline-none  border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-full px-3"
                type="number"
                name="height"
                required
              />
            </div>
            <div>
              <label className="md:text-lg font-bold mr-4 text-[#222222]">
                WIDTH (CM):
              </label>
              <input
                className="border-2 outline-none  border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-full px-3"
                type="number"
                name="width"
                required
              />
            </div>
            {/* <div>
              <label className="md:text-lg font-bold mr-5 text-[#222222]">
                DEPTH (CM):
              </label>
              <input
                className="border-2 outline-none border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-full px-3"
                type="text"
                name="depth"
              />
            </div> */}
            <div>
              <label className="md:text-lg font-bold mr-3 text-[#222222]">
                WEIGHT (KG):
              </label>
              <input
                className="border-2 outline-none  border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-full px-3"
                type="text"
                name="weight"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="md:text-lg font-bold text-[#222222] mr-5 flex-1">
                LOCATION:
              </label>

              <div className="flex justify-between items-center w-full">
                <select
                  className="select w-full select-ghost border-2 outline-none border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg md:mr-12 px-3 py-2 mr-2 text-sm lg:text-base"
                  name="from_country"
                  required
                >
                  <option selected>From Country</option>

                  {countries.map((country, index) => (
                    <option key={index}>{country}</option>
                  ))}
                </select>

                <select
                  className="select w-full select-ghost border-2 outline-none border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg px-3 py-2"
                  name="to_country"
                  required
                >
                  <option selected>To Country</option>

                  {countries.map((country, index) => (
                    <option key={index}>{country}</option>
                  ))}
                </select>

              </div>
              {/* <input
                className="border-2 outline-none border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 px-3 w-1/3 md:mr-12"
                type="text"
                placeholder="From"
                name="from"
              /> */}
              {/* <input
                className="border-2 outline-none border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-1/3 px-3"
                type="text"
                placeholder="To"
                name="to"
              /> */}
            </div>

            <div>
              <label className="md:text-lg font-bold mr-10 text-[#222222]">
                PACKAGE:
              </label>
              <select
                className="select select-ghost border-2 outline-none border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg px-3 py-2 w-full w-fit"
                name="pick"
                required
              >
                <option selected>USUAL DELIVERY</option>
                <option>FASTED DELIVERY: +$25</option>
              </select>
            </div>

            <div className="w-full">
              <button
                className="border bg-[#f5ab35] w-full py-3 mt-2 border-none shadow-xl text-white font-semibold rounded-lg flex items-center justify-center"
                onClick={() => handleCalculateCost}
                type="submit"
              >
                {
                  loading ?
                    <FaSpinner className="animate-spin"></FaSpinner>
                    :
                    "Calculate"
                }
              </button>
              {/* <button className="border bg-[#df9826] w-1/4 py-3 mt-2 border-none shadow-xl text-white font-semibold">
                Total Cost: {totalCost == 0 ? "$0.00" : `$${totalCost}`}
              </button> */}
            </div>
            {/* modal */}
            <dialog id="my_modal" className="modal">
              <div className="modal-box flex justify-center">
                <div className="space-y-3">
                  <h3 className="font-bold text-2xl">
                    Dear {user?.displayName ? user?.displayName : "User"}
                  </h3>
                  <p className="text-xl font-semibold">
                    Your Total Cost is :{" "}
                    {totalCost == 0 ? "$0.00" : `$${totalCost}`}
                  </p>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalculateCost;
