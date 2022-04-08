import { Request, Response } from 'express';
import userService from '../services/userService';

const post = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;

  const user = await userService.post(username, classe, level, password);  

  return res.status(201).json(user);
};

export = {
  post,
};