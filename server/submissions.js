const express = require('express');
const router = express.Router();
const { getSheetValues, appendSheetValues } = require('./sheetsService');

router.get('/', async (req, res) => {
  const data = await getSheetValues({ auth: res.locals.googleAuth });
  res.json(data);
});

router.post('/', async (req, res) => {
  const submission = {}; // req.body;
  const data = await appendSheetValues({ auth: res.locals.googleAuth, data: submission });
  res.json(data);
});

module.exports = router;
