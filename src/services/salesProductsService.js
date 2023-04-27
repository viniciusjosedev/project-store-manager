const { salesModel, salesProductsModel } = require('../models/index');

const insert = async (data) => {
  const id = await salesModel.insert();
  await salesProductsModel.insert({ ...data, id });
  const result = await salesProductsModel.findById(id);
  result.forEach((_e, i) => delete result[i].saleId);
  return { id, itemsSold: result };
};

module.exports = {
  insert,
};
