const express = require("express");
const {
  login,
  register,
  refreshAccessToken,
  logout,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/token", refreshAccessToken);
router.post("/logout", logout);

module.exports = router;
