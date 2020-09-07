const router = require('express').Router();

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;
  res.json({});
});

module.exports = router;
