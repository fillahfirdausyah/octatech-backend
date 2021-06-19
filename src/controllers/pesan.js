const db = require("../database/models/index");

exports.create = async (req, res) => {
  try {
    const { name, email, pesan } = req.body;

    const newPesan = await db.Pesan.create({
      name,
      email,
      pesan,
    });

    res.json({
      code: "200",
      message: "Berhasil",
      data: newPesan,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const allPesan = await db.Pesan.findAll();

    res.json({
      code: "200",
      message: "Berhasil",
      data: allPesan,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const validPesan = await db.Pesan.findOne({
      where: {
        id: id,
      },
    });

    console.log(validPesan);

    if (validPesan == null) {
      res.json({
        code: "404",
        error: "Pesan Not Found",
      });
    } else {
      db.Pesan.destroy({
        where: {
          id: id,
        },
      });
      res.json({
        code: "200",
        message: "Berhasil Menghapus Pesan",
      });

      console.log("berhasil");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.details = async (req, res) => {
  try {
    const { id } = req.params;

    const pesan = await db.Pesan.findOne({
      where: {
        id: id,
      },
    });

    res.json({
      code: '200',
      message: 'Berhasil fetch data',
      data: pesan
    })
  } catch (err) {
    console.log(err)
  }
};
