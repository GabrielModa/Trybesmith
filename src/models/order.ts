import connection from './connection';

const get = async () => {
  const [order] = await connection.execute(`SELECT 
  u.id As id,
  u.userId AS userId,
  JSON_ARRAYAGG(o.id) As products
  
  FROM Trybesmith.Orders AS u
  JOIN Trybesmith.Products AS o 
  ON u.id = o.orderId
  
  GROUP BY id
  ORDER BY userId;`);
  return order;
};

export = {
  get,
};
