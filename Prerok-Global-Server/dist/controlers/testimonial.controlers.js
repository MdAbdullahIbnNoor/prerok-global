"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTestimonials = exports.addTestimonial = void 0;
const testimonial_model_1 = __importDefault(require("../models/testimonial.model"));
const addTestimonial = async (req, res) => {
    try {
        const testimonialData = req.body;
        const newTestimonial = new testimonial_model_1.default({
            name: testimonialData.name,
            email: testimonialData.email,
            userImage: testimonialData.userImage,
            reviewImage: testimonialData.reviewImage,
            review: testimonialData.review,
        });
        const result = await newTestimonial.save();
        res.status(201).send({
            success: true,
            message: "Testimonial created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
exports.addTestimonial = addTestimonial;
const getAllTestimonials = async (req, res) => {
    try {
        const testimonial = await testimonial_model_1.default.find();
        res.status(200).send(testimonial);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
exports.getAllTestimonials = getAllTestimonials;
