// import axios from "axios";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";


const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        // axios.post('',data)
        // .then(res => {
        //     console.log(res.data);
        //     if(res.data.insertedId){
        //         Swal.fire({
        //             position: 'top-end',
        //             icon: 'success',
        //             title: 'Your response have been saved Successfully',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        // })
    }


    return (
        <div>
            <div className="max-w-screen-lg mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center w-full">
                    <div className="w-full">
                        <h2 className="text-lg text-[#f5ab35] md:text-3xl font-semibold">Enter your (From) address and the recipient (To) address.</h2>

                        <div className="md:flex md:gap-16 justify-center mx-auto">

                            {/* From Address Form */}
                            <div className="flex-1">
                                <h2 className="text-2xl text-[#f5ab35] mt-4 mb-3 font-semibold">From Address</h2>

                                {/* Name Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Your name</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("from_name", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.from_name && <p className="text-red-600">Name is required</p>}
                                    </div>
                                </div>

                                {/* Company field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Company</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("from_company")} placeholder="" className="border w-full px-3" />
                                    </div>
                                </div>

                                {/* Country Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Country / Location</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("from_country", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.from_country && <p className="text-red-600">Country is required</p>}
                                    </div>
                                </div>
                                {/* Address Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("from_address", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.from_address && <p className="text-red-600">Address is required</p>}
                                    </div>
                                </div>

                                {/* Postal code Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("from_postal_code", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.from_postal_code && <p className="text-red-600">Postal code is required</p>}
                                    </div>
                                </div>


                                {/* City Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">City</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("from_city", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.from_city && <p className="text-red-600">City is required</p>}
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p>
                                    <div className=" w-2/3">
                                        <input type="number" {...register("from_phone", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.from_phone && <p className="text-red-600">Phone is required</p>}
                                    </div>
                                </div>


                                {/* Email Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p>
                                    <div className=" w-2/3">
                                        <input type="email" {...register("from_email", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.from_email && <p className="text-red-600">Email is required</p>}
                                    </div>
                                </div>

                            </div>



                            {/* To Address form */}
                            <div className="flex-1">
                                <h2 className="text-2xl text-[#f5ab35] mt-4 mb-3 font-semibold">To Address</h2>

                                {/* Name Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Recipient name</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("res_name", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.res_name && <p className="text-red-600">Name is required</p>}
                                    </div>
                                </div>

                                {/* Company field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Company</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("res_company")} placeholder="" className="border w-full px-3" />
                                    </div>
                                </div>

                                {/* Country Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Country / Location</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("res_country", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.res_country && <p className="text-red-600">Country is required</p>}
                                    </div>
                                </div>
                                {/* Address Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Address</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("res_address", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.res_address && <p className="text-red-600">Address is required</p>}
                                    </div>
                                </div>

                                {/* Postal code Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Postal code</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("res_postal_code", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.res_postal_code && <p className="text-red-600">Postal code is required</p>}
                                    </div>
                                </div>


                                {/* City Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">City</label></p>
                                    <div className=" w-2/3">
                                        <input type="text" {...register("res_city", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.res_city && <p className="text-red-600">City is required</p>}
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Phone</label></p>
                                    <div className=" w-2/3">
                                        <input type="number" {...register("res_phone", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.res_phone && <p className="text-red-600">Phone is required</p>}
                                    </div>
                                </div>


                                {/* Email Field */}
                                <div className="flex mb-4">
                                    <p className=" w-1/3"><label className="text-left font-semibold">Email</label></p>
                                    <div className=" w-2/3">
                                        <input type="email" {...register("res_email", { required: true })} placeholder="" className="border w-full px-3" />
                                        {errors.res_email && <p className="text-red-600">Email is required</p>}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="btn mt-7 bg-[#f5ab35] text-white font-bold hover:bg-[#df9826]">Continue</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;