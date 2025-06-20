import User from "../models/User.js";

// !------------------ Create a New single User---------------

export const createUser = async (req, res) => {
  try {
    const { _id, name, email, imageUrl } = req.body;
    // check id user is already Exist
    const existingUser = await User.findById(_id);
    if (existingUser) {
      return res.status((400).json({ message: "User is already exist" }));
    }
    const newUser = new User({ _id, name, email, imageUrl });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
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

export const getUserId = async (req, res) => {
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
