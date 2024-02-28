/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import { calculateCost } from "../../utils/calculateCost";
import { axiosSecure } from "../../api/axiosInstances";

const ParcelInfo = ({ handleStepper, setBookingInfo, bookingInfo }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async (data) => {
        const weight = Number(data.parcel_weight);
        // const length = Number(data.parcel_length);
        const width = Number(data.parcel_width);
        const height = Number(data.parcel_height);
        // const packageType = data.packaging_type;
        const shippingMethod = data.shipping_method;
        // const costByDimension = Number((((length + width + height) * 0.05) + (weight * 0.01)).toFixed(1));
        // const payableAmount = calculateCost(costByDimension, packageType, shippingMethod);
        const requestBody = {
            height,
            width,
            weight,
            fromCountry: bookingInfo?.fromAddress?.from_country,
            toCountry: bookingInfo?.toAddress?.to_country,
            deliveryType: shippingMethod === 'expedited' ? 'Faster' : 'Usual'
        };
        const { data: dbResponse } = await axiosSecure.post("/api/packages/calculateCost", requestBody)
        const parcelInfo = { ...data, shippingCost: dbResponse?.cost };
        setBookingInfo({ ...bookingInfo, parcelInfo })
        handleStepper()
    }
    return (
        <div className="my-10">
            <h1 className="text-2xl font-medium">Parcel Information :</h1>
            <div>
                <form action="" onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
                    <div className="my-3">
                        <label className="text-lg font-medium" htmlFor="parcel_weight">Parcel Weight(kg):</label>
                        <input min={0} type="number" {...register("parcel_weight", { required: true })} id="parcel_weight" placeholder="Parcel Weight" className="border py-1 outline-none w-full px-3 my-1" />
                        {errors.parcel_weight && <p className="text-red-600">Parcel Weight is required</p>}
                    </div>
                    <div className="my-3 ">
                        <label className="text-lg font-medium" htmlFor="parcel_length">Dimensions(cm):</label>
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <input min={0} type="number" {...register("parcel_length", { required: true })} id="parcel_length" placeholder="Parcel Length" className="border py-1 outline-none w-full px-3 my-1" />
                            <input min={0} type="number" {...register("parcel_width", { required: true })} id="parcel_width" placeholder="Parcel Width" className="border py-1 outline-none w-full px-3 my-1" />
                            <input min={0} type="number" {...register("parcel_height", { required: true })} id="parcel_height" placeholder="Parcel Height" className="border py-1 outline-none w-full px-3 my-1" />
                        </div>
                        {errors.parcel_length && <p className="text-red-600">Parcel Length is required</p>}
                        {errors.parcel_width && <p className="text-red-600">Parcel Width is required</p>}
                        {errors.parcel_height && <p className="text-red-600">Parcel Height is required</p>}
                    </div>
                    <div className="my-3">
                        <label className="text-lg font-medium" htmlFor="packaging_type">Packaging Type:</label>
                        <select className="border py-1 outline-none w-full px-3 my-1" {...register("packaging_type", { required: true })} name="packaging_type" id="packaging_type" defaultValue="default">
                            <option value="default" disabled>Select Packaging Type</option>
                            <option value="standard">Standard Packaging</option>
                            <option value="fragile">Fragile Packaging</option>
                            <option value="document">Envelope/Document Packaging</option>
                            <option value="plastic">Hard Plastic Case</option>
                            <option value="soft">Soft Pack</option>
                        </select>
                    </div>

                    <div className="my-3">
                        <label className="text-lg font-medium" htmlFor="shipping_method">Shipping Method:</label>
                        <select className="border py-1 outline-none w-full px-3 my-1" {...register("shipping_method", { required: true })} name="shipping_method" id="shipping_method" defaultValue="default">
                            <option value="default" disabled>Select Shipping Method</option>
                            <option value="standard">Standard Shipping</option>
                            <option value="expedited">Expedited Shipping</option>
                            {/* <option value="express">Express Shipping</option> */}
                        </select>
                    </div>
                    <h5 className="mb-2 text-right">Confused?  <Link className="text-amber-500 underline" to="/pricing-chart">See pricing chart</Link></h5>
                    <input type="submit" value="Continue" className='px-3 py-2 w-full bg-amber-500 text-white font-medium cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default ParcelInfo;