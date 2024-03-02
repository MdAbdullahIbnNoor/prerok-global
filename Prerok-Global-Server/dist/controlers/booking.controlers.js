"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const Booking = require("../models/booking.model");
// Transporter of Nodemailer for Sending mail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_ID
    }
});
// controlers for get a booking by booking id
exports.getBookingByID = async (req, res) => {
    try {
        const id = req.params.id;
        const bookings = await Booking.findById(id);
        res.status(200).send(bookings);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// controlers for get all bokings by gmail
exports.getBookingsByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const bookings = await Booking.find({ bookingEmail: email });
        res.status(200).send(bookings);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// controlers for get all bokings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).send(bookings);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// controlers for update booking data by booking id
exports.updateBookingInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedDoc = {
            $set: {
                fromAddress: data.fromAddress,
                toAddress: data.toAddress,
                parcelInfo: data.parcelInfo,
            }
        };
        const bookings = await Booking.updateOne({ _id: id }, updatedDoc);
        res.status(200).send(bookings);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// controlers for update tracking status by booking id
exports.updateTrackingStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const status = req.body.trackingStatus;
        const bookingData = await Booking.findById(id);
        const updatedDoc = {
            $set: {
                trackingStatus: status
            }
        };
        const bookings = await Booking.updateOne({ _id: id }, updatedDoc);
        const gmailUser = process.env.GMAIL_USER;
        if (!gmailUser)
            throw new Error("Gmail user is not set");
        // if the status are updated then send the message
        if (bookings) {
            // mail options for booking complete message
            const mailOptions = {
                from: {
                    name: "Prerok Global",
                    address: gmailUser
                },
                to: bookingData.bookingEmail,
                subject: 'Prerok Global Tracking Update',
                text: `Hello ${bookingData.fromAddress?.from_name},\n\nWe have some update regarding your booking.`,
                html: `<p><b>Hello ${bookingData.fromAddress?.from_name},</b></p>
                   <p>We're thrilled to share an exciting update regarding your reservation with Prerok-Global</p>
        
                   <p><b>Tracking Update:</b></p>
                   <p>Your package is ${status}! Here are the latest tracking details:</p>
                   <ul>
                       <li><b>Product's Tracking Number:</b> ${bookingData._id}</li>
                   </ul>
        
                   <p>If you have any questions or require assistance, our expert support team is readily available. Thank you for selecting Prerok Global!</p>
                   <p>Best Regards,<br>Prerok Global Team</p>`
            };
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.status(500).send({ success: false, message: error });
                }
            });
        }
        res.status(200).send(bookings);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// controlers for update return status by booking id
exports.updateReturnStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const reason = req.body.returnReason;
        const refundType = req.body.refundType;
        const updatedDoc = {
            $set: {
                trackingStatus: 'returned',
                returnReason: reason,
                refundType: refundType
            }
        };
        const bookings = await Booking.updateOne({ _id: id }, updatedDoc);
        res.status(200).send(bookings);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// controlers for post a new booking
exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = new Booking({
            fromAddress: bookingData.fromAddress,
            toAddress: bookingData.toAddress,
            parcelInfo: bookingData.parcelInfo,
            paymentInfo: bookingData.paymentInfo,
            bookingEmail: bookingData.bookingEmail,
            estimatedDeliveryTime: bookingData.estimatedDeliveryTime
        });
        const result = await newBooking.save();
        const gmailUser = process.env.GMAIL_USER;
        if (!gmailUser)
            throw new Error("Gmail user is not set");
        // If the booking is complete then send the mail
        if (result) {
            // mail options for booking complete message
            const mailOptions = {
                from: {
                    name: "Prerok Global",
                    address: gmailUser
                },
                to: bookingData.bookingEmail,
                subject: 'Booking Confirmed - Prerok Global',
                text: `Hello ${bookingData.fromAddress?.from_name},\n\nThank you for choosing Prerok Global! Your booking has been confirmed. We kindly request you to drop off your product at the nearest hub.`,
                html: `<p><b>Hello ${bookingData.fromAddress?.from_name},</b></p>
                       <p>Thank you for choosing Prerok Global! We are excited to inform you that your booking has been successfully confirmed.</p>
                       <div style="display: flex; justify-content: space-between;">
                       <div style="width: 48%;">
                       <b>Your Tracking Number:</b> <span>${bookingData._id}</span>
                       <p><b>From Address:</b></p>
                       <ul>
                           <li><b>Name:</b> ${bookingData.fromAddress?.from_name}</li>
                           <li><b>Email:</b> ${bookingData.fromAddress?.from_email}</li>
                           <li><b>Location:</b> ${bookingData.fromAddress?.from_address}, ${bookingData.fromAddress?.from_country}</li>
                       </ul>
                   </div>

                       <div style="width: 48%;">
                           <p><b>To Address:</b></p>
                           <ul>
                           <li><b>Name:</b> ${bookingData.toAddress?.to_name}</li>
                           <li><b>Email:</b> ${bookingData.toAddress?.to_email}</li>
                           <li><b>Location:</b> ${bookingData.toAddress?.to_address}, ${bookingData.toAddress?.to_country}</li>
                           </ul>
                       </div>
                   </div>
                       <p><b>Drop-off Instructions:</b></p>
                       <p>We kindly request you to drop off your product at the nearest Prerok Global hub. This will ensure a smooth and efficient processing of your order.</p>
                       <p><b>Important Notes:</b></p>
                       <ul>
                           <li>Please ensure your product is securely packaged.</li>
                           <li>Include a copy of your booking confirmation in the package.</li>
                       </ul>
                       <p>If you have any questions or need assistance, feel free to contact our customer support team.</p>
                       <p>We look forward to serving you and ensuring you have a fantastic experience with us. If you have any questions or special requests, feel free to reach out to us.</p>
                       <p>Safe travels and see you soon!</p>
                       <p>Best Regards,<br>Prerok Global Team</p>`
            };
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.status(500).send({ success: false, message: error });
                }
            });
        }
        res.status(201).send({ success: true, message: "Booking Successful", data: result });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// controlers for delete a existing booking
exports.deleteBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Booking.deleteOne({ _id: id });
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};
