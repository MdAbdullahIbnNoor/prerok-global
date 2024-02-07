const { createBooking, getBookingsByEmail } = require('../controlers/booking.controlers');

const router = require('express').Router();

// router for get all bokings by gmail
router.get("/get-bookings/:email", getBookingsByEmail)

// router for post a new booking
router.post("/create-booking", createBooking)

module.exports = router;