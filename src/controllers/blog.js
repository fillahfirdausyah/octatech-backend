const db = require('../database/models/index')

exports.create = async (req, res) => {

    let time = Math.floor(Date.now() / 1000);

    const {judul, content} = req.body
    const gambar = req.files.picture
    const gambarName = 'blog' + "-" + time + "-" + gambar.name;

    const newBlog = await db.Blog.create({
        judul,
        content,
        gambar: gambarName,        
    })

    gambar.mv('./public/image/blog/' + gambarName)

    res.json({
        message: 'Berhasil menambahkan',
        data: newBlog
    })
}