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

const returnValuesFindAllMock = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 5,
    date: '2023 - 05 - 01T22: 44: 29.000Z'
  },
  {
    sale_id: 1,
    product_id: 2,
    quantity: 10,
    date: '2023 - 05 - 01T22: 44: 29.000Z'
  },
  {
    sale_id: 2,
    product_id: 3,
    quantity: 15,
    date: '2023 - 05 - 01T22: 44: 29.000Z'
  },
  {
    sale_id: 3,
    product_id: 1,
    quantity: 1,
    date: '2023 - 05 - 01T22: 44: 29.000Z'
  },
  {
    sale_id: 3,
    product_id: 2,
    quantity: 5,
    date: '2023 - 05 - 01T22: 44: 29.000Z'
  }
];

module.exports = {
  resultConnectionFindByIdMock,
  resultFindByIdMock,
  insertValues,
  returnValuesFindAllMock,
}
