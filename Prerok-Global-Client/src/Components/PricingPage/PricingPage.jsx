// import Stepper from "../Stepper/Stepper";
import { useState } from "react";
import "../Stepper/Stepper.css";
import { TiTick } from "react-icons/ti";
import AddressForm from "./AddressForm";
// import Processing from "./processing";

const PricingPage = () => {

    const steps = ["Customer Info", "Shipping Info", "Payment", "Processing", "On Delivery", "Delivered"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    const handleStepper = (e) => {
        e.preventDefault();
        currentStep === steps.length
            ? setComplete(true)
            : setCurrentStep((prev) => prev + 1);
    }


    return (
        <div className="w-11/12 mx-auto">
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
            
            {/* form section  */}
            {/* <div>
                <div className="px-5">
                    <h2 className="text-2xl mt-2 text-amber-500">Enter your (From) address and the recipient&apos;s (To) address.</h2>
                </div>
                <div>
                    <form onSubmit={handleStepper} className="flex flex-col lg:flex-row  gap-10">
                        <div className="w-full lg:w-1/2">
                            <h4 className="font-semibold text-amber-500 ml-5">From Address</h4>
                            <hr className="ml-5"/>
                            <div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Your Name:</div>
                                    <div><input type="text" className="border px-2 " name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Company:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="(optional)" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Country / Location:</div>
                                    <div><input type="text" className="border px-2" name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Address:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="Street Address" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div></div>
                                    <div><input type="text" className="border px-2" name="" placeholder="APT,Floor, Suite etc." id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Postal Code:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>City:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Phone:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Email:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Tax ID no.</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h4 className="font-semibold text-amber-500">To Address</h4>
                            <hr />
                            <div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Recipient Name:</div>
                                    <div><input type="text" className="border px-2" name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Company:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="(optional)" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Country / Location:</div>
                                    <div><input type="text" className="border px-2" name="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Address:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="Street Address" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div></div>
                                    <div><input type="text" className="border px-2" name="" placeholder="APT,Floor, Suite etc." id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Postal Code:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>City:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Phone:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Email:</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-between  p-3 px-12">
                                    <div>Tax ID no.</div>
                                    <div><input type="text" className="border px-2" name="" placeholder="" id="" /></div>
                                </div>
                                <div className="flex justify-end gap-5 p-3 px-12">
                                    
                                    <div><input type="checkbox" name="" id="" /></div>
                                    <div>This is residential address</div>
                                </div>
                                <div className="flex justify-end">
                                <input type="submit"  className="btn bg-yellow-400 w-32 p-2 flex text-center items-center justify-center mr-12" value="Continue" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
            {(currentStep === 1 || currentStep === 2 || currentStep === 3) && <AddressForm handleStepper={handleStepper}/>}
            {currentStep === 4 && <Processing />}
        </div>
    );
};

export default PricingPage;