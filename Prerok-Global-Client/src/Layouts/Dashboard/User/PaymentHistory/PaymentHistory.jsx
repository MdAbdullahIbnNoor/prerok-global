import { MdPayment } from "react-icons/md";
import { MdPayments } from "react-icons/md";

const PaymentHistory = () => {
    return (
        <div>
            <p className="text-gray-500 text-2xl font-semibold my-10 text-center ">
                Payment Details{" "}
            </p>

            <div className="grid gap-4 grid-col-col md:grid-cols-2">
                <div className=" flex items-center gap-4 bg-gray-200  p-4 h-30  shadow-md rounded-sm drop-shadow-md">
                    {/* icon */}
                    <div className="">
                        <MdPayment className="text-3xl font-bold text-green-500" />
                    </div>
                    {/* content */}
                    <div>
                        <h1 className=" font-semibold text-gray-600 uppercase">
                            Total Payment
                            <p className="text-3xl font-bold text-gray-500">$ 3000 </p>
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
                    <div className="overflow-x-auto mb-20 md:ml-10 md:px-20">
                        <table className="table table-zebra  ">
                            {/* head */}
                            <thead className="bg-gray-400 text-white text-lg">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Transaction Id </th>
                                    <th>Pay Mony</th>
                                    <th>Status</th>
                                    <th>Pay</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-500">
                                <tr>
                                    <td>Shanto</td>
                                    <td>shanto@gmail.com</td>
                                    <td>02-03-2024</td>
                                    <td>pi_3OHUw3AaAV1XQZrv2RI1nvWZ </td>
                                    <td>2000</td>
                                    <td>
                                        <div className="badge bg-green-500  px-4 py-3 text-white">
                                            paid
                                        </div>
                                    </td>
                                    <td>
                                        <div className="btn bg-green-500  px-4 py-3 text-white">
                                            PAYMENT
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mahmudul </td>
                                    <td>tamim@gmail.com</td>
                                    <td>02-03-2024</td>
                                    <td>pi_3OHUw3AaAV1XQZrvojfofjRI1nZ </td>
                                    <td>1000</td>
                                    <td>
                                        <div className="badge bg-yellow-500  px-4 py-3 text-white">
                                            unpaid
                                        </div>
                                    </td>
                                    <td>
                                        <div className="btn bg-green-500  px-4 py-3 text-white">
                                            PAYMENT
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;