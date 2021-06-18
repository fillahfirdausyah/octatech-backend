const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

// Get All User
router.get('/all', userController.all)

// Create User
router.post('/add', userController.create)

// Login
router.post('/login', userController.login)


module.exports = router