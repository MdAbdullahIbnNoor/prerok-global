const mongoose = require('mongoose');

// schema for address
const addressSchema = new mongoose.Schema({
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
const Address = mongoose.model("address", addressSchema);

module.exports = Address;