import { useState } from "react";
import "../../../../Components/Stepper/Stepper.css";
import { TiTick } from "react-icons/ti";
import AddressInfo from "../../../../Components/CreateBookingPage/AddressInfo";
import ParcelInfo from "../../../../Components/CreateBookingPage/ParcelInfo";
import Payment from "../Payment/Payment";
import ProcessingStatus from "../../../../Components/CreateBookingPage/ProcessingStatus";

const CreateBooking = () => {
    const steps = ["Address Info", "Parcel Info", "Payment Info", "Processing Status"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [bookingInfo, setBookingInfo] = useState({})
    console.log(bookingInfo);

    const handleStepper = () => {
        // e.preventDefault();
        currentStep === steps.length
            ? setComplete(true)
            : setCurrentStep((prev) => prev + 1);
    }


    return (

        <div className="py-10 ">
            <div className="flex items-center justify-between bg-white w-full mx-auto text-black max-w-xl mb-6">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            } `}
                    >
                        <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                        </div>
                        <p className="text-gray-500 font-medium">{step}</p>
                    </div>
                ))}
            </div>
            {/* first section  */}
            <div className="flex justify-between py-3">
                <h2 className="text-2xl font-semibold">Create Booking Manager</h2>
                <div className="flex items-center gap-5 text-sm">
                    <div>Advance Shipping</div>
                    <div>Help</div>
                </div>
            </div>
            {/* second section  */}
            <div>
                {
                    currentStep === 1 &&
                    <AddressInfo setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} handleStepper={handleStepper}></AddressInfo>
                }
                {
                    currentStep === 2 &&
                    <ParcelInfo setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} handleStepper={handleStepper}></ParcelInfo>
                }
                {
                    currentStep === 3 &&
                    <Payment setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} handleStepper={handleStepper}></Payment>
                }
                {
                    currentStep === 4 &&
                    <ProcessingStatus  setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} handleStepper={handleStepper}></ProcessingStatus>
                }
            </div>
        </div>
    );
};

export default CreateBooking;