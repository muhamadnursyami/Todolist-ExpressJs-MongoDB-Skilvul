const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  editTodoById,
} = require("../controllers/todoControllers");
const route = express.Router();

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.put("/:id", editTodoById);

module.exports = route;
