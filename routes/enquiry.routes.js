import express from 'express';
import {
  createEnquiry,
  getAllEnquiries,
  updateEnquiryStatus, 
} from '../controllers/enquiry.controller.js';

const router = express.Router();

router.post('/', createEnquiry);
router.get('/', getAllEnquiries);
router.put('/:enquiryId/status', updateEnquiryStatus); 

export default router;
