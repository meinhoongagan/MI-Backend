const Notification = require('../models/notification.models.js');

// Admin: Add Notification
const addNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Admin: Delete Notification
const deleteNotification = async (req, res) => {
  try {
    const deleted = await Notification.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Notification not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Users: Get Notifications (User-specific + Global)
const getNotifications = async (req, res) => {
  try {
    const userId = req.headers['x-user-id'];
    const notifications = await Notification.find({
      $or: [{ user: null }, { user: userId }]
    }).sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addNotification,
  deleteNotification,
  getNotifications
};
