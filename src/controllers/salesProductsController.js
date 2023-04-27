const { salesProductsService } = require('../services/index');

const insert = async (req, res) => {
  const { body } = req;
  const result = await salesProductsService.insert(body);
  return res.status(201).json(result);
};

module.exports = {
  insert,
};
