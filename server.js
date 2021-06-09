// SETUP SERVER //
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

// Url Encoded
app.use(express.urlencoded({extended: true}))
// Serve Static Folder
app.use(express.static('public'))
// Cors
app.use(cors())
// Database
const db = require('./database')
// END SETUP SERVER //



// ROUTER SETUP //
// Route Index
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from('<h1><center>REST API For Assignments Made By Fillah Firdausyah</h1></center>'))
})





app.listen(port, () => {
    console.log(`Server Berjalan Pada Port ${port}`)
})