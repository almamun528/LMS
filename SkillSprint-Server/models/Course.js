// models/Course.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  // Add more fields as needed
});

const Course = mongoose.model("Course", courseSchema); // ✅ must match "Course"

export default Course;
