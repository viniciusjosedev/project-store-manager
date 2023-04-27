const { expect } = require('chai');
const sinon = require('sinon');

const { salesProductsService } = require('../../../src/services/index');
const { salesModel, salesProductsModel } = require('../../../src/models/index');

const { resultFindByIdMock, insertValues,
  resultSalesProductsService } = require('./mocks/salesProductsServiceMocks')

describe('All tests from salesProductsService', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function insert', function () {
    it('Test with sucess', async function () {
      sinon.stub(salesModel, 'insert').resolves(1);
      sinon.stub(salesProductsModel, 'insert').resolves(1);
      sinon.stub(salesProductsModel, 'findById').resolves(resultFindByIdMock)
      const result = await salesProductsService.insert(insertValues);
      expect(result).to.be.deep.equal(resultSalesProductsService)
    })
  })
})
