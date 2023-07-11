const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    console.log(req.headers);
    if (!token || !token.startsWith("Bearer ")) {
      res.status(401);
      throw new Error("Not authorized!");
    }

    token = token.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id).select([
      "_id",
      "email",
      "isActive",
      "fullname",
    ]);

    if (!user) {
      res.status(401);
      throw new Error("User not found!");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Unauthorized!");
  }
};
