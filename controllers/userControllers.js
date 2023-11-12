const User = require("../models/user.js");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json({
        message: "berhasil mendapatkan semua data user",
        data: user,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.json({
        message: "berhasil mendapatkan semua data user",
        data: user,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  createUser: async (req, res) => {
    const data = req.body;
    try {
      await User.create(data);
      res.json({
        message: "berhasil membuat user",
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
