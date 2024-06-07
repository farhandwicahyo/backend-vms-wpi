const express = require("express");
const {
  getAllstatus,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
} = require("../controllers/status.controller");

const router = express.Router();

router.get("/status", getAllstatus);
router.get("/status/:id", getStatusById);
router.post("/status", createStatus);
router.put("/status/:id", updateStatus);
router.delete("/status/:id", deleteStatus);

module.exports = router;
