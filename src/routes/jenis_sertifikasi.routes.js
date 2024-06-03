const express = require('express');
const {
  getAllSertifikasis,
  getSertifikasiById,
  createSertifikasi,
  updateSertifikasi,
  deleteSertifikasi,
} = require('../controllers/jenis_sertifikasi.controller');

const router = express.Router();

router.get('/sertifikasis', getAllSertifikasis);
router.get('/sertifikasis/:id', getSertifikasiById);
router.post('/sertifikasis', createSertifikasi);
router.put('/sertifikasis/:id', updateSertifikasi);
router.delete('/sertifikasis/:id', deleteSertifikasi);

module.exports = router;
