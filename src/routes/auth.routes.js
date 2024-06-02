const express = require('express');
const { login, refreshAccessToken, logout } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/login', login);
router.post('/token', refreshAccessToken);
router.post('/logout', logout);

module.exports = router;
