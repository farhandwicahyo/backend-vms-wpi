const express = require('express');
const {
  getAllKurs,
  getKursById,
  createKurs,
  updateKurs,
  deleteKurs,
} = require('../controllers/kurs.controller');

const router = express.Router();

router.get('/kurs', getAllKurs);
router.get('/kurs/:id', getKursById);
router.post('/kurs', createKurs);
router.put('/kurs/:id', updateKurs);
router.delete('/kurs/:id', deleteKurs);

module.exports = router;
