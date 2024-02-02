import { SiClockify } from "react-icons/si";
import { FaHandHoldingHand } from "react-icons/fa6";
import { SiOpslevel } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";

const Bookings = () => {
    return (
        <div className="">
            <div className="mb-5 text-center">
                <h1 className="text-gray-500 text-2xl font-semibold ">
                    Your Delivery Performance
                </h1>
                <div>
                    <h1 className="text-3xl font-semibold text-orange-400 ">
                        Welcome
                        <span className=" text-yellow-500"> User </span>
                    </h1>
                </div>
            </div>

            {/* delevery status section  */}
            <div>
                <div className="mx-auto">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 ">
                        {/* first card  */}
                        <div className=" flex items-center gap-4 w-56 p-4 h-30  shadow-md rounded-sm ">
                            {/* icon */}
                            <div className="">
                                <SiClockify className="text-3xl font-bold text-red-500" />
                            </div>
                            {/* content */}
                            <div>
                                <p className="text-3xl font-bold text-gray-500">20</p>
                                <h1 className=" font-semibold text-gray-600 uppercase">
                                    Delayed
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
                            {/* icon */}
                            <div className=" ">
                                <FaHandHoldingHand className="text-3xl font-bold text-yellow-500" />
                            </div>
                            {/* content */}
                            <div>
                                <p className="text-3xl font-bold text-gray-500">6</p>
                                <h1 className=" font-semibold text-gray-600 uppercase">
                                    Exceptence
                                </h1>
                            </div>
                        </div>
                        <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
                            {/* icon */}
                            <div className=" ">
                                <SiOpslevel className="text-3xl font-bold text-red-500" />
                            </div>
                            {/* content */}
                            <div>
                                <p className="text-3xl font-bold text-gray-500">20</p>
                                <h1 className=" font-semibold text-gray-600 uppercase">
                                    Label Creation
                                </h1>
                            </div>
                        </div>
                        <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
                            {/* icon */}
                            <div className=" ">
                                <FaCircleArrowRight className="text-3xl font-bold text-purple-500" />
                            </div>
                            {/* content */}
                            <div>
                                <p className="text-3xl font-bold text-gray-500">20</p>
                                <h1 className=" font-semibold text-gray-600 uppercase">
                                    Early
                                </h1>
                            </div>
                        </div>
                        <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
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
                        <div className=" flex items-center gap-4 w-56 p-4 h-30 shadow-md rounded-sm  ">
                            {/* icon */}
                            <div className=" ">
                                <MdDeliveryDining className="text-3xl font-bold text-green-500" />
                            </div>
                            {/* content */}
                            <div>
                                <p className="text-3xl font-bold text-gray-500">20</p>
                                <h1 className=" font-semibold text-gray-600">DELIVERED</h1>
                            </div>
                        </div>
                    </div>

                    {/* table  */}

                    <div>
                        <div className="overflow-x-auto mt-20 bg-gray-50 p-3 rounded-lg">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Invoice Id</th>
                                        <th>TRACKING NUMBER</th>
                                        <th>STATUS</th>
                                        <th>SCHEDUL DELIVERY DATE </th>
                                        <th>SCHEDUL DELIVERY TIME </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>032974293</td>
                                        <td>Dealy</td>
                                        <td>12-03-22</td>
                                        <td>12:40 pm</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>032974293</td>
                                        <td>Dealy </td>
                                        <td>14-03-23</td>
                                        <td>11:20 pm</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>032974293</td>
                                        <td>Pending</td>
                                        <td>14-03-23</td>
                                        <td>01:40 pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;
