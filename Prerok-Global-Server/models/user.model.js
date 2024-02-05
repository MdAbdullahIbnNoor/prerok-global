const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const User = mongoose.model("users", userSchema);

module.exports = User;