const express = require("express");
const verifyToken = require("../middleware/auth");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  editTodoById,
  deleteTodoById,
  deleteAllTodo,
} = require("../controllers/todoControllers");
const route = express.Router();

route.get("/", getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.post("/", verifyToken, createTodo);
route.put("/:id", verifyToken, editTodoById);
route.delete("/:id", verifyToken, deleteTodoById);
route.delete("/", deleteAllTodo);

module.exports = route;
