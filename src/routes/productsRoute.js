const { Router } = require('express');

const { validateCreateProduct } = require('../middlewares/productsValidation');

const { productsController } = require('../controllers/index');

const route = new Router();

route.get('/products/search?', productsController.search);

route.get('/products', productsController.findAll);

route.get('/products/:id', productsController.findById);

route.post('/products', validateCreateProduct, productsController.createProduct);

route.put('/products/:id', validateCreateProduct, productsController.updateProduct);

route.delete('/products/:id', productsController.deleteProduct);

module.exports = route;
