const express = require('express');
const {
  getAllSertifikasi,
  getSertifikasiById,
  createSertifikasi,
  updateSertifikasi,
  deleteSertifikasi,
} = require('../controllers/jenis_sertifikasi.controller');

const router = express.Router();

router.get('/sertifikasi', getAllSertifikasi);
router.get('/sertifikasi/:id', getSertifikasiById);
router.post('/sertifikasi', createSertifikasi);
router.put('/sertifikasi/:id', updateSertifikasi);
router.delete('/sertifikasi/:id', deleteSertifikasi);

module.exports = router;
