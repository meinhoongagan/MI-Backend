const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  user: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    type: String, // Assuming user ID is a string (e.g., username or email)
    required: true
  },
  course: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Course',
    type: String, // Assuming course ID is a string (e.g., course code or name)
    required: false // optional if test isn't tied to a course
  },
  testTitle: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  answers: [
    {
      questionId: String,
      selectedOption: String,
      isCorrect: Boolean
    }
  ],
  attemptedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TestResult', testResultSchema);
