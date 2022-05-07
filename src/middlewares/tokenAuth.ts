import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const SECRET = process.env.JWT_SECRET || 'secret';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Username or password invalid' });

  try {
    const decoded = jwt.verify(token, SECRET) as JwtPayload;
    req.body.tokeData = decoded.data;
    return next();
  } catch (error: unknown) {
    if (error instanceof Error && error.name.includes('Token')) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    return next();
  }
};