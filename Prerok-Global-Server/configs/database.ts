import mongoose from "mongoose";

try {
    const DB_URI = process.env.DB_URI;
    if (!DB_URI) {
        throw new Error("DB_URI is not defined in the environment variables.");
    }
    mongoose.connect(DB_URI)
    console.log('db connected');
} catch (error) {
    console.log(`db is not connected ${(error as Error).message}`);
    process.exit(1);
}