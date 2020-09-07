const { Invoice } = require('../../sequelize').models;
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  res.json({});
});

router.post('/', async (req, res) => {
  const newInvoice = req.body;
  res.json(newInvoice);
});

router.put('/:id', async (req, res) => {
  const updatedInvoice = req.body;
  res.json(updatedInvoice);
});

router.delete('/:id', async (req, res) => {
  const invoiceId = Number(req.params.id);
  res.json(invoiceId);
});

module.exports = router;
