const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models/index');
const connection = require('../../../src/models/connection');

const { resultFindAllMock, resultFindByIdMock } = require('./mocks/productsModelMocks');

describe('All tests from productsModel', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function findAll', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([resultFindAllMock]);
      const result = await productsModel.findAll();
      expect(result).to.be.deep.equal(resultFindAllMock)
    })
  })
  describe('Tests from function findById', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([[resultFindByIdMock]]);
      const result = await productsModel.findById();
      expect(result).to.be.deep.equal(resultFindByIdMock)
    })
  })
  describe('Tests from function createProduct', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
      const result = await productsModel.createProduct({name: 'teste'});
      expect(result).to.be.deep.equal(1)
    })
  })
  describe('Tests from function updateProduct', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      const result = await productsModel.updateProduct({ name: 'teste' });
      expect(result).to.be.deep.equal(1)
    })
  })
  describe('Tests from function deleteProduct', function () {
    it('Test with sucess', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      const result = await productsModel.deleteProduct(1);
      expect(result).to.be.deep.equal(1)
    })
  })
})


