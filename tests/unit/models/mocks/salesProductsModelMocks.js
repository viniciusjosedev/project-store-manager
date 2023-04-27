const resultConnectionFindByIdMock = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 }
];

const resultFindByIdMock = [
  { saleId: 1, productId: 1, quantity: 5 },
  { saleId: 1, productId: 2, quantity: 10 }
];

const insertValues = {
  saleId: 1, productId: 1, quantity: 1
}

module.exports = {
  resultConnectionFindByIdMock,
  resultFindByIdMock,
  insertValues
}
