import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../api/axiosInstances";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../Components/Shared/Loading/Loading";
import { FaUsersLine } from "react-icons/fa6";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";





const BookingDetails = () => {
  const { user } = useAuth();

  // get user payment history
  const { data: allPayments, isLoading } = useQuery({
    queryKey: ["allPayments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/payments/all-payment-history`);
      return res.data;
    },
  });
//   console.log(allPayments);

  // get user payment history
  const { data: allBookings } = useQuery({
    queryKey: ["allBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/bookings/get-all-bookings`);
      return res.data;
    },
  });
//   console.log(allBookings);










  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-3">
      {/* welcome user  */}
      <div>
        <p>
          {" "}
          <span className="text-2xl font-bold text-gray-500">Hi,</span>{" "}
          <span className="text-xl cont-semibold text-yellow-500">
            {user?.displayName}
          </span>{" "}
        </p>
        <p className="text-gray-500">Your performance summary </p>
      </div>

      {/* stats  */}
      <div className="my-10">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {/* first card  */}
          <div className=" flex items-center gap-4  p-4 h-30  shadow-md rounded-sm ">
            {/* icon */}
            <div className="">
              <FaUsersLine className="text-3xl font-bold text-red-500" />
            </div>
            {/* content */}
            <div>
              <p className="text-3xl font-bold text-gray-500">850</p>
              <h1 className=" font-semibold text-gray-600 uppercase">
                Total Users
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
            {/* icon */}
            <div className=" ">
              <BsFillBookmarkStarFill className="text-3xl font-bold text-yellow-500" />
            </div>
            {/* content */}
            <div>
              <p className="text-3xl font-bold text-gray-500">
                {allBookings?.length}
              </p>
              <h1 className=" font-semibold text-gray-600 uppercase">
                Total Bookings
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
            {/* icon */}
            <div className=" ">
              <MdDeliveryDining className="text-3xl font-bold text-green-500" />
            </div>
            {/* content */}
            <div>
              <p className="text-2xl uppercase font-semibold text-gray-500">
                0
              </p>
              <h1 className=" font-semibold text-gray-600 uppercase">
                Delivery Completd
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-4  p-4 h-30 shadow-md rounded-sm  ">
            {/* icon */}
            <div className=" ">
              <MdOutlinePendingActions className="text-3xl font-bold text-purple-500" />
            </div>
            {/* content */}
            <div>
              <p className="text-2xl font-semibold uppercase text-gray-500">
                {" "}
                {allBookings?.length}{" "}
              </p>
              <h1 className=" font-semibold text-gray-600 uppercase">
                Pending Delivery
              </h1>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <div>
  
      </div>
    </div>
  );
};

export default BookingDetails;
