const express = require('express');
const {
  getAllDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
} = require('../controllers/jenis_document.controller');

const router = express.Router();

router.get('/documents', getAllDocuments);
router.get('/documents/:id', getDocumentById);
router.post('/documents', createDocument);
router.put('/documents/:id', updateDocument);
router.delete('/documents/:id', deleteDocument);

module.exports = router;
