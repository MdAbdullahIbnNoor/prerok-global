const { createBooking, getBookingsByEmail, updateTrackingStatus, getBookingByID, updateBookingInfo, deleteBooking, getAllBookings } = require('../controlers/booking.controlers');

const router = require('express').Router();

// router for get all bokings by gmail
router.get("/get-booking/:id", getBookingByID)

// router for get all bokings by gmail
router.get("/get-bookings/:email", getBookingsByEmail)

// router for get all bokings
router.get("/get-all-bookings", getAllBookings)

// router for update booking information
router.put("/update-booking/:id", updateBookingInfo)

// router for update parcel tracking status
router.patch("/update-status/:id", updateTrackingStatus)

// router for post a new booking
router.post("/create-booking", createBooking)

// router for delete a existing booking
router.delete("/delete-booking/:id", deleteBooking)

module.exports = router;