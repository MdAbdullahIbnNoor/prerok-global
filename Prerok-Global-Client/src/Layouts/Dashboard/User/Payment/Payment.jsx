/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdPayment, MdPayments } from "react-icons/md";
import PaymentModal from "./PaymentModal/PaymentModal";
import stripe from "../../../../assets/payment.jpg"
import ssl from "../../../../assets/stripe.jpg"


const Payment = ({ handleStepper, setBookingInfo, bookingInfo }) => {

    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className="">
            <div className="">
                <div className="flex items-center gap-4 bg-gray-200  p-4 h-30 rounded-sm shadow-md">
                    {/* icon */}
                    <div className="">
                        <MdPayment className="text-3xl font-bold text-amber-500" />
                    </div>
                    {/* content */}
                    <div>
                        <h1 className=" font-semibold text-gray-600 uppercase">
                            Total Payable Amount
                            <p className="text-3xl font-bold text-gray-500">$ {bookingInfo?.parcelInfo?.shippingCost || 0} </p>
                        </h1>
                    </div>
                </div>
            </div>

            <h1 className="mt-20 text-lg font-medium">Payment Methods:</h1>
            <div className="mx-auto max-w-xl flex-col md:flex-row  flex justify-center items-center gap-6">
                <div className="flex justify-between items-center">
                    <div className="rounded-md">
                        <img
                            className="w-[300px] h-[100px] object-cover"
                            src={ssl} alt="" />
                        <button
                            onClick={() => setIsOpen(true)}
                            className="btn bg-orange-400 text-white px-10 text-lg block w-full mx-auto">Payment</button>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-5 border border-gray-100">
                    <div className="mt-5  ">
                        <img
                            className="w-[300px] h-[100px] object-cover"
                            src={stripe} alt="" />
                        <button
                            onClick={() => setIsOpen(true)}
                            className="btn bg-orange-400 text-white px-10 text-lg w-full block mx-auto">Payment</button>
                    </div>
                </div>
            </div>
            <PaymentModal setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} handleStepper={handleStepper}  closeModal={closeModal} isOpen={isOpen} ></PaymentModal>
        </div>
    );
};

export default Payment;