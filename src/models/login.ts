import connection from './connection';

const post = async (userName: string, password:string) => {
  await connection.execute(`SELECT * FROM Trybesmith.Users
  WHERE  username= ? password= ?)`, [userName, password]);
  return ({ userName, password });
};

export = {
  post,
};
