const AcademicResult = require('../models/academic-results.models.js');

// Admin: Add Academic Result
const addAcademicResult = async (req, res) => {
  try {
    const result = new AcademicResult(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Admin: Update Academic Result
const updateAcademicResult = async (req, res) => {
  try {
    const updated = await AcademicResult.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Academic result not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Admin: Delete Academic Result
const deleteAcademicResult = async (req, res) => {
  try {
    const result = await AcademicResult.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Academic result not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// User + Admin: Get Academic Results
const getAcademicResults = async (req, res) => {
  try {
    const results = await AcademicResult.find().populate('user');
    res.status(200).json(results);
  } catch (err) {   
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addAcademicResult,
  updateAcademicResult,
  deleteAcademicResult,
  getAcademicResults
};
