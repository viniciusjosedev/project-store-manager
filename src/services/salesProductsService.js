const { salesModel, salesProductsModel } = require('../models/index');

const insert = async (data) => {
  const saleId = await salesModel.insert();
  await Promise.all(data.map((e) => salesProductsModel.insert({ ...e, saleId })));
  const result = await salesProductsModel.findById(saleId);
  result.forEach((_e, i) => delete result[i].saleId);
  return { id: saleId, itemsSold: result };
};

module.exports = {
  insert,
};
