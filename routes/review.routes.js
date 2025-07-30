import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// POST new review
router.post('/', async (req, res) => {
  try {
    const { name, rating, message } = req.body;
    const review = new Review({ name, rating, message, approved: false });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT approve review
router.put('/approve/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
