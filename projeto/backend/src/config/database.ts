import mongoose from "mongoose";
import dns from "dns";
import dotenv from "dotenv";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGO_URI;
    console.log("MongoDB URI:", dbUri);

    if (!dbUri) {
      throw new Error("MongoDB URI is not defined in .env");
    }

    await mongoose.connect(dbUri);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB");
    console.error("Error details:", err);
    process.exit(1);
  }
};

export default connectDB;
