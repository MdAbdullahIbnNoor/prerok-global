import { Request, Response } from "express";

const Payment = require("../models/payment.model");

const stripe = require("stripe")(process.env.STRIPE_KEY)

exports.createPaymentIntent = async (req: Request, res: Response) => {
    try {
        const { price } = req.body;
        const amount = parseInt((price * 100).toString());
        if (!price || amount < 1) {
            return res.status(400).send({ error: 'Invalid price' });
        }
        const { client_secret } = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card']
        });

        res.send({ clientSecret: client_secret });
    } catch (error) {
        res.status(500).send({ message: (error as Error).message });
    }
}

exports.savePaymentInfo = async (req: Request, res: Response) => {
    try {
        const payment = req.body
        const newPayement = new Payment({
            transactionID: payment.transactionId,
            amount: payment.amount,
            status: payment.status,
            bookingID: payment.bookingID,
            email: payment.email,
            name: payment.name,
        })
        const result = await newPayement.save();
        res.status(201).send({ success: true, message: "Payment Info Saved", data: result });
    } catch (error) {
        res.status(500).send({ message: (error as Error).message });
    }
};

exports.getAllPaymentHistory = async (req: Request, res: Response) => {
    try {
        const result = await Payment.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: (error as Error).message });
    }
};