import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateUserService from '../services/CreateUserService';

const usersRoutes = Router();

interface Request {
  name: string;
  email: string;
}

usersRoutes.post('/', async (request, response) => {
  const createUserService = new CreateUserService();
  const { name, email, password } = request.body;
  const user = { name, email, password };
  const createdUser = await createUserService.execute(user);

  return response.status(200).json(createdUser);
});

usersRoutes.get('/', (request, response) => {
  const userRepository = getRepository(User);
  const users = userRepository.find();
  if (users) return response.status(200).json(users);
  return response.status(200).send('Sem resultados para essa busca');
});

export default usersRoutes;
