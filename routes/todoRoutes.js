const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  editTodoById,
  deleteTodoById,
} = require("../controllers/todoControllers");
const route = express.Router();

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.put("/:id", editTodoById);
route.delete("/:id", deleteTodoById);

module.exports = route;
