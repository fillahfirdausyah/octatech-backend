const db = require("../database/models");
// const User = require("../database/models/user");

exports.all = async (req, res) => {
  try {
    const user = await db.User.findAll();

    res.json({
      status: 200,
      message: "Berhasil fetch data",
      data: user,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.create = async (req, res) => {
  try {
    let time = Math.floor(Date.now() / 1000)

    const { nama, username, email, password } = req.body;
    const profile = req.files.picture
    const profileName = username + "-" + time + "-" + profile.name
    const newUser = await db.User.create({
      nama: nama,
      username: username,
      email: email,
      password:password,
      picture: profileName
    });
    
    profile.mv('./public/image/user/' + profileName)
    res.json({
      status: 200,
      message: "Berhasil ditambahkan",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
  }
};
