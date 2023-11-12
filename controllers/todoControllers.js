const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const todo = await Todo.find();

      res.status(200).json({
        message: "berhasil mendapatkan semua data",
        data: todo,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await Todo.findById(id);

      res.json({
        message: "berhasil mendapatkan data berdasarkan id",
        data: todo,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  createTodo: async (req, res) => {
    const todo = req.body;

    try {
      await Todo.create(todo);

      res.json({
        message: "Berhasil tambah todo baru",
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
