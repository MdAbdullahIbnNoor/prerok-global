"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
try {
    const DB_URI = process.env.DB_URI;
    if (!DB_URI) {
        throw new Error("DB_URI is not defined in the environment variables.");
    }
    mongoose_1.default.connect(DB_URI);
    console.log('db connected');
}
catch (error) {
    console.log(`db is not connected ${error.message}`);
    process.exit(1);
}
