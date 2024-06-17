const express = require("express");
const {
  getAllUserPenawaran,
  getUserPenawaranDetail,
  getUserPenawaranByIdUser,
  getUserPenawaranByStatusPenawaran,
  getUserPenawaranByStatusProsesPenawaran,
  createUserPenawaran,
  updateUserPenawaran,
  deleteUserPenawaran,
} = require("../controllers/user_penawaran.controller");

const router = express.Router();

router.get("/", getAllUserPenawaran);
router.get("/:penawaranId", getUserPenawaranDetail);
router.get("/user/:userId", getUserPenawaranByIdUser);
router.get(
  "/statuspenawaran/:statuspenawaranId",
  getUserPenawaranByStatusPenawaran
);
router.get(
  "/statusproses/:statusprosespenawaranId",
  getUserPenawaranByStatusProsesPenawaran
);
router.post("/", createUserPenawaran);
router.put("/:id", updateUserPenawaran);
router.delete("/:id", deleteUserPenawaran);

module.exports = router;
