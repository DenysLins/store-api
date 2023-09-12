const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: 'get all products static route' });
};

const createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({ newProduct });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
  createProduct,
};
