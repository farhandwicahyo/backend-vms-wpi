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
const { authenticateToken, authorizeRoles } = require('../middlewares/role.middleware');

const router = express.Router();

router.get("/", authenticateToken, authorizeRoles([1, 2, 3, 4]), getAllUserPenawaran);
router.get("/:penawaranId", authenticateToken, authorizeRoles([1, 2, 3, 4]), getUserPenawaranDetail);
router.get("/user/:userId", authenticateToken, authorizeRoles([1, 2, 3, 4]), getUserPenawaranByIdUser);
router.get(
  "/statuspenawaran/:statuspenawaranId", authenticateToken, authorizeRoles([1, 2, 3, 4]),
  getUserPenawaranByStatusPenawaran
);
router.get(
  "/statusproses/:statusprosespenawaranId", authenticateToken, authorizeRoles([1, 2, 3, 4]),
  getUserPenawaranByStatusProsesPenawaran
);
router.post("/", authenticateToken, authorizeRoles([1, 2, 3, 4]), createUserPenawaran);
router.put("/:id", authenticateToken, authorizeRoles([1, 2, 3, 4]), updateUserPenawaran);
router.delete("/:id", authenticateToken, authorizeRoles([1, 2, 3, 4]), deleteUserPenawaran);

module.exports = router;
