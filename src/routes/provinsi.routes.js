const express = require('express');
const {
  getAllProvinsis,
  getProvinsiById,
  createProvinsi,
  updateProvinsi,
  deleteProvinsi,
} = require('../controllers/provinsi.controller');

const router = express.Router();

router.get('/provinsis', getAllProvinsis);
router.get('/provinsis/:id', getProvinsiById);
router.post('/provinsis', createProvinsi);
router.put('/provinsis/:id', updateProvinsi);
router.delete('/provinsis/:id', deleteProvinsi);

module.exports = router;
