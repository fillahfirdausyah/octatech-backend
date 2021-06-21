// SETUP SERVER //
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000
const jwt = require('jsonwebtoken')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')

// Url Encoded
app.use(express.urlencoded({extended: true}))
// Serve Static Folder
app.use(express.static('public'))
// Cors
app.use(cors())
// Database
const db = require('./database')
// File Upload
app.use(fileUpload({
    createParentPath: true
}))
// Body Parser
app.use(bodyParser.json())
// END SETUP SERVER //



// ROUTER SETUP //
// Route Index
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from('<h1><center>REST API For Assignments Made By Fillah Firdausyah</h1></center>'))
})

// Route
const userRouter    = require('./src/route/user')
const blogRouter    = require('./src/route/blog')
const pesanRouter   = require('./src/route/pesan')
const productRouter = require('./src/route/product')
const sliderRouter  = require('./src/route/slider')

// Route List
app.use('/user', userRouter)
app.use('/blog', blogRouter)
app.use('/pesan', pesanRouter)
app.use('/product', productRouter)
app.use('/slider', sliderRouter)





app.listen(port, () => {
    console.log(`Server Berjalan Pada Port ${port}`)
})