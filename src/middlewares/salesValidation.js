const { validatebodyCreateSalesProducts } = require('./validations/validations');
const productsService = require('../services/productsService');
const salesProductsService = require('../services/salesProductsService');

const validateCreateSalesProducts = async (req, res, next) => {
  const { body } = req;
  const { type, message } = validatebodyCreateSalesProducts(body);
  if (type !== null) return res.status(type).json({ message });
  const listFindById = await Promise.all(body.map((e) => productsService.findById(e.productId)));
  if (listFindById.some((e) => e === undefined)) {
    return res.status(404).json({ message: 'Product not found' }); 
  }
  return next();
};

const validateUpdateSalesProducts = async (req, res, next) => {
  const { params: { id } } = req;
  
  const verificSalesId = await salesProductsService.findById(id);

  if (verificSalesId.length === 0) return res.status(404).json({ message: 'Sale not found' });

  await validateCreateSalesProducts(req, res, next);
};

module.exports = {
  validateCreateSalesProducts,
  validateUpdateSalesProducts,
};
