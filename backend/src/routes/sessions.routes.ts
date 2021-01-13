import { Router } from 'express';

import AuthenticationUserService from '../services/AuthenticationUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticationUserService();

  const { authenticationToken, user } = await authenticateUser.execute({
    email,
    password,
  });

  return response.status(200).json({ authenticationToken, user });
});

export default sessionsRouter;
