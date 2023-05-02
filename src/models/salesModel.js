const connection = require('./connection');

const insert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales() VALUES()',
  );
  return insertId;
};

const deleteSales = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM sales WHERE id = ?', [id],
  );
  return affectedRows;
};

module.exports = {
  insert,
  deleteSales,
};
