import connection from './connection';

const post = async (
  username: string, 
  classe: string,
  level: number, 
  password: string,
) => {
  await connection.execute(`INSERT Trybesmith.Users
   ( username, classe, level, password )
    VALUES (?, ?, ?, ?)`, [username, classe, level, password]);
  return ({ username, classe, level, password });
};
export = {
  post,
};
