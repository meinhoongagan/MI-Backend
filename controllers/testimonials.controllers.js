const Testimonial = require('../models/testimonials.models.js');

// POST /api/testimonials - Submit testimonial (User)
const createTestimonial = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /api/testimonials - Get only approved testimonials (Public/User)
const getApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isApproved: true });
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/testimonials/:id - Delete testimonial (Admin only)
const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get non approved Testimonials
const getNonApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isApproved: false });
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/testimonials/:id/approve - Approve testimonial (Admin only)
const approveTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );
    if (!testimonial) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(testimonial);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTestimonial,
  getApprovedTestimonials,
  getNonApprovedTestimonials,
  deleteTestimonial,
  approveTestimonial,
};
