// check user is educator or not.

import User from "../models/User.js";


const protectEducator = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?._id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorize: NO user ID found",
      });
    }
    const user = await User.findById(userId);
    if (!user || user.role !== "teacher") {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Only educator can access this resource",
      });
    }
    // if everything well -- user is teacher than go for next
    next();
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Authorization Failed: Internal Error",
      error,
    });
  }
};
export default protectEducator;
