const db = require("../database/models/index");

exports.insert = async (req, res) => {
  try {
    const { alamat, email, phone } = req.body;

    const newData = await db.Contact.create({
      alamat,
      email,
      phone,
    });

    res.json({
      code: "200",
      message: "Berhasil",
      data: newData,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.get = async (req, res) => {
  try {
    const dataContact = await db.Contact.findAll();

    res.json({
      code: "200",
      message: "Berhasil fetch data",
      data: dataContact,
    });
  } catch (err) {}
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { alamat, email, phone } = req.body;

  const data = await db.Contact.update(
    {
      alamat,
      email,
      phone,
    },
    {
      where: {
        id: id,
      },
    }
  );

  if (data == 0) {
    res.json({
      code: "500",
      message: "Ada yang salah",
    });
  } else {
    res.json({
      code: "200",
      message: "Berhasil update data",
      data: data,
    });
  }
};
