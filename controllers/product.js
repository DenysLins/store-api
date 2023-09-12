const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "get all products route" });
};

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "get all products static route" });
};

const createProduct = async (req, res) => {
  res.status(200).json({ msg: "create a product" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
  createProduct
};
