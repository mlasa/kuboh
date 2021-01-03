import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

class CreateUserService {
  public async execute({ name, email, password, cpf }: Request): Promise<User> {
    const userRepository = getRepository(User);

    if (!email || !name || !password || !cpf) {
      throw new AppError('Name, email or password or cpf is missing');
    }

    if (!Number.isInteger(cpf)) {
      throw new AppError('Cpf must be a number');
    }

    const checkExistentEmail = await userRepository.findOne({
      where: { email },
    });
    if (checkExistentEmail) throw new AppError('This e-mail already exists');

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      cpf,
    });

    await userRepository.save(user);
    delete user.password;

    return user;
  }
}
export default CreateUserService;
