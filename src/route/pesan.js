const express = require('express')
const router = express.Router()

const pesanController = require('../controllers/pesan')


// Get All
router.get('/all', pesanController.getAll)

// Create
router.post('/add', pesanController.create)

// Delete
router.delete('/delete/:id', pesanController.delete)

// Get One
router.get('/details/:id', pesanController.details)


module.exports = router