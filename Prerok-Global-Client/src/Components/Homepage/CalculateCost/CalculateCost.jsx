import { useState } from "react";
import deliveryman from "./../../../assets/Home/delivery-man02.png";
import useAuth from './../../../hooks/useAuth';
import { axiosPublic } from "../../../api/axiosInstances";

const CalculateCost = () => {
  const { user } = useAuth();
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(null);

  const countries = [
    "Bangladesh",
    "India",
    "China",
    "UK",
    "USA",
    "Malaysia",
    "Turkistan",
    "Afghanistan",
    "Indonesia"
  ];

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
      deliveryType: pick === 'FASTED DELIVERY: +$25' ? 'Faster' : 'Usual'
    };

    try {
      const { data: dbResponse } = await axiosPublic.post("/api/packages/calculateCost", requestBody)
      setTotalCost(dbResponse.cost);
    } catch (error) {
      console.error('Error calculating cost:', error);
    }
  };

  return (
    <div className="md:flex h-full overflow-hidden max-w-screen-2xl mx-auto my-5">
      {/* For Left side image section */}
      <div className="flex-1" data-aos="fade-right">
        <img
          className="md:mt-28 md:h-[450px] md:w-[680px]"
          src={deliveryman}
          alt="Delivery man image"
        />
      </div>
      {/* For the right side Section */}
      <div className="flex-1" data-aos="fade-left">
        <h2 className="text-xl md:text-3xl font-bold mt-10 text-[#222222]">
          CALCULATE YOUR COST
        </h2>
        <p className="text-base text-[#acacac] mt-5 mb-3">
          Please provide your product information to calculate your total cost.
        </p>
        <button className="border bg-[#f5ab35] px-5 mb-3 py-3 border-none shadow-xl text-white font-semibold" onClick={() => document.getElementById('my_modal_002').showModal()}>See Cost Details</button>


        {/* modal */}
        <dialog id="my_modal_002" className="modal">
          <div className="modal-box flex justify-center">
            <div className="space-y-3">
              <h3 className="font-bold text-2xl">Cost Details</h3>
              <ul className="space-y-3">
                <li>Delivery charge: $15 (Intra-Country)</li>
                <li>Delivery charge: $100 (Foreign Country)</li>
                <li>Normal Delivery Charge: Weight(0.1 - 50 KG), Size(0.1 - 500 CM)</li>
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
          className="flex justify-center items-center w-full"
        >
          <div className="w-full space-y-3">
            <div>
              <label className="md:text-lg font-bold mr-3 text-[#222222]">
                HEIGHT (CM):
              </label>
              <input
                className="border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4 px-3"
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
                className="border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4 px-3"
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
                className="border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4 px-3"
                type="text"
                name="depth"
              />
            </div> */}
            <div>
              <label className="md:text-lg font-bold mr-3 text-[#222222]">
                WEIGHT (KG):
              </label>
              <input
                className="border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-3/4 px-3"
                type="text"
                name="weight"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <label className="md:text-lg font-bold text-[#222222] md:mr-9">
                LOCATION:
              </label>

              <select className="select select-ghost border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg md:mr-12 px-3 py-2 w-1/3" name="from_country" required>
                <option selected>From Country</option>

                {countries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select>

              <select className="select select-ghost border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg px-3 py-2 w-1/3" name="to_country" required>
                <option selected>To Country</option>

                {countries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select>

              {/* <input
                className="border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 px-3 w-1/3 md:mr-12"
                type="text"
                placeholder="From"
                name="from"
              /> */}
              {/* <input
                className="border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg py-2 w-1/3 px-3"
                type="text"
                placeholder="To"
                name="to"
              /> */}
            </div>

            <div>
              <label className="md:text-lg font-bold mr-11 text-[#222222]">
                PACKAGE:
              </label>
              <select className="select select-ghost border-2 border-opacity-15 border-black focus:border-[#f5ab35] shadow-lg rounded-lg px-3 py-2 w-3/4" name="pick" required>
                <option selected>USUAL DELIVERY</option>
                <option>FASTED DELIVERY: +$25</option>
              </select>
            </div>

            <div className="w-3/4 lg:ml-32">
              <button className="border bg-[#f5ab35] w-full py-3 mt-2 border-none shadow-xl text-white font-semibold" onClick={() => document.getElementById('my_modal').showModal()} type="submit">
                Calculate
              </button>
              {/* <button className="border bg-[#df9826] w-1/4 py-3 mt-2 border-none shadow-xl text-white font-semibold">
                Total Cost: {totalCost == 0 ? "$0.00" : `$${totalCost}`}
              </button> */}
            </div>
            {/* modal */}
            <dialog id="my_modal" className="modal">
              <div className="modal-box flex justify-center">
                <div className="space-y-3">
                  <h3 className="font-bold text-2xl">Dear {user?.displayName}</h3>
                  <p className="text-xl font-semibold">Your Total Cost is : {totalCost == 0 ? "$0.00" : `$${totalCost}`}</p>
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
