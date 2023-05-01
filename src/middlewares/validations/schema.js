const Joi = require('joi');

const bodyCreateProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const bodyCreateSalesProductsSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

module.exports = {
  bodyCreateProductSchema,
  bodyCreateSalesProductsSchema,
};
