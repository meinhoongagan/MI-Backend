const express = require('express');
const router = express.Router();
const {
  loginUser,
  logoutUser,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
} = require('../controllers/user.controllers.js');

const { isAdmin } = require('../middleware/userAuth.js');

router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Only admin can manage users
router.post('/', isAdmin, createUser);
router.get('/', isAdmin, getAllUsers);
router.put('/:id', isAdmin, updateUser);
router.delete('/:id', isAdmin, deleteUser);

module.exports = router;
