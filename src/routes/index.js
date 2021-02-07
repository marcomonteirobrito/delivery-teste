import { Router } from 'express';
import createUserRouter from './users.routes';

const routes = new Router();

routes.use('/users', createUserRouter);

export default routes;
