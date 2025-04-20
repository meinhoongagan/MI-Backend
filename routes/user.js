const express = require('express');
const router = express.Router();
const { loginUser, logoutUser, createUser } = require('../controllers/user.controllers.js');

const { isAdmin } = require('../middleware/userAuth.js');

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/', isAdmin, createUser);


module.exports = router;
