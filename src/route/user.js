const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

// Get All User
router.get('/all', userController.all)


module.exports = router