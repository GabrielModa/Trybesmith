import productModel from '../models/product';

const get = async () => productModel.get();

const post = async (name:string, amount: string) => productModel.post(name, amount);

export = {
  get,
  post,
};
