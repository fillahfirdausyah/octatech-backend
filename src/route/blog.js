const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blog')

router.post('/add', blogController.create)

module.exports = router