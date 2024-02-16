import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../Components/Shared/Loading/Loading";
import { axiosSecure } from "../../../../api/axiosInstances";
import toast from "react-hot-toast";

const AllBookingsPage = () => {
    const { data: bookings, refetch, isLoading } = useQuery({
        queryKey: ["all-bookings"], queryFn: async () => {
            const res = await axiosSecure.get(`/api/bookings/get-all-bookings`)
            return res.data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleBookingStatus = async (value, id) => {
        const trackingStatus = value;
        const { data: dbResponse } = await axiosSecure.patch(`/api/bookings/update-status/${id}`, { trackingStatus });
        if (dbResponse.modifiedCount > 0) {
            toast.success(trackingStatus)
        }
        else{
            toast.success("error")
        }
        refetch()
    }
    return (
        <div className=''>
            <div className="relative overflow-x-auto rounded-lg ">
                <table className="w-full text-left p-4 rtl:text-right rounded-t-xl  text-secondary-50">
                    <thead className="my-3 p-5 bg-slate-300">
                        <tr>
                            <th className="p-5 font-semibold">
                                #
                            </th>
                            <th className="p-5 font-semibold">
                                Booking Mail
                            </th>
                            <th className="p-5 font-semibold">
                                Tracking Status
                            </th>
                            <th className="p-5 font-semibold">
                                Tracking ID
                            </th>
                            <th className="p-5 font-semibold">
                                From Addresss
                            </th>
                            <th className="p-5 font-semibold">
                                To Addresss
                            </th>

                        </tr>
                    </thead>
                    <tbody className=' overflow-hidden bg-slate-100'>
                        {
                            bookings?.map((booking, indx) => <tr key={indx} className=" bg-primary-50 my-3 p-2">
                                <td className="px-6 py-4 m-5 font-medium">
                                    {indx + 1}
                                </td>
                                <td className="px-6 py-4 m-5">
                                    {booking?.bookingEmail}
                                </td>
                                <td className="px-6 py-4 m-5 font-medium">
                                    <select className="px-2 py-2 rounded outline-none" name="bookingStatus" onChange={(e) => handleBookingStatus(e.target.value, booking._id)} id="bookingStatus" defaultValue={booking?.trackingStatus}>
                                        <option value="Booking Confirmed">Confirm</option>
                                        <option value="Booking Accepted">Accept</option>
                                        <option value="Parcel Dropped">Dropped</option>
                                        <option value="In Transit">In Transit</option>
                                        <option value="Out for Delivery">Out for Delivery</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    {booking?._id}
                                </td>
                                <td className="px-6 py-4">
                                    {booking?.fromAddress?.from_address},{booking?.fromAddress?.from_country}
                                </td>
                                <td className="px-6 py-4 m-5">
                                    {booking?.toAddress?.to_address},{booking?.toAddress?.to_country}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookingsPage;