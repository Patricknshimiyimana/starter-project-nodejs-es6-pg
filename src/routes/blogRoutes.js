import express from 'express';
import { createBlog } from '../controllers/blogController';

const blogRouter = express.Router();

blogRouter.post('/create', createBlog);

export default blogRouter;