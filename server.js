import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

import enquiryRoutes from './routes/enquiry.routes.js';
import reviewRoutes from './routes/review.routes.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/enquiries', enquiryRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
