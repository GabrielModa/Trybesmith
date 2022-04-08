import { Request, Response } from 'express';
import productService from '../services/productService';

const get = async (_req: Request, res: Response) => {
  const products = await productService.get();
  return res.status(200).json(products);
};

const post = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  const products = await productService.post(name, amount);  

  return res.status(201).json({ item: products });
};

export = {
  get,
  post,
};