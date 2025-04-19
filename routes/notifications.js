const express = require('express');
const router = express.Router();

const {
  addNotification,
  deleteNotification,
  getNotifications
} = require('../controllers/notifications.controllers.js');

const { isAdmin, isUser } = require('../middleware/userAuth.js');

// Admin routes
router.post('/', isAdmin, addNotification);
router.delete('/:id', isAdmin, deleteNotification);

// User route
router.get('/', isUser, getNotifications);

module.exports = router;