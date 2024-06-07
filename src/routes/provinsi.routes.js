const express = require("express");
const {
  getAllprovinsi,
  getprovinsiById,
  createprovinsi,
  updateprovinsi,
  deleteprovinsi,
} = require("../controllers/provinsi.controller");

const router = express.Router();

router.get("/provinsi", getAllprovinsi);
router.get("/provinsi/:id", getprovinsiById);
router.post("/provinsi", createprovinsi);
router.put("/provinsi/:id", updateprovinsi);
router.delete("/provinsi/:id", deleteprovinsi);

module.exports = router;
