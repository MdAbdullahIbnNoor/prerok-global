import { useState } from "react";
import Lottie from "lottie-react";
import { axiosSecure } from "../../../../api/axiosInstances";
import productReturn from "./../../../../assets/animations/productReturn.json";
import toast from "react-hot-toast";

const ReturnPage = () => {
  const [reason, setReason] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [refundType, setRefundType] = useState("money");

  const handleReturn = async () => {
    try {
      const response = await axiosSecure.patch(
        `/api/bookings/update-return-status/${trackingId}`,
        {
          returnReason: reason,
          refundType: refundType,
        }
      );
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        toast.success(
          "Your product has been returned successfully. We will contact you shortly for the next step"
        );
      } else {
        toast.success("There is an error occured. Please try again");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-amber-500 text-center pt-14">
        Return Product
      </h1>
      <p className="text-lg text-center text-gray-400">
        Fill up the following form to return your product
      </p>
      <div className="flex justify-around items-center max-w-5xl mx-auto px-12 gap-12 mt-16">
        <div className="w-1/2 mx-auto p-12 bg-white rounded shadow-lg my-16 border-2 border-amber-400">
          <div className="mb-4">
            <label htmlFor="reason" className="block font-medium">
              Reason for Return:
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 w-full border-amber-500 rounded-md shadow-md focus:ring-amber-500 focus:border-amber-500 p-2 bg-amber-100 text-gray-400 font-medium"
            >
              <option value="">Select Reason</option>
              <option value="Defective">Defective</option>
              <option value="Wrong item">Wrong Item</option>
              <option value="Changed mind">Changed Mind</option>
              <option value="Size too small">Size Too Small</option>
              <option value="Size too large">Size Too Large</option>
              <option value="Not as described">Not as Described</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="trackingId" className="block font-medium">
              Tracking ID:
            </label>
            <input
              type="text"
              id="trackingId"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="mt-1 block w-full border-amber-300 rounded-md shadow-md focus:ring-amber-500 focus:border-amber-500 p-2 pl-4 bg-amber-100 text-gray-400 font-medium"
              placeholder="Tracking ID"
            />
          </div>
          <div className="mb-4">
            <span className="block font-medium">Refund Type:</span>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                value="money"
                checked={refundType === "money"}
                onChange={() => setRefundType("money")}
                className="form-radio h-5 w-5 text-amber-600"
              />
              <span className="ml-2">Money Back</span>
            </label>
            <label className="inline-flex items-center mt-1 ml-6">
              <input
                type="radio"
                value="replacement"
                checked={refundType === "replacement"}
                onChange={() => setRefundType("replacement")}
                className="form-radio h-5 w-5 text-amber-600"
              />
              <span className="ml-2">Replacement Product</span>
            </label>
          </div>
          <button
            onClick={handleReturn}
            className="btn text-lg w-full bg-amber-400 text-white py-2 px-4 rounded hover:bg-amber-500"
          >
            Return
          </button>
        </div>
        <div className="w-1/2 ">
          <Lottie animationData={productReturn} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default ReturnPage;
