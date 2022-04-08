// import { RowDataPacket } from 'mysql2';
import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const get = async () => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products;
};

const post = async (name: string, amount:string) => {
  const [products] = await connection.execute<ResultSetHeader>(`INSERT Trybesmith.Products
   ( name, amount )
    VALUES (?, ?)`, [name, amount]);
  return ({ id: products.insertId, name, amount,
  });
};
export = {
  get,
  post,
};
