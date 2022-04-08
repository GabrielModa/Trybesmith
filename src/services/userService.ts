import userModel from '../models/user';

const post = async (
  username: string, 
  classe: string,
  level: number, 
  password: string,
) => userModel.post(username, classe, level, password);

export = {
  post,
};
