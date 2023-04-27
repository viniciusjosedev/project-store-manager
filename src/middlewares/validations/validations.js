const { bodyCreateProductSchema } = require('./schema');

const validateBodyCreateProduct = (body) => {
  const { error } = bodyCreateProductSchema.validate(body);
  if (error) return { type: 'ERROR', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateBodyCreateProduct,
};
