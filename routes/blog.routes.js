import express from 'express';
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;
