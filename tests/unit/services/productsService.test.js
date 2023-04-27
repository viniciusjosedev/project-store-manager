const { expect } = require('chai');
const sinon = require('sinon');

const { productsService } = require('../../../src/services/index')
const { productsModel } = require('../../../src/models/index');

const { resultFindAllMock, resultFindByIdMock } = require('./mocks/productsServiceMocks');

describe('All tests from productsService', function () {
  afterEach(() => sinon.restore());
  describe('Tests from function findAll', function () {
    it('Test with sucess', async function () {
      sinon.stub(productsModel, 'findAll').resolves(resultFindAllMock);
      const result = await productsService.findAll();
      expect(result).to.be.deep.equal(resultFindAllMock)
    })
  })
  describe('Tests from function findById', function () {
    it('Test with sucess', async function () {
      sinon.stub(productsModel, 'findById').resolves(resultFindByIdMock);
      const result = await productsService.findById(1);
      expect(result).to.be.deep.equal(resultFindByIdMock)
    })
    it('Test without sucess', async function () {
      sinon.stub(productsModel, 'findById').resolves(undefined);
      const result = await productsService.findById(1);
      expect(result).to.be.deep.equal(undefined)
    })
  })
})


