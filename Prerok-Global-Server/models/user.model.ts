import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    name: string;
    image: string;
    email: string;
    role: string;
    gender: string;
    dateOfBirth: string;
    mobileNumber: string;
    country: string;
    state: string;
    postcode: string;
    division: string;
    district: string;
    upazilla: string;
    village: string;
    roadNumber: string;
}


// schema for user
const userSchema: Schema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    image: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        trim: true,
        unique: true
    },
    role: {
        type: String,
        default: 'user',
    },
    gender: {
        type: String,
        default: '',
    },
    dateOfBirth: {
        type: String,
        default: '',
    },
    mobileNumber: {
        type: String,
        default: '',
    },
    country: {
        type: String,
        default: '',
    },
    state: {
        type: String,
        default: '',
    },
    postcode: {
        type: String,
        default: '',
    },
    division: {
        type: String,
        default: '',
    },
    district: {
        type: String,
        default: '',
    },
    upazilla: {
        type: String,
        default: '',
    },
    village: {
        type: String,
        default: '',
    },
    roadNumber: {
        type: String,
        default: '',
    },
},
    {
        timestamps: true
    })

// model for user
const User = mongoose.model<IUser>("users", userSchema);

module.exports = User;