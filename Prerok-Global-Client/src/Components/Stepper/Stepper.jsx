import { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = () => {
  const steps = ["Customer Info", "Shipping Info", "Payment", "Processing", "On Delivery", "Delivered"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleStepper = () => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  }

  return (
    <>
      <div className="hidden lg:flex  justify-between p-10 bg-slate-600 w-full lg:w-3/4 mx-auto text-black">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={handleStepper}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;