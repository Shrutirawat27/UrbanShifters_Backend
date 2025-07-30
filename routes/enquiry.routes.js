// routes/enquiry.routes.js
import express from 'express';
import {
  createEnquiry,
  getAllEnquiries
} from '../controllers/enquiry.controller.js';

const router = express.Router();

// POST: Public - Enquiry form
router.post('/', createEnquiry);

// GET: Admin - View all enquiries
router.get('/', getAllEnquiries);

export default router;
