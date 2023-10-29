import { config } from "dotenv";
import mongoose from "mongoose";

config();

const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGO_URI;
    await mongoose.connect(dbUrl);
    console.log("DB connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
