const db = require("../database/models");
const User = require("../database/models/user");

exports.all = async (req, res) => {
  try {
    return res.json({
      status: "200",
      body: "Berhasil",
    });
  } catch (err) {}
};

exports.create = async (req, res) => {
  try {
    const { nama, username, email, password } = req.body;

    const newUser = await db.User.create({
      nama,
      username,
      email,
      password,
    });

    res.json({
      status: 200,
      message: "Berhasil ditambahkan",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
  }
};
