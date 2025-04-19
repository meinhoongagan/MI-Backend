const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  occupation: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  avatar: {
    type: String, // optional profile image URL
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course' // Optional: associate testimonial with a course
  },
  isApproved: {
    type: Boolean,
    default: false,
  },  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
