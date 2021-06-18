const db = require("../database/models");
// const User = require("../database/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let accessToken = '';

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
    let time = Math.floor(Date.now() / 1000);

    const { nama, username, email, password } = req.body;
    const profile = req.files.picture;
    const profileName = username + "-" + time + "-" + profile.name;
    bcrypt.hash(password, 10).then(async (hash) => {
      const newUser = await db.User.create({
        nama: nama,
        username: username,
        email: email,
        password: hash,
        picture: profileName,
      });

      profile.mv("./public/image/user/" + profileName);

      res.json({
        status: 200,
        message: "Berhasil ditambahkan",
        data: newUser,
      });
    });
  } catch (err) {
    console.error(err);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await db.User.findOne({
    where: { username: username },
  });

  if (!user)
    res.json({
      message: "User Not Found",
    });

  bcrypt.compare(password, user.password).then((x) => {
    if (!x)
      res.json({
        message: "Wrong Username or Password",
      });

    accessToken = jwt.sign({ username: user.username, id: user.id }, 'sangat-rahasia');

    res.json({
      message: "Login Success",
      data: user,
      token: accessToken
    });
  });
};
