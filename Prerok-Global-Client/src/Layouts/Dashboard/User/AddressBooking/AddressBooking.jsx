import { FaPlus } from "react-icons/fa6";

const AddressBooking = () => {
    return (
        <div>
            <div className="flex justify-between px-5">
                <h1 className="text-2xl font-semibold drop-shadow-md text-orange-400">
                    Address Book{" "}
                </h1>
                <h1 className="text-xl font-semibold drop-shadow-md flex items-center gap-2 ">
                    {" "}
                    <span>
                        <FaPlus className="text-green-500 text-2xl" />
                    </span>{" "}
                    Add new Address{" "}
                </h1>
            </div>

            <div className="text-center my-10">
                <p className="my-3 text-gray-500">Save your delivery address here </p>
                <div className="drop-shadow-md">
                    <button className="btn text-orange-500 btn-wide">
                        <span>
                            <FaPlus className="text-green-500 text-2xl" />
                        </span>{" "}
                        Add New Delivery Address
                    </button>
                </div>
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
    );
};

export default AddressBooking;