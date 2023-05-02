const resultSalesProductsService = {
  "id": 1,
  "itemsSold": [
    { productId: 1, quantity: 5 },
    { productId: 2, quantity: 10 }
  ]
};

const resultFindByIdSalesProductsService = [
  { productId: 1, quantity: 5, date: '2022' },
  { productId: 2, quantity: 10, date: '2022' },
];

const resultFindAllSalesProductsService = [
  { productId: 1, quantity: 5, date: '2022', saleId: '1' },
  { productId: 2, quantity: 10, date: '2022', saleId: '1' },
];


module.exports = {
  resultSalesProductsService,
  resultFindByIdSalesProductsService,
  resultFindAllSalesProductsService,
}
