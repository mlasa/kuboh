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
  const { name, email, password, cpf } = request.body;
  const user = { name, email, password, cpf };
  const createdUser = await createUserService.execute(user);

  return response.status(200).json(createdUser);
});

usersRoutes.get('/', async (request, response) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  if (users) {
    users.map(user => delete user.password)
    return response.status(200).json(users);
  }
  return response.status(200).send('Sem resultados para essa busca');
});

export default usersRoutes;
