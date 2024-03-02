"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// schema for user
const userSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
        trim: true,
    },
    image: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        trim: true,
        unique: true,
    },
    role: {
        type: String,
        default: "user",
    },
    gender: {
        type: String,
        default: "",
    },
    dateOfBirth: {
        type: String,
        default: "",
    },
    mobileNumber: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    state: {
        type: String,
        default: "",
    },
    postcode: {
        type: String,
        default: "",
    },
    division: {
        type: String,
        default: "",
    },
    district: {
        type: String,
        default: "",
    },
    upazilla: {
        type: String,
        default: "",
    },
    village: {
        type: String,
        default: "",
    },
    roadNumber: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
});
// model for user
exports.User = mongoose_1.default.model("users", userSchema);
