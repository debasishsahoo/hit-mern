const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 3 },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true,minlength: 6 },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
