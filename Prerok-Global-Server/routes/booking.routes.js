const { createBooking } = require('../controlers/booking.controlers');

const router = require('express').Router();

router.post("/create-booking", createBooking)

module.exports = router;