const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "Selamat data di server todolist ",
  });
});

module.exports = route;
