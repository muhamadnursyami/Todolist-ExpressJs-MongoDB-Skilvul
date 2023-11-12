const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  value: String,
  status: Boolean,
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
