const { Router } = require('express');

const { validateCreateProduct } = require('../middlewares/productsValidation');

const { productsController } = require('../controllers/index');

const route = new Router();

route.get('/products', productsController.findAll);

route.get('/products/:id', productsController.findById);

route.post('/products', validateCreateProduct, productsController.createProduct);

module.exports = route;
