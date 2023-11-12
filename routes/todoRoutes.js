const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
} = require("../controllers/todoControllers");
const route = express.Router();

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);

module.exports = route;
