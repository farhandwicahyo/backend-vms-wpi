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
const { authenticateToken, authorizeRoles } = require('../middlewares/role.middleware');

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles([1, 2, 3, 4]), getAllUserDocuments);
router.get('/:id', authenticateToken, authorizeRoles([1, 2, 3, 4]), getUserDocumentById);
router.get('/user/:userId', authenticateToken, authorizeRoles([1, 2, 3, 4]), getUserDocumentByIdUser);
router.get('/jenis/:jenisDocumentId', authenticateToken, authorizeRoles([1, 2, 3, 4]), getUserDocumentByIdJenisDocument);
router.post('/', authenticateToken, authorizeRoles([1, 2, 3, 4]), createUserDocument);
router.put('/:id', authenticateToken, authorizeRoles([1, 2, 3, 4]), updateUserDocument);
router.delete('/:id', authenticateToken, authorizeRoles([1, 2, 3, 4]), deleteUserDocument);

module.exports = router;
