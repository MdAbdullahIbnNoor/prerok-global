import { Request, Response } from "express";
import Testimonial from "../models/testimonial.model";

export const addTestimonial = async (req: Request, res: Response) => {
    try {
        const testimonialData = req.body;
    const newTestimonial = new Testimonial({
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
    } catch (error) {
        res.status(500).send({ message: (error as Error).message })
    }
};

export const getAllTestimonials = async (req: Request, res: Response) => {
    try {
        const testimonial = await Testimonial.find()
        res.status(200).send(testimonial)
    } catch (error) {
        res.status(500).send({ message: (error as Error).message });
    }
}