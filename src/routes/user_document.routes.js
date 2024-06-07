const express = require('express');
const {
  getAllUserDocuments,
  getUserDocumentById,
  getUserDocumentByIdUser,
  getUserDocumentByIdJenisDocument,
  createUserDocument,
  updateUserDocument,
  deleteUserDocument,
} = require('../controllers/user_document.controller');

const router = express.Router();

router.get('/', getAllUserDocuments);
router.get('/:id', getUserDocumentById);
router.get('/user/:userId', getUserDocumentByIdUser);
router.get('/jenis/:jenisDocumentId', getUserDocumentByIdJenisDocument);
router.post('/', createUserDocument);
router.put('/:id', updateUserDocument);
router.delete('/:id', deleteUserDocument);

module.exports = router;
