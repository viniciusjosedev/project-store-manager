const { Router } = require('express');

const { validateCreateSalesProducts } = require('../middlewares/salesValidation');

const salesProductsController = require('../controllers/salesProductsController');

const route = new Router();

route.post('/sales', validateCreateSalesProducts, salesProductsController.insert);

module.exports = route;