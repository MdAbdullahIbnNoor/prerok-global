"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
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
});
const Booking = mongoose_1.default.model("bookings", bookingSchema);
module.exports = Booking;
