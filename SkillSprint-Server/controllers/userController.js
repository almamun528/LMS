import User from "../models/User.js";

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
    const users = await User.find().populate("enrolledCourses");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ?------------- Get a single User by ID-----------------

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("enrolledCourses");
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
    if (!updateUser) {
      return res.status(404).json({ message: "user not dound" });
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
