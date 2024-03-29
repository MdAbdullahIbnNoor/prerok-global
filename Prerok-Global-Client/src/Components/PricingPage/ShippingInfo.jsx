// import Stepper from "../Stepper/Stepper";
import { useState } from "react";
import "../Stepper/Stepper.css";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const ShippingInfo = () => {

    const steps = ["Customer Info", "Shipping Info", "Payment", "Processing", "On Delivery", "Delivered"];
    const [currentStep, setCurrentStep] = useState(2);
    const [complete, setComplete] = useState(false);

    const handleStepper = (e) => {
        e.preventDefault();
        currentStep === steps.length
            ? setComplete(true)
            : setCurrentStep((prev) => prev + 1);
    }

    return (
        <div className="mx-auto">
            {/* stepper  */}
            {/* <Stepper></Stepper> */}
            <>
                <div className="hidden lg:flex  justify-between p-10 bg-slate-600 w-full lg:w-3/4 mx-auto text-black">
                    {steps?.map((step, i) => (
                        <div
                            key={i}
                            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                                } `}
                        >
                            <div className="step">
                                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                            </div>
                            <p className="text-gray-500">{step}</p>
                        </div>
                    ))}
                </div>
                {/* {!complete && (
        <button
          className="btn"
          onClick={handleStepper}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )} */}
            </>

            {/* first section  */}
            <div className="bg-slate-500 text-white flex justify-between px-3 py-3">
                <h2 className="text-2xl">PrerokGlobal Ship Manager</h2>
                <div className="flex items-center gap-5 text-sm">
                    <div>Advance Shipping</div>
                    <div>Help</div>
                </div>
            </div>
            {/* second section  */}
            <div className="flex bg-slate-300 text-slate-700 px-3 py-2 gap-2 text-lg font-medium">
                <div>1.</div>
                <div>Shipping Information</div>
            </div>
            {/* form section  */}
            <div>
                <div className="px-5">
                    <h2 className="text-2xl mt-2 text-amber-500">Enter your shipping information.</h2>
                </div>
                <div>
                    <form onSubmit={handleStepper} className="max-w-2xl mx-auto">
                        <div className="">
                            <div className="flex justify-between  p-3 px-12">
                                <div>HEIGHT (CM):</div>
                                <div><input type="text" className="border px-2 py-1 w-full " name="" id="" /></div>
                            </div>
                            <div className="flex justify-between  p-3 px-12">
                                <div>WIDTH (CM):</div>
                                <div><input type="text" className="border px-2 py-1 w-full" name=""  id="" /></div>
                            </div>
                            <div className="flex justify-between  p-3 px-12">
                                <div>DEPTH (CM)::</div>
                                <div><input type="text" className="border px-2 py-1 w-full" name="" id="" /></div>
                            </div>
                            <div className="flex justify-between  p-3 px-12">
                                <div>WEIGHT (KG):</div>
                                <div><input type="text" className="border px-2 py-1 w-full" name="" placeholder="" id="" /></div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/dashboard/pricing/3">
                                <input type="submit" className="btn bg-yellow-400 w-32 p-2 flex text-center items-center justify-center mr-12" value="Continue" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;