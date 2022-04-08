import { Request, Response } from 'express';
import loginService from '../services/loginService';
import tokenUser from '../helpers/tokenUser';

const post = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  await loginService.post(username, password);  
  
  const token = tokenUser({ username });

  return res.status(200).json(token);
};

export = {
  post,
};