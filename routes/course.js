const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/course.controllers.js');

// Middleware placeholder for auth (add real logic here)
const { isAdmin } = require('../middleware/userAuth.js')

// Public (or shared) routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// Admin-only routes
router.post('/', isAdmin, createCourse);
router.patch('/:id', isAdmin, updateCourse);
router.delete('/:id', isAdmin, deleteCourse);

module.exports = router;
