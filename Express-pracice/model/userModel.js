const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);
module.exports = User;

const userSchemaa = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: String,
});
const Usera = mongoose.model("User", userSchema);
module.exports = User;
