const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      min: 3,
      max: 255,
      trim: true,
    },
    username: {
      type: String,
      min: 3,
      max: 255,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      max: 255,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 255,
      trim: true,
    },
    institution: {
      type: String,
      max: 255,
      trim: true,
    },
    phoneNumber: {
      type: String,
      max: 11,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
      max: 20,
    },
    stateOfOrigin: {
      type: String,
      trim: true,
      max: 20,
    },
    homeAddress: {
      type: String,
      trim: true,
      max: 255,
    },
    avatar: {
      type: String,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
)

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      isAgent: this.isAgent,
      isAdmin: this.isAdmin,
      isActive: this.isActive,
      isBlocked: this.isBlocked,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    },
  )
}

module.exports = mongoose.model('User', userSchema)
