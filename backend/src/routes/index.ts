import { Router } from 'express';

import usersRoutes from './users.routes';
import spotsRoutes from './spots.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/spots', spotsRoutes);

export default routes;
