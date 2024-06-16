const express = require('express');
const {
  getAllUserProducts,
  getUserProductDetail,
  getUserProductByIdUser,
  createUserProduct,
  updateUserProduct,
  deleteUserProduct,
} = require('../controllers/user_product.controller');

const router = express.Router();

router.get('/', getAllUserProducts);
router.get('/:productId', getUserProductDetail);
router.get('/user/:userId', getUserProductByIdUser);
router.post('/', createUserProduct);
router.put('/:id', updateUserProduct);
router.delete('/:id', deleteUserProduct);

module.exports = router;
