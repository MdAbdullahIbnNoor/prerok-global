"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Define the schema for a Country
const testimonialSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userImage: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    reviewImage: {
        type: String,
    },
});
// Create a model for the Country schema
const Testimonial = mongoose_1.default.model('Testimonial', testimonialSchema);
exports.default = Testimonial;
