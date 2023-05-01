const { expect } = require('chai');
const sinon = require('sinon');

const { productsController } = require('../../../src/controllers/index')
const { productsService } = require('../../../src/services/index');

const { resultFindAllMock, resultFindByIdMock } = require('./mocks/productsControllerMocks');

describe('All tests from productsController', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function findAll', function () {
    it('Test with sucess', async function () {
      sinon.stub(productsService, 'findAll').resolves(resultFindAllMock);
      const req = {};
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(resultFindAllMock);

      const result = await productsController.findAll(req, res);

      expect(result).to.be.deep.equal(resultFindAllMock)
    })
  })
  describe('Tests from function findById', function () {
    it('Test with sucess', async function () {
      sinon.stub(productsService, 'findById').resolves(resultFindByIdMock);
      const req = { 
        params: { id: '1' }
       };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(resultFindByIdMock);

      const result = await productsController.findById(req, res);
      expect(result).to.be.deep.equal(resultFindByIdMock)
    })
    it('Test without sucess', async function () {
      sinon.stub(productsService, 'findById').resolves(undefined);
      const req = {
        params: { id: '1' }
      };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns({message: "Product not found"});

      const result = await productsController.findById(req, res);
      expect(result).to.be.deep.equal({message: "Product not found"})
    })
  })
  describe('Tests from function createProduct', function () {
    it('Test with sucess', async function () {
      sinon.stub(productsService, 'createProduct').resolves(resultFindByIdMock);
      const req = {
        body: { name: 'teste' }
      };
      const res = {
        status: () => { },
        json: () => { },
      };

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(resultFindByIdMock);

      const result = await productsController.createProduct(req, res);
      expect(result).to.be.deep.equal(resultFindByIdMock)
    })
  })
})


