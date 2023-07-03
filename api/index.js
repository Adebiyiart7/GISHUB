require('colors')
require('dotenv').config()
require('express-async-errors')
const port = process.env.PORT
const cors = require('cors')
const express = require('express')

// LOCAL IMPORTS
const connectDB = require('./config/db')
const errorMiddleware = require('./middleware/error')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// ROUTES
app.use('/api/v1/users', require('./routes/user'))

// ERROR
app.use(errorMiddleware)

app.listen(port, () => console.log(`Server running on port ${port}`.blue.bold))

// TODO Log all errors in a file
// TODO: Handle Mongoose Error, Oreoluwa
