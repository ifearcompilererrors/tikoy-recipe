const express = require('express');
const router = express.Router();
const { getSheetValues, appendSheetValues } = require('./sheetsService');

router.get('/', async (req, res) => {
  const data = await getSheetValues({ auth: res.locals.googleAuth });
  res.json(data);
});

router.post('/', async (req, res) => {
  const { data } = req.body;
  const update = await appendSheetValues({ auth: res.locals.googleAuth, data });
  res.json(update);
});

module.exports = router;
