const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models/index');
const connection = require('../../../src/models/connection');

describe('All tests from salesModel', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function insert', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([{insertId: 1}]);
      const result = await salesModel.insert();
      expect(result).to.be.equal(1)
    })
  })
  describe('Tests from function deleteSales', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      const result = await salesModel.deleteSales(1);
      expect(result).to.be.equal(1)
    })
  })
})
