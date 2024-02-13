const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
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

const Payment = mongoose.model('payments', paymentSchema);

module.exports = Payment;