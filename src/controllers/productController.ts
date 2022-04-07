import { Request, Response } from 'express';
import productService from '../services/productService';

const get = async (_req: Request, res: Response) => {
  const products = await productService.get();
  return res.status(200).json(products);
};

export = {
  get,
};