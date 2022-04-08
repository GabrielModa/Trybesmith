import orderModel from '../models/order';

const get = async () => orderModel.get();

export = {
  get,
};
