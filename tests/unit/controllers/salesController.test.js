const { expect } = require('chai');
const sinon = require('sinon');

const { salesController } = require('../../../src/controllers/index');
const { salesService } = require('../../../src/services/index');

describe('All tests from salesController', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function deleteSales', function () {
    it('Test with sucess', async function () {
      sinon.stub(salesService, 'deleteSales').resolves(1);
      const req = {
        params: { id: 1 }
      };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(null);

      const result = await salesController.deleteSales(req, res);

      expect(result).to.be.deep.equal(null)
    })
    it('Test without sucess', async function () {
      sinon.stub(salesService, 'deleteSales').resolves(undefined);
      const req = {
        params: { id: 1 }
      };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns({ message: 'Sale not found' });

      const result = await salesController.deleteSales(req, res);

      expect(result).to.be.deep.equal({ message: 'Sale not found' })
    })
  })
})


