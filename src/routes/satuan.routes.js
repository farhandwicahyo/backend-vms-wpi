const express = require('express');
const {
  getAllSatuans,
  getSatuanById,
  createSatuan,
  updateSatuan,
  deleteSatuan,
} = require('../controllers/satuan.controller');

const router = express.Router();

router.get('/satuans', getAllSatuans);
router.get('/satuans/:id', getSatuanById);
router.post('/satuans', createSatuan);
router.put('/satuans/:id', updateSatuan);
router.delete('/satuans/:id', deleteSatuan);

module.exports = router;
