const express = require('express');
const {
  getAllKotas,
  getKotaById,
  createKota,
  updateKota,
  deleteKota,
} = require('../controllers/kota.controller');

const router = express.Router();

router.get('/kotas', getAllKotas);
router.get('/kotas/:id', getKotaById);
router.post('/kotas', createKota);
router.put('/kotas/:id', updateKota);
router.delete('/kotas/:id', deleteKota);

module.exports = router;
