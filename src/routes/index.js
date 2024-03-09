import express from 'express';
import { welcomeController } from '../controllers/welcomeController';
import blogRouter from './blogRoutes';

const appRouter = express.Router();

appRouter.get('/', welcomeController);
appRouter.use('/blog', blogRouter);

export default appRouter;