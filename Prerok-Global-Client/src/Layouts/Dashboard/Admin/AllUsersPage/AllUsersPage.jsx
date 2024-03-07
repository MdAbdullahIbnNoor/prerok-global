import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../api/axiosInstances";
import Loading from "../../../../Components/Shared/Loading/Loading";
import { format } from 'date-fns';
import { useEffect } from "react";

const AllUsersPage = () => {
    useEffect(() => {
      document.title = "All Users | PrerokGlobal";
    }, []);
    const { data: users, isLoading } = useQuery({
        queryKey: ["all-users"], queryFn: async () => {
            const res = await axiosSecure.get(`/api/users/get-all-user`)
            return res.data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className="relative overflow-x-auto rounded-lg h-[91vh] shadow-md">
                <table className="w-full text-left p-4 rtl:text-right rounded-t-xl  text-secondary-50">
                    <thead className="my-3 p-5 bg-slate-100">
                        <tr>
                            <th className="p-5 font-semibold">
                                #
                            </th>
                            <th className="p-5 font-semibold">
                                Name
                            </th>
                            <th className="p-5 font-semibold">
                                Email
                            </th>
                            <th className="p-5 font-semibold">
                                User ID
                            </th>
                            <th className="p-5 font-semibold">
                                Joined At
                            </th>

                        </tr>
                    </thead>
                    <tbody className='overflow-hidden'>
                        {
                            users?.map((user, indx) => <tr key={indx} className=" bg-primary-50 my-3 p-2">
                                <td className="px-6 py-4 m-5 font-medium">
                                    {indx + 1}
                                </td>
                                <td className="px-6 py-4 m-5">
                                    {user?.name}
                                </td>
                                <td className="px-6 py-4 m-5 font-medium">
                                    {user?.email}
                                </td>

                                <td className="px-6 py-4">
                                    {user?._id}
                                </td>
                                <td className="px-6 py-4 m-5">
                                    {format(new Date(user?.createdAt || '2024-02-08T14:10:44.361+00:00'), "MMM dd, yyyy")}
                                    {/* {user?.createdAt} */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsersPage;