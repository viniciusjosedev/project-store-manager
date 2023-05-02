const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  return result;
};

const createProduct = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products(name) VALUES(?)', [name],
  );
  return insertId;
};

const updateProduct = async ({ id, name }) => {
  const [{ insertId }] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', [name, id],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
};