const express = require('express')
const router = express.Router()

const productController = require('../controllers/product')


// Insert Product
router.post('/add', productController.insert)

// Get All Product
router.get('/all', productController.all)

// Get Details Product
router.get('/details/:id', productController.details)

// Delete Product
router.delete('/delete/:id', productController.delete)

// Update Product
router.put('/update/:id', productController.update)

module.exports = router