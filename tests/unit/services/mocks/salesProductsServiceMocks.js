const resultFindByIdMock = [
  { saleId: 1, productId: 1, quantity: 5 },
  { saleId: 1, productId: 2, quantity: 10 }
];

const insertValues = [{
  productId: 1,
  quantity: 1
}];

const resultSalesProductsService = {
  "id": 1,
  "itemsSold": [
    { productId: 1, quantity: 5 },
    { productId: 2, quantity: 10 }
  ]
};

module.exports = {
  resultFindByIdMock,
  insertValues,
  resultSalesProductsService,
}
