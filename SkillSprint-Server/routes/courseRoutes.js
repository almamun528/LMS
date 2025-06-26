import express from "express";
import { getAllCourse, getCourseId } from "../controllers/courseController.js";

const courseRouter = express.Router();

//get all course
courseRouter.get("/all", getAllCourse);
// get course by id
courseRouter.get("/:id", getCourseId);

export default courseRouter;
