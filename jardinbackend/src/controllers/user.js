const userCtrl = {};

const User = require("../models/user");
const bcrypt = require("bcryptjs");

userCtrl.getUsers = async (req, res) => {
  const data = await User.find({});
  res.json(data);
};

userCtrl.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    await newUser.save();
    res.json({ message: "User created" });
  } catch (error) {
    res.json({ message: error });
  }
};

userCtrl.login = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.find({ email: data.userEmail });
    
    if (user.length > 0) {
      const validation = await bcrypt.compare(data.userPassword, user[0].password)
      if (validation) {
        console.log("heredddddd");
        res.json({ message: "Session", user: user });
      } else {
        console.log("asfasd");
        res.json({ message: "Contraseña incorrecta" });
      }
    } else {
      console.log("asfdasd");
      res.json({ message: "Usuario no registrado" });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

userCtrl.getUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

userCtrl.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "User updated" });
  } catch (error) {
    res.json({ message: error });
  }
};

userCtrl.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = userCtrl;
