import { useState } from "react";
import { MdPayment, MdPayments } from "react-icons/md";
import PaymentModal from "./PaymentModal/PaymentModal";
import stripe from "../../../../assets/payment.jpg"
import ssl from "../../../../assets/stripe.jpg"


const Payment = () => {

    let [isOpen, setIsOpen] = useState(false)
  
    const closeModal = () =>{
      setIsOpen(false)
    }
  
    return (
        <div className="bg-gray-50 ">
            

            <div className="grid gap-4 grid-col-col md:grid-cols-2">
                <div className=" flex items-center gap-4 bg-gray-200  p-4 h-30  shadow-md rounded-sm drop-shadow-md">
                    {/* icon */}
                    <div className="">
                        <MdPayment className="text-3xl font-bold text-green-500" />
                    </div>
                    {/* content */}
                    <div>
                        <h1 className=" font-semibold text-gray-600 uppercase">
                            Total Payment
                            <p className="text-3xl font-bold text-gray-500">$ 3000 </p>
                        </h1>
                    </div>
                </div>

                <div className=" flex items-center gap-4 bg-gray-200  p-4 h-30  shadow-md rounded-sm drop-shadow-md">
                    {/* icon */}
                    <div className="">
                        <MdPayments className="text-3xl font-bold text-green-500" />
                    </div>
                    {/* content */}
                    <div>
                        <h1 className=" font-semibold text-gray-600 uppercase">
                            Refund Money
                            <p className="text-3xl font-bold text-gray-500">$ 00 </p>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-3/4 mx-auto md:w-7/12 mt-20 bg-gray-50 ">
               <div className="flex justify-between items-center">
                <div className="rounded-md">
                    <img 
                    className="w-[300px] h-[100px]"
                    src={ssl} alt="" />
                     <button 
                onClick={ () => setIsOpen(true)}
                className="btn bg-orange-400 text-white px-10 text-lg block w-full mx-auto">Payment</button>
                </div>
               <div>              
                </div>
               </div>
               <div className="flex justify-between items-center mt-5 border border-gray-100">
                <div className="mt-5  ">
                <img
                    className="w-[300px] h-[100px]"
                    src={stripe} alt="" />
                    <button 
                onClick={ () => setIsOpen(true)}
                className="btn bg-orange-400 text-white px-10 text-lg w-full block mx-auto">Payment</button>

                </div>
               <div>
               
                </div>
               </div>

            </div>

        
            <PaymentModal closeModal={closeModal} isOpen={isOpen} ></PaymentModal>

        </div>
    );
};

export default Payment;