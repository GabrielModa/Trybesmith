import loginModel from '../models/login';

const post = async (username:string, password: string) => loginModel.post(username, password);

export = {
  post,
};
