const express = require("express");
const {
  getAllsatuan,
  getSatuanById,
  createSatuan,
  updateSatuan,
  deleteSatuan,
} = require("../controllers/satuan.controller");

const router = express.Router();

router.get("/satuan", getAllsatuan);
router.get("/satuan/:id", getSatuanById);
router.post("/satuan", createSatuan);
router.put("/satuan/:id", updateSatuan);
router.delete("/satuan/:id", deleteSatuan);

module.exports = router;
