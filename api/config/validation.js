require('joi')
const Joi = require('joi')

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
const passwordError = `Password must be more than 8 chars, have at least one number, at least one special character(!@#$%^&*), at least one uppercase and one lowercase.`

// LOGIN
const loginSchema = Joi.object()
  .keys({
    username: Joi.string().min(3).max(255).label('Username'),
    email: Joi.string().email().label('Email'),
    password: Joi.string().required().label('Password'),
  })
  .or('username', 'email')

// REGISTER
const registerSchema = Joi.object({
  fullname: Joi.string().required().min(3).max(255).label('Full Name'),
  email: Joi.string().required().email().label('Email'),
  password: Joi.string().required().label('Password').regex(passwordRegEx).message(passwordError),
})

// PROFILE
const profileSchema = Joi.object({
  fullname: Joi.string().required().max(255).label('Full Name'),
  username: Joi.string().required().max(255).label('Username'),
  institution: Joi.string().max(255).label('Institution'),
  department: Joi.string().max(255).label('Department'),
  level: Joi.string().max(20).label('Level'),
  gender: Joi.string().required().max(20).label('Gender'),
  stateOfOrigin: Joi.string().required().max(255).label('State of Origin'),
  homeAddress: Joi.string().required().max(1000).label('Home Address'),
  avatar: Joi.string().label('Avatar'),
  phoneNumber: Joi.string().required().max(11).label('Phone Number'),
  country: Joi.string().max(255).label('Country'),
  dob: Joi.string().label('DOB'),
})

module.exports = {
  registerSchema,
  loginSchema,
  profileSchema,
}
