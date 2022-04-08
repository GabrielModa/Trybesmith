import { Request, Response } from 'express';
import orderService from '../services/orderService';

const get = async (_req: Request, res: Response) => {
  const order = await orderService.get();
  return res.status(200).json(order);
};

export = {
  get,
};