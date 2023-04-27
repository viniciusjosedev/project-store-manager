const Joi = require('joi');

const bodyCreateProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = {
  bodyCreateProductSchema,
};
