import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { axiosSecure } from "../../api/axiosInstances";
import useAuth from "../../hooks/useAuth";
import { BiImport } from "react-icons/bi";


/* eslint-disable react/prop-types */
const ImportAddreessModal = ({ handleImportAddress, modalFor }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useAuth();
    const { data: allAddress } = useQuery({
        queryKey: ["usersData", "address-book"],
        queryFn: async () => {
            try {
                const { data: userData } = await axiosSecure.get(`/api/users/get-user/${user?.email}`);
                const { data: allAddress } = await axiosSecure.get(`/api/addressbook/get-all-address/${userData._id}`);
                return allAddress;
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        },
    });

    const handleImport = (address) => {
        if (modalFor === "fromAddress") {
            handleImportAddress(address);
        }
        else if (modalFor === "toAddress") {
            handleImportAddress(address);
        }
        setIsOpen(false);
    }

    return (
        <div>
            <span className="cursor-pointer py-2 font-medium text-black px-3 shadow-md" onClick={() => setIsOpen(true)}>Import From AddressBook</span>
            <div>
                <div className={`${isOpen ? "scale-100" : "scale-0"} bg-white/40  duration-300 ease-out h-screen w-full px-2 top-0 right-0 flex items-center justify-center z-50 fixed`}>
                    <div className='relative w-full md:w-8/12 lg:w-4/12'>
                        <div className={`bg-white shadow-xl px-5 py-6 rounded duration-300 ease-in-out ${isOpen ? "scale-100" : "scale-0"}`}
                        >
                            {
                                allAddress?.map(address => <div key={address._id} className="shadow-xl px-4 py-3 rounded">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="space-y-2 w-full">
                                            <div className="flex justify-between">
                                                <p className="text-black font-semibold">{address.name}</p>
                                                <p className="text-gray-500 font-medium">Email: {address.email} </p>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <p className="text-gray-500 font-medium">{address.phone}, {address.address}, {address.postal_code}, {address.district}, {address.division}, {address.country}  </p>
                                            </div>
                                        </div>
                                        <div className="mr-5">
                                            <span onClick={() => handleImport(address)}>
                                                <BiImport className="text-4xl cursor-pointer p-1 rounded-full bg-amber-500 text-white" />
                                            </span>
                                        </div>
                                    </div>
                                </div>)
                            }

                            <div className="mt-6">
                                <button className="px-3 py-1 rounded bg-red-400 text-white font-semibold" onClick={() => setIsOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportAddreessModal;