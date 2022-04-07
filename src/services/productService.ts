import productModel from '../models/product';

const get = async () => productModel.get();

export = {
  get,
};
