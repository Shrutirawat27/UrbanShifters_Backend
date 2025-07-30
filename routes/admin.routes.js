// routes/admin.routes.js
import express from 'express';
import { adminLogin, registerAdmin } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/login', adminLogin);
//router.post('/register', registerAdmin); // Uncomment only once to create admin

export default router;
