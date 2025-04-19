const express = require('express');
const router = express.Router();
const {
  addAcademicResult,
  updateAcademicResult,
  deleteAcademicResult,
  getAcademicResults
} = require('../controllers/academic-results.controllers.js');

const { isAdmin, isUser } = require('../middleware/userAuth.js'); 

// Admin routes
router.post('/', isAdmin, addAcademicResult);
router.put('/:id', isAdmin, updateAcademicResult);
router.delete('/:id', isAdmin, deleteAcademicResult);

// User + Admin
router.get('/', isUser, getAcademicResults);

module.exports = router;
