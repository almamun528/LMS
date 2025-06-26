import Course from "../models/Course.js";
import { v2 as cloudinary } from "cloudinary";
import Purchase from "../models/Purchase.js";

// !Create a course
export const addCourse = async (req, res) => {
  try {
    const { courseData } = req.body;
    const imageFile = req.file;
    const educatorId = null;
    if (!imageFile)
      return res.json({ success: false, message: "Thumbnail Not Attached" });

    const parsedCourseData = await JSON.parse(courseData);
    parsedCourseData.educator = educatorId;

    const newCourse = await Course.create();
    const imageUpload = await cloudinary.uploader.upload(imageFile.path);
    newCourse.courseThumbnail = imageUpload.secure_url;
    await newCourse.save();
    // !save the course and send response
    res.json({ success: true, message: "Course Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
// Get educator's course
export const getEducatorCourses = async (req, res) => {
  try {
    const educatorId = req.body;
    const courses = await Course.find({ educatorId });
    res.json({ success: true, courses });
  } catch (error) {
    res.status(500).json({ success: true, message: "Server error", error });
  }
};

// Get Educator Dashboard Data (Total Earning, Enrolled Students, Number of courses)

export const educatorDashboardData = async (req, res) => {
  try {
    const educatorId = req.body;
    const courses = await Course.find({ educatorId });
    const totalCourse = courses.length;
    // get all course id
    const courseIds = courses.map((course) => course?._id);
    // calculate total earning from purchases
    const purchase = await Purchase.find({
      courseId: { $in: courseIds },
      status: "completed",
    });
    const totalEarnings = purchase.reduce(
      (sum, purchase) => sum + purchase.amount,
      0
    );
    // collect unique enrolled student IDs with their course title

    const enrolledStudentsData = [];
    for (const course of courses) {
      const students = await User.find(
        {
          _id: { $in: course.enrolledStudents },
        },
        "name imageUrl"
      );
      students.array.forEach((student) => {
        enrolledStudentsData.push({
          courseTitle: course.courseTitle,
          student,
        });
      });
    }
    // send the response into the front-end
    res.json({
      success: true,
      educatorDashboardData: {
        totalEarnings,
        enrolledStudentsData,
        totalCourse,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Error: Server Crushed",
      error,
    });
  }
};

// Get Enrolled Student data with Purchase Data
export const getEnrolledStudentsData = async (req, res) => {
  try {
    const educatorId = req.body;
    const courses = await Course.find({ educatorId });
    const courseIds = courses.map((course) => course._id);
    const purchases = await Purchase.find({
      courseId: { $in: courseIds },
      status: "completed",
    })
      .populate("userId", "name ImageUrl")
      .populate("courseId", "courseTitle");

    const enrolledStudents = purchases.map((purchase) => ({
      student: purchase.userId,
      courseTitle: purchase.courseId.courseTitle,
      purchaseData: purchase.createdAt,
    }));
    // send the response to front-end
    res.json({ success: true, enrolledStudents });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error", error });
  }
};
