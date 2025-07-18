import User from "../models/User.js";
import Course from "../models/Course.js";
import Purchase from "../models/Purchase.js";
import Stripe from "stripe";

// !------------------ Create a New single User---------------

export const createUser = async (req, res) => {
  try {
    // ✅ Pull the actual fields from body
    const { uid, name, email, imageUrl } = req.body;

    // ✅ Check all required fields
    if (!uid || !name || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Check if user already exists by _id (using Firebase UID as MongoDB _id)
    const existingUser = await User.findById(uid);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Save new user
    const newUser = new User({
      _id: uid,
      name,
      email,
      imageUrl,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// *------------------Get all users -------------------

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    // .populate("Course");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ?------------- Get a single User by ID-----------------

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    // .populate("Course");
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

//? -----------------Update a single User---------------

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateDocument = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updateDocument, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(updateDocument);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
//!------------- Delete a single User-------------

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser)
      return res.status(404).json({ message: "user not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

//_____________________________user Enrolled Courses with Lecture Links_____________________________
export const userEnrolledCourses = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = await User.findById(userId).populate("enrolledCourses");
    res.json({ success: true, enrolledCourses: userData.enrolledCourses });
  } catch (error) {
    res.json({ success: false, message: error?.message });
  }
};

export const purchaseCourse = async (req, res) => {
  try {
    const { courseId, userId } = req.body;

    // Fetch user and course data
    const userData = await User.findById(userId);
    const courseData = await Course.findById(courseId);

    if (!userData || !courseData) {
      return res
        .status(404)
        .json({ success: false, message: "User or Course not found" });
    }

    // Calculate amount after discount
    const price = courseData.coursePrice;
    const discount = courseData.discount || 0;
    const amount = +(price - (discount * price) / 100).toFixed(2); // toFixed returns string, so we convert back to number

    // Create Purchase record
    const newPurchase = await Purchase.create({
      courseId: courseData._id,
      userId: userData._id,
      amount,
    });

    // Stripe payment session setup
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const currency = process.env.CURRENCY?.toLowerCase() || "usd";

    const lineItems = [
      {
        price_data: {
          currency,
          product_data: {
            name: courseData.courseTitle,
          },
          unit_amount: Math.floor(amount * 100), // Stripe requires amount in cents
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.CLIENT_URL}/loading/my-enrollments`,
      cancel_url: `${process.env.CLIENT_URL}/courses/${courseId}`,
      line_items: lineItems,
      mode: "payment",
      metadata: {
        purchaseId: newPurchase._id.toString(),
      },
    });

    res.status(200).json({ success: true, sessionUrl: session.url });
  } catch (error) {
    console.error("Purchase Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update user course Progress
export const updateCourseProgress = async (req, res) => {
  try {
    const { userId } = req.body;
    const { courseId, lectureId } = req.body;
    const progressData = await CourseProgress.findOne({ userId, courseId });
    if (progressData) {
      if (progressData.lectureCompleted.includes(lectureId)) {
        return res.json({ success: true, message: "lecture Already complete" });
      }
      progressData.lectureCompleted.push(lectureId);
      await progressData.save();
    } else {
      await CourseProgress.create({
        userId,
        courseId,
        lectureCompleted: [lectureId],
      });
    }
    res.json({ success: true, message: "Progress Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// get user course progress

export const getUserCourseProgress = async (req, res) => {
  try {
    const { userId } = req.body;
    const { courseId } = req.body;
    const progressData = await CourseProgress.findOne({ userId, courseId });
    res.json({ success: true, progressData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// user rating

export const addUserRating = async (req, res) => {
  const { userId, rating, courseId } = req.body;
  if (!courseId || !userId || !rating || rating < 1 || rating > 5) {
    return res.json({ success: true, message: "Invalid Details" });
  }
  try {
    const course = await Course.findById(courseId);
    if (!course)
      return res.json({ success: false, message: "Course Not Found" });
    const user = await User.findById(userId);
    if (!user || user.enrolledCourses.includes(courseId)) {
      return res.json({
        success: false,
        message: "User has not purchased this course",
      });
    }
    const existingRatingIndex = course.courseRating.findIndex(
      (r) => r.userId === userId
    );
    if (existingRatingIndex > -1) {
      course.courseRating[existingRatingIndex].rating = rating;
    } else {
      course.courseRating.push({ userId, rating });
    }
    // save rating into course
    await course.save();
    return res.json({ success: true, message: "ratting added" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
