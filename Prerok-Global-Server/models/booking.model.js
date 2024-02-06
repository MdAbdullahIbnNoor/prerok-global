const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
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
    }
})

const Booking = mongoose.model("bookings", bookingSchema);
module.exports = Booking;