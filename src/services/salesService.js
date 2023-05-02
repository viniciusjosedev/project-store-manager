const salesModel = require('../models/salesModel');

const deleteSales = async (id) => {
  const result = await salesModel.deleteSales(id);
  if (result === 0) return undefined;
  return result;
};

module.exports = {
  deleteSales,
};
