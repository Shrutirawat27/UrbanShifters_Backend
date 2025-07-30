import express from 'express';
import { getAllReviews, createReview } from '../controllers/review.controller.js';

const router = express.Router();

// Public routes
router.get('/', getAllReviews);
router.post('/', createReview);

export default router;
