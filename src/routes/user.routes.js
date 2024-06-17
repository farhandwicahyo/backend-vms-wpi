const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, registerUser, getUserByIdVendor } = require('../controllers/user.controller');
const { authenticateToken, authorizeRoles } = require('../middlewares/role.middleware');

const router = express.Router();

//untuk pegawai
router.get('/', authenticateToken, authorizeRoles([2, 3, 4]), getAllUsers);
router.get('/:id', authenticateToken, authorizeRoles([2, 3, 4]), getUserById);
router.post('/', authenticateToken, authorizeRoles([4]), createUser);
router.put('/:id', authenticateToken, authorizeRoles([2, 3, 4]), updateUser);
router.delete('/:id', authenticateToken, authorizeRoles([2, 3, 4]), deleteUser);

//untuk vendor
router.get('/vendor', authenticateToken, authorizeRoles([1]), getUserByIdVendor);
router.put('/vendor/:id', authenticateToken, authorizeRoles([1]), updateUser);
router.post('/register', registerUser);

module.exports = router;
  