const { salesService } = require('../services/index');

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.deleteSales(id);
  if (result === undefined) return res.status(404).json({ message: 'Sale not found' });
  return res.status(204).json();
};

module.exports = {
  deleteSales,
};
