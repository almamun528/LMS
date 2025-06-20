import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";



const PORT = process.env.PORT || 3000;



// Initializer Express
const app = express();

// Connect to Database
await connectDB();

// middlewares
app.use(cors());

// Route
app.get("/", (req, res) => res.send("Backend Server Is Working "));




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
