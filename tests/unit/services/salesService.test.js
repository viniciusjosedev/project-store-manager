const { expect } = require('chai');
const sinon = require('sinon');

const { salesService } = require('../../../src/services/index');
const { salesModel } = require('../../../src/models/index');

describe('All tests from salesProductsService', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function deleteSales', function () {
    it('Test with sucess', async function () {
      sinon.stub(salesModel, 'deleteSales').resolves(1);
      const result = await salesService.deleteSales(1);
      expect(result).to.be.deep.equal(1)
    })
    it('Test without sucess', async function () {
      sinon.stub(salesModel, 'deleteSales').resolves(0);
      const result = await salesService.deleteSales(555);
      expect(result).to.be.deep.equal(undefined)
    })
  })
})
