const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "get all products route" });
};

const createProduct = async (req, res) => {
  res.status(200).json({ msg: "create a product" });
};

module.exports = {
  getAllProducts,
  createProduct
};
