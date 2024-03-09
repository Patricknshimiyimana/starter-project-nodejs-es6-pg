import express from 'express';
import { createBlog, getAllBlogs } from '../controllers/blogController';

const blogRouter = express.Router();

blogRouter.post('/create', createBlog);
blogRouter.get('/all', getAllBlogs)

export default blogRouter;