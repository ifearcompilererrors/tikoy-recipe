const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getAuthToken } = require('./sheetsService');

const app = express();
const port = 4000

app.use(express.static(path.join(process.cwd(), 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
})

app.use(async (req, res, next) => {
  res.locals.googleAuth = await getAuthToken();

  next();
});

app.use('/submissions', require('./submissions'))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

module.exports = app;
