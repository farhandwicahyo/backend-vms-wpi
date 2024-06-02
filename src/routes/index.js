require('dotenv').config();
const express = require('express')
const router = express.Router()
const UserRoutes = require('./user.routes')
const AuthRoutes = require('./auth.routes')

router.use('/user', UserRoutes)
router.use('/auth', AuthRoutes)

module.exports = router