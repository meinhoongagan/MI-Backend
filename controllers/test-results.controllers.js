const TestResult = require('../models/test-results.models.js');

// POST /api/test-results (Admin only)
const addTestResult = async (req, res) => {
  try {
    const result = new TestResult(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/test-results/:id (Admin only)
const updateTestResult = async (req, res) => {
  try {
    const updated = await TestResult.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: 'Test result not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/test-results/:id (Admin only)
const deleteTestResult = async (req, res) => {
  try {
    const result = await TestResult.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Test result not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/test-results (Users get their own results, Admin gets all)
const getTestResults = async (req, res) => {
  try {
    const results = await TestResult.find().populate('user course');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addTestResult,
  updateTestResult,
  deleteTestResult,
  getTestResults,
};
