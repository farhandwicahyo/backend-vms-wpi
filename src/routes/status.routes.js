const express = require('express');
const {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
} = require('../controllers/status.controller');

const router = express.Router();

router.get('/statuses', getAllStatuses);
router.get('/statuses/:id', getStatusById);
router.post('/statuses', createStatus);
router.put('/statuses/:id', updateStatus);
router.delete('/statuses/:id', deleteStatus);

module.exports = router;
