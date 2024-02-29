import mongoose, { Schema, Document } from 'mongoose';

export interface IAddress extends Document {
    name: string;
    phone: string;
    email: string;
    country: string;
    address: string;
    postal_code: string;
    district: string;
    division: string;
    userID: string;
}

// schema for address
const addressSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    division: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true
    }
});

// model for address
const Address = mongoose.model<IAddress>("address", addressSchema);

module.exports = Address;