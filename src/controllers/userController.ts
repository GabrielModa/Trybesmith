import { Request, Response } from 'express';
import userService from '../services/userService';
import tokenGenerate from '../helpers';

const post = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;

  await userService.post(username, classe, level, password);  

  const token = tokenGenerate.tokenUser({ username, classe, level });

  return res.status(201).json({ token });
};

export = {
  post,
};