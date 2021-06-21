const express = require('express')
const router = express.Router()

const sliderController = require('../controllers/slider')

// Insert
router.get('/add', sliderController.insert)


module.exports = router