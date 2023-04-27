const { validateBodyCreateProduct } = require('./validations/validations');

const validateCreateProduct = async (req, res, next) => {
  const { body } = req;
  const { message } = validateBodyCreateProduct(body);
  if (message.includes('required')) return res.status(400).json({ message });
  if (body.name.length <= 5) {
    return res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' }); 
}
  next();
};

module.exports = {
  validateCreateProduct,
};
