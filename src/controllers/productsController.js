const { productsService } = require('../services/index');

const findAll = async (_req, res) => {
  const result = await productsService.findAll();
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.findById(Number(id));
  if (!result) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(result);
};

const createProduct = async (req, res) => {
  const { body } = req;
  const result = await productsService.createProduct(body);
  return res.status(201).json(result);
};

module.exports = {  
  findAll,
  findById,
  createProduct,
};
