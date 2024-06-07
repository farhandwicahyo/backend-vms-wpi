const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const { authenticateToken, authorizeRoles } = require('../middlewares/role.middleware');

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles([1, 2, 3, 4]), getAllUsers);
router.get('/:id', authenticateToken, authorizeRoles([1, 2, 3, 4]), getUserById);
router.post('/', authenticateToken, authorizeRoles([1]), createUser);
router.put('/:id', authenticateToken, authorizeRoles([1, 2]), updateUser);
router.delete('/:id', authenticateToken, authorizeRoles([1]), deleteUser);

module.exports = router;
  