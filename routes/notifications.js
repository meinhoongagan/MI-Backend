const express = require('express');
const router = express.Router();

const {
  addNotification,
  deleteNotification,
  getNotifications,
  markNotificationAsRead
} = require('../controllers/notifications.controllers.js');

const { isAdmin, isUser } = require('../middleware/userAuth.js');

// Admin routes
router.post('/', isAdmin, addNotification);
router.delete('/:id', isAdmin, deleteNotification);

// User routes
router.get('/', isUser, getNotifications);
router.patch('/:id', isUser, markNotificationAsRead);

module.exports = router;