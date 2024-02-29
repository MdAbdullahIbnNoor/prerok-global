import mongoose, { Schema, Document } from 'mongoose';

interface ICountry extends Document {
    name: string;
    coordinates: {
        lat: number,
        lon: number,
    };
}

// Define the schema for a Country
const countrySchema: Schema = new mongoose.Schema({
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
const Country = mongoose.model<ICountry>('Country', countrySchema);

module.exports = Country;
