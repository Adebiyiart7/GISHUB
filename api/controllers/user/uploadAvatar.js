const { use } = require("express/lib/router");
const User = require("../../models/user");
const { apiResponse } = require("../../utils");

/**
 * @route         POST   /api/users/upload-photo
 * @description   upload user profile photo
 * @access        private
 */
const uploadAvatar = async (req, res) => {
  const avatar = req.body.avatar;

  const user = User.findById(req.user._id);

  // check if photo is in the database
  if (user.avatar) {
    // TODO: remove the object from aws s3
    // ...
  }

  const profile = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { avatar } },
    { new: true }
  );

  return res
    .status(200)
    .json(apiResponse(res.statusCode, "Uploaded Succesfully!", profile.avatar));
};

module.exports = uploadAvatar;
