const Router = require("express").Router;

const { getAllProducts, createProduct } = require("../controllers/product");

const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);

module.exports = router;
