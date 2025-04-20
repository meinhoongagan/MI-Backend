const express = require('express');
const router = express.Router();
const {
  createTestimonial,
  getApprovedTestimonials,
  getNonApprovedTestimonials,
  deleteTestimonial,
  approveTestimonial
} = require('../controllers/testimonials.controllers.js');

// Dummy middleware (replace with real auth logic)
const { isAdmin, isUser } = require('../middleware/userAuth.js');

// Users
router.post('/', isUser, createTestimonial);
router.get('/', getApprovedTestimonials);

// Admin
router.delete('/:id', isAdmin, deleteTestimonial);
router.put('/:id/approve', isAdmin, approveTestimonial);
router.get('/non-approved', isAdmin, getNonApprovedTestimonials);

module.exports = router;