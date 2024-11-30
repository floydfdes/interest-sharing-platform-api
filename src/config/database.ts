import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        console.log("Mongo URI:", process.env.MONGO_URI); // Log the URI
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB Connected...");
    } catch (err) {
        if (err instanceof Error) {
            console.error("Database connection failed:", err.message);
        } else {
            console.error("An unknown error occurred:", err);
        }
        process.exit(1);
    }
};
