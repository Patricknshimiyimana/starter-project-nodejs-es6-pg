import express from 'express';
import { welcomeController } from '../controllers/welcomeController';
import blogRouter from './BlogRoutes';

const appRouter = express.Router();

appRouter.get('/', welcomeController);
appRouter.use('/blog', blogRouter);

export default appRouter;