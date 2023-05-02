const { expect } = require('chai');
const sinon = require('sinon');

const { salesProductsController } = require('../../../src/controllers/index')
const { salesProductsService } = require('../../../src/services/index');

const { resultSalesProductsService,
  resultFindByIdSalesProductsService,
  resultFindAllSalesProductsService } = require('./mocks/salesProductsController');

describe('All tests from salesProductsController', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function insert', function () {
    it('Test with sucess', async function () {
      sinon.stub(salesProductsService, 'insert').resolves(resultSalesProductsService);
      const req = {
        body: [
          {
            "productId": 1,
            "quantity": 1
          },
          {
            "productId": 2,
            "quantity": 5
          }
        ]
      };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(resultSalesProductsService);

      const result = await salesProductsController.insert(req, res);

      expect(result).to.be.deep.equal(resultSalesProductsService)
    })
  })
  describe('Tests from function findById', function () {
    it('Test with sucess', async function () {
      sinon.stub(salesProductsService, 'findById').resolves(resultFindByIdSalesProductsService);
      const req = {
        params: 1,
      };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(resultFindByIdSalesProductsService);

      const result = await salesProductsController.findById(req, res);

      expect(result).to.be.deep.equal(resultFindByIdSalesProductsService)
    })
    it('Test without sucess', async function () {
      sinon.stub(salesProductsService, 'findById').resolves([]);
      const req = {
        params: { id: 1 }
      };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns({ message: 'Sale not found' });

      const result = await salesProductsController.findById(req, res);

      expect(result).to.be.deep.equal({ message: 'Sale not found' })
    })
  })
  describe('Tests from function findAll', function () {
    it('Test with sucess', async function () {
      sinon.stub(salesProductsService, 'findAll').resolves(resultFindAllSalesProductsService);
      const req = {};
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(resultFindAllSalesProductsService);

      const result = await salesProductsController.findAll(req, res);

      expect(result).to.be.deep.equal(resultFindAllSalesProductsService)
    })
  })
})


