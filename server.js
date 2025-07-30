import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

import enquiryRoutes from './routes/enquiry.routes.js';
import reviewRoutes from './routes/review.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Cookie parser to read cookies
app.use(cookieParser());

// CORS setup (allow frontend to send/receive cookies)
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // frontend URL
  credentials: true, // allow cookies from frontend
}));

// API Routes
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);

// Default route (optional)
app.get('/', (req, res) => {
  res.send('UrbanShifters Backend is running.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
