import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import userRoutes from "./routes/userRoutes.js";
import educatorRoutes from "./routes/educatorRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import { stripeWebhook } from "./controllers/webhook.js";

const PORT = process.env.PORT || 3000;
// https://lms-backend-mu-lac.vercel.app/
// Initializer Express
const app = express();
app.use(express.json());
// Connect to Database
await connectDB();

// ✅ CORS middleware must be applied first
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://nimble-salmiakki-846d63.netlify.app",
    ],
    credentials: true,
  })
);

//! ___________________________________________Route___________________________________________________________

app.use("/api/users", userRoutes); //user apis
app.use("/api/educator", educatorRoutes); // educator apis
app.use("/api/course", express.json(), courseRouter); //course apis
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhook);
// Route
app.get("/", (req, res) => res.send("Backend Server Is Working "));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
