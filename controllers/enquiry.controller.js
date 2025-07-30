// controllers/enquiry.controller.js
import Enquiry from '../models/Enquiry.js';

// POST: Create new enquiry
export const createEnquiry = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const newEnquiry = new Enquiry({ name, phone, email, message });
    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit enquiry', error });
  }
};

// GET: Admin fetch all enquiries
export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch enquiries', error });
  }
};
