import { Router } from 'express';

import usersRoutes from './users.routes';
import spotsRoutes from './spots.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/spots', spotsRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
