const productModel = require("../models/product.model");

const productCtrl = {
  AddProduct: async (req, res) => {
    const { name, description, price } = req.body;
    try {
      const newProduct = new productModel({ name, description, price });
      await newProduct.save();
      res.status(200).json(newProduct);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  ViewProduct: async (req, res) => {
    try {
      const products = await productModel.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  UpdateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
      const product = await productModel.findOneAndUpdate(
        { _id: id },
        { name, description, price },
        { new: true }
      );
      if (!product)
        return res.status(404).json({ message: "product not found" });
      res.status(200).json(product);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  DeleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await productModel.findOneAndDelete({_id:id});
      if (!product) return res.status(404).json({ message: 'Product Not Found' });
      res.status(200).json({ message: 'Product Deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = productCtrl;
