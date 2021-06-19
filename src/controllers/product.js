const db = require("../database/models/index");

exports.insert = async (req, res) => {
  try {
    let time = Math.floor(Date.now() / 1000);

    const { nama, harga } = req.body;
    const gambar = req.files.gambar;
    const namaGambar = "product" + "-" + time + "-" + gambar.name;

    const newData = await db.Product.create({
      nama: nama,
      harga: harga,
      gambar: namaGambar,
    });

    gambar.mv("./public/image/product/" + namaGambar);

    res.json({
      code: "200",
      message: "Berhasil Menambah Product",
      data: newData,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.all = async (req, res) => {
  try {
    const data = await db.Product.findAll();

    res.json({
      code: "200",
      message: "Berhasil Fetch Data",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;

  const data = await db.Product.findOne({
    where: {
      id: id,
    },
  });

  if (data === null)
    res.json({
      code: "404",
      message: "Product not found",
    });

  res.json({
    code: "200",
    message: "Berhasil fetch data",
    data: data,
  });
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    db.Product.destroy({
      where: {
        id: id,
      },
    });

    res.json({
      code: "200",
      message: "Berhasil menghapus product",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    let time = Math.floor(Date.now() / 1000);

    const { id } = req.params;
    const { nama, harga } = req.body;
    const gambar = req.files.gambar;
    const namaGambar = "product" + "-" + time + "-" + gambar.name;

    const newData = await db.Product.update(
      {
        nama: nama,
        harga: harga,
        gambar: namaGambar,
      },
      {
        where: {
          id: id,
        },
      }
    );

    gambar.mv("./public/image/product/" + namaGambar);

    res.json({
        code: '200',
        message: 'Berhaisl update product',
        data: newData
    })
  } catch (err) {
    console.log(err);
  }
};
