// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load env variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
        process.exit(1); // exit process with failure
    }
};

export default connectDB;
