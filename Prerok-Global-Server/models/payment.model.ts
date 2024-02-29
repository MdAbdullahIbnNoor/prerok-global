
import mongoose, { Schema, Document } from "mongoose";

interface IPayment extends Document {
    transactionID: string;
    amount: number;
    status: string;
    bookingID: string;
    email: string;
    name: string;
    paymentAt: Date;
}


const paymentSchema: Schema = new mongoose.Schema({
    transactionID: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    bookingID: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
    },
    paymentAt: {
        type: Date,
        default: Date.now()
    },
})

const Payment = mongoose.model<IPayment>('payments', paymentSchema);

module.exports = Payment;