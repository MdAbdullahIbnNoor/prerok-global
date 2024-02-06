const Payment = require("../models/payment.model");

const stripe = require("stripe")(process.env.STRIPE_KEY)

exports.createPaymentIntent = async (req, res) => {
    try {
        const { price } = req.body;
        const amount = parseInt(price * 100);
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
        res.status(500).send({ message: error.message });
    }
}

exports.savePaymentInfo = async (req, res) => {
    try {
        const payment = req.body
        console.log(payment);
        // const newPayement = new Payment({
        //     transactionID: payment.transactionId,
        //     amount: payment.amount,
        //     status: payment.status,
        //     bookingID: payment.bookingID,
        //     userID: payment.userID,
        //     email: payment.email,
        //     name: payment.name,
        // })
        // const result = await newPayement.save();
        // res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getAllPaymentHistory = async (req, res) => {
    try {
        const result = await Payment.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};