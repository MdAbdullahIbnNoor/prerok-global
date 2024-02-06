const Booking = require("../models/booking.model");

exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = new Booking({
            fromAddress: bookingData.fromAddress,
            toAddress: bookingData.toAddress,
            parcelInfo: bookingData.parcelInfo,
            paymentInfo: bookingData.paymentInfo
        })
        const result = await newBooking.save();
        res.status(201).send({ success: true, message: "Booking Successful", data: result })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}