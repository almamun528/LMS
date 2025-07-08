import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  purchaseCourse,
  updateUser,
  userEnrolledCourses,
} from "../controllers/userController.js";

const router = express.Router();

// Users APis (post, get , patch , delete)

router.post("/", createUser); //create new user

router.get("/", getAllUsers); //read all users

router.get("/:id", getUserById); // read a single user

router.patch("/:id", updateUser); //update a single user

router.delete("/:id", deleteUser); //delete a single user

router.get("/enrolled-courses", userEnrolledCourses); //get the user enrolled data
router.post("/purchase", purchaseCourse);
export default router;
// /api/users/enrolled-courses
// /api/users/purchase
