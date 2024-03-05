/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ImportAddreessModal from './ImportAddreessModal';

const AddressInfo = ({ handleStepper, setBookingInfo, bookingInfo }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

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
            setBookingInfo({ ...bookingInfo, fromAddress, toAddress })
            handleStepper()
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleImportFromAddress = (address) => {
        setValue("from_name", address?.name || "")
        setValue("from_phone", address?.phone || "")
        setValue("from_email", address?.email || "")
        setValue("from_division", address?.division || "")
        setValue("from_district", address?.district || "")
        setValue("from_address", address?.address || "")
        setValue("from_country", address?.country || "")
        setValue("from_postal_code", address?.postal_code || "")
    }

    const handleImportToAddress = (address) => {
        setValue("to_name", address?.name || "")
        setValue("to_phone", address?.phone || "")
        setValue("to_email", address?.email || "")
        setValue("to_division", address?.division || "")
        setValue("to_district", address?.district || "")
        setValue("to_address", address?.address || "")
        setValue("to_country", address?.country || "")
        setValue("to_postal_code", address?.postal_code || "")
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col md:flex-row gap-6 items-center justify-betweenmt-10'>
                    <div className="flex flex-col gap-2 flex-1">
                        <div className='md:flex items-center justify-between my-2'>
                            <h3 className='text-xl md:text-2xl font-medium mb-2'>From Address :</h3>
                            <ImportAddreessModal handleImportAddress={handleImportFromAddress} modalFor="fromAddress" />
                        </div>
                        {/* Name Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Name</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_name", { required: true })} placeholder="Your Name" className="border py-1 outline-none w-full px-3" />
                                {errors.name && <p className="text-red-600">Name is required</p>}
                            </div>
                        </div>


                        {/* Phone Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p> */}
                            <div className="w-full">
                                <input type="number" {...register("from_phone", { required: true })} placeholder="Your Phone" className="border py-1 outline-none w-full px-3" />
                                {errors.phone && <p className="text-red-600">Phone is required</p>}
                            </div>
                        </div>


                        {/* Email Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p> */}
                            <div className="w-full">
                                <input type="email" {...register("from_email", { required: true })} placeholder="Your Email" className="border py-1 outline-none w-full px-3" />
                                {errors.email && <p className="text-red-600">Email is required</p>}
                            </div>
                        </div>

                        {/* Country Field */}
                        <div className="flex mb-4">
                            <div className="w-full">
                                <select {...register("from_country", { required: true })} className="border py-1 outline-none w-full px-3" name="from_country" required>
                                    <option selected value="">{errors.from_country ? "From Country is required" : "From Country"}</option>
                                    {countries.map((country, index) => (
                                        <option value={country} key={index}>{country}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Address Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_address", { required: true })} placeholder="Your Address" className="border py-1 outline-none w-full px-3" />
                                {errors.address && <p className="text-red-600">Address is required</p>}
                            </div>
                        </div>

                        {/* Postal code Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p> */}
                            <div className="w-full">
                                <input type="number" {...register("from_postal_code", { required: true })} placeholder="Your Postal code" className="border py-1 outline-none w-full px-3" />
                                {errors.postal_code && <p className="text-red-600">Postal code is required</p>}
                            </div>
                        </div>


                        {/* District Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">District</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_district", { required: true })} placeholder="Your District" className="border py-1 outline-none w-full px-3" />
                                {errors.district && <p className="text-red-600">District is required</p>}
                            </div>
                        </div>

                        {/* Division Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Division</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("from_division", { required: true })} placeholder="Your Division" className="border py-1 outline-none w-full px-3" />
                                {errors.division && <p className="text-red-600">Division is required</p>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <div className='md:flex items-center justify-between my-2'>
                            <h3 className='text-xl md:text-2xl font-medium mb-2'>To Address :</h3>
                            <ImportAddreessModal handleImportAddress={handleImportToAddress} modalFor="toAddress" />
                        </div>
                        {/* Name Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Name</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_name", { required: true })} placeholder="Recipient Name" className="border py-1 outline-none w-full px-3" />
                                {errors.name && <p className="text-red-600">Name is required</p>}
                            </div>
                        </div>


                        {/* Phone Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p> */}
                            <div className="w-full">
                                <input type="number" {...register("to_phone", { required: true })} placeholder="Recipient Number" className="border py-1 outline-none w-full px-3" />
                                {errors.phone && <p className="text-red-600">Phone is required</p>}
                            </div>
                        </div>


                        {/* Email Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p> */}
                            <div className="w-full">
                                <input type="email" {...register("to_email", { required: true })} placeholder="Recipient Email" className="border py-1 outline-none w-full px-3" />
                                {errors.email && <p className="text-red-600">Email is required</p>}
                            </div>
                        </div>

                        {/* Country Field */}
                        <div className="flex mb-4">
                            <div className="w-full">
                                <select {...register("to_country", { required: true })} className="border py-1 outline-none w-full px-3" name="to_country" required>
                                    <option selected value="">{errors.to_country ? "To Country is required" : "To Country"}</option>
                                    {countries.map((country, index) => (
                                        <option value={country} key={index}>{country}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Address Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_address", { required: true })} placeholder="Recipient Address" className="border py-1 outline-none w-full px-3" />
                                {errors.address && <p className="text-red-600">Address is required</p>}
                            </div>
                        </div>

                        {/* Postal code Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p> */}
                            <div className="w-full">
                                <input type="number" {...register("to_postal_code", { required: true })} placeholder="Recipient Postal code" className="border py-1 outline-none w-full px-3" />
                                {errors.postal_code && <p className="text-red-600">Postal code is required</p>}
                            </div>
                        </div>


                        {/* District Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">District</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_district", { required: true })} placeholder="Recipient District" className="border py-1 outline-none w-full px-3" />
                                {errors.district && <p className="text-red-600">District is required</p>}
                            </div>
                        </div>

                        {/* Division Field */}
                        <div className="flex mb-4">
                            {/* <p className=" w-1/3"><label className="text-left font-semibold">Division</label></p> */}
                            <div className="w-full">
                                <input type="text" {...register("to_division", { required: true })} placeholder="Recipient Division" className="border py-1 outline-none w-full px-3" />
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