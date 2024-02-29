import { addTestimonial, getAllTestimonials } from "../controlers/testimonial.controlers";

const router = require('express').Router();

// route for get all addresses by userID
router.post("/add-testimonial", addTestimonial)

// route for get address by address ID
router.get("/get-all-testimonials", getAllTestimonials)



module.exports = router;