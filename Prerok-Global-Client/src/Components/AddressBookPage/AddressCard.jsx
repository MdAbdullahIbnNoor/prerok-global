/* eslint-disable react/prop-types */
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2'
import { axiosSecure } from '../../api/axiosInstances';
import UpdateAddressModal from './UpdateAddressModal';
import toast from 'react-hot-toast';


const AddressCard = ({ address, refetch }) => {

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data: dbResponse } = await axiosSecure.delete(`/api/addressbook/delete-address/${id}`)
                if (dbResponse.deletedCount > 0) {
                    toast.success("successfully deleted")
                    refetch();
                }
            }
        });
    }
    return (
        <div>
            <div key={address._id} className="bg-gray-50  md:flex justify-between p-3 px-5 shadow-md rounded-md">
                {/* user info */}
                <div className="space-y-2 w-full">
                    <div className="flex justify-between">
                        <p className="text-black font-semibold text-xl">{address.name}</p>
                        {/* edit and delete button  */}
                        <div className="flex gap-3 items-center justify-end right-3 top-3">
                            <UpdateAddressModal refetch={refetch} data={address}></UpdateAddressModal>
                            <button onClick={() => handleDelete(address._id)} className="text-xl font-semibold inline cursor-pointer"><MdDelete></MdDelete></button>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 flex-col md:flex-row">
                        <p className="text-gray-500 font-medium">Phone: {address.phone} </p>
                        <p className="text-gray-500 font-medium">Email: {address.email} </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="text-gray-500 font-medium">Country: {address.country} </p>
                        <p className="text-gray-500 font-medium">Postal Code: {address.postal_code} </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="text-gray-500 font-medium">District: {address.district} </p>
                        <p className="text-gray-500 font-medium">Division: {address.division} </p>
                    </div>
                    <p className="text-gray-500 font-medium">Adreess: {address.address} </p>
                </div>
            </div>
        </div>
    );
};

export default AddressCard;