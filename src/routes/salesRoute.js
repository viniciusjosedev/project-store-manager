const { Router } = require('express');

const { validateCreateSalesProducts } = require('../middlewares/salesValidation');

const salesProductsController = require('../controllers/salesProductsController');

const route = new Router();

route.post('/sales', validateCreateSalesProducts, salesProductsController.insert);

route.get('/sales', salesProductsController.findAll);

route.get('/sales/:id', salesProductsController.findById);

module.exports = route;