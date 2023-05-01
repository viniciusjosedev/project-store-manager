const { salesModel, salesProductsModel } = require('../models/index');

const insert = async (data) => {
  const saleId = await salesModel.insert();
  await Promise.all(data.map((e) => salesProductsModel.insert({ ...e, saleId })));
  const result = await salesProductsModel.findById(saleId);
  result.forEach((_e, i) => {
    delete result[i].saleId;
    delete result[i].date;
  });
  return { id: saleId, itemsSold: result };
};

const findById = async (id) => {
  const result = await salesProductsModel.findById(id);
  result.forEach((_e, i) => {
    delete result[i].saleId;
  });
  return result;
};

module.exports = {
  insert,
  findById,
};
