/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddressInfo = ({handleStepper, setBookingInfo, bookingInfo}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const addressData = data;
            const fromAddress = {
                from_name: addressData.from_name,
                from_phone: addressData.from_phone,
                from_email: addressData.from_email,
                from_division: addressData.from_division,
                from_district: addressData.from_district,
                from_address: addressData.from_address,
                from_country: addressData.from_country,
                from_postal_code: addressData.from_postal_code,
            }
            const toAddress = {
                to_name: addressData.to_name,
                to_phone: addressData.to_phone,
                to_email: addressData.to_email,
                to_division: addressData.to_division,
                to_district: addressData.to_district,
                to_address: addressData.to_address,
                to_country: addressData.to_country,
                to_postal_code: addressData.to_postal_code,
            }
            setBookingInfo({...bookingInfo, fromAddress, toAddress})
            handleStepper()
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center justify-between gap-6 mt-10'>
                    <div className="flex flex-col gap-2 flex-1">
                        <h3 className='text-2xl font-medium mb-2'>From Address :</h3>
                        {/* Name Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Name</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_name", { required: true })} placeholder="Name" className="border py-1 outline-none w-full px-3" />
                                {errors.name && <p className="text-red-600">Name is required</p>}
                            </div>
                        </div>


                        {/* Phone Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p> */}
                            <div className="w-full">
                                <input type="number" {...register("from_phone", { required: true })} placeholder="Phone" className="border py-1 outline-none w-full px-3" />
                                {errors.phone && <p className="text-red-600">Phone is required</p>}
                            </div>
                        </div>


                        {/* Email Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p> */}
                            <div className="w-full">
                                <input type="email" {...register("from_email", { required: true })} placeholder="Email" className="border py-1 outline-none w-full px-3" />
                                {errors.email && <p className="text-red-600">Email is required</p>}
                            </div>
                        </div>

                        {/* Country Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Country</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_country", { required: true })} placeholder="Country" className="border py-1 outline-none w-full px-3" />
                                {errors.country && <p className="text-red-600">Country is required</p>}
                            </div>
                        </div>

                        {/* Address Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_address", { required: true })} placeholder="Address" className="border py-1 outline-none w-full px-3" />
                                {errors.address && <p className="text-red-600">Address is required</p>}
                            </div>
                        </div>

                        {/* Postal code Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_postal_code", { required: true })} placeholder="Postal code" className="border py-1 outline-none w-full px-3" />
                                {errors.postal_code && <p className="text-red-600">Postal code is required</p>}
                            </div>
                        </div>


                        {/* District Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">District</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_district", { required: true })} placeholder="District" className="border py-1 outline-none w-full px-3" />
                                {errors.district && <p className="text-red-600">District is required</p>}
                            </div>
                        </div>

                        {/* Division Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Division</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_division", { required: true })} placeholder="Division" className="border py-1 outline-none w-full px-3" />
                                {errors.division && <p className="text-red-600">Division is required</p>}
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <h3 className='text-2xl font-medium mb-2'>To Address :</h3>
                        {/* Name Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Name</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_name", { required: true })} placeholder="Name" className="border py-1 outline-none w-full px-3" />
                                {errors.name && <p className="text-red-600">Name is required</p>}
                            </div>
                        </div>


                        {/* Phone Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p> */}
                            <div className="w-full">
                                <input type="number" {...register("to_phone", { required: true })} placeholder="Phone" className="border py-1 outline-none w-full px-3" />
                                {errors.phone && <p className="text-red-600">Phone is required</p>}
                            </div>
                        </div>


                        {/* Email Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p> */}
                            <div className="w-full">
                                <input type="email" {...register("to_email", { required: true })} placeholder="Email" className="border py-1 outline-none w-full px-3" />
                                {errors.email && <p className="text-red-600">Email is required</p>}
                            </div>
                        </div>

                        {/* Country Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Country</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_country", { required: true })} placeholder="Country" className="border py-1 outline-none w-full px-3" />
                                {errors.country && <p className="text-red-600">Country is required</p>}
                            </div>
                        </div>

                        {/* Address Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_address", { required: true })} placeholder="Address" className="border py-1 outline-none w-full px-3" />
                                {errors.address && <p className="text-red-600">Address is required</p>}
                            </div>
                        </div>

                        {/* Postal code Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_postal_code", { required: true })} placeholder="Postal code" className="border py-1 outline-none w-full px-3" />
                                {errors.postal_code && <p className="text-red-600">Postal code is required</p>}
                            </div>
                        </div>


                        {/* District Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">District</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_district", { required: true })} placeholder="District" className="border py-1 outline-none w-full px-3" />
                                {errors.district && <p className="text-red-600">District is required</p>}
                            </div>
                        </div>

                        {/* Division Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Division</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_division", { required: true })} placeholder="Division" className="border py-1 outline-none w-full px-3" />
                                {errors.division && <p className="text-red-600">Division is required</p>}
                            </div>
                        </div>

                    </div>
                </div>
                <input type="submit" value="Continue" className='px-3 py-2 w-full bg-amber-500 text-white font-medium cursor-pointer' />
            </form>
        </div>
    );
};

export default AddressInfo;