const { Router } = require('express');

const { validateCreateSalesProducts } = require('../middlewares/salesValidation');

const { salesProductsController, salesController } = require('../controllers/index');

const route = new Router();

route.post('/sales', validateCreateSalesProducts, salesProductsController.insert);

route.get('/sales', salesProductsController.findAll);

route.get('/sales/:id', salesProductsController.findById);

route.delete('/sales/:id', salesController.deleteSales);

module.exports = route;