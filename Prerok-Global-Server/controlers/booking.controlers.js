const Booking = require("../models/booking.model");

// controlers for get all bokings by gmail
exports.getBookingsByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const bookings = await Booking.find({bookingEmail: email})
        res.status(200).send(bookings)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// controlers for post a new booking
exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = new Booking({
            fromAddress: bookingData.fromAddress,
            toAddress: bookingData.toAddress,
            parcelInfo: bookingData.parcelInfo,
            paymentInfo: bookingData.paymentInfo,
            bookingEmail: bookingData.bookingEmail
        })
        const result = await newBooking.save();
        res.status(201).send({ success: true, message: "Booking Successful", data: result })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}