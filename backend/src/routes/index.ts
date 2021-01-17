import { Router } from 'express';

import usersRoutes from './users.routes';
import spotsRoutes from './spots.routes';
import sessionsRoutes from './sessions.routes';
import bookingsRoutes from './bookings.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/spots', spotsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/bookings', bookingsRoutes);

export default routes;
