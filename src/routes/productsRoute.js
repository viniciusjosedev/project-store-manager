const express = require('express');

const { productsController } = require('../controllers/index');

const route = express.Router();

route.get('/products', productsController.findAll);

route.get('/products/:id', productsController.findById);

module.exports = route;
