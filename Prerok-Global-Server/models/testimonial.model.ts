import mongoose, { Schema, Document } from 'mongoose';

interface ITestimonial extends Document {
    name: string;
    email: string;
    userImage: string;
    review: string;
    reviewImage: string;
}

// Define the schema for a Country
const testimonialSchema: Schema = new mongoose.Schema({
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
const Testimonial = mongoose.model<ITestimonial>('Testimonial', testimonialSchema);


export default Testimonial