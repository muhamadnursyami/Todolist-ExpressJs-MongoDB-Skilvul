const express = require("express");
const route = express.Router();
const todoRoutes = require("./todoRoutes");
route.get("/", (req, res) => {
  res.json({
    message: "Selamat data di server todolist ",
  });
});

route.use("/todos", todoRoutes);

module.exports = route;
