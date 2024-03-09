import { Blog } from '../models';

export const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({message: 'All fields are required!'});
    }

    const blog = await Blog.create({ title, content });
    return res.status(200).json({message: 'Blog created successfully!', blog});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Error creating blog', error: error.message});
    }
}