import CreateAddressModal from "../../../../Components/AddressBookPage/CreateAddressModal";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../api/axiosInstances";
import Loading from "../../../../Components/Shared/Loading/Loading";
import AddressCard from "../../../../Components/AddressBookPage/AddressCard";

const AddressBook = () => {
    const { user } = useAuth();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["usersData", "address-book", user?.email],
        queryFn: async () => {
            const { data: userData } = await axiosSecure.get(`/api/user/get-user/${user?.email}`);
            const { data: allAddress } = await axiosSecure.get(`/api/addressbook/get-all-address/${userData._id}`)
            const allData = { userData, allAddress };
            return allData;
        },
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between px-5">
                <h1 className="text-2xl font-semibold text-amber-500">
                    Address Book
                </h1>

                <CreateAddressModal refetch={refetch} id={data.userData?._id}></CreateAddressModal>
            </div>
            <div className="flex flex-col justify-center items-center my-10">
                {
                    data?.allAddress.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto p-2 gap-6">
                            {
                                data?.allAddress?.map(address => <AddressCard refetch={refetch} address={address} key={address._id}></AddressCard>)
                            }
                        </div>
                        :
                        <div className="text-center my-10">
                            <p className="my-3 text-gray-500">Save your delivery address here </p>
                            <CreateAddressModal refetch={refetch} id={data.userData?._id}></CreateAddressModal>
                        </div>
                }

            </div>
        </div >
    );
};

export default AddressBook;