const { productsModel } = require('../models/index');

const findAll = async () => {
  const result = await productsModel.findAll();
  return result;
};

const findById = async (id) => {
  const result = await productsModel.findById(id);
  return result;
};

module.exports = {
  findAll,
  findById,
};
