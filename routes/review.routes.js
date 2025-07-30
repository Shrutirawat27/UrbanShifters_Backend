import express from 'express';
import {
  getAllReviews,
  createReview,
  approveReview,
  deleteReview
} from '../controllers/review.controller.js';

const router = express.Router();

router.get('/', getAllReviews);
router.post('/', createReview);
router.put('/approve/:id', approveReview);
router.delete('/:id', deleteReview); 

export default router;
