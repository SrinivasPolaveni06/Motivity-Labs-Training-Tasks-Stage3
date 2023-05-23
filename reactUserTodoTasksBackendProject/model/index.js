var mongoose = require("mongoose");
var { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, requied: true },
  email: String,
  password: {
    type: String,
    requied: true,
  },
});

const todoSchema = new Schema({
  title: { type: String, requied: true },
  status: { type: String, requied: true },
  target: { type: String, requied: true },
  createdAt: String,
  updatedAt: String,
  user_id: { type: String },
});

const User = mongoose.model("Users", userSchema);

const Todo = mongoose.model("TodoList", todoSchema);

module.exports = { User, Todo };
