// routes/blog.routes.js
import express from 'express';
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blog.controller.js';

const router = express.Router();

// GET all blogs
router.get('/', getAllBlogs);

// POST a blog
router.post('/', createBlog);

// PUT update blog
router.put('/:id', updateBlog);

// DELETE blog
router.delete('/:id', deleteBlog);

export default router;
