import jwt from 'jsonwebtoken';
import { ItokenUser } from '../interfaces/tokenUser';

const jwtConfig = {
  expiresIn: '2h',
};

const SECRET: string = process.env.JWT_SECRET || 'secret';

export = (data: ItokenUser) => jwt.sign(
  { data }, 
  SECRET, 
  jwtConfig,
); 