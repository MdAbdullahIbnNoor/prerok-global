import mongoose, { Schema, Document } from 'mongoose';

interface IBooking extends Document {
    fromAddress: object;
    toAddress: object;
    parcelInfo: object;
    paymentInfo: object;
    bookingEmail: string;
    trackingStatus: string;
    returnReason: string;
    refundType: string;
    bookingTime: Date;
    estimatedDeliveryTime: string;
}

const bookingSchema: Schema = new mongoose.Schema({
    fromAddress: {
        type: Object,
        required: true,
    },
    toAddress: {
        type: Object,
        required: true,
    },
    parcelInfo: {
        type: Object,
        required: true,
    },
    paymentInfo: {
        type: Object,
        required: true,
    },
    bookingEmail: {
        type: String,
        required: true
    },
    trackingStatus: {
        type: String,
        required: true,
        default: "Booking Confirmed"
    },
    returnReason: {
        type: String,
    },
    refundType: {
        type: String,
    },
    bookingTime: {
        type: Date,
        default: Date.now()
    },
    estimatedDeliveryTime: {
        type: String,
    },
})


const Booking = mongoose.model<IBooking>("bookings", bookingSchema);


module.exports = Booking;