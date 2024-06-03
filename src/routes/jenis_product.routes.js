const express = require('express');
const {
  getAllJenisProducts,
  getJenisProductById,
  createJenisProduct,
  updateJenisProduct,
  deleteJenisProduct,
} = require('../controllers/jenis_product.controller');

const router = express.Router();

router.get('/jenis-products', getAllJenisProducts);
router.get('/jenis-products/:id', getJenisProductById);
router.post('/jenis-products', createJenisProduct);
router.put('/jenis-products/:id', updateJenisProduct);
router.delete('/jenis-products/:id', deleteJenisProduct);

module.exports = router;
