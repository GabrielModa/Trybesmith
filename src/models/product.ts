// import { RowDataPacket } from 'mysql2';
import connection from './connection';

const get = async () => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products;
};

export = {
  get,
};
