import { format } from 'date-fns';
import Loading from '../../../../Components/Shared/Loading/Loading';
import { axiosSecure } from '../../../../api/axiosInstances';
import { useQuery } from '@tanstack/react-query';

const AllPaymentPage = () => {
    const { data: transactions, isLoading } = useQuery({
        queryKey: ["all-payments"], queryFn: async () => {
            const res = await axiosSecure.get(`/api/payments/all-payment-history`)
            return res.data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className=''>
                <div className="relative overflow-x-auto rounded-lg ">
                    <table className="w-full text-left p-4 rtl:text-right rounded-t-xl text-secondary-50">
                        <thead className="my-3 bg-slate-300 p-5 ">
                            <tr>
                                <th className="p-5 font-semibold">
                                    #
                                </th>
                                <th className="p-5 font-semibold">
                                    Transaction ID
                                </th>
                                <th className="p-5 font-semibold">
                                    Booking ID
                                </th>
                                <th className="p-5 font-semibold">
                                    Payment Method
                                </th>
                                <th className="p-5 font-semibold">
                                    Transaction Date
                                </th>
                                <th className="p-5 font-semibold">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-slate-100'>
                            {
                                transactions?.map((item, indx) => (
                                    <tr key={indx} className=" bg-primary-50 my-3 p-2 cursor-pointer">
                                        <td className="px-6 py-4 m-5 font-medium">
                                            {indx + 1}
                                        </td>
                                        <td className="px-6 py-4 m-5 font-medium">
                                            {item?.transactionID}
                                        </td>
                                        <td className="px-6 py-4 m-5">
                                            {item?.bookingID}
                                        </td>
                                        <td className="px-6 py-4 m-5">
                                            {item?.email}
                                        </td>
                                        <td className="px-6 py-4 m-5">
                                            {format(new Date(item?.paymentAt || '2024-02-08T14:10:44.361+00:00'), "MMM dd, yyyy")}
                                        </td>
                                        <td className="px-6 py-4 m-5">
                                            <span className='font-semibold mr-.5'>€</span>{item?.amount}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllPaymentPage;