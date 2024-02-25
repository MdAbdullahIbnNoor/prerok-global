import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../api/axiosInstances";
import Loading from "../../../../Components/Shared/Loading/Loading";
import useAuth from "../../../../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  // console.log(user)
  // get user payment history
  const {
    data: users,
    isLoading,
  } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/payments/all-payment-history`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const filterdUser = users.filter((data) => data.email === user?.email);
  // console.log(filterdUser);

  //   console.log(users)

  return (
    <div>
      {/* table  */}

      <div>
        <div className="overflow-x-auto mt-20 min-h-[70vh] bg-gray-50 p-3 rounded-lg">
          <div className=" mb-20 md:ml-10 ">
            <table className="table table-zebra  ">
              {/* head */}
              <thead className="bg-gray-400 text-white text-lg">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Transaction Id </th>
                  <th>Pay Money</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {filterdUser?.map((data) => (
                  <tr key={data._id}>
                    <td>{data?.name}</td>
                    <td>{data?.email}</td>
                    <td>
                      {data?.paymentAt ? data.paymentAt.slice(0, 10) : ""}
                    </td>
                    <td>{data?.transactionID}</td>
                    <td>{data?.amount}</td>
                    <td>
                      <div
                        className={`badge ${
                          data.status === "paid" ? "bg-green-500" : "bg-red-500"
                        } px-4 py-3 text-white`}
                      >
                        {data.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
