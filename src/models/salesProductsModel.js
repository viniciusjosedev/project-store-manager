const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (object) => {
  const dataSnakeize = Object.keys(snakeize(object)).sort().join(', ');
  const quantData = Object.keys(object).map((_e) => '?').join(', ');
  const [{ insertId }] = await connection.execute(
    `INSERT INTO sales_products(${dataSnakeize}) VALUES (${quantData})`,
    [object.productId, object.quantity, object.saleId],
    );
  return insertId;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id, sp.product_id, sp.quantity, s.date FROM sales_products sp 
    INNER JOIN sales s
    ON sp.sale_id = s.id
    HAVING sale_id = ?;`, [id],
  );
  return camelize(result);
};

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id, sp.product_id, sp.quantity, s.date FROM sales_products sp 
    INNER JOIN sales s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id, product_id;`,
  );
  return camelize(result);
};

module.exports = {
  findById,
  insert,
  findAll,
};
