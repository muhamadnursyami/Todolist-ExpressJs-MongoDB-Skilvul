const express = require("express");
const route = express.Router();
const todoRoutes = require("./todoRoutes");
const userRoutes = require("./userRoutes");
route.get("/", (req, res) => {
  res.json({
    message: "Selamat data di server todolist ",
  });
});

route.use("/todos", todoRoutes);
route.use("/users", userRoutes);

module.exports = route;
