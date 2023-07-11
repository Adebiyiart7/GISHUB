const user = require('../../models/user')
const User = require('../../models/user')
const { apiResponse } = require('../../utils')

/**
 * @route         GET   /api/users/me
 * @description   get all user's details
 * @access
 * @params select; e.g ["fullname", "email",]
 */
const me = async (req, res) => {
  let { select } = req.query
  if (select) {
    select = JSON.parse(select)

    // remove password incase the user adds it
    const passwordIndex = select.indexOf('password')
    if (passwordIndex > -1) {
      select.splice(passwordIndex, 1)
    }
  }

  let user = await User.findById(req.user._id)
    .select(select || ['-password', '-isBlocked', '-isAdmin'])
    .lean()

  if (!user) {
    res.status(404)
    throw new Error('User not found!')
  }

  res.status(200).json(apiResponse(res.statusCode, '', user))
}

module.exports = me
