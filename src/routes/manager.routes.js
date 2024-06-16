const express = require('express');
const router = express.Router();
const ManagerController = require('../controllers/manager.controller');

router.get('/user-po', ManagerController.getAllUserPO);

module.exports = router