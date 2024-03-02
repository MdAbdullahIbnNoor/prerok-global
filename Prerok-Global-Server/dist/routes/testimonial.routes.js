"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testimonial_controlers_1 = require("../controlers/testimonial.controlers");
const router = require('express').Router();
// route for get all addresses by userID
router.post("/add-testimonial", testimonial_controlers_1.addTestimonial);
// route for get address by address ID
router.get("/get-all-testimonials", testimonial_controlers_1.getAllTestimonials);
module.exports = router;
