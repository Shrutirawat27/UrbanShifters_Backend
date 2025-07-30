// models/Enquiry.js
import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'quoted', 'closed'],
    default: 'pending', // default status when enquiry is created
  },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Enquiry', enquirySchema);
