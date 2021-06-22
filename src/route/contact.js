const express = require('express')
const router = express.Router()

const contactController = require('../controllers/contact')

// Insert Contact
router.post('/insert', contactController.insert)

// Get Contact
router.get('/get', contactController.get)

// Update
router.put('/update/:id', contactController.update)




module.exports = router