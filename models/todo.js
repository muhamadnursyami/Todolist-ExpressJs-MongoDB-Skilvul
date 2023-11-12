const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  value: {
    type: String,
    minlength: [3, "Panjang todo minimal 3 karakter"],
    required: [true, "Value harus diisi"],
  },
  status: {
    type: Boolean,
    enum: [true, false],
    default: false,
  },
  userID: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
