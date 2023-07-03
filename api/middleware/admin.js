const User = require("../models/user");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user.isAdmin) {
      return res
        .status(403)
        .send("You do not have permission to carry out this action!");
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Unauthorized!");
  }
};
