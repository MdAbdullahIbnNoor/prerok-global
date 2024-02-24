
const mongoose = require('mongoose');

// Define the schema for a Country
const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    coordinates: {
        lat: {
            type: Number,
            required: true
        },
        lon: {
            type: Number,
            required: true
        }
    }
});

// Create a model for the Country schema
const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
