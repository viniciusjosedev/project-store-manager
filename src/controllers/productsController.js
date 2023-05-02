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

const updateProduct = async (req, res) => {
  const { body: { name }, params: { id } } = req;
  const result = await productsService.updateProduct({ name, id });
  if (!result) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.deleteProduct(id);
  if (result === undefined) return res.status(404).json({ message: 'Product not found' });
  return res.status(204).json();
};

module.exports = {  
  findAll,
  findById,
  createProduct,
  updateProduct,
  deleteProduct,
};
