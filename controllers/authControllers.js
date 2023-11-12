require("dotenv").config();
const User = require("../models/user");

const jwt = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      //ngeck apakah dimodel User ada email yang sama dengan user inputan, user login
      // yang mana email nya itu dari user.login.email
      const user = await User.findOne({ email: userLogin.email });
      if (!user) throw new Error("invalid user");
      // ngecek apakah di model user dan yang user inputan itu sama.
      if (user.password !== userLogin.password) throw new Error("invalid user");

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_KEY
      );
      res.json({
        message: "login successfull",
        userId: user._id,
        token,
      });
    } catch (error) {
      res.json(error.message);
    }
  },
  register: async (req, res) => {
    const register = req.body;
    await User.create(register);
    res.json({
      messsage: "berhasil register",
    });
  },
};
