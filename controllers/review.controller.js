import Review from '../models/Review.js';

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create new review
export const createReview = async (req, res) => {
  const { name, rating, message } = req.body;

  if (!name || !rating || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newReview = new Review({ name, rating, message });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Approve a review
export const approveReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
