const Booking = require("../models/booking.model");

// controlers for get a booking by booking id
exports.getBookingByID = async (req, res) => {
    try {
        const id = req.params.id;
        const bookings = await Booking.findById(id)
        res.status(200).send(bookings)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// controlers for get all bokings by gmail
exports.getBookingsByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const bookings = await Booking.find({ bookingEmail: email })
        res.status(200).send(bookings)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// controlers for get all bokings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
        res.status(200).send(bookings)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// controlers for update booking data by booking id
exports.updateBookingInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedDoc = {
            $set: {
                fromAddress: data.fromAddress,
                toAddress: data.toAddress,
                parcelInfo: data.parcelInfo,
            }
        }
        const bookings = await Booking.updateOne({ _id: id }, updatedDoc);
        res.status(200).send(bookings);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// controlers for update tracking status by booking id
exports.updateTrackingStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const status = req.body.trackingStatus;
        const updatedDoc = {
            $set: {
                trackingStatus: status
            }
        }
        const bookings = await Booking.updateOne({ _id: id }, updatedDoc);
        res.status(200).send(bookings);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
// controlers for update return status by booking id
exports.updateReturnStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const reason = req.body.returnReason;
        const refundType = req.body.refundType;
        const updatedDoc = {
            $set: {
                trackingStatus: 'returned',
                returnReason: reason,
                refundType: refundType
            }
        }
        const bookings = await Booking.updateOne({ _id: id }, updatedDoc);
        res.status(200).send(bookings);
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

// controlers for delete a existing booking
exports.deleteBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Booking.deleteOne({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}