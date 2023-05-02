const { salesProductsService } = require('../services/index');

const insert = async (req, res) => {
  const { body } = req;
  const result = await salesProductsService.insert(body);
  return res.status(201).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await salesProductsService.findById(id);
  if (result.length === 0) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(result);
};

const findAll = async (_req, res) => {
  const result = await salesProductsService.findAll();
  return res.status(200).json(result);
};

const update = async (req, res) => {
  const { body, params: { id } } = req;
  const result = await salesProductsService.update(body, id);
  return res.status(200).json(result);
};

module.exports = {
  insert,
  findById,
  findAll,
  update,
};
