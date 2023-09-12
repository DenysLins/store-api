const Router = require("express").Router;

const {
  getAllProducts,
  getAllProductsStatic,
  createProduct
} = require("../controllers/product");

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
