import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPaylod {
  iat: number;
  exp: number;
  sub: string;
}

const ensureAuthentication = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const authToken = request.headers.authorization;

  if (!authToken) throw new AppError('JWT token is missing', 401);

  const [, token] = authToken.split(' ');
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    const { sub } = decoded as TokenPaylod;
    request.user = { id: sub };

    return next();
  } catch (err) {
    throw new AppError('Token not valid', 401);
  }
};
export default ensureAuthentication;
