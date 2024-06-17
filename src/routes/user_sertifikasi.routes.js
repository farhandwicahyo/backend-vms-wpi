const express = require("express");
const {
  getAllUsersertifikasi,
  getUserSertifikasiById,
  getUserSertifikasiByIdUser,
  getUserSertifikasiByIdJenisSertifikasi,
  createUserSertifikasi,
  updateUserSertifikasi,
  deleteUserSertifikasi,
} = require("../controllers/user_sertifikasi.controller");

const router = express.Router();

router.get("/", getAllUsersertifikasi);
router.get("/:id", getUserSertifikasiById);
router.get("/user/:userId", getUserSertifikasiByIdUser);
router.get(
  "/jenis/:jenisSertifikasiId",
  getUserSertifikasiByIdJenisSertifikasi
);
router.post("/", createUserSertifikasi);
router.put("/:id", updateUserSertifikasi);
router.delete("/:id", deleteUserSertifikasi);

module.exports = router;
