const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  user: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    type: String,
    default: "Welcome! to Mahendra Institute of Education" // null means it's a global/broadcast notification
  },
  isRead: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    enum: ['info', 'warning', 'success', 'error'],
    default: 'info'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date // optional: for auto-expiring notifications
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
