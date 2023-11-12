const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  value: {
    type: String,
    minlength: [3, "Panjang todo minimal 3 karakter"],
    required: [true, "Value harus diisi"],
  },
  status: { type: Boolean, required: true },
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
