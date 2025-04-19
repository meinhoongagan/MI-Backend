const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // in hours
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  tags: [String], // e.g. ["JavaScript", "Backend"]
  thumbnail: {
    type: String, // image URL
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Course', courseSchema);