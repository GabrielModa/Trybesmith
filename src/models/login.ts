import connection from './connection';

const post = async (userName: string, password:string) => {
  const [validate] = await connection.execute(`SELECT * FROM Trybesmith.Users
  WHERE username = ? password = ?)`, [userName, password]);
  return (validate);
};

export = {
  post,
};
