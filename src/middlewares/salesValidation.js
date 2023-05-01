const { validatebodyCreateSalesProducts } = require('./validations/validations');
const { findById } = require('../services/productsService');

const validateCreateSalesProducts = async (req, res, next) => {
  const { body } = req;
  const { type, message } = validatebodyCreateSalesProducts(body);
  if (type !== null) return res.status(type).json({ message });
  const listFindById = await Promise.all(body.map((e) => findById(e.productId)));
  if (listFindById.some((e) => e === undefined)) {
    return res.status(404).json({ message: 'Product not found' }); 
  }
  return next();
};

module.exports = {
  validateCreateSalesProducts,
};
