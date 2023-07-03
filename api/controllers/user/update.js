// const Joi = require("joi");

// LOCAL IMPORT
const User = require("../../models/user");
const { profileSchema } = require("../../config/validation");
const { mailer } = require("../../config/mailer");
const { apiResponse } = require("../../utils");

/**
 * @route         PUT   /api/v1/users/update
 * @description   update user profile
 * @access        private
 */
const update = async (req, res) => {
  // try {
  const _id = req.user;
  let user = await User.findById(_id); // get current user

  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }
  // validation
  const { error } = profileSchema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  // check if username already exist
  const checkUsername = await User.findOne({
    username: req.body.username,
  });

  if (user.username !== req.body.username) {
    if (checkUsername) {
      res.status(400);
      throw new Error("Username already exist.");
    }
  }

  // check if email already exist
  const checkEmail = await User.findOne({ email: req.body.email });
  // console.log(checkEmail);
  if (user.email !== req.body.email) {
    if (checkEmail) {
      res.status(400);
      throw new Error("Email already exist.");
    }
  }

  // SEND VERIFICATION CODE
  // if (req.body.email && req.body.email !== user.email && code === "") {
  //   const code = Math.random().toString().slice(2, 8);
  //   const html = `Your verification code is ${code}.`;

  //   // send mail
  //   mailer(req.body.email, "Email Verification", html);
  //   user.verificationCode = code;
  //   user.save();
  //   return res.status(200).json(apiResponse(res.statusCode, "Email sent", {}));
  // }

  // if (code && user.verificationCode !== code) {
  //   res.status(400);
  //   throw new Error("Invalid verification code");
  // }

  user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  }).select([
    "_id",
    "fullname",
    "email",
    "username",
    "institution",
    "department",
    "level",
    "gender",
    "stateOfOrigin",
    "homeAddress",
    "avatar",
    "phoneNumber",
    "country",
    "dob",
  ]);

  return res
    .status(200)
    .json(
      apiResponse(
        res.statusCode,
        "Your profile has been updated successfully.",
        user
      )
    );
  // } catch (error) {
  //   console.log(error);
  //   res.status(400);
  //   throw new Error("Error Updating profile");
  // }
};

module.exports = update;
