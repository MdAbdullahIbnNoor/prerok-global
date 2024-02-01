import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const CreateAddressModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <button onClick={() => setIsOpen(true)} className="btn text-black btn-wide shadow-md">
                <span>
                    <FaPlus className="text-amber-500 text-2xl" />
                </span>{" "}
                Add New Delivery Address
            </button>
            <div className={`${isOpen ? "scale-100" : "scale-0"} bg-white/40  duration-300 ease-out h-screen w-full px-2 top-0 right-0 flex items-center justify-center z-50 fixed`}>
                <div className='relative w-full md:w-8/12 lg:w-4/12'>
                    {/* input form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={`bg-white shadow-xl px-5 py-6 rounded duration-300 ease-in-out ${isOpen ? "scale-100" : "scale-0"}`}
                    >
                        <span
                            onClick={() => setIsOpen(false)}
                            className='px-2 py-2 text-2xl rounded-full bg-gray-200 absolute top-3 right-3 cursor-pointer' ><RxCross2></RxCross2></span>

                        <div className="rounded px-2 py-3">
                            <h2 className="text-2xl text-amber-500 mb-6 mt-4 font-semibold text-center">Details About New Address</h2>

                            {/* Name Field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">Name</label></p>
                                <div className=" w-2/3">
                                    <input type="text" {...register("name", { required: true })} placeholder="" className="border py-1 outline-none w-full px-3" />
                                    {errors.name && <p className="text-red-600">Name is required</p>}
                                </div>
                            </div>

                            {/* Company field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">Company</label></p>
                                <div className=" w-2/3">
                                    <input type="text" {...register("company")} placeholder="" className="border py-1 outline-none w-full px-3" />
                                </div>
                            </div>

                            {/* Country Field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">Country / Location</label></p>
                                <div className=" w-2/3">
                                    <input type="text" {...register("country", { required: true })} placeholder="" className="border py-1 outline-none w-full px-3" />
                                    {errors.country && <p className="text-red-600">Country is required</p>}
                                </div>
                            </div>
                            {/* Address Field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p>
                                <div className=" w-2/3">
                                    <input type="text" {...register("address", { required: true })} placeholder="" className="border py-1 outline-none w-full px-3" />
                                    {errors.address && <p className="text-red-600">Address is required</p>}
                                </div>
                            </div>

                            {/* Postal code Field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p>
                                <div className=" w-2/3">
                                    <input type="text" {...register("postal_code", { required: true })} placeholder="" className="border py-1 outline-none w-full px-3" />
                                    {errors.postal_code && <p className="text-red-600">Postal code is required</p>}
                                </div>
                            </div>


                            {/* City Field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">City</label></p>
                                <div className=" w-2/3">
                                    <input type="text" {...register("city", { required: true })} placeholder="" className="border py-1 outline-none w-full px-3" />
                                    {errors.city && <p className="text-red-600">City is required</p>}
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p>
                                <div className=" w-2/3">
                                    <input type="number" {...register("phone", { required: true })} placeholder="" className="border py-1 outline-none w-full px-3" />
                                    {errors.phone && <p className="text-red-600">Phone is required</p>}
                                </div>
                            </div>


                            {/* Email Field */}
                            <div className="flex mb-4">
                                <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p>
                                <div className=" w-2/3">
                                    <input type="email" {...register("email", { required: true })} placeholder="" className="border py-1 outline-none w-full px-3" />
                                    {errors.email && <p className="text-red-600">Email is required</p>}
                                </div>
                            </div>

                        </div>

                        <button disabled={isLoading} className="btn text-black btn-wide shadow-md">
                            <span>
                                <FaPlus className="text-amber-500 text-2xl" />
                            </span>
                            Add New Delivery Address
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateAddressModal;