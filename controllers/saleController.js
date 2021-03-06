const express = require('express');
const saleService = require('../services/saleService');

const saleRouter = express.Router();

saleRouter.post('/', async (req, res) => {
  const itensSold = req.body;

  const { status, messageResult } = await saleService.createSale({ itensSold });

  return res.status(status).json(messageResult);
});

saleRouter.get('/', async (_req, res) => {
  const { status, messageResult } = await saleService.getAllSales();

  return res.status(status).json(messageResult);
});

saleRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const { status, messageResult } = await saleService.getSaleById(id);

  return res.status(status).json(messageResult);
});

saleRouter.put('/:id', async (req, res) => {
  const { id } = req.params;

  const itensSold = req.body;

  const { status, messageResult } = await saleService.updateSale({ id, itensSold });

  return res.status(status).json(messageResult);
});

saleRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const { status, messageResult } = await saleService.removeSale(id);

  return res.status(status).json(messageResult);
});

module.exports = {
  saleRouter,
};