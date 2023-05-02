const { expect } = require('chai');
const sinon = require('sinon');

const { salesProductsModel } = require('../../../src/models/index');
const connection = require('../../../src/models/connection');

const { resultConnectionFindByIdMock,
  resultFindByIdMock, insertValues, returnValuesFindAllMock } = require('./mocks/salesProductsModelMocks')

describe('All tests from salesProductsModel', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function findById', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([resultConnectionFindByIdMock]);
      const result = await salesProductsModel.findById(1);
      expect(result).to.be.deep.equal(resultFindByIdMock)
    })
  })
  describe('Tests from function insert', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
      const result = await salesProductsModel.insert(insertValues);
      expect(result).to.be.equal(1)
    })
  })
  describe('Tests from function findAll', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([returnValuesFindAllMock]);
      const result = await salesProductsModel.findAll();
      expect(result).to.be.deep.equal(returnValuesFindAllMock)
    })
  })
})
