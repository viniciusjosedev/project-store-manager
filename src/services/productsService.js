const { productsModel } = require('../models/index');

const findAll = async () => {
  const result = await productsModel.findAll();
  return result;
};

const findById = async (id) => {
  const result = await productsModel.findById(id);
  return result;
};

const createProduct = async (data) => {
  const id = await productsModel.createProduct(data);
  const result = await productsModel.findById(id);
  return result;
};

const updateProduct = async (data) => {
  const affectRows = await productsModel.updateProduct(data);
  if (affectRows === 0) return undefined;
  const result = await productsModel.findById(data.id);
  return result;
};

const deleteProduct = async (id) => {
  const affectRows = await productsModel.deleteProduct(id);
  if (affectRows === 0) return undefined;
  return affectRows;
};

const search = async (name) => {
  const result = await productsModel.search(name);
  return result;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
  deleteProduct,
  search,
};
