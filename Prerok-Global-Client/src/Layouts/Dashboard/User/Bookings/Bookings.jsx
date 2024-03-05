import { SiClockify } from "react-icons/si";
import { FaHandHoldingHand } from "react-icons/fa6";
import { SiOpslevel } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdDeliveryDining, MdPayment, MdPayments } from "react-icons/md";
import { useState } from "react";
import PaymentModal from "../Payment/PaymentModal/PaymentModal";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../Components/Shared/Loading/Loading";
import { axiosSecure } from "../../../../api/axiosInstances";

const Bookings = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const closeModal = () => {
    setIsOpen(false);
  };

  // get booking address by email

  const { data, isLoading } = useQuery({
    queryKey: ["allBookings", user?.email],
    queryFn: async () => {
      try {
        const { data: allBookings } = await axiosSecure.get(
          `/api/bookings/get-bookings/${user?.email}`
        );
        return allBookings;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  });
  // console.log(data);

  const totalPayment = data?.reduce(
    (taka, p) => taka + p?.paymentInfo?.amount,
    0
  );
  // console.log(totalPayment);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <div className="mb-5 text-center">
        <h1 className="text-gray-500 text-2xl font-semibold ">
          Your Delivery Performance
        </h1>
        <div>
          <h1 className="text-3xl font-semibold text-orange-400 ">
            Welcome
            <span className=" text-yellow-500"> {user?.displayName} </span>
          </h1>
        </div>
      </div>

      {/* delevery status section  */}
      <div>
        <div className="mx-auto">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 ">
            {/* first card  */}
            <div className=" flex items-center gap-4  p-4 h-30  shadow-md rounded-sm ">
              {/* icon */}
              <div className="">
                <SiClockify className="text-3xl font-bold text-red-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">
                  {data?.length}
                </p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Total Bookings
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <FaHandHoldingHand className="text-3xl font-bold text-yellow-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">
                  {data[0]?.parcelInfo?.shippingCost}
                </p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Shipping Cost
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <SiOpslevel className="text-3xl font-bold text-red-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-2xl uppercase font-semibold text-gray-500">
                  {data[0]?.parcelInfo?.packaging_type}
                </p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Packing Type
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <FaCircleArrowRight className="text-3xl font-bold text-purple-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-2xl font-semibold uppercase text-gray-500">{data[0]?.parcelInfo?.shipping_method}</p>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Shipping Methode
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <FaHandshakeSimple className="text-3xl font-bold text-gray-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-3xl font-bold text-gray-500">20</p>
                <h1 className=" font-semibold text-gray-600">ONTIME </h1>
              </div>
            </div>
            <div className=" flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
              {/* icon */}
              <div className=" ">
                <MdDeliveryDining className="text-3xl font-bold text-green-500" />
              </div>
              {/* content */}
              <div>
                <p className="text-xl font-bold flex flex-wrap gap-2 items-center uppercase text-gray-500"> {data[0]?.fromAddress?.from_address} <FaArrowRightArrowLeft className="text-yellow-500" /> {data[0]?.toAddress?.to_address} </p>
                <h1 className=" font-semibold text-gray-600">From - To</h1>
              </div>
            </div>
          </div>

          <div className="grid gap-4 grid-col-col mt-10 md:grid-cols-2">
            <div className=" flex items-center gap-4 bg-gray-200  p-4 h-30  shadow-md rounded-sm drop-shadow-md">
              {/* icon */}
              <div className="">
                <MdPayment className="text-3xl font-bold text-green-500" />
              </div>
              {/* content */}
              <div>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Total Pay
                  <p className="text-3xl font-bold text-gray-500">
                    $ {totalPayment}{" "}
                  </p>
                </h1>
              </div>
            </div>

            <div className=" flex items-center gap-4 bg-gray-200  p-4 h-30  shadow-md rounded-sm drop-shadow-md">
              {/* icon */}
              <div className="">
                <MdPayments className="text-3xl font-bold text-green-500" />
              </div>
              {/* content */}
              <div>
                <h1 className=" font-semibold text-gray-600 uppercase">
                  Refund Money
                  <p className="text-3xl font-bold text-gray-500">$ 00 </p>
                </h1>
              </div>
            </div>
          </div>

          {/* table  */}
          <div>
            <div className="overflow-x-auto mt-20 bg-gray-50 p-3 rounded-lg">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="uppercase">
                    <th>Invoice Id</th>
                    <th>TRACKING NUMBER</th>
                    <th> booking STATUS </th>
                    <th>SCHEDUL DELIVERY DATE </th>
                    <th>SCHEDUL DELIVERY TIME </th>
                    <th className="uppercase">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((bookingInfo, idx) => (
                      <tr key={idx}>
                        <th>{idx + 1}</th>
                        <td>{bookingInfo?._id}</td>
                        <td>{bookingInfo?.trackingStatus}</td>
                        <td>{bookingInfo?.estimatedDeliveryTime}</td>
                        <td>12:40 pm</td>
                        <td> {bookingInfo?.paymentInfo?.status} </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal closeModal={closeModal} isOpen={isOpen}></PaymentModal>
    </div>
  );
};

export default Bookings;
