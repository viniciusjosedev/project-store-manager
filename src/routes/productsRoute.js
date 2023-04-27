const { Router } = require('express');

const { productsController } = require('../controllers/index');

const route = new Router();

route.get('/products', productsController.findAll);

route.get('/products/:id', productsController.findById);

module.exports = route;
