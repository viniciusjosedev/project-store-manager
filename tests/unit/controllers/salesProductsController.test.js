const { expect } = require('chai');
const sinon = require('sinon');

const { salesProductsController } = require('../../../src/controllers/index')
const { salesProductsService } = require('../../../src/services/index');

const { resultSalesProductsService } = require('./mocks/salesProductsController');

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
})


