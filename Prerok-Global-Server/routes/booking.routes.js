const { createBooking, getBookingsByEmail, updateTrackingStatus, getBookingByID } = require('../controlers/booking.controlers');

const router = require('express').Router();

// router for get all bokings by gmail
router.get("/get-booking/:id", getBookingByID)

// router for get all bokings by gmail
router.get("/get-bookings/:email", getBookingsByEmail)

// router for get update parcel tracking status
router.patch("/update-status/:id", updateTrackingStatus)

// router for post a new booking
router.post("/create-booking", createBooking)

module.exports = router;