const express = require("express");
const {
  getAllUserPengalaman,
  getUserPengalamanByIdUser,
  createUserPengalaman,
  updateUserPengalaman,
  deleteUserPengalaman,
} = require("../controllers/user_pengalaman.controller");

const router = express.Router();

router.get("/", getAllUserPengalaman);
router.get("/user/:userId", getUserPengalamanByIdUser);
router.post("/", createUserPengalaman);
router.patch("/:id", updateUserPengalaman);
router.delete("/:id", deleteUserPengalaman);

module.exports = router;
