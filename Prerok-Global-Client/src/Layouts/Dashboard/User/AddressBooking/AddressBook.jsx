import { FaPlus } from "react-icons/fa6";
import CreateAddressModal from "../../../../Components/AddressBookPage/CreateAddressModal";

const AddressBook = () => {
    return (
        <div>
            <div className="flex justify-between px-5">
                <h1 className="text-2xl font-semibold text-orange-400">
                    Address Book
                </h1>

                <CreateAddressModal></CreateAddressModal>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-center my-10">
                    <p className="my-3 text-gray-500">Save your delivery address here </p>
                    <CreateAddressModal></CreateAddressModal>
                </div>
                {/* card show dynamic  */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:w-3/4 mx-auto p-2">
                    <div className="bg-gray-50  md:flex justify-between p-3 px-5 shadow-md rounded-md">
                        {/* user info */}
                        <div className="space-y-2">
                            <p className="text-gray-500 font-semibold text-lg">User Name</p>
                            <p className="text-gray-500 font-semibold "> User mobile </p>
                            <p>User Address </p>
                        </div>
                        {/* edit button  */}
                        <div>
                            <p className="text-blue-500 font-semibold">Edit</p>
                        </div>
                    </div>

                    <div className="flex justify-between px-5  bg-gray-50 shadow-md rounded-md p-3">
                        {/* user info */}
                        <div className="space-y-2">
                            <p className="text-gray-500 font-semibold text-lg">User Name</p>
                            <p className="text-gray-500 font-semibold "> User mobile </p>
                            <p>User Address </p>
                        </div>
                        {/* edit button  */}
                        <div>
                            <p className="text-blue-500 font-semibold">Edit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressBook;