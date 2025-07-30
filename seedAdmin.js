// seedAdmin.js
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import bcrypt from 'bcryptjs';
// import Admin from './models/admin.model.js';
// import connectDB from './config/db.js';

// dotenv.config();
// await connectDB();

// const seedAdmin = async () => {
//   const existingAdmin = await Admin.findOne({ username: 'admin' });

//   if (existingAdmin) {
//     console.log('Admin already exists');
//     process.exit();
//   }

//   const hashedPassword = await bcrypt.hash('admin123', 10);

//   await Admin.create({
//     username: 'admin',
//     password: hashedPassword,
//   });

//   console.log('Admin created successfully');
//   process.exit();
// };

// seedAdmin().catch((err) => {
//   console.error('Error seeding admin:', err);
//   process.exit(1);
// });
