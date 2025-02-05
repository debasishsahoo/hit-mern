const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 3 },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 1 }, // Enforce a minimum positive price
  images: { type: String, trim: true, default: null }, //image URl
  stock: { type: Number, min: 0 ,default: 0 },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
