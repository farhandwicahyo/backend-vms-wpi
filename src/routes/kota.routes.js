const express = require("express");
const {
  getAllkota,
  getKotaById,
  getKotaByProvinsiId,
  createKota,
  updateKota,
  deleteKota,
} = require("../controllers/kota.controller");

const router = express.Router();

router.get("/kota", getAllkota);
router.get("/kota/:id", getKotaById);
router.get('/kota/provinsi/:provinsiId', getKotaByProvinsiId);
router.post("/kota", createKota);
router.put("/kota/:id", updateKota);
router.delete("/kota/:id", deleteKota);

module.exports = router;
