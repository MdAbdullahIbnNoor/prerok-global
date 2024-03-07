import { useEffect, useState } from "react";
import { axiosSecure } from "../../api/axiosInstances";
import { useLocation, useParams } from "react-router";
import Lottie from "lottie-react";
// import tracking from './../../assets/animations/tracking.json'
import trackingAnimation from "./../../assets/animations/TrackingAnimation.json";
import { FaBox, FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { FaWeight } from "react-icons/fa";
import { TbProgress } from "react-icons/tb";
import Loading from "../Shared/Loading/Loading";
import toast from "react-hot-toast";

const ProductTracking = () => {
  useEffect(() => {
    document.title = "Product Tracking | PrerokGlobal";
  }, []);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productIdForSearch = searchParams.get("productIdForSearch");
  
  // productIdForSearch && console.log(productIdForSearch);
  useEffect(() => {
    const handleProductIdFromRedirect = async () => {
      document
        .getElementById("trackingInfo")
        .scrollIntoView({ behavior: "smooth" });
      setLoading(true);
      try {
        await axiosSecure
          .get(`/api/bookings/get-booking/${productIdForSearch}`)
          .then((res) => {
            setBookingData(res.data);
            setLoading(false);
          });
      } catch (error) {
        toast.error("Product Not Found");
        setLoading(false);
      }
    };
    if (productIdForSearch) {
      handleProductIdFromRedirect();
    }
  }, [productIdForSearch]);

  const handleTracking = async (e) => {
    e.preventDefault();
    const enteredProductId = e.target.elements.productID.value;
    document
      .getElementById("trackingInfo")
      .scrollIntoView({ behavior: "smooth" });
    setLoading(true);
    try {
      await axiosSecure
        .get(`/api/bookings/get-booking/${enteredProductId}`)
        .then((res) => {
          setBookingData(res.data);
          setLoading(false);
        });
    } catch (error) {
      toast.error("Product Not Found");
      setLoading(false);
    }
  };


  return (
    <div className="overflow-hidden wrapper my-10 mx-auto min-h-[90vh]">
      {/* title section */}
      <div>
        <h1 className="text-2xl font-bold uppercase  md:text-3xl">
          Product Tracking{" "}
        </h1>
        <p className="text-gray-500">
          Track your product & see the current condition
        </p>
      </div>

      {/* product tracking field  */}
      <div className="w-full mt-20 " data-aos="fade-up" data-aos-duration="500">
        <div className="max-w-3xl mx-auto w-full rounded-lg bg-white border-2 border-amber-500 ">
          <p className="font-medium text-xl px-2 md:px-8 py-4">
            TRACK YOUR PRODUCT
            <span className="font-light text-sm text-slate-500">
              Now you can track your product easily
            </span>
          </p>
          <form
            onSubmit={handleTracking}
            className="flex flex-col md:flex-row justify-center p-5 items-center gap-4"
          >
            <input
              type="text"
              name="productID"
              className="flex-1 border-2 border-amber-500 w-full px-4 py-2 rounded-lg outline-none"
              id=""
              placeholder="Enter your product ID"
            />
            <button
              type="submit"
              name="productId"
              className="flex-1 btn bg-amber-500 px-4 py-2 rounded-lg w-full text-white duration-300 flex items-center justify-center"
            >
              {loading ? (
                <TbProgress className="animate-spin text-center" />
              ) : (
                "TRACK YOUR PRODUCT"
              )}
            </button>
          </form>
        </div>
      </div>

      <div id="trackingInfo">
        {loading && <Loading />}

        {bookingData && (
          <div className="flex items-center justify-center gap-6 flex-col md:flex-row">
            <div className="my-12 max-w-lg flex-1">
              <div className="px-6 py-3 rounded-lg border border-amber-500 w-full">
                <h2 className="text-center my-3 text-2xl font-bold">
                  Tracking Details
                </h2>
                <div className="space-y-2">
                  <div className="flex gap-3 items-center ">
                    <FaLocationDot className="text-xl" />
                    <div>
                      <h3 className="font-semibold text-lg">Shipped from</h3>
                      <p className="text-gray-500">
                        {bookingData?.fromAddress?.from_name}
                      </p>
                      <p className="text-gray-500">
                        {bookingData?.fromAddress?.from_address},{" "}
                        {bookingData?.fromAddress?.from_country}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <FaLocationDot className="text-xl" />
                    <div>
                      <h3 className="font-semibold text-lg">Destination</h3>
                      <p className="text-gray-500">
                        {bookingData?.fromAddress?.to_name}
                      </p>
                      <p className="text-gray-500">
                        {bookingData?.toAddress?.to_address},{" "}
                        {bookingData?.toAddress?.to_country}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <FaWeight className="text-xl" />
                    <div>
                      <h3 className="font-semibold text-lg">Weight</h3>
                      <p className="text-gray-500">
                        {bookingData?.parcelInfo?.parcel_weight} Gram
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <FaDollarSign className="text-xl" />
                    <div>
                      <h3 className="font-semibold text-lg">Delivery cost</h3>
                      <p className="text-gray-500">
                        <FaDollarSign className="inline text-sm" />
                        {bookingData?.parcelInfo?.shippingCost}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex gap-3 items-center ">
                    <FaBox className="text-xl" />
                    <div>
                      <h3 className="font-semibold text-lg">Tracking Status</h3>
                      <p className="text-gray-800 font-medium">
                        {bookingData?.trackingStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Lottie
                className="h-2/4"
                animationData={trackingAnimation}
                loop={true}
              />
            </div>
          </div>
        )}
      </div>
      {/* bg image sections  */}
      {/* <div className="w mx-auto mt-10" data-aos="fade-up ">
        <Lottie animationData={tracking} loop={true} />
      </div> */}
    </div>
  );
};

export default ProductTracking;
