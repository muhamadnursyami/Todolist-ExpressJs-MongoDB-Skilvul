const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const todo = await Todo.find();

    res.json({
      message: "berhasil mendapatkan semua data",
      data: todo,
    });
  },
  getTodoById: () => {},
  createTodo: async (req, res) => {
    const todo = req.body;

    await Todo.create(todo);

    res.json({
      message: "Berhasil tambah todo baru",
    });
  },
};
