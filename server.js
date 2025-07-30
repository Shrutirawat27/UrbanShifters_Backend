import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
<<<<<<< HEAD
=======
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
>>>>>>> 89b4a086751f03b8e6ada8a3a53a8235c6bf9113

import reviewRoutes from './routes/review.routes.js';
import adminRoutes from './routes/admin.routes.js';

<<<<<<< HEAD
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

=======
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
>>>>>>> 89b4a086751f03b8e6ada8a3a53a8235c6bf9113
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);

// Default route (optional)
app.get('/', (req, res) => {
  res.send('UrbanShifters Backend is running.');
});

// Start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
