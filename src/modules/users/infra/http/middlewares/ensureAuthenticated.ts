import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import locale from '@config/locales';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  _response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(
      locale.middlewares.ensureAuthenticated.JWTtokenMissing,
      401,
    );
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;
    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError(
      locale.middlewares.ensureAuthenticated.InvalidJWTToken,
      401,
    );
  }
}
