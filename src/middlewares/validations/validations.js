const { bodyCreateProductSchema, bodyCreateSalesProductsSchema } = require('./schema');

const validateBodyCreateProduct = (body) => {
  const { error } = bodyCreateProductSchema.validate(body);
  if (error) return { type: 'ERROR', message: error.message };
  return { type: null, message: '' };
};

const validatebodyCreateSalesProducts = (body) => {
  const listValidate = body.map((e) => {
    const { error } = bodyCreateSalesProductsSchema.validate(e);
    return error;
  });
  const error = listValidate.find((e) => e !== undefined);
  if (error !== undefined && error.message.includes('required')) {
    return { type: 400, message: error.message };
  }
  if (error !== undefined && error.message.includes('1')) {
    return { type: 422, message: error.message };
  }
  return { type: null };
};

module.exports = {
  validateBodyCreateProduct,
  validatebodyCreateSalesProducts,
};
