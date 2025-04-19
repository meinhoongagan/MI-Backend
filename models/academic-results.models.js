const mongoose = require('mongoose');

const academicResultSchema = new mongoose.Schema({
  user: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    type: String, // Assuming user ID is a string (e.g., username or email)
    required: true
  },
  class: {
    type: String,
    required: true
  },
  subjects: [
    {
      subjectName: { type: String, required: true },
      marksObtained: { type: Number, required: true },
      totalMarks: { type: Number, required: true },
      grade: { type: String }
    }
  ],
  totalMarks: {
    type: Number,
    required: true
  },
  marksObtained: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  remarks: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AcademicResult', academicResultSchema);
