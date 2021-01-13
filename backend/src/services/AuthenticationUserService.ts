import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import User from '../models/User';
import authConfig from '../config/auth';

interface RequestDTO {
  email: string;
  password: string;
}
interface UserAuthentication {
  authenticationToken: string;
  user: User;
}

class AuthenticateUserService {
  public async execute({
    email,
    password,
  }: RequestDTO): Promise<UserAuthentication> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });
    if (!user) throw new AppError('Incorrect email/password');

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) throw new AppError('Incorrect email/password');
    delete user.password;

    const authenticationToken = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { authenticationToken, user };
  }
}
export default AuthenticateUserService;
