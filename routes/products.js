const { Router } = require('express');

const {
  getAllProducts,
  getAllProductsStatic,
  createProduct,
} = require('../controllers/product');

const router = Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
