"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// schema for address
const addressSchema = new mongoose_1.default.Schema({
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
const Address = mongoose_1.default.model("address", addressSchema);
module.exports = Address;
