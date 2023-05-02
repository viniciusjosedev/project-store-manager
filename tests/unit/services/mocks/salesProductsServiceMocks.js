const resultFindByIdMock = [
  { saleId: 1, productId: 1, quantity: 5, date: '2022' },
  { saleId: 1, productId: 2, quantity: 10, date: '2002'  }
];

const resultFindByIdMockUpdate = [
  { saleId: 1, productId: 1, quantity: 5, date: '2022' },
  { saleId: 1, productId: 2, quantity: 10, date: '2002' }
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

const resultSalesProductsServiceUpdate = {
  "saleId": 1,
  "itemsUpdated": [
    { productId: 1, quantity: 5 },
    { productId: 2, quantity: 10 }
  ]
}; 

module.exports = {
  resultFindByIdMock,
  insertValues,
  resultSalesProductsService,
  resultSalesProductsServiceUpdate,
  resultFindByIdMockUpdate,
}
