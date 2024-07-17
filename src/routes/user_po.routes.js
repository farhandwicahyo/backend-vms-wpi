const express = require("express");
const {
  getAllUserPO,
  getUserPO,

} = require("../controllers/user_po.controller");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middlewares/role.middleware");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  authorizeRoles([3]),
  getAllUserPO
);

router.get(
  "/userPO",
  authenticateToken,
  authorizeRoles([3]),
  getUserPO
);

// router.post(
//   "/",
//   authenticateToken,
//   authorizeRoles([1, 2, 3, 4]),
//   createUserPenawaran
// );
// router.put(
//   "/:id",
//   authenticateToken,
//   authorizeRoles([1, 2, 3, 4]),
//   updateUserPenawaran
// );
// router.delete(
//   "/:id",
//   authenticateToken,
//   authorizeRoles([1, 2, 3, 4]),
//   deleteUserPenawaran
// );

module.exports = router;
