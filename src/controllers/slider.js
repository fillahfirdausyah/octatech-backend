const db = require('../database/models/index')

exports.insert = (req, res) => {
    const {slider} = req.files.slider

    console.log(slider)
}