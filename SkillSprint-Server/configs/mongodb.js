import mongoose from "mongoose";

// connect to MongoDB Database
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database is connected 🖇️ ");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
};



export default connectDB;
