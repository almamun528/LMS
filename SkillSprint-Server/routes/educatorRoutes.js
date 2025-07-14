import express from "express";
import upload from "../configs/multer.js";
import protectEducator from "../middlewares/protectedEducator.js";
import {
  addCourse,
  educatorDashboardData,
  getEducatorCourses,
  getEnrolledStudentsData,
} from "../controllers/educatorController.js";

const router = express.Router();

router.post("/add-course", upload.single("image"), addCourse);
router.get("/courses", protectEducator, getEducatorCourses);
router.get("/dashboard", protectEducator, educatorDashboardData);
router.get("/enrolled-students", protectEducator, getEnrolledStudentsData);
export default router;

// post a single course api--> '/api/educator/add-course'
// get educator course api --> '/api/educator/courses'
// get educatorDashboard api   --> '/api/api/educator/dashboard'
// get educatorDashboard api   --> '/api/api/educator/enrolled-students'
