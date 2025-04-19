const express = require('express');
const router = express.Router();
const {
  addTestResult,
  updateTestResult,
  deleteTestResult,
  getTestResults
} = require('../controllers/test-results.controllers.js');

const { isAdmin, isUser } = require('../middleware/userAuth'); 

// Admin-only routes
router.post('/', isAdmin, addTestResult);
router.put('/:id', isAdmin, updateTestResult);
router.delete('/:id', isAdmin, deleteTestResult);

// User and admin route
router.get('/', isUser, getTestResults);

module.exports = router;
