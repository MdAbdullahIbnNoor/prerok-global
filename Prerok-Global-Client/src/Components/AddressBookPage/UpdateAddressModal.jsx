/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { axiosSecure } from '../../api/axiosInstances';
import { MdEdit } from 'react-icons/md';


const UpdateAddressModal = ({ refetch, data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [manualLoading, setManualLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const countries = [
        "Bangladesh",
        "India",
        "China",
        "UK",
        "USA",
        "Malaysia",
        "Turkistan",
        "Afghanistan",
        "Indonesia"
    ];


    const onSubmit = async (inputData) => {
        try {
            setManualLoading(true);
            const addressData = inputData;
            const { data: dbResponse } = await axiosSecure.put(`/api/addressbook/update-address/${data._id}`, addressData);
            // console.log(dbResponse);
            if (dbResponse.modifiedCount > 0) {
                toast.success("Address Updated");
                reset()
                setIsOpen(false)
                refetch()
            }
            setManualLoading(false)
        } catch (error) {
            toast.error(error.message)
            setManualLoading(false)
        }
    }
    return (
        <>
            <button onClick={() => setIsOpen(true)} className="text-xl font-semibold inline cursor-pointer"><MdEdit></MdEdit></button>
            <div className={`${isOpen ? "scale-100" : "scale-0"} bg-white/40  duration-300 ease-out h-screen w-full px-2 top-0 right-0 flex items-center justify-center z-50 fixed`}>
                <div className='relative w-full md:w-8/12 lg:w-4/12'>
                    {/* input form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={`bg-white shadow-xl px-5 py-6 rounded duration-300 ease-in-out ${isOpen ? "scale-100" : "scale-0"}`}
                    >
                        <span
                            onClick={() => setIsOpen(false)}
                            className='px-2 py-2 text-2xl rounded-full bg-gray-200 absolute top-3 right-3 cursor-pointer'>
                            <RxCross2></RxCross2>
                        </span>

                        <h2 className="text-2xl text-amber-500 mb-6 mt-4 font-semibold text-center">Update {data.name}'s Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Name Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">Name</label></p> */}
                                <div className="w-full">
                                    <input defaultValue={data?.name} type="text" {...register("name", { required: true })} placeholder="Name" className="border py-1 outline-none w-full px-3" />
                                    {errors.name && <p className="text-red-600">Name is required</p>}
                                </div>
                            </div>


                            {/* Phone Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p> */}
                                <div className="w-full">
                                    <input type="number" defaultValue={data?.phone} {...register("phone", { required: true })} placeholder="Phone" className="border py-1 outline-none w-full px-3" />
                                    {errors.phone && <p className="text-red-600">Phone is required</p>}
                                </div>
                            </div>


                            {/* Email Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p> */}
                                <div className="w-full">
                                    <input type="email" defaultValue={data?.email} {...register("email", { required: true })} placeholder="Email" className="border py-1 outline-none w-full px-3" />
                                    {errors.email && <p className="text-red-600">Email is required</p>}
                                </div>
                            </div>

                            {/* Country Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">Country</label></p> */}
                                <div className="w-full">
                                    <select
                                        {...register("country", { required: true })}
                                        defaultValue={data?.country}
                                        className="border py-1 outline-none w-full px-3"
                                        name="country" required>
                                        <option selected value="">Your Country</option>
                                        {countries.map((country, index) => (
                                            <option value={country} key={index}>{country}</option>
                                        ))}
                                    </select>
                                    {/* <input type="text" defaultValue={data?.country} {...register("country", { required: true })} placeholder="Country" className="border py-1 outline-none w-full px-3" /> */}
                                    {errors.country && <p className="text-red-600">Country is required</p>}
                                </div>
                            </div>

                            {/* Address Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p> */}
                                <div className="w-full">
                                    <input type="text" defaultValue={data?.address} {...register("address", { required: true })} placeholder="Address" className="border py-1 outline-none w-full px-3" />
                                    {errors.address && <p className="text-red-600">Address is required</p>}
                                </div>
                            </div>

                            {/* Postal code Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p> */}
                                <div className="w-full">
                                    <input type="text" defaultValue={data?.postal_code} {...register("postal_code", { required: true })} placeholder="Postal code" className="border py-1 outline-none w-full px-3" />
                                    {errors.postal_code && <p className="text-red-600">Postal code is required</p>}
                                </div>
                            </div>


                            {/* District Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">District</label></p> */}
                                <div className="w-full">
                                    <input type="text" defaultValue={data?.district} {...register("district", { required: true })} placeholder="District" className="border py-1 outline-none w-full px-3" />
                                    {errors.district && <p className="text-red-600">District is required</p>}
                                </div>
                            </div>

                            {/* Division Field */}
                            <div className="flex mb-4">
                                {/* <p className=" w-1/3"><label className="text-left font-semibold">Division</label></p> */}
                                <div className="w-full">
                                    <input type="text" defaultValue={data?.division} {...register("division", { required: true })} placeholder="Division" className="border py-1 outline-none w-full px-3" />
                                    {errors.division && <p className="text-red-600">Division is required</p>}
                                </div>
                            </div>

                        </div>
                        <div className='text-center'>
                            <button disabled={manualLoading} className="btn text-black btn-wide shadow-md ">
                                <span>
                                    <FaPlus className="text-amber-500 text-2xl" />
                                </span>
                                Update Address
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateAddressModal;