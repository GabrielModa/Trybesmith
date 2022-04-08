import jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '2h',
};

const SECRET: string = process.env.JWT_SECRET || '';

export = (payload = {}) => jwt.sign(
  { data: payload }, 
  SECRET, 
  jwtConfig,
); 