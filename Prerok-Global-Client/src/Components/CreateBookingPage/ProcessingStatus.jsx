import { Link } from "react-router-dom";
import PDFGenerator from "./PDFGenerator";

/* eslint-disable react/prop-types */
const ProcessingStatus = ({ bookingInfo }) => {
    return (
        <div>
            <span className="italic text-amber-500">Download this document and drop the parcel in your nearest branch</span>
            <div>
                <h3 className="text-center text-2xl font-semibold my-3">Thank you for choosing Prerok Global</h3>
                <h6 className="text-center font-medium">TrackingID: {bookingInfo?.trackingID}</h6>
                <div className="grid grid-cols-1 mt-10 mb-6 md:grid-cols-2 gap-6">
                    <div className="rounded px-3 py-2 border w-full">
                        <h4 className="text-lg font-medium">From Address :</h4>
                        <p>Name: <span className="font-medium">{bookingInfo?.fromAddress?.from_name}</span></p>
                        <p>Email: <span className="font-medium">{bookingInfo?.fromAddress?.from_email}</span></p>
                        <p>Phone: <span className="font-medium">{bookingInfo?.fromAddress?.from_phone}</span></p>
                        <p>Postal Code: <span className="font-medium">{bookingInfo?.fromAddress?.from_postal_code}</span></p>
                        <p>Country: <span className="font-medium">{bookingInfo?.fromAddress?.from_country}</span></p>
                        <p>Address: <span className="font-medium">{bookingInfo?.fromAddress?.from_address}</span></p>
                        <p>District: <span className="font-medium">{bookingInfo?.fromAddress?.from_district}</span></p>
                        <p>Division: <span className="font-medium">{bookingInfo?.fromAddress?.from_division}</span></p>
                    </div>
                    <div className="rounded px-3 py-2 border w-full">
                        <h4 className="text-lg font-medium">To Address :</h4>
                        <p>Name: <span className="font-medium">{bookingInfo?.toAddress?.to_name}</span></p>
                        <p>Email: <span className="font-medium">{bookingInfo?.toAddress?.to_email}</span></p>
                        <p>Phone: <span className="font-medium">{bookingInfo?.toAddress?.to_phone}</span></p>
                        <p>Postal Code: <span className="font-medium">{bookingInfo?.toAddress?.to_postal_code}</span></p>
                        <p>Country: <span className="font-medium">{bookingInfo?.toAddress?.to_country}</span></p>
                        <p>Address: <span className="font-medium">{bookingInfo?.toAddress?.to_address}</span></p>
                        <p>District: <span className="font-medium">{bookingInfo?.toAddress?.to_district}</span></p>
                        <p>Division: <span className="font-medium">{bookingInfo?.toAddress?.to_division}</span></p>
                    </div>
                    <div className="rounded px-3 py-2 border w-full">
                        <h4 className="text-lg font-medium">Parcel Info :</h4>
                        <p>Packaging Type: <span className="font-medium">{bookingInfo?.parcelInfo?.packaging_type}</span></p>
                        <p>Shipping Method: <span className="font-medium">{bookingInfo?.parcelInfo?.shipping_method}</span></p>
                        <p>Parcel Weight: <span className="font-medium">{bookingInfo?.parcelInfo?.parcel_weight} gram</span></p>
                        <p>Parcel Height: <span className="font-medium">{bookingInfo?.parcelInfo?.parcel_height} cm</span></p>
                        <p>Parcel Width: <span className="font-medium">{bookingInfo?.parcelInfo?.parcel_width} cm</span></p>
                        <p>Parcel Length: <span className="font-medium">{bookingInfo?.parcelInfo?.parcel_length} cm</span></p>
                        <p>Shipping Cost: <span className="font-medium">{bookingInfo?.parcelInfo?.shippingCost}</span></p>
                    </div>
                    <div className="rounded px-3 py-2 border w-full">
                        <h4 className="text-lg font-medium">Payment Info :</h4>
                        <p>Name: <span className="font-medium">{bookingInfo?.paymentInfo?.amount}</span></p>
                        <p>Date: <span className="font-medium">{bookingInfo?.paymentInfo?.date}</span></p>
                        <p>TransactionID: <span className="font-medium">{bookingInfo?.paymentInfo?.transactionId}</span></p>
                        <p>Payment Name: <span className="font-medium">{bookingInfo?.paymentInfo?.name}</span></p>
                        <p>Payment Email: <span className="font-medium">{bookingInfo?.paymentInfo?.email}</span></p>
                        <p>Status: <span className="font-medium">{bookingInfo?.paymentInfo?.status}</span></p>
                    </div>
                </div>
                <div className="text-center space-x-3 flex justify-center gap-3">
                    <PDFGenerator bookingInfo={bookingInfo}></PDFGenerator>
                    <Link to="/dashboard/bookings">
                        <button className="btn bg-amber-500 border-none font-semibold text-white hover:text-black h-10">Go To Bookings</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProcessingStatus;